module.exports = {
    name: 'help2',
    aliases: ['moderation', 'mod'],
    permissions: [],
    description: "help command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Help Command Page 2')
        .setDescription('**Moderation**\nMake sure to use **!help** & **!aliases** for help\nDo !help3 to go to page 3')
        .addFields(
            {name: '!ban', value: 'bans users\n**You need to be apart of the Administration team to use this**'},
            {name: '!kick', value: '!kicks users\n**You need to be apart of the Administration team to use this**'},
            {name: '!clear', value: 'clears messages'},
            {name: '!mute', value: '**mutes a user\nYou need to be apart of the Administration team to use this**'},
            {name: '!unmute', value: '**unmutes a user\nYou need to be apart of the Administration team to use this**'}
        )
        .setFooter('Page 2 of 6\nSubscribe to Magical_Josh on Youtube');

        message.channel.send(newEmbed);
    }


}