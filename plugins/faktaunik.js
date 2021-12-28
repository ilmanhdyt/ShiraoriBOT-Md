/**
diupload oleh https://github.com/uhdahlah
**/

let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://recoders-area.caliph.repl.co/api/fakta?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  f = await ddd.json()
  conn.reply(m.chat,`${f.result}`, m)
} 
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
