let Order = require('../models/order.model');

module.exports.createOrder = (req, res) => {
  const order = req.body;

    if (order){
  
      const newOrder = new Order(order);
    
      newOrder.save()
        .then(() => res.json({message: 'Order Created!'}))
        .catch(err => res.status(400).json({error: err, message: "Order cannot be created"}));
      
      
    } else {
      res.status(505).json({message: "invalid order params"});
    };
}

module.exports.getAll = (req, res) => {
  // check if user is admin 
  Order.find().populate('items')
  .then(orders => res.json({body: orders}))
  .catch(err => res.status(400).json({error: err, message: "orders cannot be fetched!"}));
  // else return un authorized status code 
}

module.exports.deleteOrder = (req, res) => {
  Order.findById(req.params.id)
  .then(item => item.remove().then(()=> res.json({message: "order deleted successful"})))
  .catch(err => res.status(404).json({message: "order not deleted"}))
}