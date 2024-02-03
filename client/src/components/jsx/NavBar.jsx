import React from "react";
import {Link} from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
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
            </ul>
        </nav>
        </>
    );
}

export default NavBar