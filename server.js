var express = require("express");

var app = express();


var http = require("http").Server(app);

var io = require("socket.io")(http);

app.set("port", process.env.PORT || 3030);

app.get("/", function(req, res){
	res.sendFile(__dirname + "/views/index.html");
});


io.on("connection", function(socket){

	//사용자 연결 확인하는 코드~
	// console.log("a user connected");
	// socket.on("disconnect", function(){
	// 	console.log("user disconnected");
	// });

	socket.on("chat message", function(msg){
		// console.log("message:" + msg);
		io.emit("chat message", msg);
	});
});


http.listen(3030);
