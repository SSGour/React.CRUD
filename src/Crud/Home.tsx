import { useState } from "react";
import "./Home.style.css";
import { IStudent, PageEnum } from "./Student.type";
import StudentList from "./studentList";
import AddStudent from "./addStudent";
import EditStudent from "./studentEdit";

export const Home = () => {
  const [studentList, setStudentList] = useState<IStudent[]>([]);
  const [displayPage, setDisplayPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState<IStudent | null>(null);
  const onAddStudentHandler = () => {
    setDisplayPage(PageEnum.add);
  };
  const studentListbtn = () => {
    setDisplayPage(PageEnum.list);
  };

  const addStudent = (data: IStudent) => {
    setStudentList([...studentList, data]);
  };
  const onEditHandler = (data: IStudent) => {
    setDisplayPage(PageEnum.edit);
    setDataToEdit(data);
  };
  const editStudent = (updatedStudent: IStudent) => {
    setStudentList(
      studentList.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setDisplayPage(PageEnum.list);
  };
  const deleteStudent = (id: string) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudentList(studentList.filter((student) => student.id !== id));
    }
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
              onDelete={deleteStudent}
              onEdit={onEditHandler}
            />
          </>
        )}
        {displayPage === PageEnum.add && (
          <AddStudent
            onBackBtnHandler={studentListbtn}
            onSubmitHandler={addStudent}
          />
        )}

        {displayPage === PageEnum.edit && dataToEdit && (
          <EditStudent
            dataToEdit={dataToEdit}
            onBackBtnHandler={studentListbtn}
            onUpdateHandler={editStudent}
          />
        )}
      </section>
    </>
  );
};
