import React, { Fragment } from "react";
import BackgroundStyles from "../styles/Background.module.scss";

const Background = () => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        height="100%"
        width="100%"
        viewBox="0 0 801 470"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="linearGradient"
            x1="836.993"
            y1="628"
            x2="363.007"
            y2="-1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fd0864" />
            <stop offset="50%" stopColor="#584285" />
            <stop offset="100%" stopColor="#fd0864" />
          </linearGradient>
        </defs>
        <path
          id="_6"
          data-name="6"
          className={BackgroundStyles.cls1}
          d="M0-.992H1200V628H0V-0.992Z"
        />
        <path
          id="_5"
          data-name="5"
          className={BackgroundStyles.cls2}
          d="M169.5-.523s858.23,374.6,1030.5,387.79c0-314.821.75-387.79,0.75-387.79H169.5Z"
        />
        <path
          id="_4"
          data-name="4"
          className={BackgroundStyles.cls3}
          d="M327,66.987s697.59,304.425,873,321.85V271.61Z"
        />
        <path
          id="_3"
          data-name="3"
          className={BackgroundStyles.cls4}
          d="M326.25,66.463S1189.69,275.724,1200,272.133V194.157Z"
        />
        <path
          id="_2"
          data-name="2"
          className={BackgroundStyles.cls5}
          d="M352.5,0S413.128,20.473,537,34.54c124.065,8.179,490.36,78.836,597,111.47,23.86,7.326,44.19,13.3,66,16.747V96.817L825.75,0H352.5Z"
        />
        <path
          id="_1"
          data-name="1"
          className={BackgroundStyles.cls6}
          d="M812.25,0S957.224,75.5,1200,100.48V0H812.25Z"
        />
      </svg>
    </Fragment>
  );
};

export default Background;
