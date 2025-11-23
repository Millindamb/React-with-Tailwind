import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello world!"}]
}

const todoSlice=createSlice({
    name:'todo',//name to store
    initialState,//intialState contains all the data
    reducers:{//reducers contain the method we need to use
        addTodo:(state,action)=>{//state means the previous State 
            const todo={//the new todo to be inserted
                id:nanoid(),//nano id will generate the new id
                text:action.payload//to take the new text for the todo form the action.playload
            }
            state.todos.push(todo)//pushing the new todo to the list of previous todos ava in the state
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)//taking the id of the todo to be removed and 
            //using the filter method to filter the old todo list and removing the one
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((prev)=>prev.id===action.payload.id?{...prev,...action.payload}:prev)
        }
    }
})

//passing the add,remove method from todoslice.actions
export const {addTodo,removeTodo}=todoSlice.actions

//to pass the method to Store
export default todoSlice.reducer