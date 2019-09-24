var Eris = require('eris');
var bot = new Eris("NjI2MTcyMzM2ODY0NzU1NzEy.XYqRHg.Vus-wbFD440TLUhdaf24_h4k02g");

bot.on("ready", () =>{
	console.log("Estou Vivo!");
	});

bot.on("messageCreate", (msg)=>{

	if(msg.content.indexOf("!radio")==0){
		var num = Math.floor(Math.random() * 999);
		bot.createMessage(msg.channel.id,"Radio do dia: "+num);
	}

});

bot.login(process.env.BOT_TOKEN);
