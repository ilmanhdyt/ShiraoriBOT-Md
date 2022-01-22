let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `${conn.getName(who)} sudah premium!`
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} sekarang premium!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['addprem [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.owner = true

module.exports = handler
