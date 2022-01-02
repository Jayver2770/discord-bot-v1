module.exports = {
    name: 'ping',
    permissions: ["ADMINISTRATOR"],
    description: "this is a ping command!",
    execute(message,args, cmd, client){
        message.channel.send('pong!');
    }
}