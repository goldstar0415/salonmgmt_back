const express = require('express');
const socket = require('socket.io')(8300);
let app = express();

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global.config = require('./configs')[env];
require('./configs/express')(app);
require('./configs/mongoose')(config);
require('./configs/socket-io')(socket);
require('./models');
require('./routes')(app);

app.listen(config.port, config.host, () => {
	console.log(`Server Running at: http://${config.host}:${config.port}/ on ${env} enviornment`);
});
