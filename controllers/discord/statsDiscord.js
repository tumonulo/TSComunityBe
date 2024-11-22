const { client } = require("../../ready.js")
const guild = client.guilds.cache.get("1093864130030612521");

async function statsDiscord() {
    const members = guild.memberCount
    const onlineMembers = guild.members.cache.filter(member => 
    ['online', 'idle', 'dnd'].includes(member.presence?.status)).size;
    guild.channels.forEach(channel => {
        channel => channel.messages;
    })    
    return {
        members,
        onlineMembers
    }
}



module.exports = {
    statsDiscord
}