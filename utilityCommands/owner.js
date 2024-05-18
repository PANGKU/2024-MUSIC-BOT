const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://www.youtube.com/@GlaceYT';
        const InstagramLink = 'https://www.instagram.com/glaceytt';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Shiva aka GlaceYT. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [GlceYT](${youtubeLink})\n 💙 [GlaceYTT](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
