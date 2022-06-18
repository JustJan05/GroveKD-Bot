module.exports = {
    name: 'regels',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}regels',

    execute(client, message) {
                    message.channel.send({
                embed: {
                    color: 'RED',
                    author: { name: 'Onze Officieele Regels\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\nDit zijn de officiële regels voor de Discord. Benader een stafflid als er iets onduidelijk is!' },
                    footer: { text: 'GroveKD©' },
                    description: '**#1 - Respecteer elkaar.**\nBehandel iedereen met respect. Geen pestgedrag, racisme, intimidatie, of haatdragend taalgebruik.\n**#2 - Niet spammen.**\nGeen chatflooding, lange rijen tekst of tag spam.\n**#3  - Respecteer Privacy.**\nBescherm je eigen privacy en die van anderen. Anderen hun privacy schenden (Doxxing) is ten strengste verboden.\n**#4 - Geen reclame.**\nHet adverteren van eigen content, Server IPs, discord servers, en producten is niet toegestaan. Deze regel geldt ook voor PMs.\n**#5  - Geen ongepaste/onveilige content.**\nVermijd het posten van NSFW content, ongepaste bestanden of malware. IP-Loggers vallen hier ook onder.\n**#6 - Geen alt accounts.**\nHet gebruik van alt accounts is niet toegestaan. Als je een straf omzeilt met een alt account (Of op andere manieren), dan kan die straf langer worden.\n**#7 - Gebruik een gepast discord-profiel.**\nGeen ongepaste profielfotos, namen, statussen, etc.\n**#8 - Spreek enkel Nederlands.**\nNederlands is de algemene taal die we hier spreken. Vermijd dus gesprekken in andere talen.\n**#9 - Staff heeft het laatste woord.**\nAls een stafflid je vraagt ergens mee op te houden, dan doe je dat. Gebruik je gezonde verstand en doe geen dingen waarvan je denkt dat het niet mag.\n**#10 - Discord Terms of Service en Guideline**\nWij volgen altijd de Terms of Service en Guidelines van Discord. Het breken hiervan kan leiden tot een permanente ban.',
                }
            });
    },
};