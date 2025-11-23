import { useEffect, useState } from 'react'
import './App.css'
import {TodoForm,TodoItem} from './components'
import {TodoProvider} from "./context/index"
function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    //setTodos will give all the todos in the prev to set the id of
    //the new todo we are using the Date.now() as a unique id
    //then in the todo setting the new todo
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updatedTodo=(id,todo)=>{
    //setTodos will give all the Todos in prev
    //on all the Todos we apply the map to find the same id to update 
    //map will one by one check for the id in each todo if the id is found then will change the old todo to new todo
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id==id? todo:prevtodo)))
  }

  const deleteTodo=(id)=>{
    //to delete a todo we are creating a new array using the filter method
    //which will filter the old array 
    //and in the new array only the id to be deleted is not avaliable 
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  
  const toggleCompleted=(id)=>{
    //this will also check for every todo id and then if the id is found then will change the complete to !complete
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id? {...prevtodo,completed: !prevtodo.completed}:prevtodo ))
  }

  //localstroge to get the data fo todos when the server loads
  useEffect(()=>{
    //using the get item method to get the information about the todos 
    //avaliable in the localstorage 
    //and by the help of Json.prase converting that todo string data into array
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  //using the useEffect to store all the todos information in the local stroage after converting it into string form
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (<TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div className='w-full' key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
      </div>
    </div>
  </TodoProvider>
  )
}

export default App
