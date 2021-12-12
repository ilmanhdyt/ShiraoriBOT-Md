let handler = async (m) => {
	m.reply(`
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├🏧 081351047727 (OVO/Dana/GoPay)
├📍 https://saweria.co/ilmanhdyt
└────
Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/6181351047727 (Owner)`)
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
