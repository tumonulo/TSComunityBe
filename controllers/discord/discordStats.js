module.exports = async function discordStats(req, res) {
    const { ChannelType } = require('discord.js')
    const client = require('../../app.js')

    const guild = client.guilds.cache.get('1093864130030612521')
    const channels = guild.channels.cache.filter(channel => channel.type === ChannelType.GuildText )
    
      async function getActiveMembers() {
        try {
          const members = await guild.members.fetch({ withPresences: true })
          const activeMembers = members.filter(member =>
            member.presence?.status === 'online' ||
            member.presence?.status === 'dnd' ||
            member.presence?.status === 'idle'
          );
          return activeMembers.size
        } catch (error) {
          console.error(error)
          return undefined
        }
      }
      
      async function getDailyMessages() {
        let dailyMessages = 0; // Contador de mensajes diarios
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Establece la hora de inicio del día
      
        // Uso de Promise.all para manejar múltiples canales de forma concurrente
        const messageCounts = await Promise.all(
          [...channels.values()].map(async (channel) => {
            let messagesFetched = 0;
            let lastMessageId = null;
            let hasMoreMessages = true;
      
            while (hasMoreMessages) {
              const options = { limit: 100 }; // Limitar mensajes
              if (lastMessageId) {
                options.before = lastMessageId;
              }
      
              const messages = await channel.messages.fetch(options); // Obtener mensajes
              if (messages.size === 0) {
                break; // Salir si no hay más mensajes
              }
      
              // Filtrar mensajes de hoy
              messages.forEach((message) => {
                if (message.createdTimestamp >= today.getTime()) {
                  messagesFetched++;
                } else {
                  hasMoreMessages = false;
                }
              });
      
              lastMessageId = messages.last().id; // Actualizar el ID del último mensaje
            }
      
            return messagesFetched; // Devolver la cantidad de mensajes de este canal
          })
        );
      
        // Sumar todos los mensajes de todos los canales
        dailyMessages = messageCounts.reduce((acc, count) => acc + count, 0);
        return dailyMessages; // Devolver el total de mensajes diarios
      }      
    
    res.json({
        'members': guild.memberCount,
        'activeMembers': await getActiveMembers(),
        'dailyMessages' : await getDailyMessages()
    })
}