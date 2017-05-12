import * as Router from 'koa-router'
import * as C from 'lib/controller'

import ENV from 'config/env'

const router =
  new Router()
    .get( '/auth/github',                    C.Auth.oauthFor('github'))

    .get( '/repo/:source/:name',             C.Repo.show)

    .get( '/repo/:source/:name/suite',       C.Repo.Suite.showAll)
    .post('/repo/:source/:name/suite',       C.Repo.Suite.create)

    .get( '/user/repo/github',               C.UserRepo.githubShowAll)
    .post('/user/repo/github/:name',         C.UserRepo.githubCreate)
    .post('/user/repo/:source/:name/secret', C.UserRepo.createSecret)

if (ENV.test) {
  router.get(ENV.test.auth.callback, C.Auth.oauthFor('mock'))
}

export default router
