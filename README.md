# BotDefinitivo

BotDefinitivo es un bot para Discord desarrollado en Node.js usando [discord.js](https://discord.js.org/) y [@discordjs/voice](https://discordjs.guide/voice/).

## Características

- Comandos de texto y voz organizados por carpetas.
- Gestión de presencia y estado del bot.
- Fácil de extender con nuevos comandos y eventos.

## Estructura del proyecto

```
.
├── commands/
│   ├── channels/
│   │   ├── join.js
│   │   └── leave.js
│   └── utilities/
│       ├── ping.js
│       └── status.js
├── config/
│   └── defaults/
│       └── default-presence.json
├── events/
│   ├── messageCreate.js
│   └── ready.js
├── handlers/
│   ├── commandsHandler.js
│   └── eventsHandler.js
├── index.js
├── package.json
└── .env
```

## Instalación

1. Clona el repositorio y entra en la carpeta:

   ```sh
   git clone <url-del-repo>
   cd BotDefinitivo
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Crea un archivo `.env` en la raíz con el siguiente contenido:

   ```
   tuTOKEN=_token_de_discord
   ```

4. (Opcional) Modifica [`config/defaults/default-presence.json`](config/defaults/default-presence.json) para cambiar la presencia por defecto del bot.

## Uso

Inicia el bot con:

```sh
node index.js
```

## Comandos disponibles

- `$ping` — Responde con "Pong!"
- `$status <tipo> <mensaje>` — Cambia la presencia del bot. Ejemplo: `$status 0 Jugando algo`
- `$join` — El bot se une a tu canal de voz.
- `$leave` — El bot abandona el canal de voz.

## Añadir nuevos comandos

Agrega archivos JS en las carpetas `commands/channels` o `commands/utilities` siguiendo el formato de los comandos existentes.