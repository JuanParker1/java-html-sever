(async () => {
switch (command) {
case 'whatmusic':
case 'find':
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
}
})()