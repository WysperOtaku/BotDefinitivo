module.exports = {
    name: "dado",
    execute: async(msg) => {
        if (msg.author.bot) return; // Ignora mensajes de bots

        const args = msg.content.trim().split(/\s+/)
            
        let maxNum = parseInt(args[1]);

        if (maxNum < 2) return msg.channel.send("El numero no puede ser menor a 2 si no no tiene sentido 😡.")
        else if (isNaN(maxNum)){
            msg.channel.send("Como no has introducido numero lo hare con 6 🎲.");
            maxNum = 6;
        }

        msg.reply("Has sacado un... " + Math.floor(Math.random() * maxNum + 1) + " 🎲");
    }
};