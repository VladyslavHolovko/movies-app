const express = require('express');
const mongoose = require('mongoose');

const app = express();

//MongoDB connection
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch(() => console.log('MongoDB connection failed'));

//Middlewares
app.use(express.json());

//Routes
const moviesRoute = require('./routes/movies');
app.use('/api/v1/movies', moviesRoute);

const starsRoute = require('./routes/stars');
app.use('/api/v1/stars', starsRoute);

//Listen
app.listen(3003);