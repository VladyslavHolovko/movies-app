const express = require('express');

const router = express.Router();

const stars_controller = require('../controllers/starsController');

router.get('/', stars_controller.stars_list_get);

module.exports = router;