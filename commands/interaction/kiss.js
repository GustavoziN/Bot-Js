const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   var list = [
       'https://i.imgur.com/vKzxvjH.gif',
       'https://i.imgur.com/lD2V6kG.gif',
       'https://i.imgur.com/mNEHfJ0.gif',
       'https://i.imgur.com/KWM6eIB.gif',
       'https://c.tenor.com/lK1PF-Xv1O4AAAAM/yato-anime-noragami.gif'
   ];

   var rand = list[Math.floor(Math.random() * list.length)]
   var user = message.mentions.users.first() || client.users.cache.get(args[0])
   if(!user) {
       return message.reply('lembre-se de mencionar alguém para beijar')
   }

   let kiss = new Discord.MessageEmbed()
   .setTitle(`💋 beijo `)
   .setColor('#RANDOM')
   .setDescription(`💖💖 ${message.author} beijou ${user}!`)
   .setImage(rand)
   .setTimestamp()
   .setThumbnail(message.author.tag, avatar)
   .setFooter('O amor é lindo <3')
   await message.channel.send(embed)
   
};
	


