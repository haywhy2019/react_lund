const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  tel: {
    type: Number,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  
  },

  date: {
    type: Date,
    default: Date.now
  }

});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;