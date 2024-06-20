import { ITeacher } from "Components/Student/Student.type";
import React from "react";

export interface TeacherContextType {
  teachers: ITeacher[];
  setTeachers: (teach: ITeacher[]) => void;
}

const initialValues = {
  teachers: [],
  setTeachers: (teach: ITeacher[]) => [],
};

export const TeacherContext =
  React.createContext<TeacherContextType>(initialValues);
