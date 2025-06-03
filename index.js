const { Client, GatewayIntentBits } = require('discord.js');
const { parse } = require('dotenv');
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

require('./handlers/commandsHandler')(client);
require('./handlers/eventsHandler')(client);

client.login(process.env.TOKEN);