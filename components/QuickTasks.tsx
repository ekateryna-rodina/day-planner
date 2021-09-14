import React from "react";
import QuickTasksStyle from "../styles/QuickTask.module.scss";
import { QuickTask as QuickTaskType } from "../types/task";
import QuickTask from "./QuickTask";

interface IQuickTasksProps {
  quickTasks: QuickTaskType[];
}
const QuickTasks = (props: IQuickTasksProps) => {
  const { quickTasks } = props;
  return (
    <div className={QuickTasksStyle.quickTasksBox}>
      {quickTasks &&
        quickTasks.map((qt: QuickTaskType) => (
          <QuickTask key={qt.id} {...qt} />
        ))}
    </div>
  );
};

export default QuickTasks;
