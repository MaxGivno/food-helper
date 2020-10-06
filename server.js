const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');

const meals = require('./routes/api/meals')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
    .set("useNewUrlParser", true)
    .set("useUnifiedTopology", true)
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

// Use Routes
app.use('/api/meals', meals)

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);