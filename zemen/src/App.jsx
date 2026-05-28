import {useEffect, useState} from "react"
import Effect from "./Effect"
import Effect2 from "./Effect2"

export default function App(){

  useEffect(()=>{
    console.log("effect from app component")
  })
  return <>
    <Effect/>
    <Effect2/>
  </>
}