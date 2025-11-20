import { use, useEffect , useRef, useState } from 'react'
function App() {
  //useRef used for:
  // case 1:to update variable without rerendering
  //case 2:to refere to something like focus on input,scroll...
  const [x,setx]=useState(0);
  const v=useRef(0);

  const change=()=>{
    setx(x+1);
    v.current.focus();
  }
  function increase() {
    count.current += 1;
    console.log(count.current);
  }
  const count=useRef(0);
  return (
    <>
    <input ref={v} type="text" onChange={(e)=>{e.target.value}} value={"so"} style={{backgroundColor : "white"}}/>
    <button onClick={()=>change()}>press{x}</button><br></br>
    <button onClick={()=>increase()}>press2{count.current}</button>
    </>
  )
}

export default App
