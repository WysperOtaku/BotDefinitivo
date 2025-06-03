module.exports = {
    name: 'status',
    description: 'Actualiza el estado del bot',
    execute: async (message, args) => {
        if (message.author.bot) return; // Ignora mensajes de bots

        const activities = args.shift();
        const newName = args.join(' ');

        try {
            const tipo = await isValidActivityType(activities);
            console.log(`El tipo: ${tipo}`);

            const newPresence = {
                activities: [{ name: newName, type: tipo }],
                status: 'online'
            };

            await message.client.user.setPresence(newPresence);
            message.channel.send(`Presencia actualizada para: ${newName}`);
        } catch (err) {
            console.error('Error al actualizar la presencia', err);
            message.channel.send('Tipo de actividad inválido. Usa un número entre 0 y 5.');
        }
    }
};

function isValidActivityType (type) {
    return new Promise((resolve, reject) => {
    if (type.match(/^[0-5]$/)) {
      resolve(parseInt(type, 10));
    } else {
      reject(new Error('Tipo de actividad inválido. Usa un número entre 0 y 5.'));
    }
  });
}