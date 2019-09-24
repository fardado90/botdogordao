const cron = require('cron');
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

let scheduledMessage = new cron.CronJob('15 44 20 * * *', () => {
  // This runs every day at 10:30:00, you can do anything you want
  let channel = yourGuild.channels.get('449300184422154282');
  channel.send('You message');
});

// When you want to start it, use:
scheduledMessage.start()



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
