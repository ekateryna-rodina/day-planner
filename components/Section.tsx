import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ScheduledTask } from "types/task";
import Task from "./Task";
interface SectionProps {
  id: string;
  section: {};
  scheduledTasks: ScheduledTask[];
}
const Container = styled.div<{ isDraggingOver: boolean }>`
  margin: 0.5rem;
  padding: 0.5rem;
  border: ${(props) => "2px solid rgba(0, 0, 0, 0.1)"};
  border-radius: 0.2rem;
`;
const Section = (props: SectionProps) => {
  const { id, section, scheduledTasks } = props;
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {scheduledTasks.map((scheduledTask: ScheduledTask, index: number) => (
            <Task
              key={scheduledTask.id}
              index={index}
              {...scheduledTask}
              {...scheduledTask.task}
            />
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};
export default Section;
