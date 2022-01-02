module.exports = {
    name: 'downbadlist',
    aliases: ['dbl'],
    permissions: ["ADMINISTRATOR"],
    description: "Downbad List",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F633FF')
        .setTitle('Downbad List')
        .setDescription('The people in the down bad list')
        .addFields(
            {name: 'Josh', value: 'is down bad for Ellie (please date me)'},
            {name: 'Mycah', value: 'is down bad for Kaylie'},
            {name: 'Gabe', value: 'is down bad for Taylor or Tayler (idfk what her name is spelt)'}
        )
        .setFooter('These people are down bad!!!');

        message.channel.send(newEmbed);
    }


}