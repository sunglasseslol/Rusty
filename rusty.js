const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let prefix = '.';
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Rusty is online!');
});
 
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    client.commands.get(command)?.execute(message, args);
    client.commands.get('./pp.js')?.execute(message, args);
});

module.exports = { prefix }
client.login('ODA2MDg0ODUzNTA1MzI3MTE0.YBkTBQ.Lkg6XTHf2vzXdPDXy6sUcS_TlP0');