module.exports = (server) => {

    const adminController = require("../controllers/adminController");

    server.post("/admin/register", adminController.AdminRegister);
    server.post("/admin/login", adminController.LoginRegister);

}