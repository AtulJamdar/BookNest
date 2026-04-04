const express = require('express');
const { body } = require('express-validator');
const multer = require('multer');
const path = require('path');
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

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Make sure this directory exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

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
    '/', 
    upload.single('image'),
    [
        auth,
        adminOnly,
        body('title', 'Title is required').notEmpty(),
        body('author', 'Author is required').notEmpty(),
        body('category', 'Category is required').notEmpty(),
        body('totalCopies', 'Total copies must be a positive number').isInt({ min: 1 }),
    ],
    addBook
);

// @route   PUT /api/books/:id
// @desc    Update a book
// @access  Private (Admin only)
router.put(
    '/:id', 
    upload.single('image'),
    [
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