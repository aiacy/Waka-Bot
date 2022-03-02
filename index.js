const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const joinURL = 'https://wakatime.com/leaders/sec/e6fdf763-88e0-4923-9df1-d51c216acc09/join/wamfwwypqg';

const userId = 'fe84537b-4baf-440a-815d-4afcd47068a0'
const leaderboardId = 'e6fdf763-88e0-4923-9df1-d51c216acc09';

async function getLeader() {
}

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  //Set new item in collection
  //With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
  }
  
});


client.login(process.env['BOT_TOKEN']);

//TODO: create database to store WakaTime user ids to be able to read from them and promote rank 

