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
        .then(movies => res.send(movies))
        .catch(err => res.send(err));
};

exports.movies_create_post = (req, res) => {
    Movie.create(req.body)
        .then(movie => res.send(movie))
        .catch(err => res.send(err));
};

exports.movies_one_delete = (req, res) => {
    Movie.remove({ _id: req.params.movieId })
        .then(movie => res.send(movie))
        .catch(err => res.send(err));
};