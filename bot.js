const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$";

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
    if(message.content.startsWith(prefix + "ping")) {
            message.channel.send('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
}
    });

client.on('message', message => {
  
     if (message.content.includes("shit")) {
    
       message.delete(100)
                        
       message.reply("No swearing allowed, Swear deleted :slight_smile:")
   
    }

});


client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

