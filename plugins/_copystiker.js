let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe && m.isGroup) return true
  let isSticker = m.mtype
    if(isSticker === "stickerMessage"){
        m.copyNForward('120363040148411901@g.us',  true) // masukin id grup kalian tinggal command => await groupMetadata.id
    }
}

module.exports = handler
