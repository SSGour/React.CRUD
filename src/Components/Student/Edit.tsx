import React, { useContext, useState } from "react";
import { IStudent, Schools } from "./Student.type";
import "./add.css";
import { StudentContext } from "Context/StudentContext";

interface StudentEditProps {
  dataToEdit: IStudent;
  onBackBtnHandler: () => void;
  onUpdateHandler: (data: IStudent) => void;
}

const EditStudent = ({
  dataToEdit,
  onBackBtnHandler,
  onUpdateHandler,
}: StudentEditProps) => {
  const studentContext = useContext(StudentContext);
  const [firstName, setFirstName] = useState<string>(dataToEdit.firstName);
  const [lastName, setLastName] = useState<string>(dataToEdit.lastName);
  const [age, setAge] = useState<Number>(dataToEdit.age);
  const [email, setEmail] = useState(dataToEdit.email);
  const [school, setSchool] = useState(dataToEdit.school);
  const [standard, setStandard] = useState(dataToEdit.standard);

  const onFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const onAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
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
      alert("All fields are required.");
      return;
    }

    if (age <= new Number(5)) {
      alert("Age should be above from 5 Years");
      return;
    }

    const UpdatedData: IStudent = {
      id: dataToEdit.id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      school: school,
      standard: standard,
    };
    onUpdateHandler(UpdatedData);
    alert("Student Updated");
    studentContext.update(UpdatedData);
    onBackBtnHandler();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>Edit Student Details</h1>
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
          <input
            id="age"
            type="number"
            value={age.toString()}
            onChange={onAgeHandler}
          />
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
          <button
            type="button"
            onClickCapture={onBackBtnHandler}
            className="backBtn"
          >
            Cancel
          </button>
          <button type="submit" className="addBtn">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditStudent;
