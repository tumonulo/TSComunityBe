require('discord.js');
const { client } = require('../../app.js');
require('dotenv').config();
const BRAWLSTARSAPIKEY = process.env.BRAWLSTARSAPIKEY;
const guild = client.guilds.cache.get('1093864130030612521');
const channel = guild.channels.cache.get('1102591330070302862');
    
async function getClubs() {
    const message = await channel.messages.fetch({ limit: 1 }).first();
    const clubs = [];
    message.fields.forEach(async field => {
        const clubID = field.name.replace(/fdsf|dfd/, '');
        const request = await fetch(`https://api.brawlstars.com/v1/clubs/%23${clubID}`, {
            headers: {
                'Authorization': `Bearer ${BRAWLSTARSAPIKEY}`
            }
        })
        const response = await request.json();
        response.averageTrophies = response.trophies / response.members.length;
        clubs.push(response);
    });
    return clubs;
}

module.exports = getClubs;