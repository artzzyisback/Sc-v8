const fs = require('fs')
const chalk = require('chalk')

global.owner = "6285279323958"
global.ownerStore = "6285279323958"
global.namabot = "JarzTzy"
global.namaCreator = "JarzTzy Offcial"
global.namaStore = "JarzTzy"
global.autoJoin = false
global.antilink = false
global.anticall = true
global.themeemoji = '🪀'
global.versisc = 'Private'
global.namasc = 'Private'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.apitokendo = 'dop_v1_9a0906d0b316369de5ba2eec0ef74a045e8e2f22567eff00876bd2194132def1'
//SERVER 1
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
//SERVER 2
global.domainn = 'https://admincrazy.amaliasyva-private.tech' // Isi Domain Lu
global.apikeyy = 'ptla_fPQdIOCX9lX6srPZnvWIFkRmaOHBs9AAXpbbdjnKq4W' // Isi Apikey Plta Lu
global.capikeyy = 'ptlc_LkMQcei2KfEM2yyZZPEhAwxCIbkgRGwuhfEkgE9NZo9' // Isi Apikey Pltc Lu
//SERVER 3
global.domainnn = 'https://ridhoxyz.tokodigital.software'
global.apikeyyy = 'ptla_YAjliZkkB1AT7yLPcpK6fWGg80NnTziBWeOnfRAvVPU'
global.capikeyyy = 'ptlc_wm9Ao3i60541LxA9Ud9Njy4wlaQPu7aLxleBKBg5nNs'
//BATAS
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "b36ab42975f5d28bcd26bc5c82c17c6a"
global.signature = "hash_hmac('sha256', $merchantCode.$channel.$merchantRef, $privateKey)"
global.merchant = "INV55567"
//MAU PEDIA
global.api_key = "bUHAkvAPdLqiPv3hZVLkTBloFfLLp30YhCKvYjsy8p2BHELPecKBX30BXpW8gNSp"//@zallDev
global.api_id = "HQlVmK9367J0f7HA"//@zallDev
global.secret = "h&gg#JarzOffcial976*#"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = ""
global.author = "Sticker By JarzTzy"
global.jumlah = "5"
global.youtube = "*https://youtube.com/@JarzOffcial*"
global.grup = "*https://chat.whatsapp.com/EvwRjBk5J3c5aETCiasuLF*"
global.telegram = "*https://t.me/jarztunnel*"
global.instagram = "*https://instagram.com/liamxdstore*"
global.harga1 = "15k"
global.spekvps1 = "8gb Core 4"
global.vps1 = "Digital Ocean"
global.harga2 = "20k"
global.spekvps2 = "8gb Core 4"
global.vps2 = "Linode"
global.harga3 = "25k"
global.spekvps3 = "16gb Core 6"
global.vps3 = "Linode"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})