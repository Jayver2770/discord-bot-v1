module.exports = {
    name: 'help6',
    aliases: ['nsfw'],
    permissions: [],
    description: "help command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Help Command Page 6')
        .setDescription('**NSFW**\nMake sure to use **!help** & **!aliases** for help')
        .addFields(
            {name: '!gayhentai', value: 'post memes from the r/gayhentair34 subreddit'},
            {name: '!hentai', value: 'post pictures from the r/hentai subreddit'}
        )
        .setFooter('Page 6 of 6\nGabe wanted this so thats why its here');

        message.channel.send(newEmbed);
    }


}