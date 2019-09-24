var Eris = require('eris');
var bot = new Eris("NjI2MTcyMzM2ODY0NzU1NzEy.XYqV0Q.KGoFTq7qu8av6A3eO8kTs1XW6_4");

bot.on("ready", () =>{
	console.log("Estou Vivo!");
	});

bot.on("messageCreate", (msg)=>{

	if(msg.content.indexOf("!radio")==0){
		var num = Math.floor(Math.random() * 999);
		bot.createMessage(msg.channel.id,"Radio do dia: "+num);
	}

});

bot.connect();
