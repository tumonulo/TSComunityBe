const membersOutput = document.getElementById('mainDiscord-1.0')
const activeMembersOutput = document.getElementById('mainDiscord-1.1')
const dailyMessagesOutput = document.getElementById('mainDiscord-1.2')

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/discord/stats')
        const data = await response.json()
    
        membersOutput.textContent = data.members
        activeMembersOutput.textContent = data.activeMembers
        dailyMessagesOutput.textContent = data.dailyMessages
    } catch (error) {
        console.error('An error occur by loading the Discord stats')
    }
})