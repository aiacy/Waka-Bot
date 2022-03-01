const Discord = require("discord.js");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 
const prefix = "!waka-";

client.on('messageCreate', msg => {

  async function getLeader() {
  }
  
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

   const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  
  if (command === 'leader') {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
  else if (command === 'join'){
    msg.reply('Follow this link to join')
  }
});

client.login(process.env['BOT_TOKEN']);