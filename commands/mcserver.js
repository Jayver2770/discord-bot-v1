const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    aliases: ['mc', 'mccheck', 'minecraft'],
    permissions: [],
    cooldown: 3, //Add this key to your command file. This number must be in seconds.
    execute(message,args, cmd, client, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port');

        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Description', value: response.description},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Mc server util by Josh');

            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server!! Make sure to do !mcserver serverip serverport');
            throw error;
        });
    }
}