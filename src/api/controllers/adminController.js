const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

exports.AdminRegister = (req, res) => {
    let newAdmin = new Admin (req.body);

    newAdmin.save((error, admin) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json({ message: "Administrteur créé"});
        }
    })
}

exports.LoginRegister = (req, res) => {
    //find admin
    Admin.findOne({pincode : req.body.pincode}, (error, admin) => {
        if (error || admin == null) {
            res.status(500);
            console.log(error);
            res.json({ message: "Administrateur inconnu." });
        }
        else {
            //admin found
            if(admin.pincode == req.body.pincode) {
                let admin = {
                    id: admin._id,
                    pincode: admin.pincode,
                    role: "admin"
                }
                jwt.sign(admin, process.env.JWT_KEY, {expiresIn : "30days"}, (error, token) => {
                    if (error) {
                        res.status(500);
                        console.log(error);
                        res.json({ message: "Impossible de générer le token." });
                    }
                    else {
                        res.status(200);
                        res.json({token})
                    }
                })
            }
            else{
                res.status(401);
                console.log(error);
                res.json({message: "Code pin incorrect"})
            }
        }
    })
}