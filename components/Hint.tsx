import React from "react";
import HintStyles from "../styles/Hint.module.scss";

const Hint = () => {
  return (
    <div className={HintStyles.hintPopup}>
      <div className={HintStyles.icons}>
        <span className={HintStyles.hintIcon}>
          <i className="fa">&#xf05a;</i>
        </span>
        <span className={HintStyles.closeIcon}>
          <i className="fa">&#xf00d;</i>
        </span>
      </div>
      <div className={HintStyles.centered}>
        <div className={HintStyles.text}>
          Drag a task into one of Today&apos;s time blocks
        </div>
        <button id="hideHintButton">got it</button>
      </div>
    </div>
  );
};

export default Hint;
