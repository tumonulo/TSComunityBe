const getClubs = require('./getClubs.js');
const clubs = getClubs();
require('dontenv').config();
const BRAWLSTARSAPIKEY = process.env.BRAWLSTARSAPIKEY;

async function findClub(playerID) {
    const request = await fetch(`https://api.brawlstars.com/v1/players/%23${playerID.toUpperCase()}`, {
        headers: {
            'Authorization': `Bearer ${BRAWLSTARSAPIKEY}`
        }
    })
    const response = await request.json();
    const playerTrophies = response.trophies;
    const clubsTrophies = [];
    clubs.forEach((club, i) => {
        if (playerTrophies > club.recommendTrophies && playerTrophies > club.requiredTrophies) {
            return club.name;
        } else if (clubs.length = i) {
            return;
        }
    })
}

module.exports = findClub;