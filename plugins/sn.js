const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async (m) => {
global.Ina = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text='
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let sn = createHash('md5').update(m.sender).digest('hex')
    conn.sendTemplateButtonCopy(m.chat, Ina + 'Serial Number', sn, wm, 'Unreg', '.unreg', m)
}
handler.help = ['sn']
handler.tags = ['xp']
handler.command = /^(sn)$/i
handler.register = true
module.exports = handler