const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/AKdjNvfngd";
      const facebookLink = "https://www.facebook.com/pangku69/";
      const instagramLink = "https://www.instagram.com/mr_pangku";
      const twitchLink = "https://www.twitch.tv/ven_pangku";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://discord.gg/AKdjNvfngd'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${facebookLink}\n- Replit - ${instagramLink}\n- YouTube - ${twitchLink}`)
            .setImage('https://cdn.discordapp.com/attachments/913407674597642250/1242594273111576698/ezgif-6-3a08fef5ca.gif?ex=66794058&is=6677eed8&hm=2b5678af9ac10181460af9f47f11dd4b2c13b0727cc83f53f417c039db89da5e&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
