const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');

const authController = require('../controller/auth');

router.post('/registration',authController.register_user);
router.post('/login',authController.login);

module.exports = router;