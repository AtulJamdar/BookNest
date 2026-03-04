const User = require('../models/User');
const Issue = require('../models/Issue');
const { validationResult } = require('express-validator');

// @desc    Get all users
// @route   GET /api/users
// @access  Private (Admin only)
exports.getAllUsers = async(req, res) => {
    try {
        const users = await User.find().select('-password');

        res.status(200).json({
            message: 'Users fetched successfully',
            count: users.length,
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private
exports.getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User fetched successfully',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private (Admin only)
exports.deleteUser = async(req, res) => {
    try {
        const { id } = req.params;

        // Check if user exists
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if user has any active issued books
        const activeIssues = await Issue.findOne({
            userId: id,
            status: 'issued',
        });

        if (activeIssues) {
            return res.status(400).json({
                message: 'Cannot delete user. User has active issued books. Please return all books first.',
            });
        }

        // Delete user
        await User.findByIdAndDelete(id);

        res.status(200).json({
            message: 'User deleted successfully',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get user details with their issued books
// @route   GET /api/users/:id/details
// @access  Private
exports.getUserDetails = async(req, res) => {
    try {
        const { id } = req.params;

        // Get user
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get user's issued books
        const issuedBooks = await Issue.find({ userId: id, status: 'issued' })
            .populate('bookId', 'title author category');

        // Get user's returned books count
        const returnedBooksCount = await Issue.countDocuments({
            userId: id,
            status: 'returned',
        });

        // Calculate overdue books
        const today = new Date();
        const overdueBooks = await Issue.find({
            userId: id,
            status: 'issued',
            dueDate: { $lt: today },
        }).populate('bookId', 'title author');

        res.status(200).json({
            message: 'User details fetched successfully',
            user,
            stats: {
                totalIssuedBooks: issuedBooks.length,
                totalReturnedBooks: returnedBooksCount,
                overdueBooks: overdueBooks.length,
            },
            issuedBooks,
            overdueBooks,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all students (users with role = 'user')
// @route   GET /api/users/role/students
// @access  Private (Admin only)
exports.getAllStudents = async(req, res) => {
    try {
        const students = await User.find({ role: 'user' }).select('-password');

        res.status(200).json({
            message: 'Students fetched successfully',
            count: students.length,
            students,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get user stats for dashboard
// @route   GET /api/users/stats/dashboard
// @access  Private (Admin only)
exports.getUserStats = async(req, res) => {
    try {
        // Total users
        const totalUsers = await User.countDocuments();

        // Total students
        const totalStudents = await User.countDocuments({ role: 'user' });

        // Total admins
        const totalAdmins = await User.countDocuments({ role: 'admin' });

        // Students with active issued books
        const studentsWithBooks = await Issue.distinct('userId', {
            status: 'issued',
        });

        // Students with overdue books
        const today = new Date();
        const studentsWithOverdue = await Issue.distinct('userId', {
            status: 'issued',
            dueDate: { $lt: today },
        });

        res.status(200).json({
            totalUsers,
            totalStudents,
            totalAdmins,
            studentsWithActiveBooks: studentsWithBooks.length,
            studentsWithOverdueBooks: studentsWithOverdue.length,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Search users by name or email
// @route   GET /api/users/search/:query
// @access  Private (Admin only)
exports.searchUsers = async(req, res) => {
    try {
        const { query } = req.params;

        // MongoDB regex search
        const users = await User.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } },
            ],
        }).select('-password');

        res.status(200).json({
            message: 'Search completed',
            count: users.length,
            users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get current user profile
// @route   GET /api/users/profile/me
// @access  Private
exports.getMyProfile = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.status(200).json({
            message: 'Profile fetched successfully',
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile/update
// @access  Private
exports.updateProfile = async(req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email } = req.body;
        const userId = req.user.id;

        // Find user
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if new email is already taken
        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already in use' });
            }
        }

        // Update fields
        if (name) user.name = name;
        if (email) user.email = email;

        // Save updated user
        await user.save();

        res.status(200).json({
            message: 'Profile updated successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};