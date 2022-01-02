module.exports = {
    name: 'help5',
    aliases: ['memes'],
    permissions: [],
    description: "help command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Help Command Page 5')
        .setDescription('**Memes**\nMake sure to use **!help** & **!aliases** for help')
        .addFields(
            {name: '!meme', value: 'post memes from the r/dankmemes subreddit'},
            {name: '!animeme', value: 'post pictures from the r/animemes subreddit'},
            {name: '!mwmeme', value: 'posts memes/pictures from the r/modernwarfare subeddit'},
            {name: '!cwmeme', value: 'posts memes/pictures from the r/blackopscoldwar subreddit'},
            {name: '!wzmeme', value: 'posts memes/pictures from the r/codwarzone subeddit'}
        )
        .setFooter('Page 5 of 6');

        message.channel.send(newEmbed);
    }


}