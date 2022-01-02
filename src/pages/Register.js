/* eslint-disable */
import React, { useState } from "react";
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import axiosApi from "../apiConfig";
export default function Register() {
  const history = useNavigate();
  const checkError = (
    username,
    password,
    repeatPassword,
    name,
    birthday,
    identifyCard
  ) => {
    if (username.length < 6) {
      document.querySelector(".UserName-Error").innerHTML =
        "User Name is not valid!";
      return true;
    }
    if (password.length < 6) {
      document.querySelector(".Password-Error").innerHTML =
        "Password is not valid!";
      return true;
    }
    if (repeatPassword !== password) {
      document.querySelector(".RepeatPassword-Error").innerHTML =
        "Password and Repeat is not fit";
      return true;
    }
    if (!birthday) {
      document.querySelector(".Birthday-Error").innerHTML =
        "Birthday is not valid!";
      return true;
    }
    if (name.length < 1) {
      document.querySelector(".Name-Error").innerHTML = "Name is not valid!";
      return true;
    }
    if (/^\d+$/.test(identifyCard) && identifyCard.length != 9) {
      document.querySelector(".IdentifyCard-Error").innerHTML =
        "IdentifyCard is not valid!";
      return true;
    }
    return false;
  };
  return (
    <div className="app">
      <div class="container_register">
        <div class="register_form">
          <h2>Register Form</h2>
          <form
            class="form_register"
            onSubmit={async (e) => {
              e.preventDefault();

              const username = document.querySelector("#UserName").value;
              const password = document.querySelector("#Password").value;
              const repeatPassword =
                document.querySelector("#RepeatPassword").value;
              const email = document.querySelector("#Email").value;
              const name = document.querySelector("#Name").value;
              const birthday = document.querySelector("#Birthday").value;
              const identifyCard =
                document.querySelector("#IdentifyCard").value;
              if (
                !checkError(
                  username,
                  password,
                  repeatPassword,
                  name,
                  birthday,
                  identifyCard
                )
              ) {
                localStorage.setItem(
                  "username",
                  JSON.stringify({
                    username: username,
                    password: password,
                  })
                );
                await axiosApi.post("/user", {
                  username: username,
                  password: password,
                  email: email,
                  name: name,
                  birthday: birthday,
                  identifyCard: identifyCard,
                });
                history("/products", { replace: true });
              }
            }}
          >
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">UserName</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Your UserName"
                    id="UserName"
                  />
                </div>
                <div class="input-error UserName-Error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">Password</div>
                <div class="input-col">
                  <input
                    type="Password"
                    placeholder="Your Password"
                    id="Password"
                  />
                </div>
                <div class="input-error Password-Error"></div>
              </div>
            </div>
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">Repeat Your Password</div>
                <div class="input-col">
                  <input
                    type="Password"
                    placeholder="Repeat Your Password"
                    id="RepeatPassword"
                  />
                </div>
                <div class="input-error RepeatPassword-Error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">Email</div>
                <div class="input-col">
                  <input type="email" placeholder="Your Email" id="Email" />
                </div>
                <div class="input-error Email-Error"></div>
              </div>
            </div>
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">Name</div>
                <div class="input-col">
                  <input type="text" placeholder="Your  Name" id="Name" />
                </div>
                <div class="input-error Name-Error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">BirthDay</div>
                <div class="input-col">
                  <input type="date" id="Birthday" />
                </div>
                <div class="input-error Birthday-Error"></div>
              </div>
            </div>
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">Gender</div>
                <div class="input-col">
                  <div class="radio-input mr">
                    <input type="radio" name="gender" checked="checked" />
                    Male
                  </div>
                  <div class="radio-input">
                    <input type="radio" name="gender" />
                    Female
                  </div>
                </div>
                <div class="input-error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">Identify Card</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Your Number Of identify card"
                    id="IdentifyCard"
                  />
                </div>
                <div class="input-error IdentifyCard-Error"></div>
              </div>
            </div>
            <div class="submit-form">
              <input type="submit" id="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
