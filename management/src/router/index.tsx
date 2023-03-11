import React, { lazy } from 'react'
// import About from "@/views/About";
import Home from "@/views/Home";
import {Navigate} from 'react-router-dom' 
// const Home = lazy(() => import('../views/Home'))
const About = lazy(() => import('../views/About'))
// 懒加载模式的组件添加loading
const widthLoadingComponent = (comp: JSX.Element) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {comp}
    </React.Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/about',
    element: widthLoadingComponent(<About/>)
  }
]

export default routes