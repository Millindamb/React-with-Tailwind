import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import User from './component/User.jsx'
import GIthub, { githubInfoLoader } from './component/GIthub.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"User/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<GIthub/>,
        loader:githubInfoLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);
