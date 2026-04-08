const express = require('express');
const { body } = require('express-validator');
const {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
    getDashboardStats,
} = require('../controllers/bookController');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/books
// @desc    Get all books
// @access  Public
router.get('/', getAllBooks);

// @route   GET /api/books/:id
// @desc    Get single book by ID
// @access  Public
router.get('/:id', getBookById);

// @route   GET /api/books/search/:query
// @desc    Search books by title
// @access  Public
router.get('/search/:query', searchBooks);

// @route   GET /api/books/stats/dashboard
// @desc    Get dashboard stats
// @access  Private (Admin only)
router.get('/stats/dashboard', auth, adminOnly, getDashboardStats);

// @route   POST /api/books
// @desc    Add a new book
// @access  Private (Admin only)
router.post(
    '/', [
        auth,
        adminOnly,
        body('title', 'Title is required').notEmpty(),
        body('author', 'Author is required').notEmpty(),
        body('category', 'Category is required').notEmpty(),
        body('totalCopies', 'Total sopies must be a positive number').isInt({ min: 1 }),
    ],
    addBook
);

// @route   PUT /api/books/:id
// @desc    Update a book
// @access  Private (Admin only)
router.put(
    '/:id', [
        auth,
        adminOnly,
        body('totalCopies').optional().isInt({ min: 1 }),
    ],
    updateBook
);

// @route   DELETE /api/books/:id
// @desc    Delete a book
// @access  Private (Admin only)
router.delete('/:id', auth, adminOnly, deleteBook);

module.exports = router;