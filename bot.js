const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require("cron");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
    if (message.content === '!radio') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' @everyone Radio do dia: '+num);
	    	
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
