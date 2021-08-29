import React, { Fragment, useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
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
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Block
              key={blockNumber.toString()}
              number={blockNumber}
              tasks={tasks}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {provided.placeholder}
            </Block>
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
