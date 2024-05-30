import { useState } from "react";
import { IStudent, schools } from "./Student.type";
import "./addStudent.css";

interface Props {
  onBackBtnHandler: () => void;
  onSubmitHandler: (data: IStudent) => void;
}

const AddStudent = ({ onBackBtnHandler, onSubmitHandler }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [standard, setStandard] = useState("");

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
    const data: IStudent = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      school: school,
      standard: standard,
    };
    onSubmitHandler(data);
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
          <select id="schools" value={school} onChange={onSchoolHandler}>
            <option value=""></option>
            {schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="standard">Standard:</label>
          <input
            id="standard"
            type="text"
            value={standard}
            onChange={onStandardHandler}
          />
        </div>
        <div className="btnDiv">
          <button
            type="button"
            onClickCapture={onBackBtnHandler}
            className="backBtn"
          >
            Back
          </button>
          <button type="submit" className="addBtn">
            Add Student
          </button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
