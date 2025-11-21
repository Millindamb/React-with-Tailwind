import './App.css'
import Login from './context/Component/Login'
import Profile from './context/Component/Profile'
import UserContextProvider from './context/UserContextProvider'
import Image from './context/Component/Image'

function App() {

  return (<UserContextProvider>
      <Login/>
      <Profile/>
      <Image/>
    </UserContextProvider>
  )
}

export default App
