module.exports = {
    name: "join",
    description: "Únete a un canal de voz",
    execute: (message) => {
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
}