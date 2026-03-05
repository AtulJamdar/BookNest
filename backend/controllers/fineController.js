const Fine = require('../models/Fine');
const Issue = require('../models/Issue');

// @desc    Calculate and create fine for overdue books
// @route   POST /api/fines/calculate
// @access  Private (Admin only)
exports.calculateFines = async(req, res) => {
    try {
        const today = new Date();
        const finePerDay = 10; // Rs. 10 per day

        // Get all issued books
        const overdueIssues = await Issue.find({
            status: 'issued',
            dueDate: { $lt: today },
        }).populate('userId').populate('bookId');

        let finesCreated = 0;

        for (const issue of overdueIssues) {
            // Check if fine already exists
            const existingFine = await Fine.findOne({ issueId: issue._id });

            if (!existingFine) {
                const daysOverdue = Math.floor((today - new Date(issue.dueDate)) / (1000 * 60 * 60 * 24));
                const totalFine = daysOverdue * finePerDay;

                const fine = new Fine({
                    issueId: issue._id,
                    userId: issue.userId._id,
                    bookId: issue.bookId._id,
                    daysOverdue,
                    finePerDay,
                    totalFine,
                    status: 'pending',
                });

                await fine.save();
                finesCreated++;
            }
        }

        res.status(201).json({
            message: `${finesCreated} fines calculated successfully`,
            finesCreated,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all pending fines
// @route   GET /api/fines
// @access  Private (Admin only)
exports.getAllFines = async(req, res) => {
    try {
        const fines = await Fine.find()
            .populate('userId', 'name email')
            .populate('bookId', 'title author')
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: 'Fines fetched successfully',
            count: fines.length,
            fines,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get fines for a specific user
// @route   GET /api/fines/user/:userId
// @access  Private
exports.getUserFines = async(req, res) => {
    try {
        const { userId } = req.params;

        const fines = await Fine.find({ userId })
            .populate('bookId', 'title author')
            .sort({ createdAt: -1 });

        const pendingFines = fines.filter((f) => f.status === 'pending');
        const totalPendingFine = pendingFines.reduce((sum, f) => sum + f.totalFine, 0);

        res.status(200).json({
            message: 'User fines fetched successfully',
            count: fines.length,
            pendingCount: pendingFines.length,
            totalPendingFine,
            fines,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Mark fine as paid
// @route   PUT /api/fines/:fineId/pay
// @access  Private (Admin only)
exports.payFine = async(req, res) => {
    try {
        const { fineId } = req.params;

        const fine = await Fine.findById(fineId);
        if (!fine) {
            return res.status(404).json({ message: 'Fine not found' });
        }

        if (fine.status === 'paid') {
            return res.status(400).json({ message: 'Fine is already paid' });
        }

        fine.status = 'paid';
        fine.paidDate = new Date();
        await fine.save();

        await fine.populate('userId', 'name email');
        await fine.populate('bookId', 'title author');

        res.status(200).json({
            message: 'Fine marked as paid',
            fine,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get fine statistics
// @route   GET /api/fines/stats/dashboard
// @access  Private (Admin only)
exports.getFineStats = async(req, res) => {
    try {
        const totalFines = await Fine.countDocuments();
        const pendingFines = await Fine.countDocuments({ status: 'pending' });
        const paidFines = await Fine.countDocuments({ status: 'paid' });

        const totalAmount = await Fine.aggregate([
            { $group: { _id: null, total: { $sum: '$totalFine' } } },
        ]);

        const pendingAmount = await Fine.aggregate([
            { $match: { status: 'pending' } },
            { $group: { _id: null, total: { $sum: '$totalFine' } } },
        ]);

        const paidAmount = await Fine.aggregate([
            { $match: { status: 'paid' } },
            { $group: { _id: null, total: { $sum: '$totalFine' } } },
        ]);

        res.status(200).json({
            totalFines,
            pendingFines,
            paidFines,
            totalAmount: totalAmount[0]?.total || 0,
            pendingAmount: pendingAmount[0]?.total || 0,
            paidAmount: paidAmount[0]?.total || 0,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};