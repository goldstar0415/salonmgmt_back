const WorkersHelper = require('../helpers/workers.helper');
const workersHelper = new WorkersHelper();

class WorkersController {
  constructor() {
  }

  addWorkers(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    workersHelper.addWorkers(req.headers.userId, req.body)
      .then(workers => {
        res.status(200).json({
          status: true,
          data: workers,
          message: langObj['Workers added successfully.'] || 'Workers added successfully.'
        });
      })
      .catch(err => {
        res.status(400).json({
          status: false,
          data: err,
          message: langObj['Failed to add workers.'] || 'Failed to add workers.'
        });
      });
  }

  getWorkers(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    workersHelper.getWorkers(req.headers.userId)
      .then(workers => {
        res.status(200).json({
          status: true,
          data: workers,
          message: langObj['Workers fetched successfully.'] || 'Workers fetched successfully.'
        });
      })
      .catch(err => {
        res.status(400).json({
          status: false,
          data: err,
          message: langObj['Failed to get workers.'] || 'Failed to get workers.'
        });
      });
  }

  getWorker(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);
    workersHelper.getWorker(req.query.userId, req.query.workerId)
      .then(worker => {
        res.status(200).json({
          status: true,
          data: worker,
          message: langObj['Worker retrieved successfully.'] || 'Worker retrieved successfully.'
        });
      })
      .catch(err => {
        res.status(500).json({
          status: false,
          data: err,
          message: langObj['Failed to get worker.'] || 'Failed to get worker.'
        });
      });
  }

  updateWorker(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    workersHelper.updateWorker(req.body.userId, req.body.workerId, req.body.updateObj)
      .then(worker => {
        res.status(200).json({
          status: true,
          data: worker,
          message: langObj['Worker updated successfully.'] || 'Worker updated successfully.'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          status: false,
          data: err,
          message: langObj['Failed to update worker.'] || 'Failed to update worker.'
        });
      });
  }

  updateDisabledHours(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    workersHelper.updateDisabledHours(req.body.userId, req.body.workerId, req.body.updateObj)
      .then(worker => {
        res.status(200).json({
          status: true,
          data: worker,
          message: langObj['Disabled hours updated successfully.'] || 'Disabled hours updated successfully.'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          status: false,
          data: err,
          message: langObj['Failed to update worker.'] || 'Failed to update worker.'
        });
      });
  }

  removeWorkers(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    workersHelper.removeWorkers(req.headers.userId, req.body)
      .then(workers => {
        res.status(200).json({
          status: true,
          data: workers,
          message: langObj['Workers removed successfully.'] || 'Workers removed successfully.'
        });
      })
      .catch(err => {
        res.status(400).json({
          status: false,
          data: err,
          message: langObj['Failed to remove workers.'] || 'Failed to remove workers.'
        });
      });
  }
}

module.exports = WorkersController;