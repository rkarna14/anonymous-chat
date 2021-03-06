const app = require('express')();
const httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});