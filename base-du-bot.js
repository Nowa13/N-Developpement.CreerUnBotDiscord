const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "/";

client.on("ready", () => {
    console.log("Le bot a démarré avec succès !")
});

client.login("TOKEN")
