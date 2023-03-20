module.exports = (server) => {
    
    const tableTipController = require("../controllers/tableTipController");
    
    server.route("/admin/:admin_id/tableTips")
    .get(tableTipController.listAllTableTips)
    .post(tableTipController.createATableTip);

    server.route("/tableTips/:tableTip_id") // req.params.tableTip_id
    .get(tableTipController.getATableTip)
    .put(tableTipController.updateATableTip)
    .delete(tableTipController.deleteATableTip)
}