import { ReactNode, useState } from "react";
import { StudentContext } from "./StudentContext";
import { IStudent } from "Components/Student/Student.type";

interface IStudentProviderProps {
  children: ReactNode;
}

export const StudentProvider: React.FC<IStudentProviderProps> = (
  props: IStudentProviderProps
) => {
  const [students, setStudents] = useState<IStudent[]>([]);

  const add = (stu: IStudent) => {
    //check if already exist

    //add to student array
    students.push(stu);
    // setStudents()
  };

  const update = (stu: IStudent) => {
    //find existing student

    //remove from array

    //add to student array
    students.push(stu);
    // setStudents()
  };

  return (
    <StudentContext.Provider value={{ students, setStudents, add, update }}>
      {props.children}
    </StudentContext.Provider>
  );
};
