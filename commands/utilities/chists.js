const chistes = [
  "¿Cómo se despiden los químicos? Ácido un placer.",
  "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es una impresión mía?",
  "¿Cuál es el animal más antiguo? La cebra, porque está en blanco y negro.",
  "¿Qué hace una vaca en un terremoto? ¡Leche agitada!",
  "¿Por qué los pájaros no usan WhatsApp? Porque ya tienen Twitter.",
  "¿Cómo se llama un perro sin patas? Da igual, no va a venir.",
  "¿Qué hace un pez? ¡Nada!",
  "¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!",
  "¿Qué hace un león en el gimnasio? ¡Grrrrr-an esfuerzo!",
  "¿Cuál es el colmo de un electricista? No encontrar su corriente de vida.",
  "¿Por qué no juega al escondite el café? Porque siempre se va a colar.",
  "¿Qué le dice una piedra a otra? ¡La vida es dura, hermano!",
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Cuál es el colmo de un ciego? Enamorarse a primera vista.",
  "¿Qué le dice un jardinero a otro? ¡Disfrutemos mientras podamos!",
  "¿Qué hace una persona con un sobre en la oreja? Escuchando salsa.",
  "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.",
  "¿Qué le dice una iguana a su hermana gemela? ¡Iguanita!",
  "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
  "¿Y el subcampeón? Kasitoko."
];

module.exports = {
    name: 'chiste',
    async execute(interaction) {
        const random = chistes[Math.floor(Math.random() * chistes.length)];
        await interaction.reply(random);
    }
};