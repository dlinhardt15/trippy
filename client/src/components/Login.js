import React, { useState } from "react";
import {NavLink} from "react-router-dom";
// import { Button, Error, Input, FormField, Label } from "../styles";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className="entry-form">
        <p id="trippy-title">Trippy.</p>
        {errors.map((err) => (
          <div className="error-message" key={err}>{err}</div>
        ))}
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <button className="main-page-button" variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        
        
    </form>
    {/* <br></br> */}
    <p id="link-to-signup">Not a User Yet? <br></br>
      <NavLink to="/signup">
        Sign Up Here!
      </NavLink>
    </p>
    </div>
  );
}

export default Login;