// src/App.tsx
import React from "react";
import { Home } from "./Components/Shared/Home";
import Login from "Components/Auth/Login";
import { StudentProvider } from "Context/StudentProvider";
const App: React.FC = () => {
  return (
    <div>
      <StudentProvider>
        {/* <Home /> */}
        <Login />
      </StudentProvider>
    </div>
  );
};

export default App;
