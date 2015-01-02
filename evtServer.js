module.exports.listen = function(httpServer){
	var io = require('socket.io').listen(httpServer);
	io.sockets.on('connection',function(socket){

		socket.on("message",function(message){
			if(io.sockets.connected[message.sid])
				io.sockets.connected[message.sid].emit("message",message.command)
		});
	});
}