import React,{useState,useEffect} from "react";
import '../css/Profile.css';

function Profile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [zip, setZip] = useState('');
    const [validZip, setValidZip] = useState(false);
    const [about, setAbout] = useState('');

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
            <button>
                    <img src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw" alt="Logo" width="100" height="100" class="rounded mx-auto d-block center" />      
            </button>
            <br></br>
            <input
                type="text"
                value={firstName}
                onChange={handleFirst}
                placeholder="First Name"
            />
            <br></br>
            <input
                type="text"
                value={lastName}
                onChange={handleLast}
                placeholder="Last Name"
            />
            <br></br>
            <input
                type="text"
                value={zip}
                onChange={handleZip}
                placeholder="Zip Code"
            />
            {!validZip && <p style={{ color: 'red' }}>Invalid Zip Code</p>}
            <h3>About</h3>
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