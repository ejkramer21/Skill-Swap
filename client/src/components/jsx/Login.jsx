//import React,{ useState, useEffect } from "react";
import React,{ useState } from "react";
function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPass(event.target.value);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }
   return (
//Displays the Input area for login
    <>
        <form onSubmit={handleSubmit}>
            <label for = "email"> email </label>
            <input value= {email} type = "email" placeholder = "Input Email" onChange={handleEmailChange}> </input>
            <label for = "password"> password </label>
            <input value={pass} type = "password" placeholder = "********" onChange={handlePasswordChange}></input>
            <button>Log In</button>
        </form>
        <button> Register here</button>
    </>      
    );
}


export default Login