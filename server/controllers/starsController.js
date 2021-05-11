const Movie = require('../models/movie');

exports.stars_list_get = (req, res) => {
    Movie.find().distinct('stars')
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(404).send(err));
};