const keys = require('./keys');
const permissions = 32;

const inv_url = `https://discordapp.com/api/oauth2/authorize?client_id=${keys.clientid}&scope=bot&permissions=${permissions}`;

console.log(`Click the following link to add the bot to your server:`);
console.log(inv_url);