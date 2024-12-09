const { client } = require('../../ready.js')

module.exports = async function overlay(req, res) {
    const message = 'hola';
    res.json({ message });
};