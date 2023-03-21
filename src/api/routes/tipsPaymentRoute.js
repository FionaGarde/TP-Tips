module.exports = (server) => {
    
    const tipsPaymentController = require("../controllers/tipsPaymentController");
    const jwtMiddleware = require('../middlewares/jwtMiddleware');
    
    server.route("/admin/:admin_id/tips")
    .all(jwtMiddleware.verifyToken);
}