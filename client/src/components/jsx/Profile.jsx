import React,{useState,useEffect} from "react";
import '../css/Profile.css';

function Profile() {
    const [firstName, setFirstName] = useState('Lola');
    const [lastName, setLastName] = useState('Smith');
    const [zip, setZip] = useState('80972');
    const [validZip, setValidZip] = useState(true);
    const [about, setAbout] = useState("Hi, I'm Lola! I love to garden and I also refurbish furniture and tailor");

    useEffect(()=> {
        fetch("/new-user").then(
            res=>res.json()
        ).then(
            data=>{
                console.log(data)
            }
        )
    },[])

    const handleFirst = (e) => {
        setFirstName(e.target.value);
        console.log(firstName);
    }

    const handleLast = (e) => {
        setLastName(e.target.value);
        console.log(lastName);
    }

    const handleZip = (e) => {
        const input = e.target.value;

        const numericValue = input.replace(/\D/g, '');

        const truncatedValue = numericValue.slice(0, 5);
        
        setZip(truncatedValue);

        setValidZip(/^\d{5}$/.test(truncatedValue));
        console.log(zip);
    }

    const handleAbout = (e) => {
        const truncatedValue = e.target.value.slice(0, 200);
        setAbout(truncatedValue);
    }

    return (
        <>
            <h1>Profile</h1>
            <div className="container">
            {/* <button className="child" > */}
                {/* <button> */}
                        <img id="profile-pic" src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="Logo" width="100" height="100" class="rounded mx-auto d-block center" />      
                {/* </button> */}
            {/* </button> */}
            <div className="child" id="block-group">
                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirst}
                    placeholder="First Name"
                    className="block-group"
                />
                <br></br>
                <input
                    type="text"
                    value={lastName}
                    onChange={handleLast}
                    placeholder="Last Name"
                    className="block-group"
                />
                <br></br>
                <input
                    type="text"
                    value={zip}
                    onChange={handleZip}
                    placeholder="Zip Code"
                    className="block-group"
                />
                {!validZip ? <p style={{ color: 'red' }}>Invalid Zip Code</p> : <p>Great!</p>}
            </div>
            </div>
            <h2>About</h2>
            <textarea
                type="text"
                value={about}
                onChange={handleAbout}
                placeholder="Add a little about you!"
            />
            <p>{about.length}/{200}</p>
        </>
    )
}

export default Profile