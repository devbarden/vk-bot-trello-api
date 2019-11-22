const { Botact } = require('botact')

const commands = require('./cmds/commands')
const otherEvent = require('./cmds/otherEvent')

const { token, confirmation } = require('../../config')

const bot = new Botact({ token, confirmation })

commands.forEach(({ text, action }) => bot.command(text, ctx => action(ctx)))

bot.on(ctx => otherEvent(ctx))

module.exports = bot
