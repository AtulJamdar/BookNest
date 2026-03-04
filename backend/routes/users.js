const express = require('express');
const { body } = require('express-validator');
const {
    getAllUsers,
    getUserById,
    deleteUser,
    getUserDetails,
    getAllStudents,
    getUserStats,
    searchUsers,
    getMyProfile,
    updateProfile,
} = require('../controllers/userController');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile/me
// @desc    Get current user profile
// @access  Private
router.get('/profile/me', auth, getMyProfile);

// @route   PUT /api/users/profile/update
// @desc    Update user profile
// @access  Private
router.put(
    '/profile/update', [
        auth,
        body('email').optional().isEmail(),
    ],
    updateProfile
);

// @route   GET /api/users/role/students
// @desc    Get all students
// @access  Private (Admin only)
router.get('/role/students', auth, adminOnly, getAllStudents);

// @route   GET /api/users/stats/dashboard
// @desc    Get user stats for dashboard
// @access  Private (Admin only)
router.get('/stats/dashboard', auth, adminOnly, getUserStats);

// @route   GET /api/users/search/:query
// @desc    Search users by name or email
// @access  Private (Admin only)
router.get('/search/:query', auth, adminOnly, searchUsers);

// @route   GET /api/users/:id/details
// @desc    Get user details with issued books
// @access  Private
router.get('/:id/details', auth, getUserDetails);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', auth, getUserById);

// @route   GET /api/users
// @desc    Get all users
// @access  Private (Admin only)
router.get('/', auth, adminOnly, getAllUsers);

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Private (Admin only)
router.delete('/:id', auth, adminOnly, deleteUser);

module.exports = router;