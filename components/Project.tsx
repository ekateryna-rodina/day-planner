import Img from "next/image";
import React from "react";
import ProjectStyles from "../styles/Project.module.scss";

interface IProjectProps {
  className: string;
  name: string;
  avatarUrls: string[];
  logo: string;
}
const Project = (props: IProjectProps) => {
  console.log("here");
  const { className, name, avatarUrls, logo } = props;
  return (
    <div className={`${ProjectStyles.projectBox} ${className}Pastel`}>
      <Img src={logo} width="35" height="35" />
      <div className={ProjectStyles.projectBoxContent}>
        <span className={ProjectStyles.projectName}>{name}</span>
        <div className={ProjectStyles.avatarSection}>
          {avatarUrls.map((a) => (
            <div className={ProjectStyles.avatar} key={a}>
              <Img
                src={a}
                layout="fill"
                // width="20"
                // height="20"
              />
            </div>
          ))}
          <span className={ProjectStyles.addMember}>
            <i className="fa">&#xf067;</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
