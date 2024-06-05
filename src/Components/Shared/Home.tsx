import { useContext, useEffect, useState } from "react";
import "./Home.style.css";
import { IStudent, PageEnum } from "../Student/Student.type";
import StudentList from "../Student/List";
import AddStudent from "../Student/Add";
import EditStudent from "../Student/Edit";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";
import { StudentContext } from "Context/StudentContext";

interface HomeProps {
  logOutHandler: () => void;
}

export const Home = ({ logOutHandler }: HomeProps) => {
  // const [studentList, setStudentList] = useState<IStudent[]>([]);
  const [displayPage, setDisplayPage] = useState(PageEnum.LIST);
  const [dataToEdit, setDataToEdit] = useState<IStudent | null>(null);

  const studentContext = useContext(StudentContext);

  useEffect(() => {
    const dataInStorage = window.localStorage.getItem(
      LocalStorageKeys.StudentListKey
    );

    if (dataInStorage) {
      const list = JSON.parse(dataInStorage);
      updateStudentList(list);
    }
  }, []);

  const onAddStudentHandler = () => {
    setDisplayPage(PageEnum.ADD);
  };
  const studentListbtn = () => {
    setDisplayPage(PageEnum.LIST);
  };

  const updateStudentList = (list: IStudent[]) => {
    studentContext.setStudents(list);
    // setStudentList(list);

    window.localStorage.setItem(
      LocalStorageKeys.StudentListKey,
      JSON.stringify(list)
    );
  };

  const addStudent = (data: IStudent) => {
    studentContext.add(data);
    updateStudentList([...studentContext.students, data]);
  };
  const onEditHandler = (data: IStudent) => {
    setDisplayPage(PageEnum.EDIT);
    setDataToEdit(data);
  };
  const editStudent = (updatedStudent: IStudent) => {
    studentContext.update(updatedStudent);

    updateStudentList(
      studentContext.students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setDisplayPage(PageEnum.LIST);
  };
  const deleteStudent = (id: string) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      updateStudentList(
        studentContext.students.filter((student) => student.id !== id)
      );
    }
  };

  return (
    <>
      <header>
        <h1>React: CRUD Operation</h1>
      </header>
      <section>
        {displayPage === PageEnum.LIST && (
          <>
            <button
              className="btnAddStudent"
              onClickCapture={onAddStudentHandler}
            >
              Add Student
            </button>
            <button className="btnLogOut" onClickCapture={logOutHandler}>
              Log Out
            </button>
            <StudentList
              list={studentContext.students}
              onDelete={deleteStudent}
              onEdit={onEditHandler}
            />
          </>
        )}
        {displayPage === PageEnum.ADD && (
          <AddStudent
            onBackBtnHandler={studentListbtn}
            onSubmitHandler={addStudent}
          />
        )}

        {displayPage === PageEnum.EDIT && dataToEdit && (
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
