import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Home,Login,About,Layout} from './componenets/index'

function App() {
  const Router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {path:"login",
          element:<Login/>
        },
        {
          path:"about",
          element:<About/>
        }
      ]
    },
  ])
  return (
    <>
    <RouterProvider router={Router} />
    </>
  )
}

export default App
