module.exports = (server) => {
    
    const serviceController = require("../controllers/serviceController");
    
    server.route("/admin/:admin_id/services")
    .get(serviceController.listAllServices)
    .post(serviceController.createAService);

    server.route("/services/:service_id") // req.params.service_id
    .get(serviceController.getAService)
    .put(serviceController.updateAService)
    .delete(serviceController.deleteAService)
}