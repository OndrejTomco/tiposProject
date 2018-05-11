const mongoose = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register_user = (req,res,next) => {
    User.find({$or: [{email:req.body.email},{login:req.body.login}]})
    .then((user) => {
        console.log(user)
        if(user.length > 0){
            return res.status(409).json({
                message: 'email or login already exists'
            });
        } else{
            bcrypt.hash(req.body.password,10,(err,hash) => {
                if(err){
                    return res.status(500).json({
                        error:err
                    });
                } else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                        login:req.body.login,
                        email: req.body.email,
                        password: hash
                    });
                    user.save()
                    .then(savedUser => {
                        console.log(savedUser);
                        res.status(201).json({
                            message:'user created',
                            
                        });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error:err
                        });
                    });
                }
            });
        }
    });
}

exports.login = (req,res,next) => {
    User.find({login:req.body.login})
    .then(user => {
        if(user.length < 1){
            return res.status(401).json({
                message:'authentication failed'
            });
        } else{
            bcrypt.compare(req.body.password,user[0].password, (err,match) => {
                if(err){
                    return res.status(401).json({
                        message:'authentication failed'
                    });
                }
                if(match) {
                    const token = jwt.sign({
                        email:user[0].email,
                        userId: user[0]._id
                    },
                    process.env.JWT_KEY,
                    {expiresIn: "1h"})

                    return res.status(200).json({
                        message: 'authentication successful',
                        token,
                        userId:user[0]._id
                    });
                }

                res.status(401).json({
                    message:'authentication failed'
                });
            });

        }
    });
}