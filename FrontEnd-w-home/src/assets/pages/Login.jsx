import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Login() {
    return (
        <React.Fragment>
            <article className="main-login">
                <div className="wrapper-login">
                    <div className="title-login">
                        <h1>LOGIN</h1>
                        <p>Silahkan masukkan akun anda</p>
                    </div>
                    <form className="main-form" action="">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Masukkan Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Masukkan Password" />
                        </div>
                    </form>
                    <Button className="btn-login">Masuk</Button>
                    <div className="dont-account">
                        <span>
                            Tidak punya akun? <NavLink to="/register">Register</NavLink>
                        </span>
                    </div>
                </div>
            </article>
        </React.Fragment>
    );
}
