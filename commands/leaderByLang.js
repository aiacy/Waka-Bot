const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leader-by-language')
    .setDescription('Replies with Leaderboard info'),
  async execute(interaction) {
    await interaction.reply('This is the leaderboard by coding language');
  },
};