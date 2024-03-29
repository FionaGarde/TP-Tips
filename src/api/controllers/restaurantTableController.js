const RestaurantTable = require('../models/restaurantTableModel');

exports.listAllRestaurantTables = (req, res) => {
    RestaurantTable.find((error, restaurantTables) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(restaurantTables);
        }
    })
}

exports.createARestaurantTable = (req, res) => {
    
    let newRestaurantTable = new RestaurantTable(req.body);

    newRestaurantTable.save((error, restaurantTable) => {
        if (error) {
             res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(restaurantTable);
        }
        })
}

exports.getARestaurantTable = (req, res) => {
    RestaurantTable.findById(req.params.restaurantTable_id, (error, restaurantTable) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(restaurantTable);
        }
    })
}

exports.updateARestaurantTable = (req, res) => {
    RestaurantTable.findByIdAndUpdate(req.params.restaurantTable_id, req.body, { new: true }, (error, restaurantTable) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(restaurantTable);
        }
    })
}

exports.deleteARestaurantTable = (req, res) => {
    RestaurantTable.findByIdAndRemove(req.params.restaurantTable_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Table supprimé"});
        }
    })
}