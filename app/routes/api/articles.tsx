import { createRoute } from 'honox/factory'

export default createRoute(async (c) => {
  const { results } = await c.env.DB.prepare(
      "SELECT * FROM article"
    ).all();
  return c.json(results)
})
