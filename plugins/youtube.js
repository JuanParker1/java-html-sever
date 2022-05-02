(async () => {
if (budy.startsWith("https://www.instagram.com")) {
ser.sendPresenceUpdate('recording', m.chat)
  res = await igdl(`${budy}`)
if (res.error === 'Invalid URL or token mismatch.') return m.reply("*No media found!*")
m.reply(`_Sending ${res.medias.length} Media of ${res.user.username}_`)
for(let i of res.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
let igpreview = await getBuffer(i.preview)
ser.sendMessage(m.chat, { video: link, jpegThumbnail: igpreview }, { quoted: m })
} else {
let link = await getBuffer(i.url)
ser.sendMessage(m.chat, { image: link, jpegThumbnail: link }, { quoted: m })
}
}
}
if (budy.startsWith("https://youtu")) {
ser.sendPresenceUpdate('recording', m.chat)
takes = budy.replace('https://youtube.com/shorts/','').replace('?feature=share','').replace('https://youtube.com/watch?v=','').replace('https://youtu.be/','')   
let search = await yts(`https://youtu.be/${takes}`)
let info = await ytdl.getInfo(`https://youtu.be/${takes}`);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let image = await getBuffer(search.videos[0].thumbnail)
contentText = `
*⬡ Title :* ${search.videos[0].title}
*⬡ ID :* ${search.videos[0].videoId}
*⬡ Duration :* ${search.videos[0].timestamp}
*⬡ Viewers :* ${h2k(search.videos[0].views)}
*⬡ Uploaded :* ${search.videos[0].ago}
*⬡ Author :* ${search.videos[0].author.name}
*⬡ Channel :* ${search.videos[0].author.url}
*⬡ Audio Size :* ${FileSize(audio[0].contentLength)}
*⬡ Video Size :* ${FileSize(format.contentLength)}`

let footer = "ꪶ᪾͢٭𝛨𝛦𝛶𝛭𝛪𝛵٭𝛿𝛦𝛶٭ꫂ⁩"
buttons = [
  {index: 1, urlButton: {displayText: 'Video Link', url: `${search.videos[0].url}`}},
  {index: 2, callButton: {displayText: 'Owner!', phoneNumber: '+0'}},
  {index: 3, quickReplyButton: {displayText: '📹 Video', id: `.ytmp4 ${search.videos[0].url} 360p`}},
  {index: 4, quickReplyButton: {displayText: '🎵 Audio', id: `.ytmp3 ${search.videos[0].url} 128kbps`}},
  {index: 5, quickReplyButton: {displayText: '🔍Youtube Search', id: `.yts ${search.videos[0].url}`}},
]
SendB5image(m.chat, contentText, footer, image, image, buttons, m)
}
switch (command) {
case 'whatmusic':
case 'find':
ser.sendPresenceUpdate('recording', m.chat)
if (/audio/.test(mime)) {

reply(mess.wait)
let mediafindd = await ser.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediafindd} ${ran}`, (err) => { fs.unlinkSync(mediafindd)
if (err) return reply('*Failed to convert audio to ppt!*')
let sample = fs.readFileSync(ran)

acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return reply("Music not found")
var res = metadata.metadata.music[0]

let rus = await yts(res.title)
if(rus.all.length == "0") return reply("Audio can't be downloaded")
let ras = await rus.all.filter(v => v.type == 'video')

let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var getthumb =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var getthumb =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let image = await getBuffer(`${getthumb}`)
let buttons = [
  {index: 1, urlButton: {displayText: 'Video Link', url: `${ras[0].ur}`}},
  {index: 2, callButton: {displayText: 'Owner!', phoneNumber: '+0'}},
  {index: 3, quickReplyButton: {displayText: '📹 Video', id: `.ytmp4 ${ras[0].url}`}},
  {index: 4, quickReplyButton: {displayText: '🎵 Audio', id: `.ytmp3 ${ras[0].url}`}},
  {index: 5, quickReplyButton: {displayText: '🔍Youtube Search', id: `.yts ${ras[0].url}`}},
]
let contentText = `*RESULT FOUND*

📂 *Title:* ${res.title}
👤 *Artist:* ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 *Album:* ${res.album.name || ''}
🧩 *Genres:* ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 *Release Date:* ${res.release_date}
⏳ *Duration:* ${ras[0].timestamp}
🎧 *Audio Size:* ${FileSize(audio[0].contentLength)}
🎬 *Video Size:* ${FileSize(format.contentLength)}`
let footer = "ꪶ᪾͢٭𝛨𝛦𝛶𝛭𝛪𝛵٭𝛿𝛦𝛶٭ꫂ⁩"
SendB5image(m.chat, contentText, footer, image, image, buttons, m)
});
fs.unlinkSync(ran)
})
} else if (/video/.test(mime)) {
reply(mess.wait)
let mediafind = await ser.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediafind} -vn ${ran}`, (err) => {
fs.unlinkSync(mediafind)
if (err) return reply(`Err: ${err}`)
let sample = fs.readFileSync(ran)

acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return reply("*Music not found!*")
var res = metadata.metadata.music[0]

let rus = await yts(res.title)
if(rus.all.length == "0") return reply("*Video can't be downloaded!*")
let ras = await rus.all.filter(v => v.type == 'video')

let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var getthumb =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var getthumb =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let image = await getBuffer(`${getthumb}`)
let buttons = [
  {index: 1, urlButton: {displayText: 'Video Link', url: `${ras[0].ur}`}},
  {index: 2, callButton: {displayText: 'Owner!', phoneNumber: '+0'}},
  {index: 3, quickReplyButton: {displayText: '📹 Video', id: `.ytmp4 ${ras[0].url}`}},
  {index: 4, quickReplyButton: {displayText: '🎵 Audio', id: `.ytmp3 ${ras[0].url}`}},
  {index: 5, quickReplyButton: {displayText: '🔍Youtube Search', id: `.yts ${ras[0].url}`}},
]
let contentText = `*RESULT FOUND*

📂 *Title:* ${res.title}
👤 *Artist:* ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 *Album:* ${res.album.name || ''}
🧩 *Genres:* ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 *Release Date:* ${res.release_date}
⏳ *Duration:* ${ras[0].timestamp}
🎧 *Audio Size:* ${FileSize(audio[0].contentLength)}
🎬 *Video Size:* ${FileSize(format.contentLength)}`
let footer = "ꪶ᪾͢٭𝛨𝛦𝛶𝛭𝛪𝛵٭𝛿𝛦𝛶٭ꫂ⁩"
SendB5image(m.chat, contentText, footer, image, image, buttons, m)
});
fs.unlinkSync(ran)
 })
 } else {
reply("*Reply to Audio or Video!*")
}
break
case 'ytmp3': case 'ytaudio': {
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
takes = text.replace('https://youtube.com/shorts/','').replace('?feature=share','').replace('https://youtube.com/watch?v=','').replace('https://youtu.be/','')
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(`https://youtu.be/${takes}`, quality)
if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
let thumb = await getBuffer(media.thumb)
 ser.sendAudio(m.chat, media.dl_link, m, {
 contextInfo: { mentionedJid: [m.sender],
 externalAdReply :{
 mediaUrl: text,
 mediaType: 2,
 description: '', 
 title: `.•♫•♬• ${media.title} •♬•♫•.`,
 body: `${ser.user.name}`,
 thumbnail: thumb, 
 }}
 })
 }
 break
case 'video': case 'ytmp4': case 'ytvideo': {
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
takes = text.replace('https://youtube.com/shorts/','').replace('?feature=share','').replace('https://youtube.com/watch?v=','').replace('https://youtu.be/','')   
let quality = args[1] ? args[1] : '360p'
let media = await ytv(`https://youtu.be/${takes}`, quality)
if (media.filesize >= 999999) return reply('Video size is too big '+util.format(media))
let img = await getBuffer(media.thumb)
ser.sendMessage(m.chat, { video: { url: media.dl_link }, quoted: setQuoted, mimetype: 'video/mp4', jpegThumbnail: img, filename: `${media.title}.mp4`, caption: `*Title :* ${media.title}\n*Size :* ${media.filesizeF}\n*Resololution :* ${args[1] || '360p'}`})
}
break
case 'getmusic': {
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} 1`)
if (!m.quoted) return reply('Reply Message')
if (!m.quoted.isBaileys) return reply(`Can only reply to messages from bots`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return reply(`Maybe The Message You Replied Does Not Contain Ytsearch Results`)
let quality = args[1] ? args[1] : '320kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
ser.sendImage(m.chat, media.thumb, `⬡ Title : ${media.title}\n⬡ File Size : ${media.filesizeF}\n⬡ Url : ${isUrl(text)}\n⬡ Ext : MP3\n⬡ Resolution : ${args[1] || '320kbps'}`, m)
ser.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: setQuoted })
}
break
case 'getvideo': {
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} 1`)
if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
if (!m.quoted.isBaileys) return reply(`Hanya Bisa Membalas Pesan Dari Bot`)
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return reply(`Maybe the message you replied does not contain the ytsearch result`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
ser.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⬡ Title : ${media.title}\n⬡ File Size : ${media.filesizeF}\n⬡ Url : ${isUrl(text)}\n⬡ Ext : MP3\n⬡ Resolution : ${args[1] || '360p'}` }, { quoted: setQuoted })
}
break
case 'song': case 'play': case 'ytplay': {
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} the box`)
let search = await yts(text)
let info = await ytdl.getInfo(`${search.videos[0].url}`);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let image = await getBuffer(search.videos[0].thumbnail)
contentText = `
*⬡ Title :* ${search.videos[0].title}
*⬡ ID :* ${search.videos[0].videoId}
*⬡ Duration :* ${search.videos[0].timestamp}
*⬡ Viewers :* ${h2k(search.videos[0].views)}
*⬡ Uploaded :* ${search.videos[0].ago}
*⬡ Author :* ${search.videos[0].author.name}
*⬡ Channel :* ${search.videos[0].author.url}
*⬡ Audio Size :* ${FileSize(audio[0].contentLength)}
*⬡ Video Size :* ${FileSize(format.contentLength)}`

let footer = "ꪶ᪾͢٭𝛨𝛦𝛶𝛭𝛪𝛵٭𝛿𝛦𝛶٭ꫂ⁩"
buttons = [
  {index: 1, urlButton: {displayText: 'Video Link', url: `${search.videos[0].url}`}},
  {index: 2, callButton: {displayText: 'Owner!', phoneNumber: '+0'}},
  {index: 3, quickReplyButton: {displayText: '📹 Video', id: `.ytmp4 ${search.videos[0].url} 360p`}},
  {index: 4, quickReplyButton: {displayText: '🎵 Audio', id: `.ytmp3 ${search.videos[0].url} 128kbps`}},
  {index: 5, quickReplyButton: {displayText: '🔍Youtube Search', id: `.yts ${search.videos[0].url}`}},
]
SendB5image(m.chat, contentText, footer, image, image, buttons, m)
}
break
case 'playlist':{
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} the box edit audio`)
yts(q).then((res) => {let yt = res.videos; let list = []; let startnum = 1; for (var x of yt) {let but = { title: 'ʀᴇsᴜɪᴛ - '+ startnum++ +' ',
rows: [{title: `${x.title}`, description: `Duration : ${x.timestamp}`, rowId: `${prefix}play ${x.url}`}]}; list.push(but)}; listplay(m.chat, `⌕ ${text}\n`, `Hey ${pushname} select a song below`, list)}).catch((err) => {reply('YT SEARCH Error : ' + err)})}
break
case 'story':
case 'stories':
ser.sendPresenceUpdate('recording', m.chat)
if(!text && !m.quoted) return reply("*Give me a url.*")
match = m.quoted ? m.quoted.text : text
if (
  match === "" ||
  (!match.includes("/stories/") && match.startsWith("http"))
)
  return reply("*Give me a url.*")
if (match.includes("/stories/")) {
  const s = match.indexOf("/stories/") + 9
  const e = match.lastIndexOf("/")
  match = match.substring(s, e)
}
if (match.includes("_Sending")) {
  const u = match.indexOf("of")
  const x = match.lastIndexOf("_")
  match = match.substring(u, x).replace('of ','')
   }
 res = await igstory(`${match}`)
if (res.error === 'No media found.') return m.reply("*No media found!*")
m.reply(`_Sending ${res.medias.length} stories of ${res.user.username}_`)
for(let i of res.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
let igpreview = await getBuffer(i.preview)
ser.sendMessage(m.chat, { video: link, jpegThumbnail: igpreview }, { quoted: m })
} else {
let link = await getBuffer(i.url)
let igpreview = await getBuffer(i.preview)
ser.sendMessage(m.chat, { image: link, jpegThumbnail: igpreview }, { quoted: m })
}
}
break
case 'igdl':
case 'instagram':
case 'insta':
ser.sendPresenceUpdate('recording', m.chat)
if(!text && !m.quoted) return reply('*Enter the link!*')
link = m.quoted ? m.quoted.text : text
if (!link || !/instagram.com/.test(link))
return reply('*Enter the link!*')
 res = await igdl(`${link}`)
if (res.error === 'Invalid URL or token mismatch.') return m.reply("*No media found!*")
m.reply(`_Sending ${res.medias.length} Media of ${res.user.username}_`)
for(let i of res.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
let igpreview = await getBuffer(i.preview)
ser.sendMessage(m.chat, { video: link, jpegThumbnail: igpreview }, { quoted: m })
} else {
let link = await getBuffer(i.url)
ser.sendMessage(m.chat, { image: link, jpegThumbnail: link }, { quoted: m })
}
}
break
case 'yts': case 'ytsearch': {
ser.sendPresenceUpdate('recording', m.chat)
if (!text) return reply(`Example : ${prefix + command} The box edit audio`)
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let ytsthumb = await getBuffer(search.all[0].thumbnail)
let no = 1
for (let i of search.all) {
teks += `⬡ No : ${no++}\n⬡ Type : ${i.type}\n⬡ Video ID : ${i.videoId}\n⬡ Title : ${i.title}\n⬡ Views : ${i.views}\n⬡ Duration : ${i.timestamp}\n⬡ Upload At : ${i.ago}\n⬡ Author : ${i.author.name}\n⬡ Url : ${i.url}\n\n─────────────────\n\n`
}
ser.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, fileLength: 4444444444, jpegThumbnail: ytsthumb, caption: teks }, { quoted: setQuoted })
}
break
}
})()
