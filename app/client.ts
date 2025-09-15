// app/client.ts
import { createClient } from 'honox/client'

createClient({
  hydrate: async (elem: any, root) => {
    const { hydrateRoot } = await import('react-dom/client')
    hydrateRoot(root, elem)
  },
  //@ts-ignore
  createElement: async (type: any, props: any) => {
    const { createElement } = await import('react')
    return createElement(type, props)
  },
})