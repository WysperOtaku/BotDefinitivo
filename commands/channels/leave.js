module.exports = {
    name: "leave",
    description: "Abandona el canal de voz",
    execute: async () => {
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
}