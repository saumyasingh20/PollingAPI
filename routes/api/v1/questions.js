const express = require('express');
const router = express.Router();

const questionsController = require('../../../controllers/api/v1/questions_controller');

router.post('/create',questionsController.createNewQuestion);
router.get('/:id', questionsController.viewQuestion);
module.exports = router;