const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260970686001";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_14_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMlNuR09pT0gwL0FzZUNqU3gxZFkzR2NhK0Vxa1V1bG9XRnFtLzhOQzloRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYUhjY1hwaU9SZ0NNZ0paZmxGMm1Gd1wiLFxuICBcInBob25lSWRcIjogXCJkYTZjM2U0ZS1jZmJmLTRiYzQtYTc1OC00MTVhNTc0NTcwMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgNDcsXG4gICAgICAxMjQsXG4gICAgICA2MCxcbiAgICAgIDE1NixcbiAgICAgIDE0MyxcbiAgICAgIDEyMyxcbiAgICAgIDEwNSxcbiAgICAgIDU1LFxuICAgICAgMTYxLFxuICAgICAgNzQsXG4gICAgICAxMjcsXG4gICAgICAxNDUsXG4gICAgICAzOSxcbiAgICAgIDk3LFxuICAgICAgMjAwLFxuICAgICAgMTcwLFxuICAgICAgMyxcbiAgICAgIDgxLFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDIxMyxcbiAgICAgIDEzMixcbiAgICAgIDExNSxcbiAgICAgIDE4LFxuICAgICAgMTQyLFxuICAgICAgMTcyLFxuICAgICAgNzIsXG4gICAgICA3MCxcbiAgICAgIDMzLFxuICAgICAgMjE3LFxuICAgICAgMTQ2LFxuICAgICAgMTgxLFxuICAgICAgMTg5LFxuICAgICAgMTExLFxuICAgICAgNCxcbiAgICAgIDIzNixcbiAgICAgIDEzNyxcbiAgICAgIDMxLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRKSDhRNE1CXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA5NzA2ODYwMDE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU1MzE5MjEyMzgwMzQ5OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vLzU5OEhFUGJQbWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGRTM1IzUUhHYTZIbjYySHltQXFsb0RScWFLa1FIUFA5VURuNHEwU0ExMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3bnpCS01aK1BqSlBsV3ZuM1JtWEhhNmhYTVhQbkdNbFBvWHcrT29yVnNlcHkwdDN2TzdNSjFJNndabGViRUZqMGk1REt0OFZZOWdSWmtPYWRDa1JnQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRNDJnc05MVER6V05tcFJoUUFHdnVRUXBUWUNmczFobnVkYXl4UTRNWG5kTDJmL2xHa0lSZFNsZ01FTmJvTlJKcTNNOHZZMXhrVlZNaHhTY3kwVU5Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzA2ODYwMDE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4NDQ3M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
