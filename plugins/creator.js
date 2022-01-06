const { MessageType } = require('@adiwajshing/baileys-md')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
  let name = 'Ilman'
  number = owner[0].replace(/[^0-9]/g, '')
  let njid = number + '@s.whatsapp.net'


  let name2 = 'Ilman'
  number2 = owner[0].replace(/[^0-9]/g, '')
  let njid2 = number2 + '@s.whatsapp.net'

  this.sendMessage(m.chat, {
    contacts: [{
      displayname: name, vcard: `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
EMAIL;type=INTERNET:wakabahiiro5@gmail.com'\n'
END:VCARD
`.trim()
    }]
  }, ContactsArrayMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
