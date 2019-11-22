const fetch = require('node-fetch')

module.exports = {
  fetchData: async (api, action, convert = null) => {
    try {
      const response = await fetch(api)
      const data = await response.json()

      convert ? convert(data, action) : action(data)
    } catch (error) {
      action(error)
    }
  },
  convertCards: (data, action) => {
    const tasks = data.map(({ name }) => `\n- ${name}`).join('')

    action(`Tasks: ${tasks}`)
  },
}
