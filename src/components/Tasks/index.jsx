import React from "react";

import Task from "../Task";

function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
}

export default Tasks;
