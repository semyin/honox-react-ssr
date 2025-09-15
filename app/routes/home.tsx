import { createRoute } from 'honox/factory'
import Home from '../islands/home'

export default createRoute(async (c) => {
  
  return c.render(
    <Home />, {
      title: 'Home',
    }
  )
})
