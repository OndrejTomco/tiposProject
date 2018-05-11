const mongoose = require('mongoose');
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
    bet1: Number,
    bet2: Number,
    bet3: Number,
    bet4: Number,
    bet5: Number,
    
});

module.exports = mongoose.model('bets',betSchema);