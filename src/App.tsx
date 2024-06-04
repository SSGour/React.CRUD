// src/App.tsx
import React from "react";
import { Home } from "./Components/Shared/Home";
import Login from "Components/Auth/Login";
const App: React.FC = () => {
  return (
    <div>
      {/* <Home /> */}
      <Login />
    </div>
  );
};

export default App;
