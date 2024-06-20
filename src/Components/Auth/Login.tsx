import React, { useEffect, useState } from "react";
import { Home } from "../Shared/Home";
import "./login.css";
import { ITeacher, LoginEnum } from "../Student/Student.type";
import SignUp from "./SignUp";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(LoginEnum.LOGIN);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  useEffect(() => {
    const storedTeachersData = window.localStorage.getItem(
      LocalStorageKeys.UserKey
    );
    if (storedTeachersData) {
      const parsedTeachers = JSON.parse(storedTeachersData);
      setTeachers(parsedTeachers);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !password) {
      alert("Please fill in user and password!");
    } else {
      const foundUser = teachers.find((teacher) => teacher.user === user);
      if (foundUser) {
        if (foundUser.password === password) {
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
