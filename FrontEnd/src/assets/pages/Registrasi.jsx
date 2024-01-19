import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";

export default function Registrasi() {
    const navigate = useNavigate()
    const RegisterUserAccount = (event) => {
        event.preventDefault();

        const username = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const noHp = document.getElementById("noHandphone").value;
        const password = document.getElementById("password").value;

        if (!email.includes("@") || !email.includes(".com")) {
            alert("Please check the email");
            return;
        }
        const numericRegex = /^[0-9]+$/;
        const isValidPhoneNumber = numericRegex.test(noHp);

        if (!isValidPhoneNumber) {
            alert("Please check the phone number");
            return;
        }

        // const token = localStorage.getItem('jwtToken');
        const User = {
            name: username,
            password: password,
            no_hp: noHp,
            email: email,
        };

        console.log(User)

        axios
            .post("http://localhost:3000/signup", User)
            .then((response) => {
                localStorage.setItem("access_token", response.data.token)
                console.log("Server response:");
                navigate('/addbook')
            })
            .catch((error) => {
                console.error("Error during registration:", error);
                alert("Silahkan periksa data anda, atau cari username yang lain")
            });
    };

    return (
        <React.Fragment>
            <article className="main-register">
                <div className="wrapper-register">
                    <div className="title-register">
                        <h1>REGISTRASI</h1>
                        <p>Silahkan registrasi akun anda</p>
                    </div>
                    <form className="main-form" action="">
                        <div className="form-group">
                            <label htmlFor="fullname">FullName</label>
                            <input type="text" id="fullname" placeholder="Masukkan FullName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Masukkan Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="noHandphone">Nomor Handphone</label>
                            <input type="tel" id="noHandphone" placeholder="Masukkan No Handphone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Masukkan Password" />
                        </div>
                    </form>
                    <button type="button" className="btn-register" onClick={RegisterUserAccount}>
                        Daftar Akun
                    </button>

                    <div className="already-account">
                        <span>
                            Sudah memiliki akun? <NavLink to="/login">Login</NavLink>
                        </span>
                    </div>
                </div>
            </article>
        </React.Fragment>
    );
}
