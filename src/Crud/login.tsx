import React, { useState } from "react";
import { Home } from "./Home";
import "./login.css";
import { LoginEnum } from "./Student.type";
import SignUp from "./signUp";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(LoginEnum.login);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your authentication logic here
    if (!user || !password) {
      alert("Please fill user and password!");
    } else {
      if (user === "admin" || password === "admin") {
        setDisplay(LoginEnum.home);
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
    setDisplay(LoginEnum.signUp);
  };

  const backToLoginPage = () => {
    setDisplay(LoginEnum.login);
  };

  return (
    <>
      {display === LoginEnum.login && (
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
              Login
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
      {display === LoginEnum.home && <Home logOutHandler={backToLoginPage} />}
      {display === LoginEnum.signUp && <SignUp onBack={backToLoginPage} />}
    </>
  );
};

export default Login;