import { useState,useEffect } from "react";

function useCurrencyhook(currency) {
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((finaldata)=>setData(finaldata[currency]));
    },[currency])
    return data;
}

export default useCurrencyhook;