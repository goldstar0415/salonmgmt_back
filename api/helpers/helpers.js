const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

const transport = mailgunTransport(config.mailgunOptions);

class Helpers {
  constructor(){}
  
  sendNodeMailer(mailOptions){
    return new Promise((resolve, reject)=>{
      let transporter = nodemailer.createTransport(transport);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        }else{
          resolve(info);
        }
      });
    });
  }

}

module.exports = Helpers;