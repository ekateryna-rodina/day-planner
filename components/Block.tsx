import { orderBy } from "lodash";
import Img from "next/image";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import BlockStyles from "../styles/Block.module.scss";
import TaskStyles from "../styles/Task.module.scss";
import { Task as TaskType } from "../types/task";

interface IBlockProps {
  number: string;
  tasks: TaskType[];
}

// const Task = React.forwardRef(({ props }, ref: React.Ref<HTMLButtonElement>) => {
//   const { id, logo, projectName, description, className, done, position } =
//     props;
//   return (
//     <div className={`${TaskStyles.taskRow} ${className}Vivid`}>
//       <div className={TaskStyles.logo}>
//         <Img src={logo} layout="fill" />
//       </div>
//       <div className={TaskStyles.textContainer}>
//         <span className={TaskStyles.projectName}>{projectName}</span>
//         <div className={TaskStyles.description}>{description}</div>
//       </div>
//       <input className={TaskStyles.checkbox} type="checkbox" />
//     </div>
//   );
// });

// eslint-disable-next-line react/display-name
const Task = React.forwardRef(
  (props: TaskType, ref: React.Ref<HTMLDivElement>) => (
    <div className={`${TaskStyles.taskRow} ${props.className}Vivid`} ref={ref}>
      <div className={TaskStyles.logo}>
        <Img src={props.logo} layout="fill" />
      </div>
      <div className={TaskStyles.textContainer}>
        <span className={TaskStyles.projectName}>{props.projectName}</span>
        <div className={TaskStyles.description}>{props.description}</div>
      </div>
      <input className={TaskStyles.checkbox} type="checkbox" />
    </div>
  )
);

const Block = (props: IBlockProps) => {
  const { number, tasks } = props;
  return (
    <div className={BlockStyles.taskBox}>
      <div className={BlockStyles.taskContainer}>
        {orderBy(tasks, "position").map((t: TaskType) => (
          <Draggable draggableId={t.id} key={t.id} index={t.position}>
            {(provided) => (
              <div
                className={`${TaskStyles.taskRow} ${t.className}Vivid`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className={TaskStyles.logo}>
                  <Img src={t.logo} layout="fill" />
                </div>
                {/* <a {...provided.dragHandleProps}>
                  <VscThreeBars />
                </a> */}
                <div className={TaskStyles.textContainer}>
                  <span className={TaskStyles.projectName}>
                    {t.projectName}
                  </span>
                  <div className={TaskStyles.description}>{t.description}</div>
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
      </div>
      <div className={BlockStyles.blockName}>
        <span className={BlockStyles.verticalText}>{`Block ${number}`}</span>
      </div>
    </div>
  );
};

export default Block;
