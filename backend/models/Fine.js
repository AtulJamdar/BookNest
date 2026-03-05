const mongoose = require('mongoose');

const fineSchema = new mongoose.Schema({
    issueId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
        required: true,
    },
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
    daysOverdue: {
        type: Number,
        required: true,
        min: 0,
    },
    finePerDay: {
        type: Number,
        default: 10, // Rs. 10 per day
    },
    totalFine: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending',
    },
    paidDate: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

module.exports = mongoose.model('Fine', fineSchema);