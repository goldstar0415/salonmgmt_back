const express = require('express');
const WorkersController = require('./workers.controller');

const router = express.Router();

const workers = new WorkersController();
router.post('/', workers.addWorkers.bind(workers));
router.get('/', workers.getWorkers.bind(workers));
router.get('/:userId/:workerId', workers.getWorker.bind(workers));
router.put('/', workers.updateWorker.bind(workers));
router.put('/disabledHours', workers.updateDisabledHours.bind(workers));
router.delete('/', workers.removeWorkers.bind(workers));

module.exports = router;