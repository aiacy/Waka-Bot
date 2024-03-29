const fs = require('node:fs');
const axios = require('axios');
const express = require('express');
const fetch = require("node-fetch");

const { Client, Collection, Intents } = require('discord.js');
const { clientId, port } = require('./config.json');

const clientSecret = process.env.CLIENT_SECRET;

const app = express();
app.use(express.static(__dirname));

app.get('/', async (request, response) => {
  return response.sendFile('index.html', {root: '.'});
});

app.get('/commands', async (request, response) => {
  return response.sendFile('commands.html', {root: './pages'});
});

app.get('/stats', async (request, response) => {
  return response.sendFile('stats.html', {root: './pages'});
});


app.get('/dashboard', async (request, response) => {
  return response.sendFile('dashboard.html', { root: './pages'});
});
     
app.get('/login', async ({ query }, response) => {
	const { code } = query;

	if (code) {
		try {
			const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
				method: 'POST',
				body: new URLSearchParams({
					client_id: clientId,
					client_secret: clientSecret,
					code,
					grant_type: 'authorization_code',
					redirect_uri: 'https://waka-bot.aiacy.repl.co/dashboard',
					scope: 'guilds',
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});

			const oauthData = await oauthResult.json();

			const userResult = await fetch('https://discord.com/api/users/@me/guilds', {
				headers: {
					authorization: `${oauthData.token_type} ${oauthData.access_token}`,
				},
			})
        .then(console.log(await userResult.json()));
		} catch (error) {
			// NOTE: An unauthorized token will not throw an error;
			// it will return a 401 Unauthorized response in the try block above
			console.error(error);
		}
	}
  
  return response.sendFile('dashboard.html', { root: '.'});
});



app.listen(port, () => console.log(`App listening at http://localhost:${port}`));


//TODO: Seperate this out if i can
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

async function getLeader() {
}

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  //Set new item in collection
  //With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// interactionCreate event trigger
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

