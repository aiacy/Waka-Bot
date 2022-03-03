const { SlashCommandBuilder } = require('@discordjs/builders');
//const axios = require('axois');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leaderboard')
    .setDescription('Replies with Leaderboard info'),
  async execute(interaction) {
    await getLeader();
    await interaction.reply('This is the leaderboard');
  },
};


async function getLeader(){
  console.log('this is the leader log')
 // const res = await axois.get('https://wakatime.com/api/v1/')
}
