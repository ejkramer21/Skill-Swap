import React from "react";
import {Link} from "react-router-dom";

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
            </ul>
        </nav>
        </>
    );
}

export default NavBar