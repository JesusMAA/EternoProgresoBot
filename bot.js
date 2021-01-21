const {Telegraf} = require('telegraf')
const bot = new Telegraf('1510056164:AAFwt7zCawqvWAoZTHCHOG2C59_wt4BX2r0')

//evento de nuevo usuario
bot.on('new_chat_members',(ctx)=>{
    ctx.reply("¡Bienvenido "+ ctx.from.first_name + " al grupo de Telegram de Eterno Progreso 🥳! El mejor lugar de la web 😎.")
})

bot.command('news', (ctx)=>{
    ctx.reply("Últimos vídeos😱:\n"+ 
    "Pierde TUS miedos => https://www.youtube.com/watch?v=7l89q1MGdf4"+ '\n'+
    "¿Sirve meditar? => https://www.youtube.com/watch?v=ZrHFmGgf5o4")
})

bot.launch()