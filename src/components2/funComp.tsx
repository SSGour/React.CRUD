import React, { useState } from "react";
interface IState {
  name: string;
  title: string;
}

interface IProps {
  name: string;
  age: number;
}

// <> This is a Generic method
const FunComp: React.FC<IProps> = ({ name, age }) => {
  const [state, setState] = useState<IState>({
    name: "Sidhant",
    title: "Programmer",
  });
  return (
    <>
      <h1 className="bg-success p-1 text-white text-center">
        Function Component
      </h1>
      <div className="border px-4 bg-light mb-4">
        <h3>
          Name: <b>{name}</b>
          <br />
          Age: <b>{age}</b> <br />
        </h3>
      </div>
      <div className="col-md-4 card p-2">
        <h1>Value From State</h1>
        <h3>Name: {state.name}</h3>
        <h3>Title: {state.title}</h3>
      </div>
    </>
  );
};

export default FunComp;
