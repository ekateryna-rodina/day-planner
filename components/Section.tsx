import React from 'react'
import { Droppable } from "react-beautiful-dnd"
import Task from './Task';

interface SectionProps{
    id: number,
    section: {},
    tasks: [];
}
const Section = (props: SectionProps) => {
    const {id, section, tasks} = props;
    return (
          <Droppable droppableId={id.toString()}>
           {(provided) => (
                <div 
                {...provided.droppableProps}
                ref={provided.innerRef} >{
                tasks.map((task, index) => <Task key={task.id} index={index} {...task} />)
            }
            {provided.placeholder}
            </div>
            )}
      </Droppable>
    
          )
}
export default Section
