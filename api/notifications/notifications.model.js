const mongoose = require('mongoose');
const shortid = require('shortid');

let NotificationsSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  title: {type: String, required: true},
  isRead: {type: Boolean, default: false},
  body: {type: String, required: true},
  userId: {type: String, required: true},
  createdAt: Date,
  markAsReadAt: Date
});
mongoose.model('Notifications', NotificationsSchema);