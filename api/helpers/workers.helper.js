const mongoose = require('mongoose');
const Workers = mongoose.model('Workers');
const Users = mongoose.model('Users');
const _ = require('lodash');

class WorkersHelper {
  constructor() {
  }

  addWorkers(userId, saveObj) {
    return new Promise((resolve, reject) => {
      Users.findOne({'_id': userId}, {workers: 1})
        .then(user => {
          let workers = user.workers;

          if (saveObj.constructor === Array) {
            _.forEach(saveObj, worker => {
              workers.push({
                firstName: worker.firstName,
                lastName: worker.lastName
              });
            });
          } else {
            workers.push({
              firstName: saveObj.firstName,
              lastName: saveObj.lastName
            });
          }

          user.save((err, user) => {
            if (err) {
              reject(err);
            } else {
              resolve(user.workers);
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getWorkers(userId) {
    return new Promise((resolve, reject) => {
      Users.findOne({'_id': userId}, {workers: 1})
        .then(user => {
          resolve(user.workers);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getWorker(userId, workerId) {
    return new Promise((resolve, reject) => {
      Users.findOne({'short_user_id': userId}, {workers: 1})
        .then(user => {
          if (user) {
            let worker = user.workers.id(workerId);
            if (!worker) {
              reject('Worker not found.');
            } else {
              resolve(worker);
            }
          } else {
            reject('User not found.');
          }
        });
    });
  }

  updateWorker(userId, workerId, updateObj) {
    return new Promise((resolve, reject) => {
      Users.findOne({'short_user_id': userId}, {workers: 1})
        .then(user => {
          let worker = user.workers.id(workerId);
          _.assign(worker, updateObj);
          worker.updatedAt = new Date();

          user.save((err, user) => {
            if (err) {
              reject(err);
            }
            else resolve(worker);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  updateDisabledHours(userId, workerId, updateObj) {
    return new Promise((resolve, reject) => {
      Users.findOne({'short_user_id': userId}, {workers: 1})
        .then(user => {
          let worker = user.workers.id(workerId);
          let disabledTime = worker.disabledTime ? worker.disabledTime : [];

          if (disabledTime.length > 0) {
            disabledTime.forEach(val => {
              if (val.date === updateObj.date) {
                val.bookedServices.push({
                  serviceName: updateObj.serviceName,
                  time: updateObj.time
                });
              } else {
                disabledTime.push({
                  date: updateObj.date,
                  bookedServices: [{
                    serviceName: updateObj.serviceName,
                    time: updateObj.time
                  }]
                });
              }
            });
          } else {
            disabledTime.push({
              date: updateObj.date,
              bookedServices: [{
                serviceName: updateObj.serviceName,
                time: updateObj.time
              }]
            });
          }
          worker.updatedAt = new Date();
          worker.disabledTime = disabledTime;
          user.save((err, user) => {
            if (err) {
              reject(err);
            } else {
              resolve(worker);
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  removeWorkers(userId, removeObj) {
    return new Promise((resolve, reject) => {
      Users.findOne({'_id': userId}, {workers: 1})
        .then(user => {
          let workers = user.workers;
          _.forEach(removeObj, i => {
            let index = workers.map(x => {
              return x.shortWorkerId;
            }).indexOf(i);
            if (index != -1) {
              workers.splice(index, 1);
            }
          });
          user.save((err, user) => {
            if (err) reject(err);
            else resolve(user.workers);
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = WorkersHelper;