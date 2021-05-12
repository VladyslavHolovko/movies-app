const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: title => !!title,
            message: "Title is not valid"
        }
    },
    releaseYear: {
        type: Number,
        required: true,
        validate: {
            validator: releaseYear => (1888 <= releaseYear && releaseYear <= 2021),
            message: "Release year is not valid"
        }
    },
    format: {
        type: String,
        enum: ['VHS', 'DVD', 'Blu-Ray'],
        required: true
    },
    stars: {
        type: [String],
        required: true,
        validate: {
            validator: stars => stars.length && stars.every(star => /^[a-z-\s]+$/gi.test(star)),
            message: "Stars is not valid"
        }
    }
});

module.exports = mongoose.model('Movie', MovieSchema);