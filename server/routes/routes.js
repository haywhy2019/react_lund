const jwtCheck = require("../config/auth");

module.exports = (app) => {
 const contactResource = require("../Controllers/contactController");
 const orderResource = require("../Controllers/ordersController");
 const userOrdersResource = require("../controllers/UserOrderController");
 
 
 
 app.route("/contactus")
 .get(contactResource.getmessage)
 .post(contactResource.Contactus)

 app.route("/contactus/:id")
 .delete(contactResource.deleteContact);

 app.route("/order")
 .get(orderResource.getAll)
 .post(orderResource.createOrder)

 app.route("/order/:id")
 .delete(orderResource.deleteOrder);

//  app.route("/userorder")
//  .get(userOrdersResource.getAll)
//  .post(userOrdersResource.createOrder)
}

