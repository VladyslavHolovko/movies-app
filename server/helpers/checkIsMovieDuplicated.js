const Movie = require('../models/movie');

const checkIsMovieDuplicated = async (movie) => {
    const duplicate = await Movie.findOne(movie).exec();

    if (duplicate) {
        throw new Error(`Duplicate movie with title: ${movie.title}`)
    }
}

module.exports = checkIsMovieDuplicated;