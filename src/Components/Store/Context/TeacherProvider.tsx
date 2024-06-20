import React, { ReactNode, useState } from "react";
import { TeacherContext } from "./TeacherContext";
import { ITeacher } from "Components/Student/Student.type";

interface ITeacherProviderProps {
  children: ReactNode;
}

export const TeacherProvider: React.FC<ITeacherProviderProps> = (
  Props: ITeacherProviderProps
) => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  return (
    <TeacherContext.Provider value={{ teachers, setTeachers }}>
      {Props.children}
    </TeacherContext.Provider>
  );
};
