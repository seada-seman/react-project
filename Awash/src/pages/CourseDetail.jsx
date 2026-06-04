import { useParams } from "react-router-dom"
export default function CourseDetail(){
    const {name} = useParams()
    return<>
        <h1>This is {name} Subject</h1>
    </>
}