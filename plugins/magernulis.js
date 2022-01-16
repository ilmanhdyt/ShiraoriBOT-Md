let fetch = require('node-fetch')
let handler = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  let url = global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'nulis.jpg', '', m, false, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['nulis']

handler.command = /^magernulis[1-6]?$/i

handler.limit = true

module.exports = handler
