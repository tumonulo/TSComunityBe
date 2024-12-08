const getClubs = require('./getClubs.js');
const clubs = getClubs();

function statsClubs() {
    let statsClubs = ''
    clubs.forEach((club, i) => {
        statsClubs = statsClubs + ``

    })
    return statsClubs;
}

module.exports = statsClubs;