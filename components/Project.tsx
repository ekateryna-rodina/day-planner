import Img from "next/image";
import React, { useState } from "react";
import ProjectStyles from "../styles/Project.module.scss";
import ProjectTasksList from "./ProjectTasksList";

interface IProjectProps {
  className: string;
  name: string;
  avatarUrls: string[];
  logo: string;
  // setExpanded: () => void;
  // expanded: boolean;
}
const Project = (props: IProjectProps) => {
  const { className, name, avatarUrls, logo } = props;
  const [expanded, setExpanded] = useState(false);
  const expandHandler = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <div className={`${ProjectStyles.projectBox} ${className}Pastel`}>
        <Img src={logo} width="35" height="35" />
        <div className={ProjectStyles.projectBoxContent}>
          <span className={ProjectStyles.projectName}>{name}</span>
          <div className={ProjectStyles.avatarSection}>
            {avatarUrls.map((a) => (
              <div className={ProjectStyles.avatar} key={a}>
                <Img src={a} layout="fill" />
              </div>
            ))}
            <span className={ProjectStyles.addMember}>
              <i className="fa">&#xf067;</i>
            </span>
          </div>
        </div>
        <span
          onClick={expandHandler}
          className={`fa ${ProjectStyles.chevron} ${
            expanded ? ProjectStyles.down : ""
          }`}
        >
          &#xf054;
        </span>
      </div>

      {expanded && <ProjectTasksList />}
    </div>
  );
};

export default Project;
