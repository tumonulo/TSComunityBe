const { client } = require("../../ready.js")

async function statsDiscord() {
    client.once("ready", () => {
        const guild = client.guilds.cache.get("1093864130030612521")
        const members = guild.memberCount
        const onlineMembers = guild.members.cache.filter(member => 
        ['online', 'idle', 'dnd'].includes(member.presence?.status)).size; 
        console.log(members, onlineMembers)
        return {
            members,
            onlineMembers
        }
    })
}



module.exports = {
    statsDiscord
}