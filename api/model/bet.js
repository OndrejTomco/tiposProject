const mongoose = require('mongoose');
const user = require('../model/user');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/TiposDB');

const betSchema = new Schema({
    date:{
        type:Date,
        default:Date.now()
    },
    draw: {
        type:Number,
        default:0
    },
    userId:{type:Schema.Types.ObjectId, ref:'user'},
    bet1: Number,
    bet2: Number,
    bet3: Number,
    bet4: Number,
    bet5: Number,
    
});

module.exports = mongoose.model('bets',betSchema);