import React, { lazy } from 'react'
// import About from "@/views/About";
import Home from "@/views/Home";
import {Navigate} from 'react-router-dom' 
// const Home = lazy(() => import('../views/Home'))
// const About = lazy(() => import('../views/About'))
const Page1 = lazy(() => import('@/views/page1'))
const Page2 = lazy(() => import('@/views/page2'))
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
    element: <Navigate to='/page1'></Navigate>
  },
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/page1',
        element: widthLoadingComponent(<Page1/>)
      },
      {
        path: '/page2',
        element: widthLoadingComponent(<Page2/>)
      },
    ]
  }
]

export default routes