import React, { useState, useEffect } from "react";
import { IStudent, Schools } from "./Student.type";
import "./add.css";
import { getRegisteredStudent } from "Components/Store/DbOperations";
import { getData } from "Components/Store/LocalStorageUtils";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";

interface AddStudentProps {
  onBackBtnHandler: () => void;
  onSubmitHandler: (studentCollection: IStudent) => void;
}

const AddStudent = ({ onBackBtnHandler, onSubmitHandler }: AddStudentProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [standard, setStandard] = useState("");

  useEffect(() => {
    const fetchUserSchool = () => {
      const userSchool = getData(LocalStorageKeys.UserSchoolKey);
      setSchool(userSchool || "");
    };
    fetchUserSchool();
  }, []);

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

  const onStandardHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStandard(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !age || !email || !school || !standard) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    const stuAge = Number(age);
    if (stuAge <= 5) {
      alert("Age should be above from 5 Years");
      return;
    }

    const studentCollection: IStudent = {
      id: new Date().toString(),
      firstName: firstName,
      lastName: lastName,
      age: stuAge,
      email: email,
      school: school,
      standard: standard,
    };

    let dbStudent = getRegisteredStudent();
    if (dbStudent) {
      let isStudentExist = dbStudent.find(
        (stu) =>
          stu.email.toLowerCase() === studentCollection.email.toLowerCase()
      );
      if (isStudentExist) {
        alert("Student Email already Exist");
      } else {
        onSubmitHandler(studentCollection);
        alert("Student Added");
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
    setSchool("");
    setStandard("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>Please Fill the Student Details</h1>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={onFirstNameHandler}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={onLastNameHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" value={age} onChange={onAgeHandler} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={onEmailHandler}
          />
        </div>
        <div>
          <label htmlFor="schools">Schools:</label>
          <select
            disabled
            id="schools"
            value={school}
            onChange={onSchoolHandler}
          >
            <option value="">Select</option>
            {Schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="standard">Class:</label>
          <input
            id="standard"
            type="text"
            value={standard}
            onChange={onStandardHandler}
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="addBtn">
            Add Student
          </button>
          <button
            type="button"
            onClickCapture={onBackBtnHandler}
            className="backBtn"
          >
            Back
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
