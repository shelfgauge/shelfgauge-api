import * as passport from 'koa-passport'
import { once } from 'lodash'

import github from './github'
import { toSession, fromSession } from './user'

passport.use(github)
passport.serializeUser(toSession)
passport.deserializeUser(fromSession)

export default passport
