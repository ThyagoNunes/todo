import React, { useState } from "react";

import "./styles.css";
import Tasks from "../Tasks";

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
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
