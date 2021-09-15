import { gql, useQuery } from "@apollo/client";
import Project from "components/Project";
import TasksByBlocks from "components/TasksByBlocks";
import { range } from "lodash";
import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Background from "../components/Background";
import Hint from "../components/Hint";
import QuickTasks from "../components/QuickTasks";
import SubheaderMenu from "../components/SubheaderMenu";
import Section from "../components/Section";
import HomeStyles from "../styles/Home.module.scss";
import { Project as ProjectType } from "../types/project";
import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import initialData from '../data'
console.log('hello');
console.log(initialData);
import {
  QuickTask,
  QuickTask as QuickTaskType,
  ScheduledTask,
} from "../types/task";

interface IData {
  projects: ProjectType[];
  tasks: {}[];
  quickTasks: {}[];
}

// const Query = gql`
//   query Query {
//     projects {
//       id
//       name
//       className
//       logo
//       avatars
//       tasks {
//         title
//         description
//       }
//     }
//     scheduledTasks {
//       id
//       taskId
//       section
//       order
//       done
//       datetime
//       task {
//         title
//         description
//         project {
//           className
//           logo
//         }
//       }
//     }
//     quickTasks {
//       id
//       description
//       done
//     }
//   }
// `;

interface IHomeProps {
  data: {
      projects: ProjectType[];
      scheduledTasks: ScheduledTask[];
      quickTasks: QuickTaskType[];
  }
}

// const queryAttr = "data-rbd-drag-handle-draggable-id";
const Home: NextPage<IHomeProps> = ({data}) => {
  console.log(data);
  // const { data, loading, error } = useQuery(Query);

  const [state, setState] = useState(initialData);
  console.log(state);
  const [placeholedProps, setPlaceholderProps] = useState({});

  const [userData, setUserData] = useState<{
    quickTasks: QuickTask[];
    projects: ProjectType[];
    scheduledTasks: ScheduledTask[];
  }>({
    quickTasks: [],
    scheduledTasks: [],
    projects: [],
  });

  // useEffect(() => {
  //   if (!data) return;
  //   setUserData({
  //     projects: data.projects,
  //     scheduledTasks: data.scheduledTasks,
  //     quickTasks: data.quickTasks,
  //   });
  // }, [data]);

  const isPositionChanged = (destination: any, source: any) => {
    if (!destination || !source) return;
    const isPositionChanged =
      destination.droppableId != source.droppableId ||
      destination.index != source.index;
    return isPositionChanged;
  };

  const getAffectedTasksRange = (params: any) => {
    const { from, to, moveDown } = params;
    let rangeToUpdate: number[] = moveDown
      ? range(to, from + 1)
      : range(from, to + 1);
    return rangeToUpdate;
  };
  const reorderTaskPositions = (
    params: any,
    scheduledTasks: ScheduledTask[]
  ): ScheduledTask[] => {
    if (!params) return scheduledTasks;
    const { destination, source, draggableId } = params;
    const moveDown = destination.index > source.index;
    const affectedRange = getAffectedTasksRange({
      from: destination.index,
      to: source.index,
      moveDown,
    });

    let reordered: ScheduledTask[] = [];
    reordered = scheduledTasks.map((task) => {
      if (affectedRange.includes(task.order)) {
        if (task.id.toString() === draggableId.toString()) {
          return {
            ...task,
            order: destination.index,
            section: +destination.droppableId.split("_")[1],
          };
        } else {
          return { ...task, order: moveDown ? task.order - 1 : task.order + 1 };
        }
      } else {
        return task;
      }
    });
    return reordered;
  };
  const onDragTaskEnd = useCallback(
    (dropResult: any) => {
      const { destination, source } = dropResult;
      if (!isPositionChanged(destination, source)) return;
      const reordered: ScheduledTask[] = reorderTaskPositions(
        {
          destination,
          source,
          draggableId: dropResult.draggableId,
        },
        userData.scheduledTasks
      );

      if (!reordered) return;

      setUserData({
        ...userData,
        scheduledTasks: reordered,
      });
      // setPlaceholderProps({});
    },
    // eslint-disable-next-line
    [userData]
  );

  // const onDragTaskUpdate = (params: any) => {
  //   const { destination, draggableId } = params;
  //   if (!destination) return;
  //   const { droppableId, index } = destination;

  //   const domQuery = `[${queryAttr}='${draggableId}']`;

  //   const domDraggable = document.querySelector(domQuery);

  //   if (!domDraggable) return;
  //   const { clientHeight, clientWidth } = domDraggable;

  //   const clientY =
  //     parseFloat(window.getComputedStyle(domDraggable.parentNode).paddingTop) +
  //     [...domDraggable.parentNode.children]
  //       .slice(0, index)
  //       .reduce((total, curr) => {
  //         const style = curr.currentStyle || window.getComputedStyle(curr);
  //         const marginBottom = parseFloat(style.marginBottom);
  //         return total + curr.clientHeight + marginBottom;
  //       }, 0);

  //   setPlaceholderProps({
  //     clientHeight,
  //     clientWidth,
  //     clientY,
  //     clientX:
  //       parseFloat(
  //         window.getComputedStyle(domDraggable.parentNode).paddingLeft
  //       ) + 330,
  //   });
  // };

  // if (loading) return <span>...loading</span>;
  return (
    <div>
      <Background />

      <div className={HomeStyles.centeredContainer}>
        <DragDropContext
          onDragEnd={onDragTaskEnd}
          // onDragUpdate={onDragTaskUpdate}
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
                {userData.projects &&
                  userData.projects.map((p: ProjectType) => (
                    <Project key={p.id} {...p} />
                  ))}
              </div>
            </div>
            <div className={HomeStyles.tasksPanel}>
              <div className={HomeStyles.header}>
                <h2>Tasks</h2>
                <div className={HomeStyles.subheader}>September, 14</div>
              </div>
              {
                  state.sectionIds.map(cId => {
                  const section = state.sections[cId];
                  const tasks = section.taskIds.map(t => state.tasks[t]);
                  return <Section key={section.name} id={cId} section={section} tasks={tasks}/>
      })
              }
            </div>
            <div className={HomeStyles.quickTasksPanel}>
              <div className={HomeStyles.header}>
                <h2>Quick Tasks</h2>
                <div className={HomeStyles.subheader}>
                  My miscellaneous tasks
                </div>
              </div>
              <div className={HomeStyles.quickTasks}>
                <QuickTasks quickTasks={userData.quickTasks} />
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

    return {props: { data : initialData}}

}

export default Home;
