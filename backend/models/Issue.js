const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    issueDate: {
        type: Date,
        default: Date.now,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    returnedDate: {
        type: Date,
        default: null,
    },
    status: {
        type: String,
        enum: ['issued', 'returned'],
        default: 'issued',
    },
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema);