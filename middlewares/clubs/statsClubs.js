const getClubs = require("./getClubs.js");
const clubs = getClubs();

function statsClubs() {
    let statsClubs = ""
    clubs.forEach((club, i) => {
        statsClubs = statsClubs + ``

        if (clubs.length != i) {
            //2
        }
    })
    return statsClubs;
}

module.exports = statsClubs;