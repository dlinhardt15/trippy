import React, { useState } from "react";
import {NavLink} from "react-router-dom";

function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        name: name,
      }),
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
    <form onSubmit={handleSubmit} id="sign-up-form" className="entry-form">
    <p><strong>Enter Your Information Below</strong></p>
    {errors.map((err) => (
      <div className="error-message" key={err}>{err}</div>
    ))}
    <label htmlFor="name">Name: </label>    
        <input  
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        /><br></br>
        <label htmlFor="password">Password Confirmation: </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /><br></br>
        <button className="main-page-button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
    </form>
    <p id="link-to-login">Already a User?
    <NavLink to="/login">
        Login Here!
    </NavLink>
    </p>
    </div>
  );
}

export default SignUp;
