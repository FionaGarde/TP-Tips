
const Service = require('../models/serviceModel');
const payload = require('../middlerwares/jwtMiddleware');

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

    newService.save({admin_id:payload.id}, (error, service) => {
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
    Service.findByIdAndUpdate({admin_id:payload.id}, req.body, { new: true }, (error, service) => {
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