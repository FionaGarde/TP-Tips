module.exports = (server) => {
    
    const serviceController = require("../controllers/serviceController");
    const jwtMiddleware = require('../middlewares/jwtMiddleware');

    server.route("/admin/:admin_id/services")
    .post(jwtMiddleware.verifyToken, serviceController.createAService)
    .put(jwtMiddleware.verifyToken, serviceController.updateAService)
    .delete(jwtMiddleware.verifyToken, serviceController.deleteAService);

    server.route("/services/:service_id") // req.params.service_id
    .get(serviceController.listAllServices)
    .get(serviceController.getAService)
}