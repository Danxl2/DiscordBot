module.exports = {
    name: 'messageCreate',
    execute(message, client) {
        if (!message.guild) return message.author.send('Debes estar en un servidor.')
        if (message.author.bot) return;
    }
}