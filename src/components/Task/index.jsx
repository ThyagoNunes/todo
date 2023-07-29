import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";

import "./styles.css";

function Task({ task, handleTaskClick, handleTaskDeletion }) {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="buttons-container"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button className="see-task-details-button">
          <CgInfo />
        </button>
      </div>
    </div>
  );
}

export default Task;
