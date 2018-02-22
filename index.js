const Discord = require('discord.js');
const yaml = require('js-yaml');
const fs = require('fs');

const bot = new Discord.Client();
const token = process.env.TOKEN;

// get commands, load into Map obj
const commands = (yaml.safeLoad(fs.readFileSync('./commands.yml'))).Commands
const commandMap = new Map(Object.entries(commands))

// boot up bot
bot.on('ready', () => console.log("Bot is ready"));
bot.on('message', msg => {
  // don't echo ourselves
  if (msg.author.username === 'Helpful Steve') return;

  // only respond to proper formatting
  if (msg.content.startsWith('!')) {
    // skip '!'
    const command = msg.content.substr(1)
    if (commandMap.has(command)) {
      msg.channel.send(commandMap.get(command))
    }
  } else {
    msg.channel.send('I dont know that command; try !help.')
  }
});

bot.login(token); 