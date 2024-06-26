import { useContext, useEffect, useState } from "react";
import "./Home.style.css";
import { IStudent, PageEnum } from "../Student/Student.type";
import StudentList from "../Student/List";
import AddStudent from "../Student/Add";
import EditStudent from "../Student/Edit";
import { LocalStorageKeys } from "Shared/Constants/AppConstants";
import { StudentContext } from "Components/Store/Context/StudentContext";
import { getData, setData } from "Components/Store/LocalStorageUtils";
import { getRegisteredStudent } from "Components/Store/DbOperations";

interface HomeProps {
  logOutHandler: () => void;
}

// Home component
export const Home = ({ logOutHandler }: HomeProps) => {
  // State to manage the current display page (list, add, edit)
  const [displayPage, setDisplayPage] = useState(PageEnum.LIST);
  // State to manage the student data being edited
  const [dataToEdit, setDataToEdit] = useState<IStudent | null>(null);

  //get User Name from local storage
  const userName = getData(LocalStorageKeys.LoggedInUserKey)?.toUpperCase();
  const userSchoolName = getData(LocalStorageKeys.UserSchoolKey);

  // Accessing the student context
  const studentContext = useContext(StudentContext);

  // useEffect to load the student list from local storage on component mount
  useEffect(() => {
    const dataInStorage = getRegisteredStudent();
    studentContext.setStudents(dataInStorage);
  }, []);

  // Handler to switch to the add student page
  const onAddStudentHandler = () => {
    setDisplayPage(PageEnum.ADD);
  };

  // Handler to switch to the student list page
  const studentListbtn = () => {
    setDisplayPage(PageEnum.LIST);
  };

  // Function to update the student list in context and local storage
  const updateStudentList = (list: IStudent[]) => {
    studentContext.setStudents(list);

    setData(LocalStorageKeys.StudentListKey, JSON.stringify(list));
  };

  // Function to add a new student to the list
  const addStudent = (stu: IStudent) => {
    const addStudent = [...studentContext.students, stu];
    updateStudentList(addStudent);
    setDisplayPage(PageEnum.LIST);
  };

  // Handler to switch to the edit student page and set the data to be edited
  const onEditHandler = (data: IStudent) => {
    setDisplayPage(PageEnum.EDIT);
    setDataToEdit(data);
  };

  // Function to edit an existing student in the list
  const editStudent = (updatedStudent: IStudent) => {
    const updatedList = studentContext.students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    updateStudentList(updatedList);
    setDisplayPage(PageEnum.LIST);
  };

  // Function to delete a student from the list
  const deleteStudent = (id: string) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const deleteStudent = studentContext.students.filter(
        (student) => student.id !== id
      );
      updateStudentList(deleteStudent);
    }
  };

  return (
    <>
      <header>
        <h1>React: CRUD Operation</h1>
      </header>
      <div className="userName">
        <h1> Hello {userName}</h1>
        <h2>School Name: {userSchoolName}</h2>
      </div>
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
