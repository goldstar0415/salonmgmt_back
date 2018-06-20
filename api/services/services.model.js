const mongoose = require('mongoose');

let ServicesSchema = new mongoose.Schema({
  title: {type: String, required: true},
  isActive: Boolean,
  time: Number,
  price: Number,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

mongoose.model('Services', ServicesSchema);