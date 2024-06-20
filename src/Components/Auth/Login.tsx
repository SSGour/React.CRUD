import React, { useEffect, useState } from "react";
import { Home } from "../Shared/Home";
import "./login.css";
import { ITeacher, LoginEnum } from "../Student/Student.type";
import SignUp from "./SignUp";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(LoginEnum.LOGIN);
  const [registeredUser, setRegisteredUser] = useState<ITeacher[]>([]);

  useEffect(() => {
    const storedTeachersData = window.localStorage.getItem(
      LocalStorageKeys.UserListKey
    );
    if (storedTeachersData) {
      const storedTeacher = JSON.parse(storedTeachersData);
      setRegisteredUser(storedTeacher);
    }

    const loggedUser = window.localStorage.getItem(
      LocalStorageKeys.LoggedInUserKey
    );
    if (loggedUser) {
      setDisplay(LoginEnum.HOME);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("Please fill in user and password!");
    } else {
      const foundUser = registeredUser.find(
        (teacher) => teacher.userName === userName
      );
      if (foundUser) {
        if (foundUser.password === password) {
          window.localStorage.setItem(
            LocalStorageKeys.LoggedInUserKey,
            userName
          );
          setDisplay(LoginEnum.HOME);
          reset();
        } else {
          alert("Password is Invalid! Please correct your Password");
        }
      } else {
        alert("Please Register Your User!");
      }
    }
  };

  const onUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onPassHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signUpHandler = () => {
    setDisplay(LoginEnum.SIGNUP);
  };

  const backToLoginPage = () => {
    window.localStorage.removeItem(LocalStorageKeys.LoggedInUserKey);
    setDisplay(LoginEnum.LOGIN);
  };

  const reset = () => {
    setUserName("");
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
                value={userName}
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
