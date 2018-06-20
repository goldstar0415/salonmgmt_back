const mongoose = require('mongoose');
let ClientsSchema = new mongoose.Schema({
  userId: String,
  shortClientId: String,
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  gender: String,
  birthday: String,
  referral_source: String,
  client_notes: String,
  email: { type: String, unique: true },
  notification_method: String,
  mobile_number: String,
  telephone_number: String,
  address: String,
  post_code: String,
  city: String,
  country: String,
  appointment_ids: Array,
  status: {type: Boolean, default: true},
  created_date: Date,
  updated_date: Date
});
mongoose.model('Clients', ClientsSchema);