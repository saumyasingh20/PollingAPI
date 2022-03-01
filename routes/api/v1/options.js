const express = require('express');
const router = express.Router();

const optionsController = require('../../../controllers/api/v1/options_controller');

router.post('/:id/create', optionsController.createNewOption);

module.exports = router;