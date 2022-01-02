module.exports = {
    name: 'commandnouseanymorebuthereforotherpurposes',
    permissions: [],
    description: "Embeds!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Rules!!!')
        .setDescription('Be sure to follow the rules')
        .addFields(
            {name: 'Rule 1', value: 'Be respectful'},
            {name: 'Rule 2', value: 'No Spamming unless said'},
            {name: 'Rule 3', value: 'No NSFW'},
            {name: 'Rule 4', value: 'Swearing is allowed but you will be muted if you swear too much'}
        )
        .setImage('https://i.imgur.com/lCOpPoq.png')
        .setFooter('Follow em');

        message.channel.send(newEmbed);
    }


}