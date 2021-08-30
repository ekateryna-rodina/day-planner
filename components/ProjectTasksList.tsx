import React, { useState } from "react";
import ProjectStyles from "../styles/Project.module.scss";

const ProjectTasksList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const createTask = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };
  return (
    <div className={ProjectStyles.tasks}>
      <form onSubmit={createTask}>
        <div className={ProjectStyles.searchOrAddRow}>
          <div className={ProjectStyles.taskInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <span className={ProjectStyles.focusInput}></span>
          </div>
          <input type="submit" value="+" />
        </div>
        <div className="tasks">
          {tasks.map((t) => (
            <div key={t} className="singleTask">
              {t}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ProjectTasksList;
