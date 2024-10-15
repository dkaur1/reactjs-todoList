import React, { useState } from 'react'

export default function ToDoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props  //destructuring out the function 'handleAddTodos' from the props
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} placeholder='Enter to do...'></input> {/**onChange event listens for changes, whenevr input value changes it calls this function and receives e is the event, and e.target.value is the new text that gets entered to TODoInput */}
        <button onClick={() => {handleAddTodos(todoValue)
                setTodoValue('')
        }}>Add</button>
    </header>
  )
}
