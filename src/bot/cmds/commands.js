const cmds = require('./docs')

const trelloApi = require('../../api/trelloApi')
const { fetchData, convertCards } = require('../../utils')
const { BOARDS } = require('../../../data/trello.json')

module.exports = [
  {
    text: 'help',
    action: ({ reply }) => reply(`Help commands:${cmds.join('')}`),
  },
  {
    text: 'board: main',
    action: async ({ reply }) => fetchData(trelloApi(BOARDS.MAIN), reply, convertCards),
  },
]
