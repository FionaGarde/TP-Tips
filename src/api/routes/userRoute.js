module.exports = (server) => {
    
    const userController = require("../controllers/userController");
    
    server.route("/admin/:admin_id/users")
    .get(userController.listAllUsers)
    .post(userController.createAUser);

    server.route("/users/:user_id") // req.params.user_id
    .get(userController.getAUser)
    .put(userController.updateAUser)
    .delete(userController.deleteAUser)
}