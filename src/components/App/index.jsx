import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import Tasks from "../Tasks";
import AddTask from "../AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn programming",
      completed: false,
    },
    {
      id: 2,
      title: "Read a book",
      completed: true,
    },
  ]);

  function handleTaskAddition(taskTitle) {
    setTasks((prevState) => {
      const newTask = {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      };
      return [...prevState, newTask];
    });
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
