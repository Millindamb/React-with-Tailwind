import { useCallback, useState } from "react";

function App() {
  //this function is created on every render as it does not uses call back hook
  const handleClick = () => {
    console.log("Clicked");
  }
  //this is function is not created on every render as it use callback hook
  //means it will only be recreateed when its dependecies changes
  const handleClick2 = useCallback(() => {
    console.log("Clicked2");
  },[])

  return(<>
    <button className="border-2 rounded-lg p-2 bg-red-700" onClick={handleClick}>press</button>
    <button className="border-2 rounded-lg p-2 bg-blue-700 text-white" onClick={handleClick2}>press this also</button>
    </>
  );
}

export default App;
