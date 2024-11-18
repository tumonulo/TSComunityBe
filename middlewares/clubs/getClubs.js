require("discord.js");
require("dotenv").config();
const BRAWLSTARSAPIKEY = process.env.BRAWLSTARSAPIKEY;
const guild = client.guilds.cache.get("dsds");
const channel = guild.channels.cache.get("fsdfw");
const message = await channel.messages.fetch({ limit: 1 }).first();

async function getClubes() {
    const clubs = [];
    message.fields.forEach(field => {
        const clubID = field.name.replace(/fdsf|dfd/, "");
        const request = await fetch(`https://api.brawlstars.com/v1/clubs/%23${clubID}`, {
            headers: {
                "Authorization": `Bearer ${BRAWLSTARSAPIKEY}`
            }
        })
        const response = await request.json();
        clubs.push(response);
    });
    return clubs;
}

module.exports = getClubes;