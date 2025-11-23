import { useContext,createContext } from "react"

export const todoContext=createContext({
    todos:[{}],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updatedTodo:(id,todo)=>{},
    toggleCompleted:(id)=>{}
})

export const TodoProvider=todoContext.Provider

export function useTodo(){
    return useContext(todoContext)
}