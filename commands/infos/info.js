module.exports = {
    name: 'info',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}info',

    execute(client, message) {
                    message.channel.send({
                embed: {
                    color: 'RED',
                    author: { name: 'Info' },
                    footer: { text: 'GroveKD©' },
                    description: 'Discord:\n https://discord.gg/ZY2tEWA2Md \n Website: \n SOOOON \n Server-IP:\n SOOOOON \n Versie:\n 1.18.2',
                }
            });
    },
};