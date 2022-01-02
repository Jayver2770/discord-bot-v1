require('dotenv').config();
const cod_api = require('call-of-duty-api')();

module.exports = {
    name: 'cwcheck',
    aliases: ['cw'],
    permissions: [],
    cooldown: 5,
    description: 'this command shows stats for call of duty',
   async execute(message,args, cmd, client, Discord){
       if(!args[0]) return message.channel.send('Please enter a username');
       if(!args[1]) return message.channel.send('Please enter a platform');

       let username = process.env.COD_USERNAME;
       let password = process.env.COD_PASSWORD;

       try{
           await cod_api.login(username, password);
           let data = await cod_api.CWmp(args[0], args[1]);

           const embed = new Discord.MessageEmbed()
           .setColor('#BFCDEB')
           .setTitle('COD Multiplayer Stats')
           .setDescription('Cod Cold War Stats')
           .addFields(
               {name: 'Games Played', value: data.lifetime.all.properties.totalGamesPlayed, inline: true},
               {name: 'Wins', value: data.lifetime.all.properties.wins, inline: true},
               {name: 'Losses', value: data.lifetime.all.properties.losses, inline: true},
               {name: 'KD Ratio', value: data.lifetime.all.properties.kdratio, inline: true},
               {name: 'Kills', value: data.lifetime.all.properties.kills, inline: true},
               {name: 'Deaths', value: data.lifetime.all.properties.deaths, inline: true},
               {name: 'Longest Killstreak', value: data.lifetime.all.properties.longestKillstreak},
               {name: 'Total Time Played', value: (parseFloat(data.lifetime.all.properties.timePlayedTotal / 3600).toFixed(2)) + " Hours"}

           )
           .setFooter('Cod stats by Josh');

           message.channel.send(embed);

           console.log(data.lifetime.all.properties);

       }catch(error){
           message.channel.send('There was an error fetching this player!! Make sure to do !cwcheck username platform');
           throw error;
       }
    }
}