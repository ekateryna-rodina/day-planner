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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Tasks = styled.div`
  width: 100%;
`;
const SectionLabel = styled.div`
  flex: 0 0 30px;
  border-radius: 5px;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.dark};
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
`;

const VerticalText = styled.span`
  writing-mode: vertical-rl;
  text-orientation: sideways;
  color: #fff;
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
          <Tasks>
            {scheduledTasks.map(
              (scheduledTask: ScheduledTask, index: number) => (
                <Task
                  key={scheduledTask.id}
                  index={index}
                  {...scheduledTask}
                  {...scheduledTask.task}
                />
              )
            )}
            {provided.placeholder}
          </Tasks>
          <SectionLabel>
            <VerticalText>{"12PM - 3PM"}</VerticalText>
          </SectionLabel>
        </Container>
      )}
    </Droppable>
  );
};
export default Section;
