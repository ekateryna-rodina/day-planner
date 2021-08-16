import Img from "next/image";
import React from "react";
import BlockStyles from "../styles/Block.module.scss";
import TaskStyles from "../styles/Task.module.scss";
import { Task } from "../types/task";

interface IBlockProps {
  number: number;
  tasks: Task[];
}

const Task = (props: Task) => {
  const { id, logo, projectName, description, className, done } = props;
  return (
    <div className={`${TaskStyles.taskRow} ${className}Vivid`}>
      <div className={TaskStyles.logo}>
        <Img src={logo} layout="fill" />
      </div>
      <div className={TaskStyles.textContainer}>
        <span className={TaskStyles.projectName}>{projectName}</span>
        <div>{description}</div>
      </div>
      <input type="checkbox" checked={done} />
    </div>
  );
};

const Block = (props: IBlockProps) => {
  const { number, tasks } = props;
  return (
    <div className={BlockStyles.taskBox}>
      <div className={BlockStyles.taskContainer}>
        {tasks.map((t: Task) => (
          <Task key={t.id} {...t} />
        ))}
      </div>
      <div className={BlockStyles.blockName}>
        <span className={BlockStyles.verticalText}>{`Block ${number}`}</span>
      </div>
    </div>
  );
};

export default Block;
