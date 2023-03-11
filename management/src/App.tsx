import { useState } from 'react'
import { Button } from 'antd'
import {useRoutes, Link} from 'react-router-dom'
import router from '@/router/index'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      <Link to='home'>Home</Link>
      <Link to='about'>About</Link>
      {/* <Outlet></Outlet> */}
      {
        outlet
      }
    </div>
  )
}

export default App
