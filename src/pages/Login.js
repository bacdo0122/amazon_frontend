/* eslint-disable */
import React from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axiosApi from "../apiConfig";

export default function Login() {
  const history = useNavigate();
  const showPass = () => {
    let password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  return (
    <div className="login-page">
      <div className="form">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            const res = await axiosApi.get(
              `/user?username=${username}&password=${password}`
            );

            if (res.data.message) {
              document.querySelector(".message").innerHTML = res.data.message;
            } else {
              localStorage.setItem("username", JSON.stringify(res.data[0]));
              history("/products", { replace: true });
            }
          }}
        >
          <lottie-player
            src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json"
            background="transparent"
            speed="1"
            style={{ JutifyContent: "center" }}
            loop
            autoplay
          ></lottie-player>
          <input type="text" placeholder="&#xf007;  username" id="username" />
          <input
            type="password"
            id="password"
            placeholder="&#xf023;  password"
          />
          <i className="fas fa-eye" onClick={showPass}></i>
          <br />
          <br />
          <button type="submit">Login</button>
          <p className="message"></p>
        </form>
        <form className="login-form">
          <button
            type="button"
            onClick={() => history("/register", { replace: true })}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
