import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";

export default function Registrasi() {
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
                    <Button className="btn-register">Daftar Akun</Button>
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
