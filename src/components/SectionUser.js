import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SectionUser() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  const history = useNavigate();
  return (
    <section class="body-main-bottom main-bottom-flex">
      {user ? (
        <>
          Hello, {user.username}
          <a
            class="signIn-btn"
            onClick={() => {
              console.log("a");
              localStorage.removeItem("username");
              history("/login", { replace: true });
            }}
          >
            <span>Logout</span>
          </a>
        </>
      ) : (
        <div>
          <span class="carousel-averge-size">
            See personalized recommendations
          </span>
          <a href="/login" class="signIn-btn">
            <span>Sign in</span>
          </a>
          <span class="carousel-averge-size">
            New customer?{" "}
            <a
              href="#"
              class="list-department-link"
              style={{ color: "#007185" }}
            >
              Start here.
            </a>
          </span>
        </div>
      )}
    </section>
  );
}
