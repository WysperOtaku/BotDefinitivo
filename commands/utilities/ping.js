module.exports ={
  name: 'ping',
  description: 'Responde pong',
  execute(client) {
    message.channel.send('🏓 Pong!');
  }
};