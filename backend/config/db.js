const mongoose = require('mongoose');
require('dotenv').config({ debug: false });

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MonGODB_URI);
        console.log("MongoDB Connected");
        // return conn;
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;