module.exports = {
    name: 'youtube',
    permissions: [],
    description: "Embeds!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Youtube Channels You Should Subscribe To :)')
        .setDescription('Subscribe to Josh, Mycah, & Gabe!')
        .addFields(
            {name: 'Joshs Channel', value: 'https://www.youtube.com/channel/UCqcVkPE3p2wAFXbkT6fUlIg'},
            {name: 'Mycahs Channel', value: 'https://www.youtube.com/channel/UCdkuT0yRBm7t83pxKGgSAAA'},
            {name: 'Gabes Channel', value: 'https://www.youtube.com/channel/UCoKpzVda4osexopRLq9zVBQ'}
        )
        .setImage('https://i.imgur.com/OdW7zBi.png')
        .setFooter('Make sure to subscribe!!!');

        message.channel.send(newEmbed);
    }


}