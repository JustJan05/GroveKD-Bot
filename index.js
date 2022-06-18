const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on('message', message => {
  if (message.channel.id === "987695116531691550") {
      message.react('✅')
          .then(() => { 
              message.react('❌')
          });
  }
});


client.on('message', message => {
  if (message.content === '!help') {
    message.channel.send('Onze bot werkt op het moment niet al te goed.\nJe kan wel onze regels bekijken met **!regels**');
  }
});
client.on('message', message => {
  if (message.content === '!regels') {
    message.channel.send('**#1 - Respecteer elkaar.**\nBehandel iedereen met respect. Geen pestgedrag, racisme, intimidatie, of haatdragend taalgebruik.\n**#2 - Niet spammen.**\nGeen chatflooding, lange rijen tekst of tag spam.\n**#3  - Respecteer Privacy.**\nBescherm je eigen privacy en die van anderen. Anderen hun privacy schenden (Doxxing) is ten strengste verboden.\n**#4 - Geen reclame.**\nHet adverteren van eigen content, Server IPs, discord servers, en producten is niet toegestaan. Deze regel geldt ook voor PMs.\n**#5  - Geen ongepaste/onveilige content.**\nVermijd het posten van NSFW content, ongepaste bestanden of malware. IP-Loggers vallen hier ook onder.\n**#6 - Geen alt accounts.**\nHet gebruik van alt accounts is niet toegestaan. Als je een straf omzeilt met een alt account (Of op andere manieren), dan kan die straf langer worden.\n**#7 - Gebruik een gepast discord-profiel.**\nGeen ongepaste profielfotos, namen, statussen, etc.\n**#8 - Spreek enkel Nederlands.**\nNederlands is de algemene taal die we hier spreken. Vermijd dus gesprekken in andere talen.\n**#9 - Staff heeft het laatste woord.**\nAls een stafflid je vraagt ergens mee op te houden, dan doe je dat. Gebruik je gezonde verstand en doe geen dingen waarvan je denkt dat het niet mag.\n**#10 - Discord Terms of Service en Guideline**\nWij volgen altijd de Terms of Service en Guidelines van Discord. Het breken hiervan kan leiden tot een permanente ban.');
  }
});

client.on("guildMemberAdd", (member) =>
  client.channels.cache.get("987682809793613857").send({
    embed: {
      title: "Er is een nieuwe burger aangekomen!",
      description: `\n📥 <@${member.id}> is GroveKD gejoined! \n We zijn nu met\`${member.guild.memberCount}\` in deze discord! :wave:`,
    },
  })
);
client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.filter(r => r.name === "🗣️ | Burger");
    if (!role) return;

    member.roles.add(role);
});

client.login(client.config.discord.token);