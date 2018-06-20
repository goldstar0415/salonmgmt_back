const ServicesHelper = require('../helpers/services.helper');
const servicesHelper = new ServicesHelper();
const _ = require('lodash');

class ServicesController {
  constructor() {}

  addServices(req,res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    servicesHelper.addServices(req.headers.userId, req.body)
    .then(services => {
      res.status(200).json({
        status: true,
        data: services,
        message: langObj['Services added successfully.'] || 'Services added successfully.'
      });
    })
    .catch(err => {
      res.status(400).json({
        status: false,
        data: err,
        message: langObj['Failed to add services.'] || 'Failed to add services.'
      });
    });
  }

  getServices(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    if (req.headers.userId) {
      servicesHelper.getServices(req.headers.userId)
      .then(services => {
        res.status(200).json({
          status: true,
          data: services,
          message: langObj['Services retrieved successfully.'] || 'Services retrieved successfully.'
        });
      })
      .catch(err => {
        res.status(400).json({
          status: false,
          data: err,
          message: langObj['Failed to get services.'] || 'Failed to get services.'
        });
      });
    } else {
      res.status(400).json({
        status: false,
        data: err,
        message: langObj['User ID is required.'] || 'User ID is required.'
      });
    }
  }

  removeServices(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    if (req.headers.userId) {
      servicesHelper.removeServices(req.headers.userId, req.body)
      .then(services => {
        res.status(200).json({
          status: true,
          data: services,
          message: langObj['Services removed successfully.'] || 'Services removed successfully.'
        });
      })
      .catch(err => {
        res.status(400).json({
          status: false,
          data: err,
          message: langObj['Failed to delete services.'] || 'Failed to delete services.'
        });
      });
    }
  }
}

module.exports = ServicesController;