import { useState } from "react";
import "./Home.style.css";
import { IStudent, PageEnum } from "./Student.type";
import StudentList from "./studentList";
import AddStudent from "./addStudent";

export const Home = () => {
  const [studentList, setStudentList] = useState([] as IStudent[]);
  const [displayPage, setDisplayPage] = useState(PageEnum.list);
  const addStudent = () => {
    setDisplayPage(PageEnum.add);
  };
  const studentListbtn = () => {
    setDisplayPage(PageEnum.list);
  };
  return (
    <>
      <header>
        <h1>React: CRUD Operation</h1>
      </header>
      <section>
        {displayPage === PageEnum.list && (
          <>
            <button className="btnAddStudent" onClickCapture={addStudent}>
              Add Student
            </button>
            <StudentList list={studentList} />
          </>
        )}
        {displayPage === PageEnum.add && (
          <AddStudent backBtn={studentListbtn} />
        )}
      </section>
    </>
  );
};
