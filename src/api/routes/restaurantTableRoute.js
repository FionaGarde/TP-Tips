module.exports = (server) => {
    
    const restaurantTableController = require("../controllers/restaurantTableController");
    
    server.route("/admin/:admin_id/RestaurantTables")
    .get(restaurantTableController.listAllRestaurantTables)
    .post(restaurantTableController.createARestaurantTable);

    server.route("/restaurantTables/:restaurantTable_id") // req.params.RestaurantTable_id
    .get(restaurantTableController.getARestaurantTable)
    .put(restaurantTableController.updateARestaurantTable)
    .delete(restaurantTableController.deleteARestaurantTable)
}