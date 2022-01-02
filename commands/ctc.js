module.exports = {
    name: 'ctc',
permissions: [],
description: "This command makes a private text channel!",
 async execute(message,args, cmd, client) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send("No member found!");
    let role = await message.guild.roles.create({
        data: {
          name: 'Private Text Channel Access',
          color: 'ORANGE',
        }
      })

      let channel = await message.guild.channels.create(`${message.author.username}-${member.user.username}`, {
          type: 'text',
          permissionOverwrites: [
              {
                  id: role.id,
                  allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
              },
              {
                  id: message.guild.roles.everyone.id,
                  deny: ['SEND_MESSAGES', 'VIEW_CHANNEL']
              }
          ]
      })

      member.roles.add(role);
      message.member.roles.add(role)
      message.channel.send(`Channel has been created! Get talking at ${channel}! If you want to add anyone else, do !ticket and ask a mod in the ticket channel that it creates.`)
}
}