import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { D1Database } from '@cloudflare/workers-types'

type Bindings = {
  DB: D1Database
}

type Variables = {}

const app = createApp<{ Bindings: Bindings, Variables: Variables }>()

showRoutes(app)

export default app
