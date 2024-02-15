import React, { useState, useEffect } from "react";
import Interno from "./Interno";

function Ejemplo() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => c +1)
    },1000);
    return () => clearInterval(t);
  },[])
  return (
    <div>
      <h1>{count}</h1>
      <Interno></Interno>
    </div>
  );
}
export default Ejemplo;
