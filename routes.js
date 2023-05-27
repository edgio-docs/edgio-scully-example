import { Router } from '@edgio/core/router'
import { isProductionBuild } from '@edgio/core/environment'

const router = new Router()

if (isProductionBuild()) {
  router.static('dist/static')
  router.match('/:path*', ({ serveStatic }) => {
    serveStatic('dist/static/index.html')
  })
} else {
  router.match('/:path*', ({ renderWithApp }) => {
    renderWithApp()
  })
}

module.exports = router
