import { Link } from "react-router-dom";

export default function Courses(){
    return<>
    <br/>
    <br/><br/>
    <Link to="/courses/english">English</Link><br/>
    <Link to="/courses/Biology">Biology</Link><br/>
    <Link to="/courses/Physics">Physics</Link><br/>
    <Link to="/courses/Math">Math</Link>
    </>
}