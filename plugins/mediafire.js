let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\ncontoh:\n${usedPrefix + command} http://www.mediafire.com/file/js0gr2nozcmk9yg/example.txt/file`
    let res = await fetch(API('melcanz', '/mediafire', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.result.link, json.result.nama, wm, m)
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(mediafire|mf)$/i

handler.limit = 1

module.exports = handler
