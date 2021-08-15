import React from "react";
import SubheaderMenuStyles from "../styles/SubheaderMenu.module.scss";

const SubheaderMenu = () => {
  return (
    <div className={SubheaderMenuStyles.projectsScope}>
      <input id="all" name="projects" type="radio" />{" "}
      <label htmlFor="all">All</label>
      <input id="personal" name="projects" type="radio" />{" "}
      <label htmlFor="personal">Personal</label>
      <input id="team" name="projects" type="radio" />{" "}
      <label htmlFor="team">Team</label>
    </div>
  );
};

export default SubheaderMenu;
