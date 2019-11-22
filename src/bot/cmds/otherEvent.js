module.exports = ({ reply, body: msg }) =>
  reply(`I don't know command: '${msg}'. Please, type 'help' to see all commands.`)
