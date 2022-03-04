const { SlashCommandBuilder } = require('@discordjs/builders');
//const axios = require('axios');

const embed = {
    "title": "title ~~(did you know you can have markdown here too?)~~",
    "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
    "url": "https://discordapp.com",
    "color": 9631431,
    "timestamp": "2022-03-04T16:46:25.702Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
      "text": "footer text"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "author": {
      "name": "Am I A Coder Yet WakaTime Leaderboard",
      "url": "https://wakatime.com/leaders/sec/e6fdf763-88e0-4923-9df1-d51c216acc09/join/wamfwwypqg",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
      {
        "name": "Step 1",
        "value": "Follow the [link](https://wakatime.com/plugins) to WakaTime and integrate it with one of their supported IDE. Also take a look at the possible [integrations](https://wakatime.com/integrations). We like to add GitHub and Google Calendar. Explore the [community](https://wakatime.com/community) to discover what other integrations developers have made with the [WakaTime API](https://wakatime.com/developers) (like this bot)."
      },
      {
        "name": "😱",
        "value": "try exceeding some of them!"
      },
      {
        "name": "🙄",
        "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "these last two",
        "inline": true
      },
      {
        "name": "<:thonkang:219069250692841473>",
        "value": "are inline fields",
        "inline": true
      }
    ]
  }

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Replies with Server WakaTime Leaderboard Stats'),
  async execute(interaction) {
    const name = await getLeaderboardStats();
    await interaction.channel.send({ embeds: [embed] });
  },
};

async function getLeaderboardStats(){
  //TODO: Figure out for to authenticate using oAuth

 // const res = await axios.get('https://wakatime.com/api/v1/users/fe84537b-4baf-440a-815d-4afcd47068a0/leaderboards/');
 // return res.page;
}