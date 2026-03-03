const express = require('express');
const { body } = require('express-validator');
const {
    issueBook,
    returnBook,
    getIssuedBooksByUser,
    getActiveIssuedBooks,
    getAllIssues,
    getActiveIssues,
    getIssueStats,
} = require('../controllers/issueController');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/issues/issue-book
// @desc    Issue a book to a user
// @access  Private (Admin only)
router.post(
    '/issue-book', [
        auth,
        adminOnly,
        body('userId', 'User ID is required').notEmpty(),
        body('bookId', 'Book ID is required').notEmpty(),
        body('dueDate', 'Due date is required and must be a valid date')
        .notEmpty()
        .isISO8601(),
    ],
    issueBook
);

// @route   PUT /api/issues/return-book/:issueId
// @desc    Return a book
// @access  Private (Admin only)
router.put('/return-book/:issueId', auth, adminOnly, returnBook);

// @route   GET /api/issues/user/:userId
// @desc    Get all issued books by a user
// @access  Private
router.get('/user/:userId', auth, getIssuedBooksByUser);

// @route   GET /api/issues/user/:userId/active
// @desc    Get active issued books by a user
// @access  Private
router.get('/user/:userId/active', auth, getActiveIssuedBooks);

// @route   GET /api/issues
// @desc    Get all issues
// @access  Private (Admin only)
router.get('/', auth, adminOnly, getAllIssues);

// @route   GET /api/issues/active/all
// @desc    Get active issues
// @access  Private (Admin only)
router.get('/active/all', auth, adminOnly, getActiveIssues);

// @route   GET /api/issues/stats/dashboard
// @desc    Get issue stats for dashboard
// @access  Private (Admin only)
router.get('/stats/dashboard', auth, adminOnly, getIssueStats);

module.exports = router;