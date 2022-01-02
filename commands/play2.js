module.exports = {
    name: 'play',
    aliases: ['skip', 'stop', 'help3', 'music'],
    permissions: [],
    description: "Music Command Not Available Message",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F633FF')
        .setTitle('Music Commands Not Available')
        .setDescription('wow... If you see this message, then the music commands are not available.')
        .addFields(
            {name: 'All commands pretaining to the music commands', value: 'are down for it not working on a new bot coding for Josh Bot v2'},
            {name: 'I know this is kinda bad for those who use it (literally no one)', value: 'But once I find out how to do music commands on Josh Bot v2, then the functionality will be back'},
            {name: 'Farewell!', value: 'As of that farewell to Josh Bots music systems'}
        )
        .setFooter('Rest In Peace Josh Bot Music System!!!');

        message.channel.send(newEmbed);
    }


}