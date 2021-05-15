const Movie = require('../models/movie');
const checkIsMovieDuplicated = require('../helpers/checkIsMovieDuplicated');

exports.movies_list_get = (req, res) => {
    const query = {};

    if (req.query) {
        Object.keys(req.query).forEach(key => {
            query[key] = new RegExp(req.query[key], 'gi');
        })
    }

    Movie.find(query).collation({ locale: "en" }).sort('title')
        .then(movies => res.status(200).send(movies))
        .catch(err => res.send(err));
};

exports.movies_create_post = (req, res) => {
    if (Array.isArray(req.body)) {
        const promises = req.body.map(movie => checkIsMovieDuplicated(movie));

        Promise.all(promises)
            .then(() => Movie.create(req.body))
            .then(movies => res.status(200).send(movies))
            .catch(err => res.status(400).send(err.message));

        return;
    }

    checkIsMovieDuplicated(req.body)
        .then(() => Movie.create(req.body))
        .then(movie => res.status(200).send(movie))
        .catch(err => res.status(400).send(err.message));
};

exports.movies_one_delete = (req, res) => {
    Movie.deleteOne({ _id: req.params.movieId })
        .then(dbRes => {
            if (dbRes.deletedCount) {
                res.status(200).send('Movie was successfully deleted');
            } else {
                res.status(404).send('Movie was not found');
            }
        })
        .catch(err => res.status(400).send(err));
};