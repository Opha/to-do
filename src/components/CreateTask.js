import React from "react";
import { v4 as uuid } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const inputHandler = () => {
    const taskText = document.querySelector("input").value;
    setTasks([...tasks, { task: taskText, id: uuid() }]);
    document.querySelector("input").value = "";
  };
  return (
    <div>
      <input type="text" />
      <button onClick={inputHandler}>OK</button>
    </div>
  );
};

export default CreateTask;
