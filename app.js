require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./api/routes/auth');
const betRoutes = require('./api/routes/bets');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/auth',authRoutes);
app.use('/bets',betRoutes);

app.listen(3000,()=>{
    console.log('server started');
})