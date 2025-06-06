module.exports = {
    name: "ban",
    description: "Banea a un usuario del servidor",
    async execute(message, args) {
        if (!message.member.permissions.has('BanMembers')) return message.reply('No tienes permiso para banear.');
        if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers)) return message.reply("No tengo permisos para banear");


        const user = message.mentions.users.first();
        const reason = args.slice(1).join(' ') || "Sin razon";
        const member = await message.guild.members.fetch(user.id);

        if (!user) return msg.channel.send("No has especificado un usuario");

        if (!member.bannable) return msg.channel.send("Este es un alto mando no puedo banearlo 😰.")

        if (!member.exists) return msg.channel.send("El usuario no existe");

        if (member.roles.highest.position >= message.member.roles.highest.position) {
            return message.reply('No puedes banear a alguien con el mismo o mayor rol que tu');
        }

        try {
            await message.guild.members.ban(user, { reason });
            message.channel.send(`El usuario ${user.tag} ha sido baneador por ${reason}`);
        } catch (err) {
            console.error('Error al banear:', err);
            message.channel.send('No puedo banear a ese usuario.');
        }
    }
}