import { useState } from "react";
import { schools } from "./Student.type";
import "./addStudent.css";

interface Props {
  onBackBtnHandler: () => void;
}

const AddStudent = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [standard, setStandard] = useState("");
  const { onBackBtnHandler } = props;

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

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("School:", school);
    console.log("Standard:", standard);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
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
          <label htmlFor="Age">Age:</label>
          <input id="Age" type="number" value={age} onChange={onAgeHandler} />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            id="Email"
            type="text"
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
