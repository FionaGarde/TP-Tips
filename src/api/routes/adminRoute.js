module.exports = (server) => {

    const adminController = require("../controllers/adminController");

    server.post("/admin/register", adminController.adminRegister);
    server.post("/admin/login", adminController.adminLogin);

}