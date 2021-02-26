import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, setTasks }) => {
  // const taskDisplayHandler = () => {
  //   tasks.map((item) => {
  //     console.log(item);
  //     return <Task task={item} />;
  //   });
  // };
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((item) => {
        return (
          <Task tasks={tasks} setTasks={setTasks} task={item} key={item.id} />
        );
      })}
    </div>
  );
};

export default TaskList;
