import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'
const token = '7175514896:AAEZr-q9TPE0ENe3QmSUqmjDaLfaRLkndIY'
const webAppUrl = 'https://angular-tg-app-b8ac2.web.app'
const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Нажмите кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить сообщение',
                `${webAppUrl}/feedback`
            )
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})
bot.launch()

