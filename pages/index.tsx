import type { NextPage } from "next";
import Background from "../components/Background";
import Hint from "../components/Hint";
import Project from "../components/Project";
import SubheaderMenu from "../components/SubheaderMenu";
import TasksByBlocks from "../components/TasksByBlocks";
import HomeStyles from "../styles/Home.module.scss";
import { Project as ProjectType } from "../types/project";
import { Task } from "../types/task";
import { http } from "../utils/http";

interface IData {
  projects: ProjectType[];
  tasks: {}[];
  quickTasks: {}[];
}
export const getStaticProps = async () => {
  let data = await http<IData>("http://localhost:5000/data");
  console.log(data);
  const { projects, tasks } = data;
  console.log(projects);
  return {
    props: {
      projects,
      tasks,
      quickTasks: {},
    },
  };
};

interface IHomeProps {
  projects: ProjectType[];
  tasks: Task[];
}
const Home: NextPage = (props) => {
  const { projects, tasks } = props;
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
              {projects.map((p: ProjectType) => (
                <Project key={p.id} {...p} />
              ))}
            </div>
          </div>
          <div className={HomeStyles.tasksPanel}>
            <div className={HomeStyles.header}>
              <h2>Tasks</h2>
              <div className={HomeStyles.subheader}>September, 14</div>
            </div>
            <TasksByBlocks tasks={tasks} />
          </div>
          <div className={HomeStyles.quickTasksPanel}>
            <div className={HomeStyles.header}>
              <h2>Quick Tasks</h2>
              <div className={HomeStyles.subheader}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
