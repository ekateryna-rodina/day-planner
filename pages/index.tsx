import Project from "components/Project";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { QuickTask, ScheduledTasks } from "types/task";
import Background from "../components/Background";
import Hint from "../components/Hint";
import QuickTasks from "../components/QuickTasks";
import SubheaderMenu from "../components/SubheaderMenu";
import {
  initialProjectData,
  initialQuickTasksData,
  initialTaskData,
} from "../data";
import HomeStyles from "../styles/Home.module.scss";
import { Project as ProjectType } from "../types/project";
const Section = dynamic(import("../components/Section"));

interface IHomeProps {
  projects: Record<string, ProjectType>;
  scheduledTasks: ScheduledTasks;
  quickTasks: QuickTask[];
}

const Home: NextPage<IHomeProps> = ({
  projects,
  scheduledTasks,
  quickTasks,
}) => {
  const [state, setState] = useState({ projects, scheduledTasks, quickTasks });
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  const onDragStartHandler = (start: any) => {
    console.log(start);
  };

  const onDragTaskEndHandler = (result: any) => {
    const { destination, source, draggableId } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    const start = state.scheduledTasks.sections[source.droppableId];
    const finish = state.scheduledTasks.sections[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...state,
        scheduledTasks: {
          ...state.scheduledTasks,
          sections: {
            ...state.scheduledTasks.sections,
            [newColumn.id]: newColumn,
          },
        },
      };
      setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      scheduledTasks: {
        ...state.scheduledTasks,
        sections: {
          ...state.scheduledTasks.sections,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      },
    };
    setState(newState);
  };
  return (
    <div>
      <Background />

      <div className={HomeStyles.centeredContainer}>
        <DragDropContext
          onDragEnd={onDragTaskEndHandler}
          onDragStart={onDragStartHandler}
        >
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
                {state.projects &&
                  Object.keys(state.projects).map((p: string) => (
                    <Project key={p} {...state.projects[p]} />
                  ))}
              </div>
            </div>
            <div className={HomeStyles.tasksPanel}>
              <div className={HomeStyles.header}>
                <h2>Tasks</h2>
                <div className={HomeStyles.subheader}>September, 14</div>
              </div>
              {winReady &&
                state.scheduledTasks.sectionIds.map((cId: string) => {
                  const section = state.scheduledTasks.sections[cId];
                  const tasks = section.taskIds.map(
                    (t: string) => state.scheduledTasks.tasks[t]
                  );
                  return (
                    <Section
                      key={cId}
                      id={cId}
                      section={section}
                      scheduledTasks={tasks}
                    />
                  );
                })}
            </div>
            <div className={HomeStyles.quickTasksPanel}>
              <div className={HomeStyles.header}>
                <h2>Quick Tasks</h2>
                <div className={HomeStyles.subheader}>
                  My miscellaneous tasks
                </div>
              </div>
              <div className={HomeStyles.quickTasks}>
                <QuickTasks quickTasks={state.quickTasks} />
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      projects: initialProjectData,
      quickTasks: initialQuickTasksData,
      scheduledTasks: initialTaskData,
    },
  };
};

export default Home;
