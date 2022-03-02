const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');

const commands = [
  new SlashCommandBuilder().setName('join').setDescription('Replies with join list'),
  new SlashCommandBuilder().setName('leader').setDescription('Replies with Leaderboard info'),
  new SlashCommandBuilder().setName('list-cc').setDescription('Replies with the list of possible country codes'),
  new SlashCommandBuilder().setName('list-lang').setDescription('Replies with the list of possible languages'),
  new SlashCommandBuilder().setName('leader-cc').setDescription('Replies with leader based on country'),
  new SlashCommandBuilder().setName('leader-lang').setDescription('Replies with leader based on language'),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);