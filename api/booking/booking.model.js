const mongoose = require('mongoose');
require('../services/services.model');
require('../workers/workers.model');
const Services = mongoose.model('Services');
const Workers = mongoose.model('Workers');

let BookingSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  service: Services.schema,
  worker: Workers.schema,
  date: {type: String, required: true},
  time: {type: String, required: true},
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('Booking', BookingSchema);