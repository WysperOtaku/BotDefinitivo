const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.commands = new Map();

    const commandsPath = path.join(__dirname, '..', 'commands');
    const commandFolders = fs.readdirSync(commandsPath);

    for (const carpeta of commandFolders) {
        const rutaCarpeta = path.join(commandsPath, carpeta);
        const files = fs.readdirSync(rutaCarpeta).filter(file => file.endsWith(".js"))

        for (file of files) {
            const filePath = path.join(rutaCarpeta, file);
            const command = require(filePath);

            if (command.name) {
                client.commands.set(command.name, command);
                console.log(`Comando cargado: ${command.name}`);
            } else {
                console.log(`Manito el comando que esta en ${filePath} no tiene ni nombre`);
            }
        }
    }
}