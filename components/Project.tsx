import Img from "next/image";
import { setLightness, setSaturation } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import ProjectTasksList from "./ProjectTasksList";

const ProjectContainer = styled.div<{ className: string }>`
  width: 100%;
  max-width: 15rem;
  height: 3.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  position: relative;
  background: ${(props) => setLightness(0.9, props.theme[props.className])};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0.7rem;
`;
const ProjectName = styled.span<{ className: string }>`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => setSaturation(0.5, props.theme[props.className])};
`;
const AvatarsContainer = styled.div`
  margin-top: 0.2rem;
`;
const Avatar = styled.div`
  display: inline-block;
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-right: 0.2rem;
`;
const AddMember = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background: white;
  position: relative;
  cursor: pointer;
`;
const Icon = styled.i`
  position: absolute;
  top: 28%;
  left: 28%;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.5rem;
`;
const Chevron = styled.span<{ expanded: boolean }>`
  cursor: pointer;
  margin-left: auto;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
  ${({ expanded }) =>
    expanded
      ? `
transform: rotate(90deg) translateY(10px);
-webkit-transform: rotate(90deg) translateY(10px);
-moz-transform: rotate(90deg) translateY(10px);
-ms-transform: rotate(90deg) translateY(10px);
-o-transform: rotate(90deg) translateY(10px);
`
      : ""}
`;
interface IProjectProps {
  className: string;
  name: string;
  avatars: string[];
  logo: string;
}
const Project = (props: IProjectProps) => {
  const { className, name, avatars, logo } = props;
  const [expanded, setExpanded] = useState(false);
  const expandHandler = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <ProjectContainer className={className}>
        <Img src={logo} width="35" height="35" />
        <Content>
          <ProjectName className={className}>{name}</ProjectName>
          <AvatarsContainer>
            {avatars.map((a) => (
              <Avatar key={a}>
                <Img src={a} layout="fill" />
              </Avatar>
            ))}
            <AddMember>
              <Icon className="fa">&#xf067;</Icon>
            </AddMember>
          </AvatarsContainer>
        </Content>
        <Chevron onClick={expandHandler} expanded={expanded} className="fa">
          &#xf054;
        </Chevron>
      </ProjectContainer>

      {expanded && <ProjectTasksList />}
    </div>
  );
};

export default Project;
