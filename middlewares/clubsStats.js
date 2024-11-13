require("discord.js");
require("dotenv").config();
const BRAWLSTARSAPIKEY = process.env.BRAWLSTARSAPIKEY;
const guild = client.guilds.cache.get("dsds");
const channel = client.guild.channels.cache.get("fsdfw");
const message = channel.messages.embeds[0];

message.fields.forEach(field => {
    const clubID = field.name.replace(/fdsf|dfd/, "")
    const request = fetch(`https://api.brawlstars.com/v1/clubs/%23${clubID}`) {
        headers: {
            "Authorization:" `Bearer ${BRAWLSTARSAPIKEY}`,
        }
    }
    const response = request.json();
})