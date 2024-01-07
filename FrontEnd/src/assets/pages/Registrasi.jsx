import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";

export default function Registrasi() {
    const RegisterUserAccount = function () {
        console.log("AAAAAAAAAAAAAAAAAAAAA")
        const token = localStorage.getItem('jwtToken');

        const username = document.getElementById("fullname").value
        const email = document.getElementById("email").value
        const noHp = document.getElementById("noHandphone").value
        const password = document.getElementById("password").value

        const User = {
            name: username,
            password: password,
            no_hp: noHp,
            email: email
        }

        axios.post("http://localhost:3000/signup", User)
            .then(response => {
                console.log('Server response:', response.data);
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
    }

    return (
        <>
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
                    <Button type="button" className="btn-register" onClick={RegisterUserAccount}>Daftar Akun</Button>

                    <div className="already-account">
                        <span>
                            Sudah memiliki akun? <NavLink to="/login">Login</NavLink>
                        </span>
                    </div>
                </div>
            </article>
        </>
    );
}
