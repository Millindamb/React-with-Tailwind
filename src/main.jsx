import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,NavLink, RouterProvider ,Outlet} from 'react-router-dom'

const Header = () => {
  return (
  <>
    <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2" >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> 
        <li> <NavLink to="/home" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `} > Home </NavLink> </li>
        <li> <NavLink to="/about" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `} > About </NavLink> </li> 
        <li> <NavLink to="/contact" className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `} > Contact </NavLink> </li> 
      </ul> 
    </div>
    <Outlet/>
  </>
  )
}


const router=createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
    children:[
      {
        path:"",
        element:<img src='https://tse2.mm.bing.net/th/id/OIP.-wTAKzAx_xwZUEE93sQrCAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'/>
      },
      {
        path:"home",
        element:<img src='https://images.pexels.com/photos/462358/pexels-photo-462358.jpeg?cs=srgb&dl=architectural-design-architecture-blue-sky-462358.jpg&fm=jpg'/>
      },
      {
        path:"about",
        element:<img src='https://tse3.mm.bing.net/th/id/OIP.v7QwdX_nx0f7oDJET_6M7gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'/>
      },
      {
        path:"contact",
        element:<img src='https://tse1.mm.bing.net/th/id/OIP.am5ObkENXV3-yJfLp_5BYgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);
