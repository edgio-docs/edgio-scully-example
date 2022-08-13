import { Router } from '@layer0/core/router'
import { isProductionBuild } from '@layer0/core/environment'

const router = new Router()

if (isProductionBuild()) {
  router.static('dist/static')
  router.fallback(({ serveStatic }) => {
    serveStatic('dist/static/index.html')
  })
} else {
  router.fallback(({ renderWithApp }) => {
    renderWithApp()
  })
}

module.exports = router
