require("discord.js");
const guild = client.guiids.cache.get("idguild");


const activeMembers = message.guild.members.fetch({ withPresences: true }).filter(member => member.presence?.status === "online" || member => member.presence?.status === "idle" || member => member.presence?.status === "dnd").size;

guild.channels.forEach(channel => {
    channel => channel.messages;
})

console.log(activeMembers)
console.log(guild.memberCount);