module.exports = {
    name: 'aliases',
    aliases: ['alias'],
    permissions: [],
    description: "aliases command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Aliases for Commands!')
        .setDescription('Here are the Aliases for some of the commands!!')
        .addFields(
            {name: '!clear', value: '!purge, !remove, !cl, !delete'},
            {name: '!cwcheck', value: '!cw'},
            {name: '!mcserver', value: '!mc, !mcheck, !minecraft'},
            {name: '!mwcheck', value: '!mw'},
            {name: '!play', value: '!skip, !stop'},
            {name: '!suggestions', value: '!suggest, !suggestion'},
            {name: '!wzcheck', value: '!wz'},
            {name: '!help6', value: '!nsfw'},
            {name: '!help4', value: '!misc'},
            {name: '!help3', value: '!music'},
            {name: '!help2', value: '!moderation, !mod'},
            {name: '!help5', value: '!memes'},
        )
        .setFooter('here are the aliases for the commands!!!');

        message.channel.send(newEmbed);
    }


}