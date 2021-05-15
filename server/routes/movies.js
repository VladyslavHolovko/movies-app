const express = require('express');

const router = express.Router();

const movies_controller = require('../controllers/moviesController');

router.get('/', movies_controller.movies_list_get);

router.post('/', movies_controller.movies_create_post);

router.delete('/:movieId', movies_controller.movies_one_delete);

module.exports = router;