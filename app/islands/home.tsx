import { useEffect } from "react"

function Home() {
  useEffect(() => {
    console.log('home mounted')
  }, [])
  return <div onClick={() => console.log('home clicked')}>this is home</div>
}

export default Home