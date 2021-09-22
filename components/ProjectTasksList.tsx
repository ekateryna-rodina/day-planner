import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styled from "styled-components";
import ProjectStyles from "../styles/Project.module.scss";
const ProjecTasksContainer = styled.div`
  width: 88%;
  height: max-content;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;
const SearchOrAddRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TaskInputContainer = styled.div`
  position: relative;
  width: 80%;
`;
const FocusInput = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.primary};
  width: 0%;
  height: 1.5px;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -o-transition: 0.4s;
`;
const Input = styled.input`
  width: 100%;
  height: 1.3rem;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.theme.light}`};
  padding: 0.5rem;
  :focus {
    outline: none;
    & ~ .focusInput {
      width: 100%;
    }
  }
`;
const AddButton = styled.input`
  cursor: pointer;
  width: 2rem;
  height: 1.3rem;
  background: ${(props) => props.theme.primary};
  border: none;
  border-radius: 2px;
  color: #fff;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
`;
const TasksContainer = styled.div`
  margin-top: 0.5rem;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Task = styled.div`
  width: 100%;
  margin: 0.1rem 0;
  padding: 0.1rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const ProjectTasksList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const createTask = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (!input.length) return;
    setTasks([...tasks, input]);
    setInput("");
  };
  return (
    <ReactCSSTransitionGroup
      transitionName={{
        enter: ProjectStyles.enter,
        enterActive: ProjectStyles.enterActive,
        leave: ProjectStyles.leave,
        leaveActive: ProjectStyles.leaveActive,
        appear: ProjectStyles.appear,
        appearActive: ProjectStyles.appearActive,
      }}
      transitionAppear={true}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      <ProjecTasksContainer>
        <form onSubmit={createTask}>
          <SearchOrAddRow>
            <TaskInputContainer>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={"Add or search a task"}
              />
              <FocusInput className="focusInput"></FocusInput>
            </TaskInputContainer>
            <AddButton type="submit" value="+" />
          </SearchOrAddRow>
          <TasksContainer>
            {tasks.map((t) => (
              <Task key={t}>{t}</Task>
            ))}
          </TasksContainer>
        </form>
      </ProjecTasksContainer>
    </ReactCSSTransitionGroup>
  );
};

export default ProjectTasksList;
