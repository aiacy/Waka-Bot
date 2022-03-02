const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('join')
    .setDescription('Replies with join list'),
  async execute(interaction) {
    await interaction.reply(`Welcome ${interaction.user.username}! So you want to join the AIACY WakaTime Leaderboard? Click to join ${joinURL}`);
  },
};