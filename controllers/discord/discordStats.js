module.exports = async function discordStats(req, res) {
    const client = require('../../app.js')

    const guild = client.guilds.cache.get('1093864130030612521')
    const channels = guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT')


    async function getActiveMembers() {
        try {
          const members = await guild.members.fetch({ withPresences: true })
          const activeMembers = members.filter(member =>
            member.presence?.status === 'online' ||
            member.presence?.status === 'dnd' ||
            member.presence?.status === 'idle'
          ).size
          return activeMembers
        } catch (error) {
          console.error(error)
          return undefined 
        }
      }
    
      async function getDailyMessages() {
        let dailyMessages = 0; // Contador de mensajes diarios
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Establece la hora de inicio del día
    
        for (const [channelId, channel] of channels) {
            let lastMessageId = null; // ID del último mensaje obtenido
            let hasMoreMessages = true; // Bandera para controlar la paginación
    
            while (hasMoreMessages) {
                const options = { limit: 100 }; // Opciones para fetch
                if (lastMessageId) {
                    options.before = lastMessageId; // Paginación: obtener mensajes antes del último mensaje
                }
    
                const messages = await channel.messages.fetch(options); // Obtener mensajes
                if (messages.size === 0) {
                    hasMoreMessages = false; // No hay más mensajes, salir del bucle
                    break;
                }
    
                // Contar mensajes enviados hoy
                messages.forEach(message => {
                    if (message.createdTimestamp >= today.getTime()) {
                        dailyMessages++;
                    } else {
                        hasMoreMessages = false; // Mensajes más antiguos que hoy, salir del bucle
                    }
                });
    
                lastMessageId = messages.last().id; // Actualizar el ID del último mensaje
            }
        }
    
        return dailyMessages; // Devolver el total de mensajes diarios
    }
    
    
    res.json({
        'members': guild.memberCount,
        'activeMembers': await getActiveMembers(),
        'dailyMessages' : await getDailyMessages()
    })
}