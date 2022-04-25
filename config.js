//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['917034892686','972528244325','972528277725']
global.ownerjid = '917034892686@s.whatsapp.net'
global.pemilik = ['972528244325'] //another owner number
global.premium = ['917034892686','972528244325'] //premium number
global.pengguna = 'Hermit' //username
global.quotedname = '𝚮𝚵𝚼𝚳𝚰𝚻 𝐒𝚺𝚪'
global.audiotitle = '𝚮𝚵𝚼𝚳𝚰𝚻 𝐒𝚺𝚪'
global.audioboby = 'ᴀᴅɪᴛʜʏᴀɴ⁴⁴⁴'
global.audiodesc = 'ʜᴇʀᴍɪᴛ sᴇʀ'
global.botnma = '𝚮𝚵𝚼𝚳𝚰𝚻 𝐒𝚺𝚪' //bot name
global.ownernma = '×͜×〲 ☞Aᴅͥɪͭᴛᷤʜᷟʏͤᴀɴ࿐' //owner name
global.packname = '[HERMIT]' //sticker package name
global.author = '[BOT-MD]' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/','','😂'] //prefix
global.sp = '▢' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'Please wait a second...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
