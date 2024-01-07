import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";

export default function Registrasi() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [noHp, setNoHp] = useState("");
    const [password, setPassword] = useState("");

    const RegisterUserAccount = (event) => {
        event.preventDefault();

        // const username = document.getElementById("fullname").value
        // const email = document.getElementById("email").value
        // const noHp = document.getElementById("noHandphone").value
        // const password = document.getElementById("password").value
        console.log("AAAAAAAAAAAAAAAAAAAAA")
        // const token = localStorage.getItem('jwtToken');
        const User = {
            name: username,
            password: password,
            no_hp: noHp,
            email: email
        }

        axios.post("http://localhost:3000/signup", User)
            .then(response => {
                console.log('Server response:');
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
    }

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
                            <input type="text" id="fullname" placeholder="Masukkan FullName" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Masukkan Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="noHandphone">Nomor Handphone</label>
                            <input type="tel" id="noHandphone" placeholder="Masukkan No Handphone" onChange={(e) => setNoHp(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Masukkan Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </form>
                    <button type="button" className="btn-register" onClick={RegisterUserAccount}>Daftar Akun</button>

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
