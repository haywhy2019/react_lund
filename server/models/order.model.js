const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    Name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5
    },
     Address: {
      type: String,
      required: true,
      trim: true
    },
    Phone: {
      type: Number,
      trim: true
    },
   
    
    Trousers: {
      type: Number,
      trim: true
    },
    Shirts: {
      type: Number,
      trim: true
    },
    Jacket: {
      type: Number,
      trim: true
    },
    Others: {
      type: Number,
      trim: true
    },
  
    date: {
      type: Date,
      default: Date.now
    }
 
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;