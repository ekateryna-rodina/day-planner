import type { NextPage } from "next";
import Background from "../components/Background";
import Hint from "../components/Hint";
import Project from "../components/Project";
import SubheaderMenu from "../components/SubheaderMenu";
import HomeStyles from "../styles/Home.module.scss";
import { http } from "../utils/http";

type Project = {
  id: string;
  name: string;
  logo: string;
  className: string;
  avatarUrls: string[];
};
interface IData {
  projects: Project[];
  tasks: {}[];
  quickTasks: {}[];
}
export const getStaticProps = async () => {
  let data = await http<IData>("http://localhost:5000/data");
  const { projects } = data;
  console.log(projects);
  return {
    props: {
      projects,
      tasks: [],
      quickTasks: {},
    },
  };
};

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
              {projects.map((p: Project) => (
                <Project key={p.id} {...p} />
              ))}
            </div>
          </div>
          <div className={HomeStyles.tasksPanel}>
            <div className={HomeStyles.header}>
              <h2>Tasks</h2>
              <div className={HomeStyles.subheader}></div>
            </div>
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
