const { client } = require('../../app.js')

module.exports = async function discordStats(req, res) {
    const guild = client.guild.cahce.get('ID DEL GUILD')

    async function getActiveMembers() {
        await guild.members.fetch({ withPresences: true }).then(members => {
            const activeMembers = members.filter(member => 
                member.presence?.status === 'online' || 
                member.presence?.status === 'dnd' || 
                member.presence?.status === 'idle').size
                return activeMembers
        })
    }

    async function getDailyMessages() {
        let dailyMessages = 0
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        guild.channels.forEach(async channel => {
            let lastMessage = await channel.messages.fetch({ limit: 1}).first()
            let lastMessageID = lastMessage.id

            while (lastMessage.createdTimestamp > today.getTime()) {
                const messages = await channel.messages.fetch({ limit: 100, before: lastMessageID }).array()
                lastMessageID = messages[99]
                dailyMessages += messages.size

                messages.forEach(message => {
                    if (message.createdTimestamp < today.getTime()) {
                        dailyMessages--;
                    }
                });
            }
        })
        return dailyMessages
    }


    res.json({
        'members': guild.memberCount,
        'activeMembers': getActiveMembers(),
        'dailyMessages' : getDailyMessages()
    })
}