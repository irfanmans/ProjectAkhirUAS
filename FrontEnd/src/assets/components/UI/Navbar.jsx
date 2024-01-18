import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
            <header className="wrapper-navbar">
                <div className="title-navbar">
                    <NavLink to="/">
                        <h1 className="page-title">The Heavenly Resort</h1>
                    </NavLink>
                </div>
                <div className="btn-menu">
                    <NavLink className="btn-nav-register" to="/register">
                        Register
                    </NavLink>
                    <NavLink className="btn-nav-login" to="/login">
                        Login
                    </NavLink>
                </div>
            </header>
        </React.Fragment>
    );
}
