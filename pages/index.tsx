import { gql, useQuery } from "@apollo/client";
import Project from "components/Project";
import { range } from "lodash";
import type { NextPage } from "next";
import React, { useCallback, useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { initializeApollo } from "src/apollo";
import Background from "../components/Background";
import Hint from "../components/Hint";
import QuickTasks from "../components/QuickTasks";
import SubheaderMenu from "../components/SubheaderMenu";
import TasksByBlocks from "../components/TasksByBlocks";
import HomeStyles from "../styles/Home.module.scss";
import { Project as ProjectType } from "../types/project";
import { QuickTask as QuickTaskType, Task } from "../types/task";

interface IData {
  projects: ProjectType[];
  tasks: {}[];
  quickTasks: {}[];
}

const Query = gql`
  query Query {
    projects {
      id
      name
      className
      logo
    }
  } 
`;

interface IHomeProps {
  projects: ProjectType[];
  tasks: Task[];
  quickTasks: QuickTaskType[];
}

const queryAttr = "data-rbd-drag-handle-draggable-id";
const Home: NextPage<IHomeProps> = (props) => {

  const { data, loading, error } = useQuery(Query);

  console.log(data);
  //   const [projects, scheduledTasks, quickTasks] = [
  //   [],
  //   [],
  //   []
  // ];
  function setProjectsHandler(){
    if(!data) return;
     setProjects(data.projects);
  }
  // useEffect(setProjectsHandler, [data])
  const [projects, scheduledTasks, quickTasks] = [
    data?.projects ?? [],
    data?.scheduledTasks ?? [],
    data?.quickTasks ?? [],
  ];

  const [tasksData, setTasks] = useState(scheduledTasks);
  const [projectsData, setProjects] = useState(projects);
  console.log('set projects')
  const [quickTasksData, setQuicktasks] = useState(quickTasks);
  const [placeholedProps, setPlaceholderProps] = useState({});
  // const [expanded, setExpanded] = useState();
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
  const reorderTaskPositions = (params: any, tasksToReorder: Task[]) => {
    const { destination, source, draggableId } = params;
    const moveDown = destination.index > source.index;
    const affectedRange = getAffectedTasksRange({
      from: destination.index,
      to: source.index,
      moveDown,
    });

    let tasks_: Task[] = tasksToReorder;
    for (let task of tasks_) {
      if (!affectedRange.includes(task.position)) continue;
      if (task.id === draggableId) {
        task.position = destination.index;
        task.block = +destination.droppableId.split("_")[1];
      } else {
        task.position = moveDown ? task.position - 1 : task.position + 1;
      }
    }

    return tasks_;
  };
  const onDragTaskEnd = useCallback(
    (dropResult: any) => {
      const { destination, source } = dropResult;
      if (!isPositionChanged(destination, source)) return;
      const reordered: Task[] = reorderTaskPositions(
        {
          destination,
          source,
          draggableId: dropResult.draggableId,
        },
        tasksData
      );

      setTasks([...reordered]);
      // setPlaceholderProps({});
    },
    // eslint-disable-next-line
    []
  );

  const onDragTaskUpdate = (params: any) => {
    const { destination, draggableId } = params;
    if (!destination) return;
    const { droppableId, index } = destination;

    const domQuery = `[${queryAttr}='${draggableId}']`;

    const domDraggable = document.querySelector(domQuery);

    if (!domDraggable) return;
    const { clientHeight, clientWidth } = domDraggable;

    const clientY =
      parseFloat(window.getComputedStyle(domDraggable.parentNode).paddingTop) +
      [...domDraggable.parentNode.children]
        .slice(0, index)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX:
        parseFloat(
          window.getComputedStyle(domDraggable.parentNode).paddingLeft
        ) + 330,
    });
  };

  if (loading) return <span>...loading</span>;
  return (
    <div>
      <Background />

      <div className={HomeStyles.centeredContainer}>
        <DragDropContext
          onDragEnd={onDragTaskEnd}
          onDragUpdate={onDragTaskUpdate}
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
                {projectsData && projectsData.map((p: ProjectType) => (
                  <Project key={p.id} {...p} />
                ))}
              </div>
            </div>
            <div className={HomeStyles.tasksPanel}>
              <div className={HomeStyles.header}>
                <h2>Tasks</h2>
                <div className={HomeStyles.subheader}>September, 14</div>
              </div>
              <TasksByBlocks tasks={tasksData} dndParams={placeholedProps} />
            </div>
            <div className={HomeStyles.quickTasksPanel}>
              <div className={HomeStyles.header}>
                <h2>Quick Tasks</h2>
                <div className={HomeStyles.subheader}>
                  My miscellaneous tasks
                </div>
              </div>
              <div className={HomeStyles.quickTasks}>
                <QuickTasks quickTasks={quickTasksData} />
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
