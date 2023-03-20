
const Admin = require('../models/adminModel');
const User = require('../models/userModel');

exports.listAllUsers = (req, res) => {
    User.find((error, users) => {
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

    User.findById(req.params.admin_id, (error, admin) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newUser = new User({...req.body, admin_id: req.params.admin_id});
          
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
    })
}

exports.getAUser = (req, res) => {
    User.findById({admin_id: req.params.admin_id}, req.params.user_id, (error, user) => {
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
    User.findByIdAndUpdate({admin_id: req.params.admin_id}, req.params.user_id, req.body, { new: true }, (error, user) => {
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

exports.deleteATUser = (req, res) => {
    User.findByIdAndRemove({admin_id: req.params.admin_id}, req.params.user_id, (error) => {
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