const Discord = require('discord.js')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    let user = message.mentions.users.first()
    let RN = Math.floor(Math.random() * 100) +1

    if(!user) return message.channel.send(' mencione alguém para shipar')
    if(user === message.author) return message.channel.send('Porfavor não mencione a si mesmo, amor propria não te abraça de noite <3')

    const LoveEmbed = new discord.MessageEmbed()
    .setTitle('Temos um match')
    .setThumbnail('https://c.tenor.com/7zb6sgeEKIEAAAAC/snap.gif')
    .setDescription(`${message.author} shipp com ${user} e com  ${RN}%`)

    const UnLoveEmbed = new discord.MessageEmbed()
    .setTitle('Parece que você nunca teve chances amigo')
    .setThumbnail('https://c.tenor.com/tK-bs8K6ZQIAAAAd/remi-horimiya.gif')
    .setDescription(`${message.author} shipp com ${user} e com  ${RN}%`)

    if(RN > 50) {
        message.channel.send(LoveEmbed)
    } else {
        message.channel.send(UnLoveEmbed)
    }
}

module.exports.help = {
    name: 'ship',
    aliases: []
}