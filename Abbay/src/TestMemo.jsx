import {useEffect, memo} from "react"

export default memo(function TestMemo(){
    useEffect(()=>{
        console.log("test memo component")
    })
    return<>
        <h1>This is test memo component</h1>
    </>
})