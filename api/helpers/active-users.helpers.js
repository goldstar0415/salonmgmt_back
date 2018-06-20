const _ = require('lodash');

export default class activeUsersStore {
  let activeUsersList;

  constructor() {
    activeUsersList = [];
  }

  addUserToList(user) {
    activeUsersList.push(user);
  }

  removeUserFromList(user) {
    let a = activeUsersList;
    a = a_.pull(a, user);
  }

  getActiveUsersList() {
    return activeUsersList;
  }
}