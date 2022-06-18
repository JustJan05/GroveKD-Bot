module.exports = {
    name: 'avatar',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}avatar',

    execute(client, message) {
        message.channel.send('**Here is your discord avatar!**');
        message.reply(message.author.displayAvatarURL());
  }
};