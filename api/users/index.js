const express = require('express');
const UsersController = require('./users.controller');

const router = express.Router();

const users = new UsersController();
router.get('/list', users.listUser.bind(users));
router.get('/get', users.getUser.bind(users));
router.get('/get-public', users.getUserPublicInfo.bind(users));
router.get('/check', users.checkEmail.bind(users));
router.get('/salon-urls', users.salonUrls.bind(users));
router.post('/create', users.createUser.bind(users));
router.put('/edit', users.editUser.bind(users));
router.delete('/delete', users.deleteUser.bind(users));
router.post('/login', users.loginUser.bind(users));
router.post('/confirm', users.resendRegisterEmail.bind(users));
router.get('/verify', users.verify.bind(users));

router.post('/fake-mail', users.sendFakeEmail.bind(users));

module.exports = router;
