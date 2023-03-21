module.exports = (server) => {
    
    const userController = require("../controllers/userController");
    const jwtMiddleware = require('../middlewares/jwtMiddleware');
    
    server.route("/admin/:admin_id/users")
    .post(jwtMiddleware.verifyToken, userController.createAUser)
    .delete(jwtMiddleware.verifyToken, userController.deleteAUser);

    server.route("/users/:user_id") // req.params.user_id
    .get(userController.listAllUsers)
    .get(userController.getAUser)
    .put(userController.updateAUser)
}