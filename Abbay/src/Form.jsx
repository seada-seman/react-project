import { useState } from "react";

export default function Form(){
    const [fullName, setFullname] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [hobby, setHobby] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        alert(
            `your fullname is ${fullName}
    Age: ${age}
    Gender: ${gender}
    Hobby: ${hobby}`
)}

function handleCheckBox(e){
    if(e.target.checked){
        setHobby((prev)=>([...prev,e.target.name]))
    }else{
        setHobby((prev)=>prev.filter((v)=>(v != e.target.name)))
    }
}
return<>
    <h1>My Form</h1>
    <Form onSubmit={handleSubmit}>
     <label htmlFor="fullName">Full Name:</label>
        <input
            type="text"
            id="fullName"
            placeholder="Enter full Name"
            value={fullName}
            onChange={(e)=>
                setFullname(e.target.value)
            }
         />

        <input type="number" name="age" placeholder="Enter your age" value={age}
            onChange={(e)=>setAge(e.target.value)}
        />

        <label>Male</label>
        <input type="radio" name="gender" value="M"
        onChange={(e)=>setGender(e.target.value)}
        />
        <label>Female</label>
        <input type="radio" name="gender" value="F"
        onChange={(e)=>setGender(e.target.value)}
        />
        <br/>
        <h1>hHobby</h1>

        <button type="submit">Submit</button>

    </Form>
</>
}