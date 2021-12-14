let handler = async(m, { conn, text, participants }) => {
  let teks = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *Admin Group* ⋘`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
