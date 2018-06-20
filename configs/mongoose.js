const mongoose = require('mongoose');

module.exports = function(config){
  mongoose.connect(config.dbURI);
  mongoose.Promise = global.Promise;
  mongoose.connection.on('connected', ()=>{
    console.log(`Database Connected to: ${config.dbURI}`);
  });

  mongoose.connection.on('error', ()=>{
    console.log(`Database connection error on: ${config.dbURI}`);
  });

  mongoose.connection.on('disconnected', ()=>{
    console.log("Mongoose Default connection disconnected!!");
  });

  process.on('SIGINT', ()=>{
    mongoose.connection.close(()=>{
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  })
}
