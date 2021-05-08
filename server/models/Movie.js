const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    format: String,
    stars: [String]
});

module.exports = mongoose.model('Movie', MovieSchema);