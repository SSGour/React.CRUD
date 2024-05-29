import React, { useState } from "react";

interface Props {
  heading: string;
}

let items = ["New York", "India", "America", "Bhutan", "Nepal"];

let List = ({ heading }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const selectedIndex = -1;
  return (
    <>
      <h1 className="pb-3 w-25">{heading}</h1>
      <ul className="list-group w-25">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active border border-dark mb-1"
                : "list-group-item border border-dark mb-1"
            }
            key={item}
            onClickCapture={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
