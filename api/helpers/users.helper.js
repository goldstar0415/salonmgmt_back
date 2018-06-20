const mongoose = require('mongoose');
const Users = mongoose.model('Users');

class UsersHelper {
  constructor() {
  }

  findAll(query, projection) {
    return new Promise((resolve, reject) => {
      Users.find(query, projection, (err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(users);
        }
      });
    });
  }

  findUser(query, projection) {
    return new Promise((resolve, reject) => {
      Users.findOne(query, projection, (err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(users);
        }
      });
    });
  }

  saveUser(saveObj) {
    return new Promise((resolve, reject) => {
      let users = new Users(saveObj);
      users.save((err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(users);
        }
      });
    });
  }

  updateUser(query, updateObj) {
    return new Promise((resolve, reject) => {
      Users.update(query, updateObj, (err, updateResp) => {
        if (err) {
          reject(err);
        } else {
          resolve(updateResp);
        }
      });
    });
  }

  removeUser(query) {
    return new Promise((resolve, reject) => {
      Users.remove(query, (err, removeResp) => {
        if (err) {
          reject(err);
        } else {
          resolve(removeResp);
        }
      });
    });
  }
}

module.exports = UsersHelper;