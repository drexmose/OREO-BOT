import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '254102074064', process.env.OWNER_NAME || '𝐃𝐞𝐯 𝐃𝐫𝐞𝐱', true],
  ['919637987574', '𝐃𝐑𝐄𝐗 𝐌𝐎𝐒𝐄', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '𝐃𝐑𝐄𝐗 𝐌𝐎𝐒𝐄'
global.botname = process.env.BOT_NAME || '𝐎𝐑𝐄𝐎 𝐁𝐎𝐓'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || '𝐎𝐑𝐄𝐎 𝐁𝐎𝐓'
global.stkowner = process.env.OWNER_NAME || '𝐃𝐑𝐄𝐗 𝐌𝐎𝐒𝐄'

//Watermark
global.maker = process.env.MAKER || '𝐌𝐀𝐃𝐄 𝐖𝐈𝐓𝐇 ❤️ 𝐁𝐘 𝐎𝐑𝐄𝐎 𝐁𝐎𝐓'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
