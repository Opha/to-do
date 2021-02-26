//package imports
import React, { useState } from "react";

//styles
import "./App.scss";

//Components
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>To Do</h1>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
