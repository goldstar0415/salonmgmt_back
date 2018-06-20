const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

class BookingHelper {
  constructor() {
  }

  saveBooking(saveObj) {
    return new Promise((resolve, reject) => {
      let booking = new Booking(saveObj);
      booking.save((err, booking) => {
        if (err) {
          reject(err);
        } else {
          resolve(booking);
        }
      });
    });
  }

  updateBooking(query, updateObj) {
    return new Promise((resolve, reject) => {
      Booking.update(query, updateObj, (err, updateResp) => {
        if (err) {
          reject(err);
        } else {
          resolve(updateResp);
        }
      });
    });
  }

  findAll(query, projection) {
    return new Promise((resolve, reject) => {
      Booking.find(query, projection, (err, bookings) => {
        if (err) {
          reject(err);
        } else {
          resolve(bookings);
        }
      });
    });
  }

}

module.exports = BookingHelper;