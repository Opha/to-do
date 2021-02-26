import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, tasks, setTasks }) => {
  const deleteHandler = () => {
    console.log(task);
    setTasks(tasks.filter((item) => item.id !== task.id));
  };
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(true);
  };

  return (
    <div className="task">
      <h3 className={isChecked ? "marked" : ""}>{task.task}</h3>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="faIcon-check"
        onClick={checkHandler}
      />
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="faIcon-del"
        onClick={deleteHandler}
      />
    </div>
  );
};

export default Task;
