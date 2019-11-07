const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var temas = 'Segunda - animação.\nTerça - clipes.\nQuarta - comida.\nQuinta - stop.\n Sexta - minicrifti com sr.\nSábado - programas antigos.\nDomingo - livre.';

client.on('message', message => {
	
    if (message.content === '!temas') {
	   
	    message.channel.send(temas);
	    	
  	}

	 if (message.content === '!bot') {
	   
	    message.channel.send('Eu sou foda o resto é moda.');
	    	
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
