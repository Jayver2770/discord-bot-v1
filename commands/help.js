module.exports = {
    name: 'help',
    aliases: ['commands'],
    permissions: [],
    description: "help command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Help Command Page 1')
        .setDescription('**Games**\nMake sure to use **!help** & **!aliases** for help\nDo !help2 to go to page 2')
        .addFields(
            {name: '!cwcheck', value: 'shows stats for specific cod cold war players'},
            {name: '!mcserver', value: 'shows stats for minecraft servers'},
            {name: '!mwcheck', value: 'shows stats for specific cod modern warfare players'},
            {name: '!wzcheck', value: 'shows specific stats for cod warzone players'},
        )
        .setFooter('Page 1 of 6');

        message.channel.send(newEmbed);
    }


}