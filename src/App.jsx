import { useEffect, useState } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


function App() {
  /*
  const todos = ['Task 1', 'Task 2', 'Task 3']
  */
  
  const [todos,setTodos] = useState([]);  //here we are declaring a React stateful variable named 'todos'(not a regular variable declaration like let todos=['Task1', 'Task2']), 'setTodos' is a setter function for todos
                                          // we pass default value for variable(todos) inside useState, it could be blank like useState(). Here we are passing empty array
  const [todoValue, setTodoValue] = useState('')  //here we are declaring a React stateful variable named 'todoValue', not a regular variable declaration like let todos=['Task1', 'Task2']                                     
  
  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }
  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]; //... is s spread operator, allows you to unpack the elements of an array or the properties of an object into another array or object
    persistData(newTodoList)
    setTodos(newTodoList);   // e.g of spread operator-const numbers = [1, 2, 3];
                              //const moreNumbers = [...numbers, 4, 5];
                                 //console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index   // if todoIndex(current index of todos array) is not equal to the index passed in this delete function, then it can stay in the array
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos)
  },[]) //[] square bracket is the dependency array, if we leave blank [], this code will run on page reload, if we pass a variable e.g [todos], it will listen to changes to todos variable
  
  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}></ToDoInput>  {/**passing function 'handleAddTodos' as an attribute prop */}
      <ToDoList  handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}></ToDoList>
    </>
  )

}

export default App
