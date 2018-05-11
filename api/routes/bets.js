const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');


const betsController = require('../controller/bets');

router.post('/new',checkAuth,betsController.create_new_bet);


module.exports = router;