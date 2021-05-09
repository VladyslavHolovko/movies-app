const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Movie', MovieSchema);