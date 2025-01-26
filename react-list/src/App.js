// Import necessary libraries
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Buy groceries", status: "incomplete" },
    { id: 2, task: "Complete React project", status: "work-in-progress" },
    { id: 3, task: "Go for a run", status: "completed" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>To-Do Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className={task.status}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.status.replace("-", " ")}</td>
              <td>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="work-in-progress">Work in Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;


