import React, { Fragment, useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import BlockStyles from "../styles/Block.module.scss";
import { Block as BlockType, Task } from "../types/task";
import Block from "./Block";

interface ITasksByBlocks {
  tasks: Task[];
  dndParams: {};
}
const TasksByBlocks = (props: ITasksByBlocks) => {
  const { tasks, dndParams } = props;
  const [groupedTasks, setGroupedTasks] = useState<BlockType>({});
  const groupTasks = () => {
    if (!tasks) return;
    let blocks: BlockType = {};
    tasks.forEach((task: Task) => {
      let block = task.block;
      if (block in blocks) {
        blocks[block].push(task);
      } else {
        blocks[block] = [task];
      }
    });

    setGroupedTasks(blocks);
  };

  useEffect(() => {
    groupTasks();
    // eslint-disable-next-line
  }, [tasks]);
  const _renderBlock = (blockNumber: string, tasks: Task[]) => {
    return (
      <Droppable key={blockNumber} droppableId={`TASKSBYBLOCKS_${blockNumber}`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={snapshot.isDraggingOver ? BlockStyles.dragOver : ""}
          >
            <Block
              key={blockNumber.toString()}
              number={blockNumber}
              tasks={tasks}
            />
            {/* <div
              style={{
                position: "absolute",
                top: dndParams.clientY + 10,
                left: dndParams.clientX,
                height: "321px",
                background: "tomato",
                width: "512px",
              }}
            /> */}
            {/* {provided.placeholder} */}
          </div>
        )}
      </Droppable>
    );
  };

  return (
    <Fragment>
      {Object.keys(groupedTasks).map((b) => {
        return _renderBlock(b, groupedTasks[b]);
      })}
    </Fragment>
  );
};

export default TasksByBlocks;
