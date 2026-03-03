const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe, logout } = require('../controllers/authController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
    '/register', [
        body('name', 'Name is required').notEmpty(),
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    ],
    register
);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post(
    '/login', [
        body('email', 'Pleaes include a valid email').isEmail(),
        body('password', 'Password is required').exists(),
    ],
    login
);

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private
router.get('/me', auth, getMe);

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post('/logout', auth, logout);

module.exports = router;