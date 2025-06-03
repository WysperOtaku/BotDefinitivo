const fs = require('fs');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Bot conectado como ${client.user.tag}`);
    const presence = fs.readFileSync('./config/defaults/default-presence.json', 'utf8');
    const parsedPresence = JSON.parse(presence);
    client.user.setPresence(parsedPresence);
  }
};