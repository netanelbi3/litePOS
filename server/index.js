const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
