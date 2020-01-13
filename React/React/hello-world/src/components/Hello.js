import React from "react";

const Hello = () => {
  // return (
  // <div className="dummyClass">
  //  <h1>Hello Faiz</h1>
  // </div>
  //);
  return React.createElement(
    "div",
    { id: "hello", className: "dummyclass" },
    React.createElement("h1", null, "Hello Faiz")
  );
};

export default Hello;
