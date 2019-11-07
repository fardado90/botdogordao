const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var temas = 'Segunda - animação \nTest'

client.on('message', message => {
	
    if (message.content === '!temas') {
	   
	    
	    	
  	}
	if (message.content === '!vazo') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
		message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
		message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
		message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
	    	
  	}
	if (message.content === '!acao') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' Radio temporaria para ação: '+num);
	    	
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
