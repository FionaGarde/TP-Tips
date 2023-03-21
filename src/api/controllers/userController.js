const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.listAllUsers = (req, res) => {
    User.find({ active: true}, (error, users) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(users);
        }
    })
}

exports.createAUser = (req, res) => {

    let newUser = new User(req.body);

    newUser.save((error, user) => {
        if (error) {
             res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(user);
        }
        })
}

exports.getAUser = (req, res) => {
    User.findById(req.params.user_id, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(user);
        }
    })
}

exports.updateAUser = (req, res) => {
    User.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(user);
        }
    })
}

exports.deleteAUser = (req, res) => {
    User.findByIdAndRemove({ active: false}, req.params.user_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Personnel anonymiser"});
        }
    })
}