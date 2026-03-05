const express = require('express');
const { body } = require('express-validator');
const {
    createRequest,
    getUserRequests,
    getAllRequests,
    approveRequest,
    rejectRequest,
} = require('../controllers/requestController');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/requests
// @desc    Create book request
// @access  Private (Student)
router.post(
    '/', [
        auth,
        body('bookId', 'Book ID is required').notEmpty(),
    ],
    createRequest
);

// @route   GET /api/requests/user/:userId
// @desc    Get user requests
// @access  Private
router.get('/user/:userId', auth, getUserRequests);

// @route   GET /api/requests
// @desc    Get all requests
// @access  Private (Admin only)
router.get('/', auth, adminOnly, getAllRequests);

// @route   PUT /api/requests/:requestId/approve
// @desc    Approve request
// @access  Private (Admin only)
router.put('/:requestId/approve', auth, adminOnly, approveRequest);

// @route   PUT /api/requests/:requestId/reject
// @desc    Reject request
// @access  Private (Admin only)
router.put('/:requestId/reject', auth, adminOnly, rejectRequest);

module.exports = router;