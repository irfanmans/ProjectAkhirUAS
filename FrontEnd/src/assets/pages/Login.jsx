import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const LoginAccount = (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const userInformation = {
            username: username,
            password: password,
        };

        axios
            .post("http://localhost:3000/login", userInformation)
            .then((response) => {
                console.log("Server response:");
            })
            .catch((error) => {
                console.error("Error during registration:", error);
            });
    };

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
                    <Button className="btn-login" onClick={LoginAccount}>
                        Masuk
                    </Button>
                    <Button className="btn-google" onClick={LoginAccount}>
                        <FcGoogle className="icon-google" /> Login with Google
                    </Button>
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
