const Movie = require('../models/movie');

exports.stars_list_get = (req, res) => {
    Movie.find().distinct('stars')
        .then(movies => res.send(movies))
        .catch(err => res.send(err));
};