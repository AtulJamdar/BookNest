const express = require('express');
const {
    calculateFines,
    getAllFines,
    getUserFines,
    payFine,
    getFineStats,
} = require('../controllers/fineController');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/fines/calculate
// @desc    Calculate fines for overdue books
// @access  Private (Admin only)
router.post('/calculate', auth, adminOnly, calculateFines);

// @route   GET /api/fines
// @desc    Get all fines
// @access  Private (Admin only)
router.get('/', auth, adminOnly, getAllFines);

// @route   GET /api/fines/stats/dashboard
// @desc    Get fine statistics
// @access  Private (Admin only)
router.get('/stats/dashboard', auth, adminOnly, getFineStats);

// @route   GET /api/fines/user/:userId
// @desc    Get fines for a specific user
// @access  Private
router.get('/user/:userId', auth, getUserFines);

// @route   PUT /api/fines/:fineId/pay
// @desc    Mark fine as paid
// @access  Private (Admin only)
router.put('/:fineId/pay', auth, adminOnly, payFine);

module.exports = router;