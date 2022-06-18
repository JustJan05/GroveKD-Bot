module.exports = {
    name: 'rewards',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}rewards',

    execute(client, message) {
        message.channel.send('**__BoostRewards__**\n1 Boost = ?\n2 Boosts = ?\n3 Boosts = ?\n**__InviteRewards__**\n10 Invites = ?\n25 Invites = ?\n50 Invites = ?');
    },
};