const mongoose = require('mongoose');
const User = require('../model/user');
const Bet = require('../model/bet');

exports.create_new_bet = (req,res,next) => {
    console.log(req.body);
    const newBet = new Bet({
        bet1:req.body.bet1,
        bet2:req.body.bet2,
        bet3:req.body.bet3,
        bet4:req.body.bet4,
        bet5:req.body.bet5,
    });
    newBet
    .save()
    .then((savedBet) => {
        User.update(
            {_id:req.body.id},
            {$push:{"bets":savedBet._id}}
        ).then(()=> {
            return res.status(201).json({
                message:'bet successfuly inserted'
            });
        })
    })
    .catch((error)=> {
        res.status(500).json({
            error:err
        });
    })
    
}