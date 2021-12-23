let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*hint/i.test(m.quoted.text)) return
  conn.asahotak = conn.asahotak ? conn.asahotak : {}
  if (!(id in conn.asahotak)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.asahotak[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.asahotak[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].exp += conn.asahotak[id][2]
      m.reply(`*Benar!*\n+${conn.asahotak[id][2]} XP`)
      clearTimeout(conn.asahotak[id][3])
      delete conn.asahotak[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
