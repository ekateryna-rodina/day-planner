import React, { Fragment, useEffect, useState } from "react";
import { Block as BlockType, Task } from "../types/task";
import Block from "./Block";

interface ITasksByBlocks {
  tasks: Task[];
}
const TasksByBlocks = (props: ITasksByBlocks) => {
  const { tasks } = props;
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
      <Block key={blockNumber.toString()} number={blockNumber} tasks={tasks} />
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
