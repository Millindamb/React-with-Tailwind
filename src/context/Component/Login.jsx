import React,{useState,useContext} from 'react'
import UserContext from '../UserContext'

const Login = () => {
    const [username,setUsername]=useState('');
    const [URL,setURL]=useState("");
    const [password,setPassword]=useState('');
    const {setUser}=useContext(UserContext);
    const handleChange=(e)=>{
        e.preventDefault()
        setUser({username,password,URL})
    }
  return (
    <div>
      <h2>login</h2>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type="text" placeholder="text" value={URL} onChange={(e)=>setURL(e.target.value)}/>
      <button onClick={handleChange}>Submit</button>
    </div>
  )
}

export default Login
