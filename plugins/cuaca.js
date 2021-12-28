/**
diupload oleh https://github.com/uhdahlah
**/

let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Daerah', m)

  await m.reply('Searching...')
	axios.get(`https://api.xteam.xyz/cuaca?kota=${text}&APIKEY=uhdahlah`).then ((res) => {
	 	let hasil = `Cuaca Daerah *${text}*\n\nTempat : ${res.data.message.kota}\nAngin : ${res.data.message.angin}\nCuaca : ${res.data.message.cuaca}\nDeskripsi : ${res.data.message.deskripsi}\nKelembapan : ${res.data.message.kelembapan}\nSuhu : ${res.data.message.suhu}\nUdara : ${res.data.message.pressure}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cuaca'].map(v => v + ' <daerah>')
handler.tags = ['tools']
handler.command = /^(cuaca)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
