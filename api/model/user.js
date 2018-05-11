const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bets = require('../model/bet').schema;

mongoose.connect('mongodb://localhost/TiposDB');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{
        type:String,
        unique:true
    },
    login:{
        type:String,
        unique:true
    },
    password: String,
    bets:[bets]

});


module.exports = mongoose.model('user',userSchema);