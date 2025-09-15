import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

export default createRoute(async (c) => {
  const name = c.req.query('name') ?? 'Hono'
  const { results } = await c.env.DB.prepare(
      "SELECT * FROM users"
    ).all();
  
  return c.render(
    <div className="py-8 text-center">
      {JSON.stringify(results)}
      <title>{name}</title>
      <h1 className="text-3xl font-bold">Hello, {name}!</h1>
      <Counter />
    </div>
  )
})
