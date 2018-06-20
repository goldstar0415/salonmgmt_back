const express = require('express');
const BookingController = require('./booking.controller');

const router = express.Router();

const booking = new BookingController();
router.post('/', booking.addBooking.bind(booking));
router.get('/', booking.findAll.bind(booking));

module.exports = router;