const mongoose = require('mongoose');
require('../services/services.model');
require('../workers/workers.model');
const Services = mongoose.model('Services');
const Workers = mongoose.model('Workers');

let UsersSchema = new mongoose.Schema({
  short_user_id: {type: String, unique: true, required: true},
  first_name: String,
  last_name: String,
  full_name: String,
  role: Number,
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  company_name: String,
  salon_url: String,
  business_type: String,
  phone: {
    countryCode: String,
    number: String
  },
  address: {
    addressLineOne: String,
    city: String,
    zipCode: Number,
  },
  country: String,
  time_zone: String,
  currency: String,
  billingType: Number,
  initial_setup: {type: Boolean, default: false},
  office_hours: [],
  status: {type: Boolean, default: true},
  services: [Services.schema],
  workers: [Workers.schema],
  created_date: Date,
  updated_date: Date
});

mongoose.model('Users', UsersSchema);
