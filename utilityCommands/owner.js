const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const FacebookLink = 'https://www.facebook.com/pangku69';
        const InstagramLink = 'https://www.instagram.com/mr_pangku';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Rafi Ahmad aka Pangku. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [Rafi Ahmad](${FacebookLink})\n 💙 [Pangku](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
