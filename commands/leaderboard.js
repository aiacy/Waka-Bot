const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leaderboard')
    .setDescription('Replies with Leaderboard info'),
  async execute(interaction) {
    await interaction.reply('This is the leaderboard');
  },
};