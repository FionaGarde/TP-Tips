const express = require('express');
const jwt = require('jsonwebtoken');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(express.urlencoded());
server.use(express.json());

const adminRoute = require("./api/routes/adminRoute");
adminRoute(server);

/*const restaurantTableRoute = require("./api/routes/restaurantTableRoute");
restaurantTableRoute(server);

const serviceRoute = require("./api/routes/serviceRoute");
serviceRoute(server);

const tableTipRoute = require("./api/routes/tableTipRoute");
tableTipRoute(server);

const tipsPaymentRoute = require("./api/routes/tipsPaymentRoute");
tipsPaymentRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);*/

server.listen(port,hostname, () => {
    console.log(`Serveur qui tourne sur le port ${port}`)
});