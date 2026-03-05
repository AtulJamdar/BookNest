const BookRequest = require('../models/BookRequest');
const Book = require('../models/Book');

// @desc    Create book request
// @route   POST /api/requests
// @access  Private (Students only)
exports.createRequest = async(req, res) => {
    try {
        const { bookId, requestMessage } = req.body;
        const userId = req.user.id;

        // Check if book exists
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Check if already requested
        const existingRequest = await BookRequest.findOne({
            userId,
            bookId,
            status: 'pending',
        });
        if (existingRequest) {
            return res.status(400).json({ message: 'You already have a pending request for this book' });
        }

        const request = new BookRequest({
            userId,
            bookId,
            requestMessage,
        });

        await request.save();
        await request.populate('bookId', 'title author');

        res.status(201).json({
            message: 'Request created successfully',
            request,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get user requests
// @route   GET /api/requests/user/:userId
// @access  Private
exports.getUserRequests = async(req, res) => {
    try {
        const { userId } = req.params;

        const requests = await BookRequest.find({ userId })
            .populate('bookId', 'title author')
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: 'Requests fetched successfully',
            count: requests.length,
            requests,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all requests (Admin)
// @route   GET /api/requests
// @access  Private (Admin only)
exports.getAllRequests = async(req, res) => {
    try {
        const requests = await BookRequest.find()
            .populate('userId', 'name email')
            .populate('bookId', 'title author')
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: 'All requests fetched successfully',
            count: requests.length,
            requests,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Approve request
// @route   PUT /api/requests/:requestId/approve
// @access  Private (Admin only)
exports.approveRequest = async(req, res) => {
    try {
        const { requestId } = req.params;
        const { responseMessage } = req.body;

        const request = await BookRequest.findById(requestId);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        request.status = 'approved';
        request.approvedBy = req.user.id;
        request.responseMessage = responseMessage;
        await request.save();

        await request.populate('userId', 'name email');
        await request.populate('bookId', 'title author');

        res.status(200).json({
            message: 'Request approved successfully',
            request,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Reject request
// @route   PUT /api/requests/:requestId/reject
// @access  Private (Admin only)
exports.rejectRequest = async(req, res) => {
    try {
        const { requestId } = req.params;
        const { responseMessage } = req.body;

        const request = await BookRequest.findById(requestId);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        request.status = 'rejected';
        request.approvedBy = req.user.id;
        request.responseMessage = responseMessage;
        await request.save();

        await request.populate('userId', 'name email');
        await request.populate('bookId', 'title author');

        res.status(200).json({
            message: 'Request rejected successfully',
            request,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};