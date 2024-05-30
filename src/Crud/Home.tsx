import { useState } from "react";
import "./Home.style.css";
import { IStudent, PageEnum } from "./Student.type";
import StudentList from "./studentList";
import AddStudent from "./addStudent";
import { date } from "zod";

export const Home = () => {
  const [studentList, setStudentList] = useState([] as IStudent[]);
  const [displayPage, setDisplayPage] = useState(PageEnum.list);
  const onAddStudentHandler = () => {
    setDisplayPage(PageEnum.add);
  };
  const studentListbtn = () => {
    setDisplayPage(PageEnum.list);
  };

  const addStudent = (data: IStudent) => {
    setStudentList([...studentList, data]);
  };
  return (
    <>
      <header>
        <h1>React: CRUD Operation</h1>
      </header>
      <section>
        {displayPage === PageEnum.list && (
          <>
            <button
              className="btnAddStudent"
              onClickCapture={onAddStudentHandler}
            >
              Add Student
            </button>
            <StudentList
              list={studentList}
              onDelete={(id) =>
                setStudentList(studentList.filter((e) => e.id !== id))
              }
            />
          </>
        )}
        {displayPage === PageEnum.add && (
          <AddStudent
            onBackBtnHandler={studentListbtn}
            onSubmitHandler={addStudent}
          />
        )}
      </section>
    </>
  );
};
