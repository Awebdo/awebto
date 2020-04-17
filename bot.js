const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "-";

 

client.on('ready', () => {

    console.log('I am ready!')
client.user.setPresence({ game: { name: 'with discord.js' }, status: 'idle' })
 .then(console.log)
 .catch(console.error);

});	

   

        client.on('message', message=> {
          if(message.author.id == "569962950241026069") return;
          if(message.content.includes("discord.gg")) {
            message.delete();
            message.reply("No advertising allowed, moderators were notified!")
            message.guild.channels.find(channel => channel.name == "activity").send(`**${message.author.tag}** advertised a discord server in ${message.channel}!\n __***${message.author.username}***__ : **${message.content}** \n**Message sent at** : **${message.createdAt}**`)
          }
        })

        client.on("message", message=> {
          if(message.content.startsWith("-myid")) {
            message.channel.send(`Your ID is ${message.author.id}`)
          }
        })
client.on("message", message=> {
  let url = message.content.split(' ').slice(1).join (' ')
  if(message.content.startsWith("-readbin")) {
    message.channel.send("Just wait a few seconds, text will be sent shortly.")
    .then(message => {
      message.delete(1000)
    })
    snekfetch.get(url).then(r => message.channel.send(decodeURIComponent(r.body)));
    
  }
})
client.on("message", message => {
  var embedfoo = new Discord.RichEmbed()
  .setAuthor('Twoon BOT', 'https://code.fb.com/wp-content/uploads/2017/06/Facebook-Messenger-Bot-01.png')		
  .setTitle('Echo!')		
  .setColor('#0099ff')		
  .setDescription(message.content.replace('-echoembed', ''))		
  .setTimestamp()		
  .setFooter('Twoon bot programmed by Youssef & Awebdo')
 if (message.content.startsWith("-echoembed")) {		
  message.delete(1000)		
 message.channel.send({embed: embedfoo});		
  

          }			

  });
 
        client.on('message', message=> {
          if (message.isMentioned(client.user)) {
          message.channel.send('<@569962950241026069>');
      }
      });
      client.on("messageDelete", (messageDelete) => {
        messageDelete.guild.channels.find(channel => channel.name == "activity").send(`__***DELETED MESSAGE***__ : "**${messageDelete.content}**" by **${messageDelete.author.tag}** sent in ${messageDelete.channel} was deleted.`)
       });
       client.on("message", message=>{
         if(message.content.startsWith("-mybmi")) {
            let weight = message.content.split(' ').slice(1).slice(3).join (' '); // Remember arrays are 0-based!.
            let height = message.content.split(' ').slice(1).slice(2).join(' ');
            let result = weight/height;
            message.reply(`Hello ${message.author.username}, I see you're a ${weight} year old ${height} from ${result} . Wanna date?`);
          }
        });
       client.on("message", message=>{
         if(message.content.startsWith(">info")) {
           var mentionedUser = message.mentions.members.first()
           var embedFee = new Discord.RichEmbed()
           .setAuthor(`${mentionedUser.user.username}`, `${mentionedUser.user.avatarURL}`)
           .setColor('#0099ff')
           .setDescription(`**>Information of** __**${mentionedUser.user.username}**__(${mentionedUser.id})\n**Username:** ${mentionedUser.user.tag}\n**User ID:** ${mentionedUser.id}\n**User Status:** ${mentionedUser.user.presence.status}\n**Create:** ${mentionedUser.user.createdAt} \n \n __**>Member information**__\n **Joined At:** ${mentionedUser.joinedAt}`)
           .setFooter(`Info requested by ${message.author.username} (${message.author.id})`)
           message.channel.sendEmbed(embedFee)
         }
       })
    

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
