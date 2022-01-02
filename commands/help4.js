module.exports = {
    name: 'help4',
    aliases: ['misc'],
    permissions: [],
    description: "help command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Help Command Page 4')
        .setDescription('**Misc**\nMake sure to use **!help** & **!aliases** for help')
        .addFields(
            {name: '!image', value: 'sends a message of an image that you search for'},
            {name: '!suggestions', value: 'sends a suggestion in the suggestions channel to improve the server'},
            {name: '!youtube', value: 'shows an embedded message of Josh, Mycah, & Gabes youtube channels'},
            {name: '!ticket', value: 'creates a ticket channel to be able to contact Administrators'},
        )
        .setFooter('Page 4 of 6\nFollow Josh on Twitter @Magical_Josh');

        message.channel.send(newEmbed);
    }


}