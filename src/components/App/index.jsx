import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header";
import Tasks from "../Tasks";
import AddTask from "../AddTask";

import "./styles.css";

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

  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  }

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

  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
