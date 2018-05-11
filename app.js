const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const User = require('./api/model/user');
// const Bet = require('./api/model/bet');
const authRoutes = require('./api/routes/auth');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/auth',authRoutes);

app.listen(3000,()=>{
    console.log('server started');
})