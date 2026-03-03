const Issue = require('../models/Issue');
const Book = require('../models/Book');
const User = require('../models/User');
const { validationResult } = require('express-validator');

// @desc    Issue a book to a user
// @route   POST /api/issues/issue-book
// @access  Private (Admin only)
exports.issueBook = async(req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId, bookId, dueDate } = req.body;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if book exists
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Check if book has available copies
        if (book.availableCopies <= 0) {
            return res.status(400).json({ message: 'Book is not available' });
        }

        // Check if user already has this book issued
        const existingIssue = await Issue.findOne({
            userId,
            bookId,
            status: 'issued',
        });
        if (existingIssue) {
            return res.status(400).json({ message: 'User already has this book issued' });
        }

        // Create issue record
        const issue = new Issue({
            userId,
            bookId,
            dueDate,
            status: 'issued',
        });

        // Save issue
        await issue.save();

        // Reduce available copies
        book.availableCopies -= 1;
        await book.save();

        // Populate user and book details
        await issue.populate('userId', 'name email');
        await issue.populate('bookId', 'title author');

        res.status(201).json({
            message: 'Book issued successfully',
            issue,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Return a book
// @route   PUT /api/issues/return-book/:issueId
// @access  Private (Admin only)
exports.returnBook = async(req, res) => {
    try {
        const { issueId } = req.params;

        // Find issue
        const issue = await Issue.findById(issueId);
        if (!issue) {
            return res.status(404).json({ message: 'Issue record not found' });
        }

        // Check if book is already returned
        if (issue.status === 'returned') {
            return res.status(400).json({ message: 'Book is already returned' });
        }

        // Update issue status
        issue.status = 'returned';
        issue.returnedDate = new Date();
        await issue.save();

        // Increase available copies
        const book = await Book.findById(issue.bookId);
        book.availableCopies += 1;
        await book.save();

        // Populate user and book details
        await issue.populate('userId', 'name email');
        await issue.populate('bookId', 'title author');

        res.status(200).json({
            message: 'Book returned successfully',
            issue,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all issued books by a user
// @route   GET /api/issues/user/:userId
// @access  Private
exports.getIssuedBooksByUser = async(req, res) => {
    try {
        const { userId } = req.params;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get all issued books
        const issues = await Issue.find({ userId })
            .populate('bookId', 'title author category')
            .sort({ issueDate: -1 });

        res.status(200).json({
            message: 'Issued books fetched successfully',
            count: issues.length,
            issues,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all active issued books by a user
// @route   GET /api/issues/user/:userId/active
// @access  Private
exports.getActiveIssuedBooks = async(req, res) => {
    try {
        const { userId } = req.params;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get active issued books (status = 'issued')
        const issues = await Issue.find({ userId, status: 'issued' })
            .populate('bookId', 'title author category')
            .sort({ dueDate: 1 }); // Sort by due date ascending

        // Calculate if book is overdue
        const issuesWithOverdue = issues.map((issue) => {
            const today = new Date();
            const dueDate = new Date(issue.dueDate);
            const isOverdue = today > dueDate;

            return {
                ...issue.toObject(),
                isOverdue,
                daysOverdue: isOverdue ? Math.floor((today - dueDate) / (1000 * 60 * 60 * 24)) : 0,
            };
        });

        res.status(200).json({
            message: 'Active issued books fetched successfully',
            count: issuesWithOverdue.length,
            issues: issuesWithOverdue,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all issues (Admin view)
// @route   GET /api/issues
// @access  Private (Admin only)
exports.getAllIssues = async(req, res) => {
    try {
        const issues = await Issue.find()
            .populate('userId', 'name email')
            .populate('bookId', 'title author')
            .sort({ issueDate: -1 });

        res.status(200).json({
            message: 'All issues fetched successfully',
            count: issues.length,
            issues,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get active issues (Admin view)
// @route   GET /api/issues/active/all
// @access  Private (Admin only)
exports.getActiveIssues = async(req, res) => {
    try {
        const issues = await Issue.find({ status: 'issued' })
            .populate('userId', 'name email')
            .populate('bookId', 'title author')
            .sort({ dueDate: 1 });

        // Calculate overdue information
        const issuesWithOverdue = issues.map((issue) => {
            const today = new Date();
            const dueDate = new Date(issue.dueDate);
            const isOverdue = today > dueDate;

            return {
                ...issue.toObject(),
                isOverdue,
                daysOverdue: isOverdue ? Math.floor((today - dueDate) / (1000 * 60 * 60 * 24)) : 0,
            };
        });

        res.status(200).json({
            message: 'Active issues fetched successfully',
            count: issuesWithOverdue.length,
            issues: issuesWithOverdue,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get issue stats (Admin dashboard)
// @route   GET /api/issues/stats/dashboard
// @access  Private (Admin only)
exports.getIssueStats = async(req, res) => {
    try {
        // Total books issued
        const totalIssued = await Issue.countDocuments({ status: 'issued' });

        // Total books returned
        const totalReturned = await Issue.countDocuments({ status: 'returned' });

        // Overdue books
        const today = new Date();
        const overdueBooks = await Issue.countDocuments({
            status: 'issued',
            dueDate: { $lt: today },
        });

        res.status(200).json({
            totalIssued,
            totalReturned,
            overdueBooks,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};