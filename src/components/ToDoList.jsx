import React from 'react'
import ToDoCard from './ToDoCard';

export default function ToDoList(props) {  //props contain both the children and the attributes 
   const {todos} = props; // we can destructure attributes out with whatever we named that prop in App.jsx
  return (
    
    <ul className='main'>
        {
            todos.map((todo, todoIndex) => {
               return(
               <ToDoCard {...props} key={todoIndex} index={todoIndex}> {/**...props -  spreads out all the props this ToDoList function component received, here basically we needED to pass handleDeleteTodo attribute prop from app.jsx to ToDoCard component via TodoList */}
                    <p>{todo}</p>
                </ToDoCard>
            )
            })
        }
    </ul>
  )
}
