module.exports = io => {
  io.on('connection', socket => {
    console.log("socket connected");
    socket.on('data', (info) => {
      console.log(info);
    });
  });
}