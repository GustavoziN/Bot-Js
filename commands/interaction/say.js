
module.exports = {
    name: 'say',
    description: 'falar', 
    execute(message, args) {
        const sayMessage = args.join(" ")
        message.delete().catch(O_o =>{});
        message.channel.send(sayMessage);
    },
}