import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";

const navigate = useNavigate();

export default function Registrasi() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
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

    const user = {
      username: username,
      email: email,
      phone_number: noHp,
      password: password,
    };

    axios
      .post("http://localhost:3000/signup", user)
      .then((response) => {
        alert("Registrasi berhasil!");
        console.log("Server response:", response);
        navigate("/login");
      })
      .catch((error) => {
        alert("Registrasi gagal!");
        console.error("Error during registration:", error);
      });
  };

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
              <input
                type="text"
                id="fullname"
                placeholder="Masukkan FullName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="noHandphone">Nomor Handphone</label>
              <input
                type="tel"
                id="noHandphone"
                placeholder="Masukkan No Handphone"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <button
            type="button"
            className="btn-register"
            onClick={handleRegister}
          >
            Daftar Akun
          </button>

          <div className="already-account">
            <span>
              Sudah memiliki akun? <NavLink to="/">Login</NavLink>
            </span>
          </div>
        </div>
      </article>
    </>
  );
}
