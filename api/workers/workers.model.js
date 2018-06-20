const mongoose = require('mongoose');
const Services = mongoose.model('Services');

let WorkersSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  services: [Services.schema],
  disabledTime: [{
    _id: false,
    date: String,
    bookedServices: [{
      _id: false,
      serviceName: String,
      time: Array
    }]
  }],
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

mongoose.model('Workers', WorkersSchema);