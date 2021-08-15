import type { NextPage } from "next";
import Background from "../components/Background";
import SubheaderMenu from "../components/SubheaderMenu";
import HomeStyles from "../styles/Home.module.scss";

const Home: NextPage = () => {
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
