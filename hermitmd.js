
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')	
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const got = require("got");
const fetch = require('node-fetch');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const ID3Writer = require('browser-id3-writer');
const ytdl = require('ytdl-core');
const yts = require("yt-search")
let { yta, ytv } = require('./lib/y2mate')
const Heroku = require('heroku-client');
const imageToBase64 = require('image-to-base64');
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const Game = require("@phaticusthiccy/open-apis");
const Canvacord = require('canvacord')
const MP3Cutter = require('mp3-cutter');
const { igDownload } = require('./lib/igdown')
let { FileSize, h2k } = require('./lib/scraper')
const { playstore, pinterest, igdl, igstory, igstalk, youtube } = require('./lib/hermitapi')
const { UploadFileUgu, webp2mp4File, TelegraPh, upload } = require('./lib/uploader')
const { toAudio, toPTT } = require('./lib/converter')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")
const speedofbot = require("performance-now")
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
const simpleGit = require('simple-git');
const git = simpleGit();
const heroku = new Heroku({ token: global.herokuapikey })
//[thumb]\\
let xeon = fs.readFileSync('./media/mainpic.jpg')
let docthumb = fs.readFileSync('./docimg.jpg')
let menuvid = fs.readFileSync('./hermit.mp4')

const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time = moment.tz('Asia/Kolkata').format('hh:mm')
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
   })
//[database]\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
mdforward = ''
replyType = 'text'
typemenu = 'document'
//[database reader]\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = ser = async (ser, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const type = Object.keys(m.message)[0]        
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ser.decodeJid(ser.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const itsowner = m.sender == global.ownerjid ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const content = JSON.stringify(mek.message)
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
 
//[quoted]\\
const foneview = {
  "key": {
"fromMe": false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
"viewOnceMessage": {
  "message": {
"imageMessage": {
  "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
  "mimetype": "image/jpeg",
  "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
  "fileLength": "675",
  "height": 41,
  "width": 52,
  "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
  "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
  "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
  "mediaKeyTimestamp": "1630826390",
  "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
  "viewOnce": true
}
  }
}
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
"localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
let quotedimg = fs.readFileSync('./logoquoted.jpg')

const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: quotedimg, surface: 200, message: `${global.quotedname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${global.quotedname}`,jpegThumbnail: quotedimg}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${global.quotedname}`, 'jpegThumbnail': quotedimg}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${global.quotedname}`, 'jpegThumbnail': quotedimg}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${global.quotednamename}`, 'jpegThumbnail': quotedimg}}}
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${global.quotedname}`,jpegThumbnail: quotedimg}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': quotedimg}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${global.quotedname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": quotedimg, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./logoquoted.jpg`)},"title": `${global.quotedname}`,"description": `${global.quotedname}`,"currencyCode": "IDR", "priceAmount1000": "-777777777777777777", "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AlcoaGcKEsbF6cJftfZMT7zY2FWYD3khhQr3Uo6YwMMV.enc","fileSha256": "Vb3jnUWHoRb+ffsIykigw0boSHPxvJrM6DC/zO84uUA=","fileEncSha256": "pQ6QZZfSqaXnr1V0cADqA46UXzNtcj6clJTIewReEEc=","mediaKey": "EsX6+k9fKS3XMWtAIngbtyqKTO0DJYZUnFiE3gi70tI=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/23558834_495804868918392_3303097117336825156_n.enc?ccb=11-4&oh=01_AVxiEzg98wTpUDiD3xm20OwA111RMzGXdXz4lxJghmIi0Q&oe=62781A7B","fileLength": "28136","mediaKeyTimestamp": "1649687605","isAnimated": false}}}

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedtext = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
//[gc]\\
const groupMetadata = m.isGroup ? await ser.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
const sendButton5 = async (id, text1, desc1, thumb, butt) => {
var buatpesan = await generateWAMessageFromContent(from, {
"templateMessage": {
  "hydratedTemplate": {
"locationMessage": {
 "jpegThumbnail": thumb
 },
"hydratedContentText": text1,
"hydratedFooterText": desc1,
"hydratedButtons": butt
  }
}
  }, {})
ser.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

const sendbuttongif = async (jid, contentText, footer, video, thumb, buttons, quoted, options) => {
const message = {
video: video, ...options,
gifPlayback: true, jpegThumbnail: thumb, fileLength: 9999999999999,
caption: contentText,
footer: footer,
templateButtons: buttons
}
ser.sendMessage(jid, message, { quoted: quoted, ...options })
}
const SendB5image = async (jid, contentText, footer, image, thumb, buttons, quoted, options) => {
const message = {
image: image, ...options, jpegThumbnail: thumb, fileLength: 4444444444, caption: contentText, footer: footer, templateButtons: buttons
}
ser.sendMessage(jid, message, { quoted: quoted, ...options })}

const listplay = (from, title, desc, list) => {
let template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `${title}`,
description: `${desc}`,
buttonText: "SELECT",
footerText: "ʜᴇʀᴍɪᴛ-ᴍᴅ",
listType: "SINGLE_SELECT",
sections: list,
  listType: 1
}
}), {})
ser.relayMessage(m.chat, template.message, { messageId: template.key.id })
}

const reply = async(teks) =>{
if(replyType === "url"){
ser.sendPresenceUpdate('composing', m.chat)
ser.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${global.botnma}`,"body": 'ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ-ᴍᴅ', "previewType": "VIDEO","thumbnailUrl": `https://www.instagram.com/`,"thumbnail": fs.readFileSync('./media/mainpic.jpg'),"sourceUrl": ""}}}, { quoted: m, ephemeralExpiration: 24*60*60 })
} else if(replyType === "troli"){
ser.sendPresenceUpdate('composing', m.chat)
res = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "orderMessage": { "itemCount": 55555, "message": teks, "footerText": "ser", "thumbnail": xeon, "surface": 'CATALOG'}}), { userJid: m.chat, quoted: m })
ser.relayMessage(m.chat, res.message, { messageId: res.key.id })
} else if(replyType === "text"){
ser.sendPresenceUpdate('composing', m.chat)
ser.sendMessage(m.chat, { text: teks }, { quoted: m, ephemeralExpiration: 24*60*60 })
} else  if(replyType === "insta"){
ser.sendPresenceUpdate('composing', m.chat)
ser.sendText(m.chat, teks, m, {
 contextInfo: { mentionedJid: [m.sender],
 externalAdReply :{
 mediaUrl: "https://www.instagram.com/hermit-ser",
 mediaType: 2,
 description: '', 
 title: `${global.botnma}`,
 body: "ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ-ᴍᴅ",
 thumbnail: xeon, 
 sourceUrl: "https://chat.whatsapp.com/hermit-ser"
 }}
 })
} else {
ser.sendPresenceUpdate('composing', m.chat)
ser.sendMessage(m.chat, { text:"Error SetReply Not Found"})
}
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('wame' in chats)) chats.wame = false
 } else global.db.chats[m.chat] = {
mute: false,
wame: false,
}
} catch (err) {
console.error(err)
}


//[public/self]\\
if (!ser.public) {
if (!m.key.fromMe) return
}

if (m.message) {
ser.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
fs.readdirSync('./plugins').forEach((file) => {
if (path.extname(file).toLowerCase() == '.js') {
eval(fs.readFileSync('./plugins/' + file,  'utf8'))
}})
let botinfo = 
`╭─⬣「 *INFO BOT* 」⬣
│ *Prefix* :  ${prefix} 
│ *Name* : ${global.botnma}
│ *Owner* : ${global.ownernma}
│ *Mode* : ${ser.public ? 'Public-Mode' : 'Self-Mode'}
│ *Runtime* : ${runtime(process.uptime())}
│ *Lib* : Baileys-Md@4.0.0
╰─⬣`
let menuButtons = [
{index: 1, urlButton: {displayText: 'GitHub!', url: 'https://github.com/HERMIT-SIR'}},
{index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+0'}},
{index: 3, quickReplyButton: {displayText: 'MENU', id: '.menu'}},
{index: 4, quickReplyButton: {displayText: 'OWNER', id: '.owner'}},
]

let groupmenu = `╭─❒ 「 Group Menu 」 
├ ${prefix}grouplink
├  ${prefix}ephemeral [option]
├  ${prefix}setgrouppp
├  ${prefix}setname [text]
├  ${prefix}group [option]
├  ${prefix}editinfo [option]
├  ${prefix}grupinfo
├  ${prefix}add @user
├  ${prefix}kick @user
├  ${prefix}promote @user
├  ${prefix}demote @user
├  ${prefix}listonline
├  ${prefix}antilink On/Off
├  ${prefix}mute On/Off
├  ${prefix}antiwame On/Off
╰─❒`

let downmenu = `╭─❒ 「 Download Menu 」
├  ${prefix}insta [url]
├  ${prefix}story [username]
├  ${prefix}ytmp3 [url]
├  ${prefix}ytmp4 [url]
├  ${prefix}getmusic [query]
├  ${prefix}getvideo [query]
╰─❒`

let searchmenu = `╭─❒ 「 Search Menu 」 
├  ${prefix}play [query]
├  ${prefix}find / whatmusic
├  ${prefix}yts [query]
├  ${prefix}google [query]
├  ${prefix}gimage [query]
├  ${prefix}pinterest [query]
├  ${prefix}wallpaper [query]
├  ${prefix}wiki [query]
╰─❒`

let funmenu = `╭─❒ 「 Fun Menu 」 
├  ${prefix}couple
├  ${prefix}mysoulmate
├  ${prefix}math [mode]  
╰─❒`

let voicemenu = `╭─❒ 「 Voice Changer Menu 」 
├  ${prefix}bass
├  ${prefix}blown
├  ${prefix}deep
├  ${prefix}earrape
├  ${prefix}fast
├  ${prefix}fat
├  ${prefix}nightcore
├  ${prefix}reverse
├  ${prefix}robot
├  ${prefix}slow
├  ${prefix}squirrel
╰─❒`

let convertmenu = `╭─❒ 「 Convert Menu 」 
├  ${prefix}toimage
├  ${prefix}removebg
├  ${prefix}sticker
├  ${prefix}emojimix
├  ${prefix}tovideo
├  ${prefix}togif
├  ${prefix}tourl
├  ${prefix}ebinary
├  ${prefix}dbinary
╰─❒`

let miscmenu = `╭─❒ 「  Misc Menu 」 
├  ${prefix}ping
├  ${prefix}owner
├  ${prefix}menu
├  ${prefix}delete
├  ${prefix}chatinfo
├  ${prefix}q
├  ${prefix}report (report bug to owner)
╰─❒`

let databasemenu = `╭─❒ 「 Database Menu 」 
├  ${prefix}setcmd
├  ${prefix}listcmd
├  ${prefix}delcmd
├  ${prefix}lockcmd
├  ${prefix}addmsg
├  ${prefix}listmsg
├  ${prefix}getmsg
├  ${prefix}delmsg
╰─❒`

let ownermenu = `╭─❒ 「 Owner Menu 」 
├  ${prefix}chat [option]
├  ${prefix}join [link]
├  ${prefix}leave
├  ${prefix}setbotpp
├  ${prefix}block @user
├  ${prefix}unblock @user
├  ${prefix}bcgc
├  ${prefix}bcall
├  ${prefix}listpc
├  ${prefix}listgc
├  ${prefix}mdox
├  ${prefix}ox
╰─❒`

//[level(incomplete, still in devment)]\\
const levelRole = getLevelingLevel(m.sender)
  var role = 'bronz'
  if (levelRole <= 3) {
role = 'Copper'
  } else if (levelRole <= 5) {
role = 'Iron'
  } else if (levelRole <= 7) {
role = 'Silver'
  } else if (levelRole <= 10) {
role = 'Gold'
  } else if (levelRole <= 12) {
role = 'Platinum'
  } else if (levelRole <= 15) {
role = 'Mithril'
  } else if (levelRole <= 18) {
role = 'Orichalcum'
  } else if (levelRole <= 25) {
role = 'Adamantite'
  } else if (levelRole <= 45) {
role = 'Good In Game'
  }

if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
   if (!m.key.fromMe) {
   reply('*LINK DETECTED*\nWow, how naughty, this group has been installed with Antilink, OK?..,\nGood Bye To You..👋🏻')
   let sianj = m.sender
   await ser.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
  }
if (db.chats[m.chat].wame) {
if (budy.match(`wa.me/`)) {
m.reply(`「 WA.ME DETECTED 」\n\nYou have been detected sending a wa.me link, sorry you will be kicked !`)
  if (!isBotAdmins) return m.reply(`Bot must be admin first`)
let gclink = (`https://wa.me/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Eh sorry it didn't happen, because you sent this wa.me link`)
if (isAdmins) return m.reply(`Ehh sorry you admin`)
if (isCreator) return m.reply(`Ehh sorry you are the owner of me`)
ser.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
//[mute chat]\\
  if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
  return
  }
//[write database every 1min]\\
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

//[reset limit every 12hrs]\\
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Kolkata"
})

//[respond cmd with media]\\
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: ser.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ser.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ser.ev.emit('messages.upsert', msg)
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
ser.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess The Music' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, ser.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, ser.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, ser.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `🎮 Guess Lontong 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, ser.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, ser.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, ser.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ser.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, ser.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Wrong Answer!*')
}

//[tictactoe]\\
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { 
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game has ended',
'-2': 'Invalid',
'-1': 'Invalid Position',
0: 'Invalid Position',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await ser.sendText(room.x, str, m, { mentions: parseMention(str) } )
await ser.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//[suit]\\
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
ser.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
ser.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) ser.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
if (!roof.pilih2) ser.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) ser.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
ser.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /scissors/i
let b = /rock/i
let k = /paper/i
let reg = /^(scissors|rock|paper)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
if (!roof.pilih2) ser.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
if (!roof.pilih) ser.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
ser.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) {
case 'afk': {
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
}
break	
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('You are still in the game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner found!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *give up* to surrender and admit defeat`
if (room.x !== room.o) await ser.sendText(room.x, str, m, { mentions: parseMention(str) } )
await ser.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
ser.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
} else if (!this.game) {
reply(`TicTacToe Session🎮 there is not any`)
} else return reply('?')
} catch (e) {
reply('error')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
if (m.mentionedJid[0] === m.sender) return reply('Cant play with myself !')
if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply('The person you are challenging is playing suit with someone else')
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
this.suit[id] = {
chat: await ser.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) ser.sendText(m.chat, `_Suit time out_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'chat': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
ser.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
ser.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'archive') {
ser.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
ser.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'read') {
ser.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'unread') {
ser.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'delete') {
ser.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'mathquiz': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("There are still unfinished sessions!")
let { genMath, modes } = require('./src/math')
if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
ser.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'mysoulmate': {
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, jawab, ser.user.name, m, {mentions: ments})
}
break
case 'couple': {
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ciee Whats Going On💖👀`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '❤️congrats', buttonText: { displayText: '❤️congrats' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, jawab, ser.user.name, m, {mentions: menst})
}
break
case 'join': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply('Enter the group link!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ser.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) return reply(mess.owner)
await ser.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ser.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if(!text && !m.quoted) return reply('Enter the number you want to add')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ser.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ser.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ser.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ser.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ser.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply('Text ?')
await ser.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
  case 'setdesc': case 'setdesk': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply('Text ?')
await ser.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
  case 'setppbot': case 'setbotpp': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let media = await ser.downloadAndSaveMediaMessage(quoted)
await ser.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'setlogo': case 'setthumb': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let delb = await ser.downloadMediaMessage(quoted)
fs.writeFileSync(`./media/mainpic.jpg`, delb)
reply(mess.success)
}
break
   case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let media = await ser.downloadAndSaveMediaMessage(quoted)
await ser.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'grupinfo': case 'groupinfo':
try{
 var pic = await ser.profilePictureUrl(m.chat, 'image')
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Group :* ${m.chat}\n*Made :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*Group Owner:* @${groupMetadata.owner.split('@')[0]}\n*Number Of Admins :* ${groupAdmins.length}\n*Number Of Participants :* ${participants.length}\n*Desc :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
ser.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
case 'systemrequirements':
case 'sr':
Game.system_requirements(text).then(async (data) => {
console.log(data)
res = data.game
texs = `⬡ Name : ${res.name}
⬡ Release_date : ${res.release_date}
⬡ Genre : ${res.genre}
⬡ Developer : ${res.developer}
⬡ Publisher : ${res.publisher}
⬡ Hardware_requirements : ${res.hardware_requirements}
⬡ Logo : ${res.avatar}
⬡ Banner : ${res.banner}

➩Minimum System Requirements

⬡ Cpu ${data.system_requirements.minimum.cpu}
⬡ Gpu ${data.system_requirements.minimum.gpu}
⬡ Ram ${data.system_requirements.minimum.ram}
⬡ Hdd ${data.system_requirements.minimum.hdd}
⬡ Directx ${data.system_requirements.minimum.directx}
⬡ Os ${data.system_requirements.minimum.os}

➩Recommended System Requirements

⬡ Cpu ${data.system_requirements.recommended.cpu}
⬡ Gpu ${data.system_requirements.recommended.gpu}
⬡ Ram ${data.system_requirements.recommended.ram}
⬡ Hdd ${data.system_requirements.recommended.hdd}
⬡ Directx ${data.system_requirements.recommended.directx}
⬡ Os ${data.system_requirements.recommended.os}

➩Reviews

⬡ Popularity ${data.reviews.popularity}
⬡ Graphics ${data.reviews.graphics}
⬡ Design ${data.reviews.design}
⬡ Gameplay ${data.reviews.gameplay}
⬡ Music ${data.reviews.music}
⬡ Innovatives ${data.reviews.innovations}
⬡ Overall ${data.reviews.overall}`
ser.sendImage(m.chat, res.avatar, texs, m)
})
break
case 'tagall': case 'tag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Message : ${q ? q : 'blank'}*\n\n`
for (let mem of participants) {
teks += `⬡ @${mem.id.split('@')[0]}\n`
}
ser.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
ser.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
db.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) return reply('Enter Query text!')
let anu = await styletext(text)
let teks = `Entered Text:  ${text}\n\n`
for (let i of anu) {
teks += `⬡ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
   case 'vote': {
if (!m.isGroup) return reply(mess.group)
if (m.chat in vote) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`)
reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: ser.user.name,
buttons: buttonsVote,
headerType: 1
}
ser.sendMessage(m.chat, buttonMessageVote)
}
break
   case 'upvote': {
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply(' You already Voted')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}delvote* - to delete votes`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: ser.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
ser.sendMessage(m.chat, buttonMessageUpvote)
}
 break
case 'devote': {
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply(' You already Voted')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}delvote* - to delete votes`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '👍🏻Up-Vote👍🏻'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '👎🏻De-Vote👎🏻'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: ser.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
ser.sendMessage(m.chat, buttonMessageDevote)
}
break
 
case 'cekvote':
case 'checkvote':
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}delvote* - to delete votes


©${ser.user.name}
`
ser.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': {
if (!m.isGroup) return reply(mess.group)
if (!(m.chat in vote)) return reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`)
delete vote[m.chat]
reply('Successfully Deleted Vote Session In This Group')
}
break
   case 'group': case 'grup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await ser.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await ser.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `Group Mode`, ser.user.name, m)

 }
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
 if (args[0] === 'open'){
await ser.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await ser.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: '⭕Open⭕' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: '🚫Close🚫' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `Mode Edit Info`, ser.user.name, m)

}
}
break
case 'antilink':
if (!m.isGroup) return reply(`This feature only be used in group`)
if (!isAdmins) return reply(`This feature could be used by admin only`)
if (!isBotAdmins) return reply(`Bot must be admin first`)
if (args[0] === 'on') {
if (isAntiLink) return reply('Already Activated')
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Successfully activated the antilink feature')
ser.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
} else if (args[0] === 'off') {
if (!isAntiLink) return reply('already deactivated')
var ini = antilink.indexOf(m.chat)
antilink.splice(ini, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Successfully disabled antilink feature')
} else if (!q){
 reply(`Pilih Antilink On / Off `)
}
break 
case 'antiwame': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
db.chats[m.chat].wame = true
m.reply(`Anti Wa.me Activated!`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
db.chats[m.chat].wame = false
m.reply(`Anti Wa.me is not activated!`)
} else {
 let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: '❌Off❌' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, ser.user.name, m)
}
 }
 break
   case 'mute': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.chats[m.chat].mute) return reply(`Already activated`)
db.chats[m.chat].mute = true
reply(`${ser.user.name} has been muted in this group !`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
db.chats[m.chat].mute = false
reply(`${ser.user.name} has been unmuted in this group!`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: '⭕On⭕' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: '❌Off❌' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `Mute Bot`, ser.user.name, m)
}
 }
 break
case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
if (!m.isGroup) return reply(mess.group)
let response = await ser.groupInviteCode(m.chat)
ser.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply('Enter the enable/disable value, For Example ${prefix}ephemeral enable')
if (args[0] === 'enable') {
await ser.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await ser.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
break
case 'delete': case 'del': {
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply('The message was not sent by a bot!')
ser.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'px':
 if (!isCreator) return reply(mess.owner)
LINK = args[1] === '' ? 'oo' : args[1]
await m.quoted.copyNForward(args[0], false, { quoted: ftroli})
break
 case 'mdox':
 if (!isCreator) return reply(mess.owner)
 if (!quoted) return reply('Reply to Audio')

Teks = budy.slice(6)
Quoted = Teks.split(';')[0]
Link = Teks.split(';')[1]
Imglink = Teks.split(';')[2]
Imglink2 = Teks.split(';')[3]
Text1 = Teks.split(';')[4]
Text2 = Teks.split(';')[5]
Text3 = Teks.split(';')[6]
Jid = Teks.split(';')[7]
llink2 = Teks.split(';')[8]

Link2 = llink2 === '' ? '' : llink2
Img1 = await getBuffer(Imglink)
Img2 = await getBuffer(Imglink2)
oxx = await quoted.download()
 
drration = ['119998800','836362800','2000001355','981817200','19998000']
dation = drration[Math.floor(Math.random() * (drration.length))]

oxtroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 50000,status: 200, thumbnail: Img2, surface: 200, message: `${Text3}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
oxdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${Text3}`,jpegThumbnail: Img2}}}
oxvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": `${dation}`,"ptt": "true"}} } 
oxgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": `${Text3}`, "h": `Hmm`,'seconds': `${dation}`, 'gifPlayback': 'true', 'caption': `${Text3}`, 'jpegThumbnail': Img2}}}
oxgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${Text3}`, 'jpegThumbnail': Img2}}}
oxvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title": `${Text3}`, "h": `Hmm`,'seconds': `${dation}`, 'caption': `${Text3}`, 'jpegThumbnail': Img2}}}
oxloc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${Text3}`,jpegThumbnail: Img2}}}
oxkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${Text3}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Text3},;;;\nFN:${Text3},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': Img2}}}
oximage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${Text3}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Img2, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
oxtoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": Img2},"title": `${Text3}`,"description": `${Text3}`,"currencyCode": "INR", "priceAmount1000": "-777777777777777777", "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
oxsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AlcoaGcKEsbF6cJftfZMT7zY2FWYD3khhQr3Uo6YwMMV.enc","fileSha256": "Vb3jnUWHoRb+ffsIykigw0boSHPxvJrM6DC/zO84uUA=","fileEncSha256": "pQ6QZZfSqaXnr1V0cADqA46UXzNtcj6clJTIewReEEc=","mediaKey": "EsX6+k9fKS3XMWtAIngbtyqKTO0DJYZUnFiE3gi70tI=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/23558834_495804868918392_3303097117336825156_n.enc?ccb=11-4&oh=01_AVxiEzg98wTpUDiD3xm20OwA111RMzGXdXz4lxJghmIi0Q&oe=62781A7B","fileLength": "28136","mediaKeyTimestamp": "1649687605","isAnimated": false}}}
oxtoko2 = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},"message": {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg","jpegThumbnail": Img2},"productId": "7448752128483091","title": `${Text3}`,"description": `${Text3}`,"currencyCode": "INR","priceAmount1000": "-7777777777777777777777","productImageCount": 1,"salePriceAmount1000": "-5555555555555555555555"},"businessOwnerJid": "19842958997@s.whatsapp.net"}}}

if(Quoted === "pro") {
var mdoxQuoted = oxtroli
} else if(Quoted === "doc") {
var mdoxQuoted = oxdoc
} else if(Quoted === "vn") {
var mdoxQuoted = oxvn
}else if(Quoted === "gif") {
var mdoxQuoted = oxgif
} else if(Quoted === "gc") {
var mdoxQuoted = oxgclink
} else if(Quoted === "vid"){
var mdoxQuoted = oxvideo
} else if(Quoted === "loc") {
var mdoxQuoted = oxloc
} else if(Quoted === "con") {
var mdoxQuoted = oxkontak
} else if(Quoted === "img") {
var mdoxQuoted = oximage
} else if(Quoted === "cat") {
var mdoxQuoted = oxtoko
} else if(Quoted === "sik") {
var mdoxQuoted = oxsticker
} else if(Quoted === "onev") {
var mdoxQuoted = foneview
} else if(Quoted === "cat2") {
var mdoxQuoted = oxtoko2
} else if(Quoted === "m"){
var mdoxQuoted = m
} else {
reply(`${Quoted} is not listed`)
}


 if (/audio/.test(mime)) {
 listmdox = JSON.parse(Jid)
 for (let _ of listmdox) {
 await ser.sendforwardaudio(_, oxx, 'audio/mp4', '9999999999999', dation, mdoxQuoted, {
 contextInfo: { mentionedJid: [m.sender],
 forwardingScore: 508,
 isForwarded: true,
 externalAdReply :{
 mediaUrl: Link,
 mediaType: 2,
 description: '', 
 title: Text1,
 body: Text2,
 thumbnail: Img1, 
 sourceUrl: Link2
 }}
 })
 }
 } else if (/webp/.test(mime)) {
 listmdox = JSON.parse(Jid)
 for (let _ of listmdox) {
 await ser.sendforwardsticker(_, oxx, 'image/webp', '9999999999999', mdoxQuoted, {
 contextInfo: { mentionedJid: [m.sender],
 forwardingScore: 508,
 isForwarded: true,
 externalAdReply :{
 mediaUrl: Link,
 mediaType: 2,
 description: '', 
 title: Text1,
 body: Text2,
 thumbnail: Img1, 
 sourceUrl: Link2
}}
})
}
} else{
reply(`*Reply to Audio/Sticker*`)
}
break
 case 'mdox2':
 if (!isCreator) return reply(mess.owner)
 if (!quoted) return reply('Reply to Audio')
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply to Audio`)

Teks = budy.slice(6)
Quoted = Teks.split(';')[0]
Link = Teks.split(';')[1]
Imglink = Teks.split(';')[2]
Imglink2 = Teks.split(';')[3]
Text1 = Teks.split(';')[4]
Text2 = Teks.split(';')[5]
Text3 = Teks.split(';')[6]
Jid = Teks.split(';')[7]
llink2 = Teks.split(';')[8]

Link2 = llink2 === '' ? '' : llink2
Img2 = await getBuffer(Imglink2)
oxx = await quoted.download()
 
drration = ['119998800','836362800','2000001355','981817200','19998000']
dation = drration[Math.floor(Math.random() * (drration.length))]

oxtroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 50000,status: 200, thumbnail: Img2, surface: 200, message: `${Text3}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
oxdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${Text3}`,jpegThumbnail: Img2}}}
oxvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": `${dation}`,"ptt": "true"}} } 
oxgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': `${dation}`, 'gifPlayback': 'true', 'caption': `${Text3}`, 'jpegThumbnail': Img2}}}
oxgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${Text3}`, 'jpegThumbnail': Img2}}}
oxvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': `${dation}`, 'caption': `${Text3}`, 'jpegThumbnail': Img2}}}
oxloc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${Text3}`,jpegThumbnail: Img2}}}
oxkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${Text3}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Text3},;;;\nFN:${Text3},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': Img2}}}
oximage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${Text3}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Img2, "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
oxtoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": Img2},"title": `${Text3}`,"description": `${Text3}`,"currencyCode": "INR", "priceAmount1000": "-777777777777777777", "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
oxsticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AlcoaGcKEsbF6cJftfZMT7zY2FWYD3khhQr3Uo6YwMMV.enc","fileSha256": "Vb3jnUWHoRb+ffsIykigw0boSHPxvJrM6DC/zO84uUA=","fileEncSha256": "pQ6QZZfSqaXnr1V0cADqA46UXzNtcj6clJTIewReEEc=","mediaKey": "EsX6+k9fKS3XMWtAIngbtyqKTO0DJYZUnFiE3gi70tI=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.7118-24/23558834_495804868918392_3303097117336825156_n.enc?ccb=11-4&oh=01_AVxiEzg98wTpUDiD3xm20OwA111RMzGXdXz4lxJghmIi0Q&oe=62781A7B","fileLength": "28136","mediaKeyTimestamp": "1649687605","isAnimated": false}}}

if(Quoted === "troli") {
var mdoxQuoted = oxtroli
} else if(Quoted === "doc") {
var mdoxQuoted = oxdoc
} else if(Quoted === "vn") {
var mdoxQuoted = oxvn
}else if(Quoted === "gif") {
var mdoxQuoted = oxgif
} else if(Quoted === "gc") {
var mdoxQuoted = oxgclink
} else if(Quoted === "vid"){
var mdoxQuoted = oxvideo
} else if(Quoted === "loc") {
var mdoxQuoted = oxloc
} else if(Quoted === "conta") {
var mdoxQuoted = oxkontak
} else if(Quoted === "img") {
var mdoxQuoted = oximage
} else if(Quoted === "catlog") {
var mdoxQuoted = oxtoko
} else if(Quoted === "sik") {
var mdoxQuoted = oxsticker
} else if(Quoted === "onev") {
var mdoxQuoted = foneview
} else if(Quoted === "m"){
var mdoxQuoted = m
} else {
reply(`${Quoted} is not listed`)
}

 await ser.sendmdforward(m.chat, oxx, 'audio/mp4', '9999999999999', dation, mdoxQuoted, {
 contextInfo: { mentionedJid: [m.sender],
 forwardingScore: 508,
 isForwarded: true,
 externalAdReply :{
 mediaUrl: Link,
 mediaType: 2,
 description: '', 
 title: Text1,
 body: Text2,
 thumbnail: await(await fetch(Imglink)).buffer(), 
 sourceUrl: Link2
}}
})
break
case 'bcgc': case 'bc': case 'broadcast': {
if (!isCreator) return reply(mess.owner)
let getGroups = await ser.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
   let cc = ser.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
cck = text ? text : cc.text
m.reply(`Send Broadcast To ${anu.length} Chat, Finish Time ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
await ser.copyNForward(i, ser.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `ʜᴇʀᴍɪᴛ - ʙᴏᴛ ᴍᴅ ʙʀᴏᴀᴅᴄᴀꜱᴛ \n\n ${cck}`), true).catch(_ => _)
}
m.reply(`Successfully Sending Broadcast To ${anu.length} Groups`)
}
break
case 'chatinfo': {
if (!m.quoted) reply('Reply to mesaage')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⬡ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⬡ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⬡ *Status :* ${read ? 'Read' : 'Unread'}\n\n`
}
ser.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Message!!')
let wokwol = await ser.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
if (!isCreator) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 ser.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'listgc': {
if (!isCreator) return reply(mess.owner)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await ser.groupMetadata(i)
 teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 ser.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'listonline': case 'onlinelist': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
ser.sendText(m.chat, 'Online List:\n\n' + online.map(v => '⬡ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) return reply(`Reply Video/Image With Caption ${prefix + command}`)
reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ser.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await ser.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
return reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
   case 'take':
   case 'wm':
if (isMedia && !m.message.videoMessage || isQuotedImage || isQuotedSticker || isQuotedVideo || isQuotedGif) {
let media = await ser.downloadAndSaveMediaMessage(quoted)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `ㅤ\n\n\n\n\n\n\n\n\n\n\nꪶ͢𝚮𝚵𝚼𝚳𝚰𝚻 𝐒𝚺𝚪ꫂ \n\n\n\n\n\n\n\n\n\n\n\nㅤ`
dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
const nestiker = new Sticker(media, {
pack: satu,
author: dua,
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 50, // The quality of the output file
background: '#000000' // The sticker background color (only for full stickers)
})
buffer = await nestiker.toBuffer() // convert to buffer
ser.sendMessage(m.chat, { sticker: buffer, contextInfo: {forwardingScore: 508, isForwarded: false, "externalAdReply": { "title": "𝚮𝚵𝚼𝚳𝚰𝚻 𝐒𝚺𝚪", "body": "sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ-ᴍᴅ ʙᴏᴛ", "mediaType": "2", "thumbnail": "fake", "mediaUrl": "https://www.instagram.com/reel/CbLE6-Jt-yf/?igshid=YmMyMTA2M2Y=", "thumbnail": xeon, "sourceUrl": ""}}}, { quoted: m})
   } else {
   reply('*_Send to Reply Image/Videos/Sticker/Gif*')
}
   break
case 'ebinary': {
if (!m.quoted.text && !text) return reply(`Send/reply text with caption ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let eb = await eBinary(teks)
reply(eb)
}
break
case 'dbinary': {
if (!m.quoted.text && !text) return reply(`Send/reply text with caption ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let db = await dBinary(teks)
reply(db)
}
break
case 'emojimix': {
if (!text) return reply(`Example : ${prefix + command} 😅+🤔`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await ser.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await ser.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
ser.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) return reply('Reply to sticker')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await ser.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await ser.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`)
if (!quoted) return reply(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let audio = await toAudio(media, 'mp4')
ser.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'mp3':
case 'tomp3':
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let audio = await toAudio(media, 'mp4')
const writer = new ID3Writer(audio);
writer.setFrame('TIT2', global.audiotitle)
.setFrame('TPE1', [global.audioboby])
.setFrame('APIC', {
type: 3,
data: fs.readFileSync('./logoquoted.jpg'),
description: global.audiodesc
});
writer.addTag();

await ser.sendMessage(m.chat, {audio: Buffer.from(writer.arrayBuffer), mimetype: 'audio/mpeg' }, { quoted: m })
break
case 'doc': {
const { fromBuffer } = require('file-type')
let fnm = text ? text : 'File'
let fn = await quoted.download()
let mime = await fromBuffer(fn)
ser.sendMessage(m.chat, {document: fn, mimetype: mime.mime, fileName: fnm+'.'+mime.ext, jpegThumbnail: fs.readFileSync('./docthumb.jpg')}, { quoted : fdoc })
}
break
case 'backup1': {
if (!isCreator) return reply(mess.owner)
doc = fs.readFileSync('./src/database.json')
ser.sendMessage(m.chat, {document: doc, mimetype: 'application/json', fileName: 'database.json'}, { quoted : m })
}
break
case 'session': {
if (!isCreator) return reply(mess.owner)
docsession = fs.readFileSync('./session.json')
ser.sendMessage(m.chat, {document: docsession, mimetype: 'application/json', fileName: 'session.json'}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let audio = await toPTT(media, 'mp4')
ser.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})
}
break
case 'ox': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
let media = await quoted.download()
let oxaudio = await toPTT(media, 'mp4')
ser.sendMessage(text, {audio: oxaudio, mimetype :  'audio/mp4' , seconds: 119998800, ptt : true, contextInfo: {forwardingScore: 508, isForwarded: false, "externalAdReply": { "title": "𝚮𝚵𝚼𝚳𝚰𝚻 𝐒𝚺𝚪", "body": "sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ-ᴍᴅ ʙᴏᴛ", "mediaType": "2", "thumbnail": "fake", "mediaUrl": "https://www.instagram.com/reel/CbLE6-Jt-yf/?igshid=YmMyMTA2M2Y=", "thumbnail": xeon, "sourceUrl": ""}}}, { quoted: ftroli})
}
break
case 'togif': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await ser.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await ser.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
reply(mess.wait)
let media = await ser.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apinobg = 'NgZh6Aao3ejED3kFr7HLuvti'
hmm = await './src/remobg-'+getRandom('')
localFile = await ser.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
  path: localFile,
  apiKey: apinobg,
  size: "regular",
  type: "auto",
  scale: "100%",
  outputFile 
}).then(async result => {
ser.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'google': {
if (!text) return reply(`Example : ${prefix + command} fatih arridho`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⬡ *Title* : ${g.title}\n`
teks += `⬡ *Description* : ${g.snippet}\n`
teks += `⬡ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'img': case 'gimage': case 'googleimage': {
if (!text) return reply(`Example : ${prefix + command} ml nana`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: ser.user.name,
buttons: buttons,
headerType: 4
}
ser.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'setinfo':
if (!isQuotedAudio) return reply('reply to audio')
mediaset = await ser.downloadAndSaveMediaMessage(quoted)
teks = budy.slice(9)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
oi3 = teks.split('|')[2]
ran = getRandom('.mp3')
ranp = getRandom('.jpg')
got.stream(oi3).pipe(fs.createWriteStream(ranp + '.jpg'));
ffmpeg(mediaset)
.audioBitrate(320)
.save('./' + ran + '.mp3')
.on('end', async () => {
const writer = new ID3Writer(fs.readFileSync('./' + ran + '.mp3'));
writer.setFrame('TIT2', oi1)
.setFrame('TPE1', [oi2])
.setFrame('APIC', {
type: 3,
data: fs.readFileSync(ranp + '.jpg'),
description: oi2
});
writer.addTag();

await ser.sendMessage(m.chat, {audio: Buffer.from(writer.arrayBuffer), mimetype: 'audio/mp4' }, { quoted: m })
});
break
case 'trim':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply to audio`)
teks = budy.slice(6)
oi1 = teks.split(':')[0]
oi2 = teks.split(':')[1]
delb = await ser.downloadMediaMessage(quoted)
fs.writeFileSync('./secret.mp3', delb)
MP3Cutter.cut({
src: 'secret.mp3',
target: 'target.mp3',
start: oi1,
end: oi2 
});
mediatr = fs.readFileSync('./target.mp3')
let audiotr = await toAudio(mediatr, 'mp4')
ser.sendMessage(m.chat, {audio: audiotr, mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync('./target.mp3')
fs.unlinkSync('./secret.mp3')
break
case 'react': {
if (!isCreator) return reply(mess.owner)
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
ser.sendMessage(m.chat, reactionMessage)
}
break
   case 'mediafire':
   const { mediafireDl } = require('./lib/mediafire.js')
   medialink = text || mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
   if (medialink.length < 0) return reply('*Where is the link?*')
   res = await mediafireDl(medialink)
   result = `*MediaFire Downloader*
  
Name : ${res[0].nama}
Size : ${res[0].size}
Link : ${res[0].link}
*_please wait_*`
 reply(result)
 ser.sendMessage(m.chat, {document: {url: res[0].link }, mimetype: res[0].mime, fileName: `${res[0].nama}` }, {quoted:m}).catch ((err) => reply("error Maybe fileLength high or maybe invalid link"))
 break
case '3000years':
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (isQuotedImage) {
reply(mess.wait)
 ahah = await ser.downloadMediaMessage(quoted)
ranp = getRandom('.jpg')
fs.writeFileSync(`./${ranp}`, ahah);
owgi = await upload(fs.readFileSync(ranp))
ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
ser.sendImage(m.chat, gambar, '© ʜᴇʀᴍɪᴛ-sᴇʀ', m)
fs.unlinkSync(ranp)
}).catch(err => {
reply(`${err}`)
});  
} else if (isQuotedTag || isQuotedReply) {
reply(mess.wait)
ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
oppp = await ser.profilePictureUrl(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
fs.writeFileSync('janckuk.jpeg', datae, 'base64')
anuk = await upload(fs.readFileSync('./janckuk.jpeg'))
ini_gen = `${command}`
console.log(ini_gen)
ameApi.generate(ini_gen, {
url : anuk
}).then(gambar => {
ser.sendImage(m.chat, gambar, '© ʜᴇʀᴍɪᴛ-sᴇʀ', m)
fs.unlinkSync('./janckuk.jpeg')
}).catch(err => {
reply(`${err}`)
});    
} else {
reply("Tag or reply the target")
}
break
case 'spotify':
teks = budy.slice(9)
title = teks.split('/')[0]
author = teks.split('/')[1]
album = teks.split('/')[2]
start = teks.split('/')[3]
end = teks.split('/')[4]
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
mspotfy = await ser.downloadAndSaveMediaMessage(quoted)
anu = await TelegraPh(mspotfy)
let canvacord = require("canvacord");

const card = new canvacord.Spotify()
.setAuthor(author)
.setAlbum(album)
.setStartTimestamp(start)
.setEndTimestamp(end)
.setImage(anu)
.setTitle(title);

card.build()
.then(buffer => {
canvacord.write(buffer, "spotify.png");
});
buf = fs.readFileSync('./spotify.png')
ser.sendImage(m.chat, buf, '© sᴘᴏʀᴛɪғʏ ʙʏ ᴄᴀʀᴅ ʜᴇʀᴍɪᴛ-sᴇʀ', fkontak)
fs.unlinkSync('./spotify.png')
  break
case 'hitler':
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
medit = await ser.downloadAndSaveMediaMessage(quoted)
anu = await TelegraPh(medit)
Canvacord.Canvas.hitler(anu)
  .then(async buffer => {
 ser.sendImage(m.chat, buffer, 'ʜᴇʀᴍɪᴛ-sᴇʀ ᴍᴅ', m)
  }) 
break
case 'deleteimg':
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
medit = await ser.downloadAndSaveMediaMessage(quoted)
anu = await TelegraPh(medit)
Canvacord.Canvas.delete(anu)
  .then(async buffer => {
 ser.sendImage(m.chat, buffer, 'ʜᴇʀᴍɪᴛ-sᴇʀ ᴍᴅ', m)
  }) 
break
case 'pinterest': {
reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
ser.sendMessage(m.chat, { image: { url: result }, caption: '⬡ Media Url : '+result }, { quoted: m })
}
break
case 'couplepp': case 'ppcouple': {
reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
ser.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
ser.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffee': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕Random Coffee☕`,
footer: ser.user.name,
buttons: buttons,
headerType: 4
}
ser.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wallpaper': {
if (!text) return reply('Enter Query Title')
let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⬡ Title : ${result.title}\n⬡ Category : ${result.type}\n⬡ Detail : ${result.source}\n⬡ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: ser.user.name,
buttons: buttons,
headerType: 4
}
ser.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': case 'wiki': {
if (!text) return reply('Enter Query Title')
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⬡ Title : ${result.title}\n⬡ Source : ${result.source}\n⬡ Media Url : ${result.image}`,
footer: ser.user.name,
buttons: buttons,
headerType: 4
}
ser.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ringtone': {
if (!text) return reply(`Example : ${prefix + command} black rover`)
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
ser.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply(mess.wait)
let media = await ser.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
ser.sendMessage(m.chat, {audio: buff, mimetype :  'audio/mp4' , duration : 119998800, ptt : true, contextInfo: {forwardingScore: 508, isForwarded: false, "externalAdReply": { "title": "BOT᭄ꦿ╰•‿•╯ꃅꏹꋪᎷꀤ꓄", "body": "ʙᵒᴛ᭄HERMIT•ˢᵉʳ", "mediaType": "2", "thumbnail": "fake", "mediaUrl": "hehe", "thumbnail": xeon, "sourceUrl": ""}}}, { quoted: m})
fs.unlinkSync(ran)
})
} else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case 'setcmd': {
if (!m.quoted) return reply('Reply Message!')
if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
if (!text) return reply(`For What Command?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return reply(`No hashes`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return reply('You have no permission to delete this sticker command')   
delete global.db.sticker[hash]
reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
ser.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) return reply(mess.owner)
if (!m.quoted) return reply('Reply Message!')
if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return reply('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) return reply('Reply Message You Want To Save In Database')
if (!text) return reply(`Example : ${prefix + command} message name`)
let M = proto.WebMessageInfo
let msgs = global.db.database
if (text.toLowerCase() in msgs) return reply(`'${text}' telah terdaftar di list pesan`)
msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
reply(`Successfully added message in message list as '${text}'

Access with ${prefix}getmsg ${text}
View list of message with ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) return reply(`Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not registered in message list`)
let _m = ser.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
if (
v !== null &&
typeof v === 'object' &&
'type' in v &&
v.type === 'Buffer' &&
'data' in v &&
Array.isArray(v.data)) {
return Buffer.from(v.data)
}
return v
}))
await _m.copyNForward(m.chat, true)
}
break
case 'addmsg2': {
if (!m.quoted) return reply('Reply Message You Want To Save In Database')
if (!text) return reply(`Example : ${prefix + command} message name`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return reply(`'${text}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'

Access with ${prefix}getmsg ${text}
View list of message with ${prefix}listmsg`)
}
break
case 'getmsg2': {
if (!text) return reply(`Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not registered in message list`)
ser.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
delete msgs[text.toLowerCase()]
reply(`Successfully deleted '${text}' from the message list`)
}
break
case 'anonymous': {
if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [{
urlButton: {
displayText: 'Report Bug🐛',
url: 'https://wa.me/916909137213?text=hello+bro+i+found+a+bug+in+your+bot'
}
}, {
quickReplyButton: {
displayText: '👻Start Anonymous👻',
id: 'start'
}
}]
ser.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ser.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, ser.user.name, m)
}
break
case 'sendkontak': case 'sendcontact': {
if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
throw false
}
let profile = await ser.profilePictureUrl(room.b)
let status = await ser.fetchStatus(room.b)
let msg = await ser.sendImage(room.a, profile, `Name : ${await ser.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
ser.sendContact(room.a, [room.b.split("@")[0]], msg)
}
break
case 'keluar': case 'leave': {
if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
throw false
}
reply('Ok')
let other = room.other(m.sender)
if (other) await ser.sendText(other, `_Partner Has Left Anonymous Session_`, m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'mulai': case 'start': {
if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, ser.user.name, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
{ buttonId: 'stop', buttonText: { displayText: '😏Stop😏' }, type: 1 }
]
await ser.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, ser.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await ser.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, ser.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, ser.user.name, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await ser.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: '🍃Skip🍃' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
]
await ser.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ser.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await ser.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ser.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: '😏Stop😏' }, type: 1 }
]
await ser.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, ser.user.name, m)
}
break
}
case 'public': {
if (!isCreator) return reply(mess.owner)
ser.public = true
reply('Successfully Changed To Public Usage')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner)
ser.public = false
reply('Successfully Changed To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

NodeJS Memory Usaage
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
case 'owner': case 'creator': {
ser.sendContact(m.chat, global.pemilik, ftroli)
}
break
case 'bug': case 'report': {
if(!text) return reply(`Enter The Bug Example\n\n${command} Menu Error `)
ser.sendMessage(`917034892686@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
}
break 
   case 'alive': case 'bot':
ser.sendPresenceUpdate('recording', m.chat)
timestampe = speed();
latensie = speed() - timestampe
contentText = `ʜᴇʏ ᴠʀᴏ ${pushname}
ɪ ᴀᴍ ᴀʟɪᴠᴇ ᴠʀᴏ!

⬡ ʙᴏᴛ ɴᴀᴍᴇ : ${global.botnma}
⬡ sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
⬡ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
⬡ ʀᴀᴍ : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`

buttons = [
  {index: 1, urlButton: {displayText: 'Git hub!', url: 'https://github.com/HERMIT-SIR'}},
  {index: 2, callButton: {displayText: 'Call Me!', phoneNumber: '+0'}},
  {index: 3, quickReplyButton: {displayText: 'SPEED TEST', id: '.ping'}},
  {index: 4, quickReplyButton: {displayText: 'MENU', id: '.menu'}},
  {index: 5, quickReplyButton: {displayText: 'OWNER', id: '.owner'}},
            ]
SendB5image(m.chat, contentText, global.ownernma, fs.readFileSync('./media/mainpic.jpg'), fs.readFileSync('./media/mainpic.jpg'), buttons, m)
break
case 'menu':
ser.sendPresenceUpdate('recording', m.chat)
timestampe = speed();
latensie = speed() - timestampe
let groups = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let privat = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let totalchat = await store.chats.all().map(v => v.id)
context = `╭───❏「 BOT INFO 」❏──╮
│
├❏ ʙᴏᴛ ɴᴀᴍᴇ : ${global.botnma}
├❏ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownernma}
├❏ sᴘᴇᴇᴅ : ${latensie.toFixed(4)} miliseconds
├❏ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
├❏ ɢʀᴏᴜᴘ : ${groups.length}
├❏ ᴘʀɪᴠᴀᴛᴇ : ${privat.length}
├❏ ᴛᴏᴛᴀʟ : ${totalchat.length}
├❏ ʜᴏsᴛ ᴏs : Heroku
├❏ ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
├❏ ʀᴀᴍ : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
│
├─────────────────┤
├───❏「 USER INFO 」❏ ─┤
│
├❏ ɴᴀᴍᴇ : ${pushname}
├❏ ɪᴛsᴍᴇ : ${itsMe}
├❏ ɪsᴏᴡɴᴇʀ : ${itsowner}
│
╰─────────────────╯`
butmenu = [
{
urlButton: {
displayText: '𝐺𝑖𝑡𝐻𝑢𝑏 𝑃𝑟𝑜𝑓𝑖𝑙𝑒',
url: 'https://github.com/HERMIT-SIR'
}
}, {
urlButton: {
displayText: '𝑆𝑐𝑟𝑖𝑝𝑡',
url: 'https://github.com/HERMIT-SIR/HERMIT-V5'
}
}, {
quickReplyButton: {
displayText: '𝑂𝑤𝑛𝑒𝑟',
id: `${prefix}owner`
}
}, {
quickReplyButton: {
displayText: '𝐴𝑙𝑙 𝑀𝑒𝑛𝑢',
id: `${prefix}allmenu`
}
}, {
quickReplyButton: {
displayText: '𝐿𝑖𝑠𝑡 𝐶𝑜𝑚𝑚𝑎𝑛𝑑',
id: `${prefix}command`
}
}]
if(typemenu == 'hydraimage'){
 template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"templateMessage": {
"hydratedTemplate": {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
"fileLength": "500000000000000",
"mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": xeon,
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
 },
"hydratedContentText": context,
"hydratedFooterText": `${global.botnma}`,
"hydratedButtons": butmenu
}
}
}), { userJid: m.chat, quoted: m })
  ser.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
if(typemenu == 'hydradoc'){
template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"templateMessage": {
"hydratedTemplate": {
 "documentMessage": { 
"url": "https://mmg.whatsapp.net/d/f/AsV3HlGpsFFvgawy77eryp6E9nlIy2B6Z994lOotheDg.enc",
"mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
"title": "Footer text", 
"fileSha256": "iBDCLwUqX4xIypRmwJfM8AaGvP8A7XtE9o+fgJY+w4k=",
"fileLength": 500000000000000, 
"pageCount": 5555, 
"mediaKey": "s0BNiZ5ZQY7VXJee1yHr2ippWOidPt9TV/IweIuwB1s=",
"fileName": "HERMIT SER BOT", 
"fileEncSha256": "8Qjd+PChLhwfUOFCBomhd9IyMRUOFgQ8ftdd6EGo0zo=",
"directPath": "/v/t62.7118-24/12102761_3192906891035576_6871625905296628001_n.enc?ccb=11-4&oh=01_AVxZHoDPW6uYn9OG237FIbub5m2aidndHT04fjlgNAdOTA&oe=626E61F7",
"mediaKeyTimestamp": "1648983951",
"jpegThumbnail": await getBuffer('https://telegra.ph/file/fec33a946e839f749a070.jpg'),
   },
   "hydratedContentText": context,
"hydratedFooterText": `${global.botnma}`,
"hydratedButtons": butmenu
}
}
}), { userJid: m.chat, quoted: m })
  ser.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
if(typemenu == 'document'){
ser.sendBD(m.chat, context, global.botnma, 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png', [['OWNER', `${prefix}owner`], ['ALL MENU', `${prefix}allmenu`], ['LIST COMMAND', `${prefix}command`]], {                      
  key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${global.quotedname}`, 'jpegThumbnail': quotedimg}}},
   { 
   jpegThumbnail: docthumb, fileName: 'ʜᴇʀᴍɪᴛ-sᴇʀ', mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileLength: 9999999999999, pageCount: 999999999,
   mentions: [m.sender],
   contextInfo: {
   externalAdReply :{
  mediaUrl: 'https://www.instagram.com/',
  mediaType: 2,
  description: '', 
  title: `${ser.user.name}`,
  body: 'sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ',
  thumbnail: quotedimg,
  sourceUrl: ''
  }}
   })
 }
if(typemenu == 'image'){
   ser.sendBI(m.chat, context, global.botnma, 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png', [['OWNER', `${prefix}owner`], ['ALL MENU', `${prefix}allmenu`], ['LIST COMMAND', `${prefix}command`]], {                      
  key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${global.quotedname}`, 'jpegThumbnail': quotedimg}}},
   { 
   jpegThumbnail: xeon, fileLength: 9999999999999,
   mentions: [m.sender],
   contextInfo: {
   externalAdReply :{
  mediaUrl: 'https://www.instagram.com/',
  mediaType: 2,
  description: '', 
  title: `${ser.user.name}`,
  body: 'sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ',
  thumbnail: quotedimg,
  sourceUrl: ''
  }}
   })
 }
if(typemenu == 'video'){
 ser.sendBV(m.chat, context, global.botnma, 'https://a.uguu.se/ksrsMuUJ.mp4', [['OWNER', `${prefix}owner`], ['ALL MENU', `${prefix}allmenu`], ['LIST COMMAND', `${prefix}command`]], {                      
  key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${global.quotedname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${global.quotedname}`, 'jpegThumbnail': quotedimg}}},
   { 
   jpegThumbnail: xeon, fileLength: 9999999999999, seconds: 119998800,
   mentions: [m.sender],
   contextInfo: {
   externalAdReply :{
  mediaUrl: 'https://www.instagram.com/',
  mediaType: 2,
  description: '', 
  title: `${ser.user.name}`,
  body: 'sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ',
  thumbnail: quotedimg,
  sourceUrl: ''
  }}
   })
 }
 break
 case 'setreply':
 replyType = text
 reply(mess.success)
 break
 case 'setmenu':
 if (!isCreator) return reply(mess.owner)
typemenu = text
reply(mess.success)
break
case 'command':{
listtext = `╭─⬡「 *INFO BOT* 」⬡
│ *Prefix* :  ${prefix} 
│ *Name* : ${global.botnma}
│ *Owner* : ${global.ownernma}
│ *Mode* : ${ser.public ? 'Public-Mode' : 'Self-Mode'}
│ *Time* : ${time}
│ *Date* : ${date}
│ *Week* : ${week}
│ *Runtime* : ${runtime(process.uptime())}
│ *Lib* : Baileys-Md@4.0.0
╰─⬡`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `Hey 👋 bro ${pushname}`,
description: listtext,
buttonText: "Click Here",
footerText: " ",
listType: "SINGLE_SELECT",
sections: 
[{"title": "⬡─────「 1 」","rows": [{"title": "Group Menu", "rowId": `${prefix}grupmenu`}]
},{"title": "⬡─────「 2 」","rows": [{"title": "Download Menu", "rowId": `${prefix}downloadmenu`}]
},{"title": "⬡─────「 3 」","rows": [{"title": "Search Menu", "rowId": `${prefix}searchmenu`}]
},{"title": "⬡─────「 4 」","rows": [{"title": "Fun Menu", "rowId": `${prefix}funmenu`}]
},{"title": "⬡─────「 5 」","rows": [{"title": "Convert Menu", "rowId": `${prefix}convertmenu`}]
},{"title": "⬡─────「 6 」","rows": [{"title": "Database Menu", "rowId": `${prefix}databasemenu`}]
},{"title": "⬡─────「 7 」","rows": [{"title": "Voice Changer Menu", "rowId": `${prefix}voicemenu`}]
},{"title": "⬡─────「 8 」","rows": [{"title": "Owner Menu", "rowId": `${prefix}ownermenu`}]
},{"title": "⬡─────「 9 」","rows": [{"title": "Other Menu", "rowId": `${prefix}nocategorymenu`}]}],
listType: 1
}
}), { userJid: m.chat, quoted: fgif })
ser.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'grupmenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${groupmenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'downloadmenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${downmenu}`, ' ', menuvid, xeon, menuButtons, m)
break 
case 'searchmenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${searchmenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'funmenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${funmenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'voicemenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${voicemenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'convertmenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${convertmenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'nocategorymenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${miscmenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'databasemenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${databasemenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'ownermenu':
sendbuttongif(m.chat, `${botinfo}\n${global.readmore}\n${ownermenu}`, ' ', menuvid, xeon, menuButtons, m)
break
case 'allmenu':
listmenu = `
${botinfo}
${global.readmore}
${groupmenu}

${downmenu}

${searchmenu}

${funmenu}

${voicemenu}

${convertmenu}

${miscmenu}

${databasemenu}

${ownermenu}`

sendbuttongif(m.chat, listmenu, ' ', menuvid, xeon, menuButtons, m)
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
let _m = ser.serializeM(JSON.parse(JSON.stringify(msgs[budy.toLowerCase()]), (_, v) => {
if (
v !== null &&
typeof v ==a= 'object' &&
'type' in v &&
v.type === 'Buffer' &&
'data' in v &&
Array.isArray(v.data)) {
return Buffer.from(v.data)
}
return v
}))
await _m.copyNForward(m.chat, true)
}
}


} catch (err) {
console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
