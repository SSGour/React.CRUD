// src/App.tsx
import React from "react";
import { Home } from "./Crud/Home";
import Login from "./Crud/login";
const App: React.FC = () => {
  return (
    <div>
      {/* <Home /> */}
      <Login />
    </div>
  );
};

export default App;
