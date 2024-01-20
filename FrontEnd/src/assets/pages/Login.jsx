import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const navigate = useNavigate();
  const LoginAccount = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userInformation = {
      username: username,
      password: password,
    };

    if (!username || !password) {
      return;
    }
    axios
      .post(
        "https://server-production-backend.up.railway.app/login",
        userInformation
      )
      .then((response) => {
        localStorage.setItem("access_token", response.data.token);

        navigate("/addbook");
        console.log("Server response:");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        alert("Gagal login");
      });
  };

  const googleOauthLogin = ()=>{
    axios.get("https://server-production-backend.up.railway.app/auth/google")
    .then((response)=>{
      localStorage.setItem("google_token", response.data.token)
      navigate("/addbook");
      console.log("Server response:");
    })
    .catch((err)=>{
      console.log(err)
    })
  }

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
              <input
                type="text"
                id="username"
                placeholder="Masukkan Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan Password"
              />
            </div>
          </form>
          <Button className="btn-login" onClick={LoginAccount}>
            Masuk
          </Button>
          <Button className="btn-google" onClick={googleOauthLogin}>
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
