module.exports = {
    name: "messageCreate",
    execute(message) {
        if (message.author.bot || !message.content.startsWith("$")) return; // Ignora mensagens de bots

        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift();
        const command = message.client.commands.get(commandName)

        if (command){
            command.execute(message, args)
        }
    }
}