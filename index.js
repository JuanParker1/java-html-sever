//═══════[modules]════════\\
require('./config')
const { default: serConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const fetch = require('node-fetch');
const knights = require("knights-canvas")
const  { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startser() {
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const ser = serConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['HERMIT-MD','Safari','1.0.0'],
        auth: state,
        version
    })

    store.bind(ser.ev)

    ser.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await ser.sendContact(callerId, global.owner)
    ser.sendMessage(callerId, { text: `Automatic block system!\nDon't call bot!\nPlease contact the owner to open !`}, { quoted : pa7rick })
    ser.sendMessage(`917034892686@s.whatsapp.net`, {text: `*Report Bot:* Someone Called Bot`})
    await sleep(8000)
    await ser.updateBlockStatus(callerId, "block")
    }
    })

    ser.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!ser.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(ser, mek, store)
        require("./hermitmd")(ser, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    ser.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await ser.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
//═══════[get profile pic]════════\\
                try {
                    ppuser = await ser.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

//═══════[get group dp]════════\\
                try {
                    ppgroup = await ser.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                
//═══════[welcome]════════\\
let nama = await ser.getName(num)
memb = metadata.participants.length
let status = await ser.fetchStatus(num)

let welcome = await new knights.Welcome()
    .setUsername(nama)
    .setGuildName(metadata.subject)
    .setGuildIcon(ppgroup)
    .setMemberCount(memb)
    .setAvatar(ppuser)
    .setBackground("https://telegra.ph/file/dd99b2a0b095845e2639d.jpg")
    .toAttachment();
  
  pp_wel = welcome.toBuffer();
  
let leave = await new knights.Goodbye()
    .setUsername(nama)
    .setGuildName(metadata.subject)
    .setGuildIcon(ppgroup)
    .setMemberCount(memb)
    .setAvatar(ppuser)
    .setBackground("https://telegra.ph/file/dd99b2a0b095845e2639d.jpg")
    .toAttachment();
                
    pp_bye = leave.toBuffer();

                if (anu.action == 'add') {
                	
      weltext = `
*┌▢* *「 WELCOME 」*
*├▢ Hey Bro* ${nama}
*├▢ Bio :* ${status}
*├▢ Members :* ${memb}
*├▢ Welcome To :* 
*└▢* ${metadata.subject}`
	messages = await prepareWAMessageMedia({ image : pp_wel }, { upload:   ser.waUploadToServer })
	                templat = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	                    "templateMessage": {
	                        "hydratedTemplate": {
	                         "imageMessage": {
	                         "url": messages.imageMessage.url,
				              "mimetype": "image/jpeg",
				              "fileSha256": messages.imageMessage.fileSha256,
				              "fileLength": "500000000000000",
				              "mediaKey": messages.imageMessage.mediaKey,
				              "fileEncSha256": messages.imageMessage.fileEncSha256,
				              "directPath": messages.imageMessage.directPath,
				              "mediaKeyTimestamp": messages.imageMessage.mediaKeyTimestamp,
				              "jpegThumbnail": pp_wel
	                           },
	                           "hydratedContentText": weltext,
	                            "hydratedFooterText": 'ᴡᴇʟᴄᴏᴍᴇ ᴍᴇssᴀɢᴇ ʙʏ ʜᴇʀᴍɪᴛ-sᴇʀ',
	                            "hydratedButtons": [{
	                                "urlButton": {
	                                    "displayText": 'ɢɪᴛʜᴜʙ',
	                                    "url": "https://github.com/HERMIT-SIR"
	                                }
	                            }, {
	                                "quickReplyButton": {
	                                    "displayText": "ɢʀᴘᴜᴘ ɪɴғᴏ",
	                                    "id": ".groupinfo"
	                                    }
	                                },{"quickReplyButton": {
	                                    "displayText": "ᴅᴇsᴄʀɪᴘᴛɪᴏɴ",
	                                    "id": ".groupdesc"
	                                }
	                                },{"quickReplyButton": {
	                                    "displayText": "ᴡᴇʟᴄᴏᴍᴇ ᴠʀᴏ 🙌",
	                                    "id": "."
	                                }
	                            }]
	                        }
	                    }
	                }), {})
	                ser.relayMessage(anu.id, templat.message, { messageId: templat.key.id })
                } else if (anu.action == 'remove') {
                      byetext = `
*┌▢* *「 GOODBYE 」*
*├▢ Name* ${nama}
*├▢ Members :* ${memb}
*├▢ Leaving From :* 
*└▢* ${metadata.subject}`
                   messag = await prepareWAMessageMedia({ image : pp_bye }, { upload:   ser.waUploadToServer })
                templatt = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    "templateMessage": {
                        "hydratedTemplate": {
                         "imageMessage": {
                         "url": messag.imageMessage.url,
			              "mimetype": "image/jpeg",
			              "fileSha256": messag.imageMessage.fileSha256,
			              "fileLength": "500000000000000",
			              "mediaKey": messag.imageMessage.mediaKey,
			              "fileEncSha256": messag.imageMessage.fileEncSha256,
			              "directPath": messag.imageMessage.directPath,
			              "mediaKeyTimestamp": messag.imageMessage.mediaKeyTimestamp,
			              "jpegThumbnail": pp_bye
                           },
                           "hydratedContentText": byetext,
                            "hydratedFooterText": 'ɢᴏᴏᴅʙʏᴇ ᴍᴇssᴀɢᴇ ʙʏ ʜᴇʀᴍɪᴛ-sᴇʀ',
                            "hydratedButtons": [{
                                "urlButton": {
                                    "displayText": 'ɢɪᴛʜᴜʙ',
                                    "url": "https://github.com/HERMIT-SIR"
                                    }
                                    }, {
                                    "quickReplyButton": {
                                    "displayText": "ɢʀᴘᴜᴘ ɪɴғᴏ",
                                    "id": ".groupinfo"
                                    }
                                    },{
                                    "quickReplyButton": {
                                    "displayText": "ɢᴏᴏᴅʙʏᴇ ᴠʀᴏ 🙌",
                                    "id": "."
                                }
                            }]
                        }
                    }
                }), {})
                ser.relayMessage(anu.id, templatt.message, { messageId: templatt.key.id })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
//═══════[setting]════════\\
    ser.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    ser.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = ser.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    ser.getName = (jid, withoutContact  = false) => {
        id = ser.decodeJid(jid)
        withoutContact = ser.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = ser.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === ser.decodeJid(ser.user.id) ?
            ser.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    ser.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ser.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ser.getName(i + '@s.whatsapp.net')}\nFN:${await ser.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:GitHub: HERMIT\nitem2.X-ABLabel:Follow Me On Github\nitem3.URL:YouTube: HERMIT\nitem3.X-ABLabel:Youtube\nitem4.ADR:;;India, Mizoram;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	ser.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    ser.setStatus = (status) => {
        ser.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    ser.public = true

    ser.serializeM = (m) => smsg(ser, m, store)

    ser.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`🦄Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("🦄Connection closed, Reconnecting...."); startser(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("🦄Connection Lost from Server, Reconnecting..."); startser(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("🦄Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`🦄Device Logged Out, Please Delete Session And Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("🦄Restart Required, Restarting..."); startser(); }
            else if (reason === DisconnectReason.timedOut) { console.log("🦄Connection TimedOut, Reconnecting..."); startser(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        console.log('🦄Connected...', update)
    })
    
    ser.ev.on('creds.update', saveState)

    // Add Other
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    ser.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: ser.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            ser.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
          /**
     * send Button Img
     * @param {String} jid 
     * @param {String} contentText 
     * @param {String} footer
     * @param {Buffer|String} buffer 
     * @param {String[]} buttons 
     * @param {Object} quoted 
     * @param {Object} options 
     */
        ser.sendBI = async (jid, contentText, footer, image, buttons, quoted, options) => {
        let message = {
            image: { url: image }, ...options,
            caption: contentText,
            headerType: 4,
            footer: footer,
            buttons: buttons.map(mk => {
                return {
                    buttonId: mk[1] || mk[0] || '',
                    buttonText: {
                        displayText: mk[0] || mk[1] || ''
                    }
                }
            })
        }
        return await ser.sendMessage(jid, message, { quoted: quoted, ...options })
    }
    
     /**
     * send Button Document 
     * @param {String} jid 
     * @param {String} contentText 
     * @param {String} footer
     * @param {Buffer|String} buffer 
     * @param {String[]} buttons 
     * @param {Object} quoted 
     * @param {Object} options 
     */
     ser.sendBD = async (jid, contentText, footer, doc, buttons, quoted, options) => {
        let message = {
            document: { url: doc },
            ...options,
            caption: contentText,
            headerType: 4,
            footer: footer,
            buttons: buttons.map(mk => {
                return {
                    buttonId: mk[1] || mk[0] || '',
                    buttonText: {
                        displayText: mk[0] || mk[1] || ''
                    }
                }
            })
        }
        return await ser.sendMessage(jid, message, { quoted: quoted, ...options })
    }

     ser.sendBV = async (jid, contentText, footer, video, buttons, quoted, options) => {
        let message = {
            video: { url: video }, ...options,
            caption: contentText,
            headerType: 4,
            footer: footer,
            buttons: buttons.map(mk => {
                return {
                    buttonId: mk[1] || mk[0] || '',
                    buttonText: {
                        displayText: mk[0] || mk[1] || ''
                    }
                }
            })
        }
        return await ser.sendMessage(jid, message, { quoted: quoted, ...options })
    }
    
     /**
     * send Button Loc
     * @param {String} jid 
     * @param {String} contentText 
     * @param {String} footer
     * @param {Buffer|String} buffer
     * @param {String[]} buttons 
     * @param {Object} quoted 
     * @param {Object} options 
     */
    ser.sendBL = async (jid, contentText, footer, location, buttons, quoted, options) => {
        let message = {
            headerType: 6, ...options,
            location: { jpegThumbnail: await (await fetch(location)).buffer() },
            caption: contentText,
            footer: footer,
            buttons: buttons.map(btn => {
                return {
                    buttonId: btn[1] || btn[0] || '',
                    buttonText: {
                        displayText: btn[0] || btn[1] || ''
                    }
                }
            }),
            //buffer: { location: {jpegThumbnail: buffer} }
        }
        return await ser.sendMessage(jid, message, {
            quoted,
            upload: ser.waUploadToServer,
            ...options
        })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    ser.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        ser.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
      /** Send hydratedButtons Text
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param [*] button
     * @param {*} options
     * @returns
     */
    ser.sendhydrabuttext = async (jid , text = '' , footer = '', but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        "hydratedTemplate": {
        "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            ser.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendText = (jid, text, quoted = '', options) => ser.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ser.sendMessage(jid, { image: buffer, jpegThumbnail: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ser.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendAudio = async (jid, path, quoted = '', options) => {
        return await ser.sendMessage(jid, { audio: { url: path }, mimetype: 'audio/mpeg', ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} minetye
     * @param {*} filesize 
     * @param {*} duration 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendforwardaudio = async (jid, path, minetye, filesize, duration, quoted = '', options) => {
        return await ser.sendMessage(jid, { audio: path, mimetype :  minetye, fileLength: filesize, seconds: duration, ptt : true, ...options }, { quoted })
    }
     
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} minetye
     * @param {*} filesize 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendforwardsticker = async (jid, path, minetye, filesize, quoted = '', options) => {
        return await ser.sendMessage(jid, { sticker: path, mimetype :  minetye, fileLength: filesize, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendTextWithMentions = async (jid, text, quoted, options = {}) => ser.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await ser.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ser.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await ser.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    ser.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    ser.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
        /**
     * 
     * @param {*} path 
     * @returns 
     */
    ser.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    /**
    * Send Media All Type 
    * @param {String} jid
    * @param {String|Buffer} path
    * @param {Object} quoted
    * @param {Object} options 
    */
       ser.sendMedia = async (jid, path, quoted, options = {}) => {
        let { ext, mime, data } = await ser.getFile(path)
        messageType = mime.split("/")[0]
        pase = messageType.replace('application', 'document') || messageType
        return await ser.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    ser.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await ser.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    ser.cMod = (jid, copy, text = '', sender = ser.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === ser.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    return ser
}

startser()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
