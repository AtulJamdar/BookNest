const Book = require('../models/Book');
const { validationResultvali, validationResult } = require('express-validator');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
exports.getAllBooks = async(req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json({
            message: 'Books fetched successfully',
            count: books.length,
            books,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get single book by ID
// @route   GET /api/books/:id
// @access  Public
exports.getBookById = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'Book fetched successfully',
            book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Add a new book
// @route   POST /api/books
// @access  Private (Admin only)
exports.addBook = async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { title, author, category, isbn, totalCopies } = req.body;
  
      // Check if book with same ISBN already exists
      if (isbn) {
        const existingBook = await Book.findOne({ isbn });
        if (existingBook) {
          return res.status(400).json({ message: 'Book with this ISBN already exists' });
        }
      }
  
      // Create new book
      const book = new Book({
        title,
        author,
        category,
        isbn,
        totalCopies,
        availableCopies: totalCopies, // Initially all copies are available
      });
  
      // Save book
      await book.save();
  
      res.status(201).json({
        message: 'Book added successfully',
        book,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private (Admin only)
exports.updateBook = async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, author, category, isbn, totalCopies } = req.body;

        //Find book
        let book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Check if ISBN is being changed and if new ISBN already exists
        if (isbn && isbn !== book.isbn) {
            const existingBook = await Book.findOne({ isbn });
            if (existingBook) {
                return res.status(400).json({ message: 'Book with this ISBN already exists' });
            }
        }

        if (title) book.title = title;
        if (author) book.author = author;
        if (category) book.category = category;
        if (isbn) book.isbn = isbn;
        if (totalCopies) {
            const difference = totalCopies - book.totalCopies;
            book.totalCopies = totalCopies;
            book.availableCopies = book.availableCopies + difference;
        }

        //Save updated book
        await book.save();

        res.status(200).json({
            message: 'Book updated successsfully',
            book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private (Admin only)
exports.deleteBook = async(req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'Book deleted successfully',
            book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Search books by title
// @route   GET /api/books/search/:query
// @access  Public
exports.searchBooks = async(req, res) => {
    try {
        const { query } = req.params;

        //MongoDB regex search
        const books = await Book.find({
            title: { $regex: query, $options: 'i' },
        });

        res.status(200).json({
            message: 'Search completed',
            count: books.length,
            books,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get dashboard stats (for admin)
// @route   GET /api/books/stats/dashboard
// @access  Private (Admin only)
exports.getDashboardStats = async(req, res) => {
    try {
        const totalBooks = await Book.countDocuments();
        const totalAvailableCopies = await Book.aggregate([{
            $group: {
                _id: null,
                total: { $sum: '$availableCopies' },
            },
        }, ]);

        const totalIssuedCopies = await Book.aggregate([{
            $group: {
                _id: null,
                total: { $sum: { $subtract: ['$totalCopies', '$availableCopies'] } },
            },
        }, ]);

        res.status(200).json({
            totalBooks,
            totalAvailableCopies: totalAvailableCopies[0]?.total || 0,
            totalIssuedCopies: totalIssuedCopies[0]?.total || 0,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    };
}