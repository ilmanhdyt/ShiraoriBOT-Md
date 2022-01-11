
const { instagramdl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`

instagramdl(args[0]).then(async res => {
    let instagramdl = JSON.stringify(res)
    let json = JSON.parse(instagramdl)
    for (let { url, type } of json) {
      await delay(1500)
      conn.sendFile(m.chat, url, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*© SHIRAORIBOT*', m, { thumbnail: Buffer.alloc(0) })
    }
  })
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(ig|igdl|instagram)$/i
handler.limit = true
handler.premium = false

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
