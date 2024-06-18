// src/App.tsx
import React from "react";
import Login from "Components/Auth/Login";
import { StudentProvider } from "Context/StudentProvider";
import { TeacherProvider } from "Context/TeacherProvider";
const App: React.FC = () => {
  return (
    <div>
      <TeacherProvider>
        <StudentProvider>
          <Login />
        </StudentProvider>
      </TeacherProvider>
    </div>
  );
};

export default App;
