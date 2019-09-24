const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!radio') {
    		var num = Math.floor(Math.random() * 999);
	  	var d = new Date();
		var h = d.getHours();
	    	var m = d.getMinutes();
	   	message.channel.send(' @everyone Radio do dia: '+num);
	    	message.channel.send(h-3+':'+m);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
