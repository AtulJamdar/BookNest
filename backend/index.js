const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({ debug: false });
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connect Database
connectDB();

app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});