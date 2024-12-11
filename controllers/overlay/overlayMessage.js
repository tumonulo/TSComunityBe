const { client } = require('../../ready.js')

module.exports = async function overlay(req, res) {
    const messages = []
    const guild = client.guilds.cache.get('ID del guild')
    const channel = guild.channels.cache.get('ID del canal')
    const message = channel.messages.first()
    const embed = message.embeds.first()
    const fields = embed.fields

    const memberCount = guild.memberCount

    aysnc function getActiveMembers() {
        guild.members.fetch({ withPresences: true }).then(members => {
            const activeMembers = members.filter(member => 
                member.presence?.status === 'online' || 
                member.presence?.status === 'dnd' || 
                member.presence?.status === 'idle').size
                return activeMembers
        })
    }
    
    const activeMembers = getActiveMembers()

    const clubsCount = fields.length

    messages.push(memberCount, activeMembers, clubsCount)
    const randomIndex = Math.floor(Math.random() * messages.length);
    const response = array[randomIndex];
    res.json({ response });
};