import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()

    function handelLogin(){
        navigate('/courses')
    }
    return<>
    <h1>Home page!</h1>
    <button onClick={()=>handelLogin()}>Login</button>
    </>
}