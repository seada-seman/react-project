import { useState } from "react";

export default function Form(){
    const [fullName, setFullname] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        alert('your fullname is ${fullName}')
}
return<>
    <h1>My Form</h1>
    <Form onSubmit={handleSubmit}>
     <label htmlFor="fullName">Full Name:
        <input
            type="text"
            id="fullName"
            placeholder="Enter full Name"
            value={fullName}
            onChange={(e)=>{
                setFullname(e.target.value)
            }}
         />
     </label>
        <input type="submit"/>
    </Form>
</>