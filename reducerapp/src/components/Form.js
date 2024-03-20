import {useState} from 'react';
import { validateEmail } from './utils';

const From=()=>{
    const [score,setScore] = useState(10);
    const [comment,setComment] = useState("");
    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [password,setPassword] = useState({
        value:"",
        isTouched:false,
    })
    const [role,setRole] = useState("role");

    const getIsFormValid = () =>{
        return(
            firstName && 
            validateEmail(email)&&
            password.value.length >= 8 &&
            role!=="role"
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Number(score)<=5 && comment.length<=10){
            alert("Please provide a comment explaining why the experience was poor");
            return;
        }
        setComment("");
        setScore("10");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldseet>
                    <div>
                        <label>Score:{score}</label>
                        <input 
                            type = "range" 
                            min = "0" 
                            max = "10"
                            value={score} 
                            onChange={e=>setScore(e.target.value)}/>
                    </div>
                    <button type ="submit">Submit</button>
                </fieldseet>
            </form>
        </div>
    )
}