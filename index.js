const Discord = require("discord.js");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 
const prefix = "!waka-";

const joinURL = 'https://wakatime.com/leaders/sec/e6fdf763-88e0-4923-9df1-d51c216acc09/join/wamfwwypqg';

const userId = 'fe84537b-4baf-440a-815d-4afcd47068a0'
const leaderboardId = 'e6fdf763-88e0-4923-9df1-d51c216acc09';

client.on('messageCreate', msg => {

  async function getLeader() {
  }
  
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  
  if (command === 'join'){
    msg.reply(`So you want to join the AIACY WakaTime Leaderboard? Click to join ${joinURL}`);
  }
    //TODO: Confirm WakaTime user based off email
  else if (command === 'confirm'){
    msg.reply('You can add your name to the list so when the leaderboard posts, you\'ll be able to see your name (by default WakaTime sets it to Annyonomus User)')    
  }
    //TODO: Create Top 10 Leaderboard Worldwide
  else if (command === 'leader') {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
    //TODO: List out all the cc in a seperate []
  else if (command === 'list-cc') {
    msg.reply('This is the Country Code List!')
  }
    //TODO: List out all the lang in a seperate []
  else if (command === 'list-lang'){
    msg.reply('This is the Languages List')
  }
    //TODO: List out the leaders based off of country
  else if (command === 'leader-cc') {
    msg.reply('This is the leader of the board in the desired country')
  }
    //TODO: List out the leaders based off of language
  else if (command === 'leader-lang'){
    msg.reply('This is the leader of the board in the desired language')
  }
});


client.login(process.env['BOT_TOKEN']);

//TODO: create database to store WakaTime user ids to be able to read from them and promote rank 
