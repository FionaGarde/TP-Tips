
const RestaurantTable = require('../models/restaurantTableModel');
const Service = require('../models/serviceModel');

const TableTip = require('../models/tableTipModel');

exports.listAllTableTips = (req, res) => {
    TableTip.find((error, tableTips) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(tableTips);
        }
    })
}

exports.createATableTip = (req, res) => {

    let newTableTip = new TableTip(req.body);

    newTableTip.save((error, tableTip) => {
        if (error) {
             res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(tableTip);
        }
        })
}

exports.getATableTip = (req, res) => {
    TableTip.findById(req.params.tableTip_id, (error, tableTip) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(tableTip);
        }
    })
}

exports.updateATableTip = (req, res) => {
    TableTip.findByIdAndUpdate(req.params.tableTip_id, req.body, { new: true }, (error, tableTip) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(tableTip);
        }
    })
}

exports.deleteATableTip = (req, res) => {
    TableTip.findByIdAndRemove(req.params.tableTip_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Pourboir supprimé"});
        }
    })
}