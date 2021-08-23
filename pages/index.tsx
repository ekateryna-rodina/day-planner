import { range } from "lodash";
import type { NextPage } from "next";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import Background from "../components/Background";
import Hint from "../components/Hint";
import Project from "../components/Project";
import QuickTasks from "../components/QuickTasks";
import SubheaderMenu from "../components/SubheaderMenu";
import TasksByBlocks from "../components/TasksByBlocks";
import HomeStyles from "../styles/Home.module.scss";
import { Project as ProjectType } from "../types/project";
import { QuickTask as QuickTaskType, Task } from "../types/task";
import { http } from "../utils/http";

interface IData {
  projects: ProjectType[];
  tasks: {}[];
  quickTasks: {}[];
}
export const getStaticProps = async () => {
  resetServerContext();
  let data = await http<IData>("http://localhost:5000/data");
  const { projects, tasks, quickTasks } = data;
  return {
    props: {
      projects,
      tasks,
      quickTasks,
    },
  };
};

interface IHomeProps {
  projects: ProjectType[];
  tasks: Task[];
  quickTasks: QuickTaskType[];
}
const Home: NextPage<IHomeProps> = ({ projects, tasks, quickTasks }) => {
  const [data, setData] = useState({ projects, tasks, quickTasks });
  const isPositionChanged = (destination: any, source: any) => {
    if (!destination || !source) return;
    const isPositionChanged =
      destination.droppableId === source.droppableId &&
      destination.index != source.index;
    return isPositionChanged;
  };

  const getAffectedTasksRange = (params: any) => {
    const { from, to, moveDown } = params;
    let rangeToUpdate: number[] = moveDown
      ? range(to, from + 1)
      : range(from, to + 1);
    console.log(moveDown);
    console.log(rangeToUpdate);
    // console.log(rangeToUpdate);
    return rangeToUpdate;
  };
  const reorderTaskPositions = (params: any) => {
    const { destination, source, draggableId } = params;
    const moveDown = destination.index > source.index;
    const affectedRange = getAffectedTasksRange({
      from: destination.index,
      to: source.index,
      moveDown,
    });
    // console.log(affectedRange);
    let tasks_ = data.tasks;
    tasks_.map((task) => {
      if (!affectedRange.includes(task.position)) return task;
      console.log(task.id, draggableId);
      if (task.id === draggableId) {
        task.position = destination.index;
        task.block = 1;
        return task;
      }
      task.position = moveDown ? task.position - 1 : task.position + 1;
      return task;
    });
    console.log(tasks_);
    setData({ ...data, tasks: tasks_ });
  };
  const onDragTaskEnd = (dropResult: any) => {
    const { destination, source } = dropResult;
    if (!isPositionChanged(destination, source)) return;
    console.log(dropResult);
    reorderTaskPositions({
      destination,
      source,
      draggableId: dropResult.draggableId,
    });
  };

  return (
    <div>
      <Background />
      <div className={HomeStyles.centeredContainer}>
        <div className={HomeStyles.content}>
          <div className={HomeStyles.projectsPanel}>
            <div className={HomeStyles.header}>
              <h2>Projects</h2>
              <div className={HomeStyles.subheader}>
                <SubheaderMenu />
              </div>
            </div>
            <Hint />
            <div className={HomeStyles.projects}>
              {data.projects.map((p: ProjectType) => (
                <Project key={p.id} {...p} />
              ))}
            </div>
          </div>
          <div className={HomeStyles.tasksPanel}>
            <div className={HomeStyles.header}>
              <h2>Tasks</h2>
              <div className={HomeStyles.subheader}>September, 14</div>
            </div>
            <DragDropContext onDragEnd={onDragTaskEnd}>
              <Droppable droppableId="TASKSBYBLOCKS">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <TasksByBlocks tasks={data.tasks} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className={HomeStyles.quickTasksPanel}>
            <div className={HomeStyles.header}>
              <h2>Quick Tasks</h2>
              <div className={HomeStyles.subheader}>My miscellaneous tasks</div>
            </div>
            <div className={HomeStyles.quickTasks}>
              <QuickTasks quickTasks={data.quickTasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
