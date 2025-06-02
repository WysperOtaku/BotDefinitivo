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

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignora mensagens de bots

  const args = message.content.split(/ +/);
  const command = args.shift();
  if (command === '$status') {
    const activities = args.shift();
    const newName = args.join(' ');

    try {
      const tipo = await isValidActivityType(activities);

      const newPresence = {
        activities: [{ name: newName, type: tipo }],
        status: 'online'
      };

      await client.user.setPresence(newPresence);
      message.channel.send(`Presencia actualizada para: ${newName}`);
    } catch (err) {
      console.error('Error al actualizar la presencia', err);
      message.channel.send('Tipo de actividad inválido. Usa un número entre 0 y 5.');
    }
  }
  else if (command === '$join') {
    const channel = message.member.voice.channel;

    if (!channel) {
      return message.reply('¡Debes estar en un canal de voz para unirte!');
    }

    try {
      joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfDeaf: true
      });
      return message.reply(`Me he unido al canal de voz: ${channel.name}`);
    } catch (err) {
      console.error('Error al unirse al canal de voz', err);
      return message.reply('No pude unirme al canal de voz. Asegúrate de que tengo permisos.');
    }
  }
  else if (command === '$leave') {
    const connection = getVoiceConnection(message.guild.id);

    if (!connection) {
      return message.reply('No estoy en un canal de voz.');
    }

    try {
      connection.destroy();
      return;
    } catch (err) {
      console.error('Error al unirse al canal de voz', err);
      return message.reply('No pude unirme al canal de voz. Asegúrate de que tengo permisos.');
    }
}
});

function isValidActivityType(type) {
  return new Promise((resolve, reject) => {
    if (type.match(/^[0-5]$/)) {
      resolve(parseInt(type, 10));
    } else {
      reject(new Error('Tipo de actividad inválido. Usa un número entre 0 y 5.'));
    }
  });
}

client.login(process.env.TOKEN);