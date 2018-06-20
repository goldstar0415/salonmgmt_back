const NotificationsHelper = require('../helpers/notifications.helper');
const notificationsHelper = new NotificationsHelper();
const shortid = require('shortid');

class NotificationsController {
  constructor() {}

  sendNotifications(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    if (req.headers && req.headers.userId) {
      let saveObj = {
        "title": req.body.title,
        "body": req.body.body,
        "userId": shortid.isValid(req.body.userId),
        "createdAt": new Date()
      };

      notificationsHelper.createNotification(saveObj)
      .then(notificationsResp => {
        res.status(200).json({
          success: true,
          data: notificationsResp,
          message: langObj['Notifications Sent Successfully.'] || 'Notifications Sent Successfully.'
        });
      })
      .catch(notificationsErr => {
        res.status(400).json({
          success: false,
          data: notificationsErr,
          message: langObj['Failed to send notifications.'] || 'Failed to send notifications.'
        });
      });
    } else {
      res.status(401).json({
        success: false,
        data: {},
        message: langObj['Token is not verified. Please Login.'] || 'Token is not verified. Please Login.'
      })
    }
  }
}