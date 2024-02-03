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
                <Link to="/Profile">Profile</Link>
                </li>
                <li>
                <Link to="/">Search</Link>
                </li>
                <li>
                <Link to="/skills">Your Skills</Link>
                </li>
                <li>
                <Link to="/signout">Sign Out</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar