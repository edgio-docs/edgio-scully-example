const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: 'Scully',
    command: (port) => `npm run start -- --port ${port}`,
    ready: [/listening on/i],
  })
}
