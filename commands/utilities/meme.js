const { execute } = require("./chists");

module.exports = {
    name: "meme",
    execute: async (msg) => {
        try {
        const response = await fetch("https://meme-api.com/gimme/memesESP");
        const data = await response.json();

        if (!data || !data.url) {
            return msg.channel.send("No tengo memes para ti 😢.");
        }

        msg.channel.send({
            files: [data.url]
        });

        } catch (error) {
            console.error("Error al obtener el meme:", error);
            msg.channel.send("OSTIA PUTA QUE MAREO! No he encontrado nada... 😵");
        }
    }
}