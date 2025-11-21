import React,{useContext} from 'react'
import UserContext from '../UserContext'
const Image = () => {
    const {user}=useContext(UserContext);
    if(!user)return <div></div>
  return (
    <div>
      <img src={user.URL} alt="some Image" width={500}/>
    </div>
  )
}

export default Image
