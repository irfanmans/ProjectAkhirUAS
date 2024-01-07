import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
            <header className="wrapper-navbar">
                <div className="title-navbar">
                    <h1>Project UAS</h1>
                </div>
                {/* <nav className="nav-menu">
                    <ul>
                        <li>
                            <NavLink>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink>Menu</NavLink>
                        </li>
                    </ul>
                </nav> */}
                <div className="page-title">The Heavenly Resort</div>
                <div className="btn-menu">
                    <NavLink className="btn-nav-login" to="/login">
                        Login
                    </NavLink>
                    <NavLink className="btn-nav-register" to="/register">
                        Register
                    </NavLink>
                </div>
            </header>
        </React.Fragment>
    );
}
