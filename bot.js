const Discord = require('discord.js');
require('dotenv').config()


BOT_TOKENS = process.env.BOT_TOKENS.split(' ')


//Output Bot Tokens
console.log('------------------------------------');
console.log(' Bot Tokens:');
BOT_TOKENS.forEach(token => {
    console.log('| ' + token + ' |')
});
console.log('------------------------------------');

//Go through each Bot Token in .env and login + add bot to array BOTS
BOTS = []
BOT_TOKENS.forEach(token => {
    BOTS.push( new Discord.Client( {intents: [Discord.Intents.FLAGS.GUILDS]} ).login(token) )
});
