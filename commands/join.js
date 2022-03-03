const { SlashCommandBuilder } = require('@discordjs/builders');

const joinURL = 'https://wakatime.com/leaders/sec/e6fdf763-88e0-4923-9df1-d51c216acc09/join/wamfwwypqg';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('join')
    .setDescription('Replies with join list'),
  async execute(interaction) {
    await interaction.reply(`Welcome ${interaction.user.username}! So you want to join the AIACY WakaTime Leaderboard? Click to join ${joinURL}`);
  },
};