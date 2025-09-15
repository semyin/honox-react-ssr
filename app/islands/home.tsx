import { useEffect } from "react"

function Home() {
  useEffect(() => {
    console.log('home mounted')
  }, [])
  return <div onClick={() => console.log('home clicked')}>home 生动活泼粉丝哦多</div>
}

export default Home