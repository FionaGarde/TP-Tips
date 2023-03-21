module.exports = (server) => {
    
    const restaurantTableController = require("../controllers/restaurantTableController");

    server.route("/restaurantTables/:restaurantTable_id") // req.params.RestaurantTable_id
    .get(restaurantTableController.listAllRestaurantTables)
    .post(restaurantTableController.createARestaurantTable)
    .get(restaurantTableController.getARestaurantTable)
    .put(restaurantTableController.updateARestaurantTable)
    .delete(restaurantTableController.deleteARestaurantTable)
}