import type {} from 'hono'
import { D1Database } from '@cloudflare/workers-types'
import '@hono/react-renderer'

declare module '@hono/react-renderer' {
  interface Props {
    title?: string
  }
}

declare module 'hono' {
  interface Env {
    Variables: {}
    Bindings: {
      DB: D1Database
    }
  }
}
