module.exports = async function discordStats(req, res) {
    const client = require('../../app.js')

    const guild = client.guilds.cache.get('1093864130030612521')
    const icon = guild.iconURL({ dynamic: true })

    if (!icon) {
        return res.json({
            'icon': '/assets/icons/iconTS.png'
        })
    }

    res.json({
        'icon': icon
    })
}