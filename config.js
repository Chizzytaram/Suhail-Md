const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cnwaegoro@gmail.com"
global.location="Abia, Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "https://github.com/SuhailTechInfo/Suhail-Md"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_36_04_07_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0hIUzExK1FIMEZBcE9FenJadm94NTRrL3hkWmF5OUY1TWFtZHUzUm8zRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkM1R09tZk0remdzNGhVQUU0ejQrUEdjZS95V25ZbEgyRnpEQUg1amhDMDQ9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ09mWFF4dDQ4OWtrK2FlREZJYVE4NnhleUYyU09pL0tLNGlnZFZnWnVXaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZNbzBEKzFCNEVJNWdhNzJqcFRwS1h3R25sdTNHU0dnS1NQc3p6eTdCSDQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkJtcjVEMHpOZWVOZGN3NDluWi9VY0lWQXNWM1VWb2YrYnR2N2VLTTgyZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImcvakNmd0JLdWRLTW9LU1ZLeDBNKzBDQm1BSlpPc3lQWUxVaEw2dTBGU2M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1QUF1Qk9ocDIrMlBybnVsTUFJcTdmSWVZRHhnUGQ4OXZ3THJZK1ZRelg4PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK3RoRkdCanF3RWZRWCtPblBpUEluTldoZ3laRGN6TGpIYUpOVlZFYlJsdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjWWhKejgxc1BrN2pSSnpBQWNhekluSml6OEdwTzV6U2ozbmswb3hmMlE3RnV5QkhvOTBVNzdJUWJ3MXlxWE5QdllzSnFBNmg1RGN6STJpcngzcHBqUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjQ5LFwiYWR2U2VjcmV0S2V5XCI6XCI3YVA2NEdLWUdUZ1NsQ3Z0Q2dPbXpHQVluQnBMMWFWckJKZEQ0ZVd3ZDMwPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiM2RwdTN6ZXdRNHVxQXdUZXhCMkxDQVwiLFwicGhvbmVJZFwiOlwiNDA0NTNjYWUtODk2Yy00YWI1LWJjMWYtY2VmY2MxYzUzMmE5XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrU3QzK0lBQmpBbWZvNSthcWtQbEtYUVVkeGs9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicVc0encxdXFKSEtRRmJvTkZCblFLc2RPdUVBPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlFSMUVDOEU0XCIsXCJtZVwiOntcImlkXCI6XCIyMzQ3MDMyMTE0MzU3OjdAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiNTc2MzAzMjQxOTEzMTk6N0BsaWRcIixcIm5hbWVcIjpcIlJhdmVyc21lZGlhXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNJbXM5WUlIRVBDV3k3QUdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwidURscm5Ma1dGd2Y4S0VPYW96cThPSnliTy90WkFrNFhKdmFLb3V3S25XND1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImo5TnZMYUh5NFBKTHU1clMzby9IUklZZzhQazh4QWVqd1pqUWtCaTB3UDNoWk5RL29pOVBuZC9HclpROWx4V1F3cHFzbktrN0l6SWZMS0ZON3ZjZUNBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwia3hxdC9JRUUwZGRjc0ROV3liNE1aejI0bzU3VnBmR0toS1lRRVIrWFlmTllsSEFsVE1heHFSZXJVbjA4c1RTbTBDbTZrWHNjLzV3cVUzR014ais4aHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDcwMzIxMTQzNTc6N0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJiZzVhNXk1RmhjSC9DaERtcU02dkRpY216djdXUUpPRnliMmlxTHNDcDF1XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjUwNzc2NixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFKYkNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuUENQSnVGbmtZc1dTdE5reWJNb3pocUhLRXBiUUtaeGI1NUdQcWgxSzdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODUxNjUwNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Raversmedia",
  ownername:process.env.OWNER_NAME|| "Ravers",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
