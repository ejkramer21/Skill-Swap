import React,{useState,useEffect} from "react";

function Registration() {
    const [first,setFirst] = useState(' ');
    const [last, setLast] = useState('');
    const [zip, setZip] = useState('');
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('');
    const [number, setNumber] = useState('');

    const register = async () => {
        console.log(first)
        console.log(number)
    }

    return(
        <>
            <div>
                <input placeholder="First Name" onChange={(e)=>setFirst(e.target.value)}/>
                <input placeholder="Last Name" onChange={(e)=>setLast(e.target.value)}/>
                <input placeholder="Zip" onChange={(e)=>setZip(e.target.value)}/>
                <input placeholder="username" onChange={(e)=>setUser(e.target.value)}/>
                <input placeholder="password" onChange={(e)=>setPass(e.target.value)}/>
                <input placeholder="number" onChange={(e)=>setNumber(e.target.value)}/>
            </div>
            <button onClick={register}>Register</button>
        </>
    );
}

export default Registration