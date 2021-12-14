let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw '*❏ Link Tidak Valid*'
    let res = await conn.acceptInvite(code)
    m.reply(`*❏ Berhasil Join Grup ${res.gid}*`)
}
handler.help = ['join *link*']
handler.tags = ['owner']
handler.command = /^join$/i
handler.owner = true
module.exports = handler
