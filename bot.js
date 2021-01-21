const {Telegraf} = require('telegraf')
const bot = new Telegraf(token)

/**
 * Evento de nuevo usuario
 * Da la bienvenida al nuevo usuario con su respectivo nickname de Telegram
 **/
bot.on('new_chat_members',(ctx)=>{
    ctx.reply("¡Bienvenido "+ ctx.from.first_name + " al grupo de Telegram de Eterno Progreso 🥳! El mejor lugar de la web 😎.")
})

/**
 * Comando de noticias recientes del canal de YouTube
 * Reemplazar el texto con la nueva informacion cuando sea necesario
 * */
bot.command('news', (ctx)=>{
    ctx.reply("Últimos vídeos😱:\n"+ 
    "Pierde TUS miedos => https://www.youtube.com/watch?v=7l89q1MGdf4"+ '\n'+
    "¿Sirve meditar? => https://www.youtube.com/watch?v=ZrHFmGgf5o4")
})

bot.launch()