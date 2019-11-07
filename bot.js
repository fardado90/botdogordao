const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var temas = 'Segunda - animação \nTerça - clipes.\nQuarta - Stop.\nQuinta - comida.\n Sexta - ?.\nSábado - programas antigos.\nDomingo - livre.';

client.on('message', message => {
	
    if (message.content === '!temas') {
	   
	    message.channel.send(temas);
	    	
  	}

});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
