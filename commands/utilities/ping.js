module.exports ={
  name: 'ping',
  description: 'Responde pong',
  async execute(message) {
    // Tiempo antes de enviar mensaje
    const sent = await message.channel.send('🏓 Calculando ping...');

    const botLatency = sent.createdTimestamp - message.createdTimestamp;
    const apiLatency = Math.round(message.client.ws.ping);

    await sent.edit(`🏓 Pong!

**⏱ Latencia del bot:** \`${botLatency}ms\`
**📡 Latencia de la API:** \`${apiLatency}ms\``);
  }
};