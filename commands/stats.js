const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Replies with Server WakaTime Leaderboard Stats'),
  async execute(interaction) {
    const name = await getLeaderboardStats();
    await interaction.reply(`This is the ${name} server leaderboard stats`);
  },
};

async function getLeaderboardStats(){
  //TODO: Figure out for to authenticate using oAuth

  const res = await axios.get('https://wakatime.com/api/v1/users/fe84537b-4baf-440a-815d-4afcd47068a0/leaderboards/');
  return res.page;
}