import { useEffect,useState } from "react"

export default function Effect2(){
  const [counter,setCounter] = useState(0)
  useEffect(()=>{
        console.log("effect from effect2 component")
    })
     return <>
    <h1>{counter}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Add</button>
    <button onClick={()=>{setCounter(counter-1)}}>Subtract</button>
    <button onClick={()=>{setCounter(0)}}>Reset</button>
    </>
}