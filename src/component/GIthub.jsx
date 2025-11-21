import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
const GIthub = () => {
    const data=useLoaderData();
    // const [data,setdata]=useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/millindamb`)
    //     .then(response=>response.json())
    //     .then(data=>setdata(data));
    // },[])
  return (
    <div  className='flex justify-around flex-col text-black text-center'>
      Name:{data.name}
      <br />
      Follower:{data.followers}
      <img src={data.avatar_url} width={300} alt="avatar_image" />
    </div>
  )
}

export default GIthub
 
export const githubInfoLoader=async()=>{
    const response=await fetch(`https://api.github.com?user/millindamb`)
    return response.json();
}