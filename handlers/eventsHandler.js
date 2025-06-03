const fs = require("fs");
const path = require("path");

module.exports = (client) => {
    const eventsPath = path.join(__dirname, "..", "events");
    const events = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

    for (file of events) {
        const eventPath = path.join(eventsPath, file);
        const event = require(eventPath);

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        }
        else {
            client.on(event.name, (...args) => event.execute(...args));
        }

        console.log(`Evento escuchando: ${event.name}`);

    }
}