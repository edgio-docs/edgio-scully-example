const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: 'Scully',
    command: (port) => `npx ng serve -- --port ${port}`,
    ready: [/listening on/i],
  })
}
