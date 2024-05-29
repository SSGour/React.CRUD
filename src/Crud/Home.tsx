import { useState } from "react";
import "./Home.style.css";
import { IStudent } from "./Student.type";
import StudentList from "./studentList";

export const Home = () => {
  const [studentList, setStudentList] = useState([] as IStudent[]);
  return (
    <>
      <header>
        <h1>React: CRUD Operation</h1>
      </header>
      <section>
        <button className="btnAddStudent">Add Student</button>
        <StudentList list={studentList} />
      </section>
    </>
  );
};
