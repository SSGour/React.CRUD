import React, { useEffect, useState } from "react";
import "./signUp.css";
import { IPrincipal, Schools } from "../Student/Student.type";
import { UserStorageKeys } from "Shared/Constants/AppConstants";

interface ISignUpProps {
  onBack: () => void;
}

const SignUp = (props: ISignUpProps) => {
  const { onBack } = props;

  const [userList, setUserList] = useState<IPrincipal[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   console.log(userList);
  // }, [userList]);

  const onFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const onAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSchoolHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchool(e.target.value);
  };
  const onUserHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !age ||
      !email ||
      !school ||
      !user ||
      !password
    ) {
      alert("Please fill in all the fields before Sign Up.");
      return;
    }

    if (parseInt(age) <= 17) {
      alert("Age should be above from 17 Years");
      return;
    }

    const existingUser = userList.find(
      (u) => u.user === user || u.email === email
    );

    if (existingUser) {
      alert("Username or Email already exists. Please choose another.");
      return;
    }

    const signUpData: IPrincipal = {
      id: new Date().toString(),
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      school: school,
      user: user,
      password: password,
    };
    const updatedUserList = [...userList, signUpData];
    setUserList(updatedUserList);
    // console.log(userList);
    window.localStorage.setItem(
      UserStorageKeys.UserKey,
      JSON.stringify(updatedUserList)
    );
    reset();
  };

  // Clear the form after submission
  const reset = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
    setSchool("");
    setUser("");
    setPassword("");
  };
  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={onFirstNameHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={onLastNameHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={onAgeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onEmailHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schools">Schools:</label>
          <select id="schools" value={school} onChange={onSchoolHandler}>
            <option value="">Select</option>
            {Schools.map((school: any) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user">User:</label>
          <input type="text" id="user" value={user} onChange={onUserHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <button type="submit" className="button">
          Sign Up
        </button>
        <button type="button" className="button" onClickCapture={onBack}>
          LogIn
        </button>
      </form>
    </div>
  );
};

export default SignUp;
