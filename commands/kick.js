module.exports = {
    name: 'kick',
permissions: ["KICK_MEMBERS"],
description: "This command kicks a member!",
 async execute(message,args, cmd, client) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to execute this command!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send("Invalid Member Given!");
    if(member.roles.highest.position > message.member.roles.highest.position) return message.channel.send("You cannot ban someone with more power than you!")
    let reason = args.slice(1).join(' ');
    if(!reason) {reason= 'No reason provided'}
    member.kick(reason)
    message.channel.send(`**${member.user.tag}** has been kicked for ${reason}`)
    }
}