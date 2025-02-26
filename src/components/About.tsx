import React, { useState } from "react";

interface IState {
  name: String;
  title: String;
}

let About: React.FC = () => {
  const [state, setState] = useState<IState>({
    name: "Techinfo",
    title: "Mern Stack",
  });
  return (
    <>
      <h1 className="bg-success p-1 text-white text-center">
        Functional Component
      </h1>
      <div className="border px-4 bg-light mb-4"></div>
      <div className="col-md-4 card p-2">
        <h1>Values From State</h1>
        <h4>Name: {state.name}</h4>
        <h4>Title: {state.title}</h4>
      </div>
    </>
  );
};
export default About;
