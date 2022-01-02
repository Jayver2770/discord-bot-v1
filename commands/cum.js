module.exports = {
    name: 'cum',
    permissions: [],
    cooldown: 1,
    description: "this is a ping command!",
    execute(message,args, cmd, client){
        message.channel.send('IM CUMMING 😩');
    }
}