import React, { useState } from "react";

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
  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
