const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({ debug: false });
const cors = require('cors');


//Imports routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connect Database
connectDB();

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);


app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});