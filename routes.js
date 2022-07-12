import { isProductionBuild } from '@layer0/core/environment'
import { BACKENDS } from '@layer0/core/constants'
import { Router } from '@layer0/core/router'

const router = new Router()

if (isProductionBuild()) {
  router.static('dist/static')
} else {
  router.fallback(({ proxy }) => {
    proxy(BACKENDS.js)
  })
}

export default router
