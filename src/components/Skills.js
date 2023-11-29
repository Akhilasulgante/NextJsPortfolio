import React from "react";
import ObservableNotebook from "./ObservableNotebook";

const skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-32 mb-16 w-full text-center md:text-6xl md:mt-32 ">
        Skills
      </h2>
      <div className="w-full">
        <ObservableNotebook />
      </div>
    </div>
  );
};

export default skills;