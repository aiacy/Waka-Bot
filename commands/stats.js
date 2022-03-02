const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Replies with Server WakaTime Leaderboard Stats'),
  async execute(interaction) {
    await interaction.reply('This is the server leaderboard stats');
  },
};