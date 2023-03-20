module.exports = (server) => {
    
    const tipsPaymentController = require("../controllers/tipsPaymentController");
    
    server.route("/admin/:admin_id/tips")
    .get(tipsPaymentController.listAllTipsPayments)
    .post(tipsPaymentController.createATipsPayment);

    server.route("/tipsPayments/:tipsPayment_id") // req.params.tipsPayment_id
    .get(tipsPaymentController.getATipsPayment)
    .put(tipsPaymentController.updateATipsPayment)
    .delete(tipsPaymentController.deleteATipsPayment)
}