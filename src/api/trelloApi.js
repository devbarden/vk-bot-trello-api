const { TOKEN, KEY } = require('../../data/trello.json')

module.exports = board => `https://api.trello.com/1/boards/${board}/cards?fields=all&key=${KEY}&token=${TOKEN}`
