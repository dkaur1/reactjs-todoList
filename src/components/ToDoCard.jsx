import React from 'react'

export default function ToDoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props; //destructuring children out from the props, it gives acess to all the children elements
  return (
    <div>
       
       <li className='todoItem'>
            {children}   {/*rendering out the children*/}
            <div className='actionsContainer'>
                    <button onClick={() =>{
                      handleEditTodo(index)
                    }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => {
                      handleDeleteTodo(index)
                    }}>
                    <i className="fa-solid fa-trash-can"></i>
                    </button>
            </div>
        </li>
    </div>
  )
}
