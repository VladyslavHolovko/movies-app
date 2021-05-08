const express = require('express');

const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', (req, res) => {
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
});

router.post('/',(req, res) => {
    Movie.create(req.body)
        .then(movie => res.send(movie))
        .catch(err => res.send(err));
});

router.delete('/:movieId', (req, res) => {
    Movie.remove({ _id: req.params.movieId })
        .then(movie => res.send(movie))
        .catch(err => res.send(err));
})

module.exports = router;