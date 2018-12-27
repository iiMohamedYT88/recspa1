const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("515240557874905089")
setInterval(function() {
channel.send(`هلا والله هلا والله هلا واللههلا واللههلا واللههلا والله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
