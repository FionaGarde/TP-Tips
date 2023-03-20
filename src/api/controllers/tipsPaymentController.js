
const Admin = require('../models/adminModel');
const User = require('../models/userModel');

const TipsPayment = require('../models/tipsPaymentModel');

exports.listAllTipsPayments = (req, res) => {
    TipsPayment.find({admin_id: req.params.admin_id}, (error, tipsPayments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(tipsPayments);
        }
    })
}

exports.createATipsPayment = (req, res) => {

    TipsPayment.findById({admin_id: req.params.admin_id}, req.params.admin_id, (error, admin) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newTipsPayment = new TipsPayment({...req.body, admin_id: req.params.admin_id});
          
            newTipsPayment.save((error, tipsPayment) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(tipsPayment);
                }
            })
        }
    })
}

exports.getATipsPayment = (req, res) => {
    TipsPayment.findById({admin_id: req.params.admin_id}, req.params.tipsPayment_id, (error, tipsPayment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(tipsPayment);
        }
    })
}

exports.updateATipsPayment = (req, res) => {
    TipsPayment.findByIdAndUpdate({admin_id: req.params.admin_id}, req.params.tipsPayment_id, req.body, { new: true }, (error, tipsPayment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(tipsPayment);
        }
    })
}

exports.deleteATipsPayment = (req, res) => {
    TipsPayment.findByIdAndRemove({admin_id: req.params.admin_id}, req.params.tipsPayment_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Pourboir annulé"});
        }
    })
}