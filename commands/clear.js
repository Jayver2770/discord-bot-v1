module.exports = {
    name: 'clear',
    aliases: ['purge', 'remove', 'cl', 'delete'],
    permissions: ["MANAGE_MESSAGES"],
    description: "Clear messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("please enter the ammount of messages that you want to clear");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete atleast one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}   