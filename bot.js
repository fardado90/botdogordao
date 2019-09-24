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

let scheduledMessage = new cron.CronJob('00 34 20 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' @everyone Radio do dia: '+num);
});

// When you want to start it, use:
scheduledMessage.start()
// You could also make a command to pause and resume the job

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
