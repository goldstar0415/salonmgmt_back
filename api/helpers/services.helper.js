const mongoose = require('mongoose');
const Services = mongoose.model('Services');
const Users = mongoose.model('Users');
const _ = require('lodash');

class ServicesHelper {
  constructor() {
  }

  addServices(userId, saveArr) {
    return new Promise((resolve, reject) => {
      Users.findOne({'_id': userId}, {services: 1})
        .then(user => {
          let services = user.services;
          _.forEach(saveArr, obj => {
            services.push({
              title: obj.title,
              isActive: obj.isActive,
              time: obj.time,
              price: obj.price
            });
          });

          user.save((err, user) => {
            if (err) {
              reject(err);
            } else {
              resolve(user.services);
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getServices(userId) {
    return new Promise((resolve, reject) => {
      Users.findOne({'_id': userId}, {services: 1})
        .then(user => {
          resolve(user.services);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  removeServices(userId, arr) {
    return new Promise((resolve, reject) => {
      Users.findOne({'_id': userId}, {services: 1})
        .then(user => {
          let services = user.services;
          _.forEach(arr, i => {
            let index = services.map(x => {
              return x.shortServiceId;
            }).indexOf(i);
            if (index != -1) {
              services.splice(index, 1);
            }
          });

          user.save((err, user) => {
            if (err) {
              reject(err);
            } else {
              resolve(user.services);
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = ServicesHelper;