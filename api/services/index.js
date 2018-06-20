const express = require('express');
const ServicesController = require('./services.controller');

const router = express.Router();

const services = new ServicesController();
router.post('/', services.addServices.bind(services));
router.get('/', services.getServices.bind(services));
router.delete('/', services.removeServices.bind(services));

module.exports = router;