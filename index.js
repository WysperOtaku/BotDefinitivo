const { Client, GatewayIntentBits } = require('discord.js');
const { parse } = require('dotenv');
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const presence = {
  activities: [{ name: 'PornHub', type: 0 }], // 0 = Playing
  status: 'online',
};

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
  client.user.setPresence(presence);
});


client.login(process.env.TOKEN);