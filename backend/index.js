const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({ debug: false });
const cors = require('cors');


//Imports routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
const issueRoutes = require('./routes/issues');
const userRoutes = require('./routes/users');
const fineRoutes = require('./routes/fines');
const requestRoutes = require('./routes/requests');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connect Database
connectDB();

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/users', userRoutes);
app.use('/api/fines', fineRoutes);
app.use('/api/requests', requestRoutes);



app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});