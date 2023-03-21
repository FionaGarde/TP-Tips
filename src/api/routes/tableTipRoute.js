module.exports = (server) => {
    
    const tableTipController = require("../controllers/tableTipController");
    
    server.route("/tableTips/:tableTip_id") // req.params.tableTip_id
    .get(tableTipController.listAllTableTips)
    .post(tableTipController.createATableTip)
    .get(tableTipController.getATableTip)
    .put(tableTipController.updateATableTip)
    .delete(tableTipController.deleteATableTip)
}