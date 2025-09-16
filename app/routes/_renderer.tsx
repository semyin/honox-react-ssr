// app/routes/_renderer.tsx
import { reactRenderer } from '@hono/react-renderer'
import { Script, Link } from 'honox/server'

export default reactRenderer(({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src='/app/client.ts' async />
        {title ? <title>{title}</title> : ''}
      </head>
      <body>{children}</body>
    </html>
  )
})