import About from "@/views/About";
import Home from "@/views/Home";
import {Navigate} from 'react-router-dom' 

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <About></About>
  }
]

export default routes