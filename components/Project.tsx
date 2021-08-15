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
  const { className, name, avatarUrls, logo } = props;
  return (
    <div className={`projectBox ${className}}`}>
      <Img src={logo} width="35" height="35" />
      <div className={ProjectStyles.projectBoxContent}>
        <span className={ProjectStyles.projectName}>{name}</span>
        <div className={ProjectStyles.avatarSection}>
          {avatarUrls.map((a) => {
            <Img className={ProjectStyles.avatar} src={a} />;
          })}
          <span className={ProjectStyles.addMember}>
            <i className={ProjectStyles.fa}>&#xf067;</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
