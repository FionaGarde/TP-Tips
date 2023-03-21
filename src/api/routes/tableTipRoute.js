module.exports = (server) => {
    
    const tableTipController = require("../controllers/tableTipController");
    
    const jwtMiddleware = require('../middlewares/jwtMiddleware');

    server.route("/admin/:admin_id/users")
    .get(jwtMiddleware.verifyToken, tableTipController.listAllTableTipsMounth);
  
    
    server.route("/tableTips/:tableTip_id") // req.params.tableTip_id
    .get(tableTipController.listAllTableTips)
    .post(tableTipController.createATableTip)
    .get(tableTipController.getATableTip)
    .put(tableTipController.updateATableTip)
    .delete(tableTipController.deleteATableTip)
}