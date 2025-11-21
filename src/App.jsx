import { useCallback, useState } from "react";
import useCurrencyhook from "./hooks/useCurrencyhook";

function App() {
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const data=useCurrencyhook(from);
  return(<>
    <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)}/>
    <input type="text" value={to} onChange={(e)=>setTo(e.target.value)}/>
    <div>{data[to]}</div>
    </>
  );
}

export default App;
