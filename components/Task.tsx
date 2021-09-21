import Image from "next/image";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Project } from "types/project";
import { Task as TaskType } from "types/task";
import Checkbox from "./Checkbox.style";
interface TaskProps {
  id: string;
  index: number;
  project: Project;
  done: boolean;
  datetime: string;
  task: TaskType;
}

const Container = styled.div<{ isDragging: boolean; cardBg: string }>`
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.5rem;
  background: ${(props) => props.theme[props.cardBg]};
  opacity: ${(props) => (props.isDragging ? "0.5" : "1")};

  height: max-content;
  min-height: 3rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;

  * {
    color: #fff;
  }
  :last-child {
    margin-bottom: 0;
  }
`;
const Logo = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;
const TextContainer = styled.div`
  max-width: 22rem;
  padding-left: 0.5rem;
  font-size: 1rem;
`;
const ProjectName = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;
const Description = styled.p<{ done: boolean }>`
  ${({ done }) => "text-decoration: line-through"}
`;
const CheckboxContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const Task = (props: TaskProps) => {
  const {
    id,
    task: { title, description },
    project: { logo, className },
    index,
  } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          cardBg={className}
        >
          <Logo>
            <Image
              src={
                "https://res.cloudinary.com/kariecloud/image/upload/v1629311147/IMAGE_2021-08-11_18_39_43_r0ituj.jpg"
              }
              layout="fill"
              alt=""
            />
          </Logo>
          <TextContainer>
            <ProjectName>{"name"}</ProjectName>
            <Description done={true}>{"description"}</Description>
          </TextContainer>
          <CheckboxContainer>
            <Checkbox />
          </CheckboxContainer>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
