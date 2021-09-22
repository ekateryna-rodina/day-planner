import { orderBy } from "lodash";
import Img from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import BlockStyles from "../styles/Block.module.scss";
import TaskStyles from "../styles/Task.module.scss";
import { ScheduledTask as ScheduledTaskType } from "../types/task";

interface IBlockProps {
  number: string;
  tasks: ScheduledTaskType[];
  isDraggingOver: boolean;
  children?: ReactNode;
}

// eslint-disable-next-line react/display-name
const Task = React.forwardRef(
  (props: ScheduledTaskType, ref: React.Ref<HTMLDivElement>) => (
    <div
      className={`${TaskStyles.taskRow} ${props.task.project.className}Vivid`}
      ref={ref}
    >
      <div className={TaskStyles.logo}>
        <Img src={props.task.project.logo} layout="fill" />
      </div>
      <div className={TaskStyles.textContainer}>
        <span className={TaskStyles.projectName}>
          {props.task.project.name}
        </span>
        <div className={TaskStyles.description}>{props.task.description}</div>
      </div>
      <input className={TaskStyles.checkbox} type="checkbox" />
    </div>
  )
);

const Block = (props: IBlockProps) => {
  const { number, tasks, isDraggingOver } = props;
  const [height, setHeight] = useState(300);
  const ref = useRef(null);

  const classNames = `${BlockStyles.taskBox} ${
    isDraggingOver ? BlockStyles.dragOver : ""
  }`;
  useEffect(() => {
    if (!isDraggingOver) return;
    setInterval(() => setHeight(500), 1000);
  }, [isDraggingOver]);
  if (!tasks.length) return <div>loading</div>;
  return (
    <div className={classNames} ref={ref}>
      <div className={BlockStyles.taskContainer}>
        {tasks &&
          orderBy(tasks, "order").map((t: ScheduledTaskType) => (
            <Draggable draggableId={t.id.toString()} key={t.id} index={t.order}>
              {(provided) => (
                <div
                  className={`${TaskStyles.taskRow} ${t.task.project.className}Vivid`}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className={TaskStyles.logo}>
                    <Img src={t.task.project.logo} layout="fill" />
                  </div>
                  <div className={TaskStyles.textContainer}>
                    <span className={TaskStyles.projectName}>
                      {t.task.project.name}
                    </span>
                    <div className={TaskStyles.description}>
                      {t.task.description}
                    </div>
                  </div>
                  <input className={TaskStyles.checkbox} type="checkbox" />
                </div>

                // <Task
                //   {...t}
                //   {...provided.dragHandleProps}
                //   ref={provided.innerRef}
                // />
              )}
            </Draggable>
          ))}
        {props.children}
      </div>
      <div className={BlockStyles.blockName}>
        <span className={BlockStyles.verticalText}>{`Block ${number}`}</span>
      </div>
    </div>
  );
};

export default Block;
