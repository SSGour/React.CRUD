import React, { useState } from "react";
import { Home } from "../Shared/Home";
import "./login.css";
import { LoginEnum } from "../Student/Student.type";
import SignUp from "./SignUp";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(LoginEnum.LOGIN);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your authentication logic here
    if (!user || !password) {
      alert("Please fill user and password!");
    } else {
      if (user === "admin" || password === "admin") {
        setDisplay(LoginEnum.HOME);
        reset();
      } else {
        alert("UserName or Password is Invalid!");
      }
    }
  };

  const onUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const onPassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signUpHandler = () => {
    setDisplay(LoginEnum.SIGNUP);
  };

  const backToLoginPage = () => {
    setDisplay(LoginEnum.LOGIN);
  };

  const reset = () => {
    setUser("");
    setPassword("");
  };

  return (
    <>
      {display === LoginEnum.LOGIN && (
        <div className="container">
          <h1 className="title">User Login</h1>
          <form className="form" onSubmit={handleLogin}>
            <div>
              <label htmlFor="user">User:</label>
              <input
                type="text"
                id="user"
                className="input"
                value={user}
                onChange={onUserHandler}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="input"
                value={password}
                onChange={onPassHandler}
              />
            </div>
            <button type="submit" className="button">
              LogIn
            </button>
            <button
              type="button"
              className="button"
              onClickCapture={signUpHandler}
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
      {display === LoginEnum.HOME && <Home logOutHandler={backToLoginPage} />}
      {display === LoginEnum.SIGNUP && <SignUp onBack={backToLoginPage} />}
    </>
  );
};

export default Login;
