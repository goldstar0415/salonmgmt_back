const express = require('express');
const ClientsController = require('./clients.controller');

const router = express.Router();

const clients = new ClientsController();
router.get('/list', clients.listClient.bind(clients));
router.get('/get', clients.getClient.bind(clients));
router.post('/create', clients.createClient.bind(clients));
router.put('/edit', clients.editClient.bind(clients));
router.delete('/delete', clients.deleteClient.bind(clients));

module.exports = router;