import { IStudent } from "Components/Student/Student.type";
import React from "react";

export interface StudentContextType {
  students: IStudent[];
  setStudents: (stu: IStudent[]) => void;
  add: (stu: IStudent) => void;
  update: (stu: IStudent) => void;
}

const initialValues = {
  students: [],
  setStudents: (stu: IStudent[]) => {},
  add: (stu: IStudent) => {},
  update: (stu: IStudent) => {},
};

export const StudentContext =
  React.createContext<StudentContextType>(initialValues);
