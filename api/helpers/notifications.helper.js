const mongoose = require('mongoose');
const Notifications = mongoose.model('Notifications');

class NotificationsHelper {
  constructor() {}

  createNotification(notificationObj) {
    return new Promise((resolve, reject) => {
      let notification = new Notifications(notificationObj);
      notification.save((err, notification) => {
        if err reject(err);
        else resolve(notification);
      });
    });
  }

  markAsRead(query) {
    return new Promise((resolve, reject) => {
      Notifications.update(query, { isRead: true, markAsReadAt: new Date() }, (err, updateResp) => {
        if err reject(err);
        else resolve(updateResp);
      });
    });
  }

  removeNotification(query) {
    return new Promise((resolve, reject) => {
      Notifications.remove(query, (err, removeResp) => {
        if err reject(err);
        else resolve(removeResp);
      });
    });
  }
}

module.exports = NotificationsHelper;