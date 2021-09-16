import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Project } from "types/project";
import { Task as TaskType } from "types/task";
interface TaskProps {
  id: string;
  index: number;
  project: Project;
  done: boolean;
  datetime: string;
  task: TaskType;
}

const Container = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid gray;
  background: white;
  opacity: ${(props) => (props.isDragging ? "0.5" : "1")};
`;
const Task = (props: TaskProps) => {
  const {
    id,
    task: { title, description },
    project: { logo },
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
        >
          <span>{title}</span>
          <span>{description}</span>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
