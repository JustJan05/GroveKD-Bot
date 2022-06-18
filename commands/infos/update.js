module.exports = {
    name: 'update',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}update',

    execute(client, message) {
                    message.channel.send({
                embed: {
                    color: 'GREEN',
                    author: { name: 'GroveKingdom Server Update' },
                    footer: { text: 'GroveKD©' },
                    description: 'GEEN MOMENTEEL!'
                }
            });
    },
};