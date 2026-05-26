import {useState} from "react"

export default function App(){
  const [counter,setCounter] = useState(0)
  return <>
    <h1>{counter}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Add</button>
    <button onClick={()=>{setCounter(counter-1)}}>Subtract</button>
    <button onClick={()=>{setCounter(0)}}>Reset</button>
  </>
}

export default function App(){
  const [on,off] = useState(on)
  return<>
    <h1>on</h1>
    <button on onClick={}
  
  </>
}