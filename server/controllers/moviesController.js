const Movie = require('../models/movie');

exports.movies_list_get = (req, res) => {
    let query;

    if (req.query) {
        query = {};

        if (req.query.title) {
            query.title = new RegExp(req.query.title, 'gi');
        }

        if (req.query.stars) {
            query.stars = new RegExp(req.query.stars, 'gi');
        }
    }

    Movie.find(query).sort('title')
        .then(movies => res.status(200).send(movies))
        .catch(err => res.send(err));
};

exports.movies_create_post = (req, res) => {
    Movie.create(req.body)
        .then(movie => res.status(200).send(movie))
        .catch(err => res.status(400).send(err.message));
};

exports.movies_upload_post = (req, res) => {
    const resBody = [];

    try {
        req.body.forEach(movie => {
            Movie.create(movie)
                .then(() => resBody.push(movie));
        })
    } catch (e) {
        res.status(400).send(e.message)
    }

    res.send(resBody);
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
        .catch(err => res.send(err));
};