// const shortid = require('shortid');
const BookingHelper = require('../helpers/booking.helper');
const bookingHelper = new BookingHelper();

class BookingController {
  constructor() {
  }

  addBooking(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    let saveObj = {
      'userId': req.body.userId,
      'firstName': req.body.firstName,
      'lastName': req.body.lastName,
      'email': req.body.email,
      'phone': req.body.phone,
      'service': req.body.service,
      'worker': req.body.worker,
      'date': req.body.date,
      'time': req.body.time,
      'createdAt': new Date(),
      'updatedAt': new Date()
    };

    bookingHelper.saveBooking(saveObj)
      .then(booking => {
        res.status(200).json({
          success: true,
          data: booking,
          message: langObj['Booking successfully created.'] || 'Booking successfully created.'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          success: false,
          data: err,
          message: langObj['Failed to save the booking.'] || 'Failed to save the booking.'
        });
      });
  }

  findAll(req, res) {
    let lang = req.headers['language'] || 'en';
    let languagePath = `../helpers/language/lang_${lang}`;
    let langObj = require(languagePath);

    bookingHelper.findAll()
      .then(bookings => {
        res.status(200).json({
          success: true,
          data: bookings,
          message: langObj['Booking list retrieved successfully.'] || 'Booking list retrieved successfully.'
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          data: err,
          message: langObj['Failed to retrieve bookings data.'] || 'Failed to retrieve bookings data.'
        })
      })
  }
}

module.exports = BookingController;