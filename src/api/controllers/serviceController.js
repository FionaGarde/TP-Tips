
const Service = require('../models/serviceModel');

exports.listAllServices = (req, res) => {
    Service.find((error, services) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(services);
        }
    })
}

exports.createAService = (req, res) => {

    let newService = new Service(req.body);

    newService.save((error, service) => {
        if (error) {
             res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(service);
        }
        })
}

exports.getAService = (req, res) => {
    Service.findById(req.params.service_id, (error, service) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(service);
        }
    })
}

exports.updateAService = (req, res) => {
    Service.findByIdAndUpdate(req.params.service_id, req.body, { new: true }, (error, service) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(service);
        }
    })
}

exports.deleteAService = (req, res) => {
    Service.findByIdAndRemove(req.params.service_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Service supprimé"});
        }
    })
}