let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'sange kok ama kucing', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nekonsfw']
handler.tags = ['nsfw']
handler.command = /^(nekonsfw)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
