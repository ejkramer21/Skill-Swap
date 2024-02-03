import React from "react";
import {Link} from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {

    const signOut = () => {
        console.log("sign out now")
    }
    return (
        <>
        <nav>
            <ul>
                <li>
                <Link to="/">Test</Link>
                </li>
                <li>
                <Link to="/Profile">Profile</Link>
                </li>
                <li>
                <Link to="/Search">Search</Link>
                </li>
                <li>
                <Link to="/skills">Your Skills</Link>
                </li>
                <a onClick={signOut}>
                    Sign Out
                </a>
            </ul>
        </nav>
        </>
    );
}

export default NavBar