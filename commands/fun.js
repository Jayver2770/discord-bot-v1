module.exports = {
    name: 'fun',
    permissions: ["ADMINISTRATOR"],
    description: "this is a ping command!",
    execute(message,args, cmd, client){
        message.channel.send('someone likes gay porn lol!');
    }
}