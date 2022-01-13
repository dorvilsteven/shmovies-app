const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const userController = {
    registerUser(req, res) {
        const newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        newUser.save((err, user) => {
            if (err) {
                return res.status(400).send({
                    message: err
                })
            } else {
                user.hash_password = undefined;
                return res.json(user);
            }
        })
    },
    loginUser(req, res) {
        User.findOne({ 
            username: req.body.username 
        }, (err, user) => {
            if (err) throw err;
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({ message: 'Invalid username or password.' });
            }
            return res.json({
                token: jwt.sign({
                    username: user.username,
                    _id: user._id
                }, 'RESTFULAPIs')
            });
        });
    }

};

module.exports = userController;