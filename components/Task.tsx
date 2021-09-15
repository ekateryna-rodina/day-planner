import React from 'react'
import {Draggable} from "react-beautiful-dnd";

interface TaskProps{
    id: string,
    title: string,
    description: string,
    index: number
}

const Task = (props: TaskProps) => {
      const {id, title, description, index} = props;
    return (
         <Draggable draggableId={id} index={index}>
            {(provided) => (
            <div
                {...provided.draggableProps}    
                {...provided.dragHandleProps} 
                ref={provided.innerRef}>
                <span>{title}</span> 
                <span>{description}</span>  
            </div>
            )}
        </Draggable>       
    )
}

export default Task
