import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid method generates unique id

// In redux toolkit, slices are called reducers
 
//features are called slice

const initialState = {
    todos: [{id: 1, text: "Delete this existing item"}] //this is a state of todos
}

// state and reducer are part of redux-toolkit

//reducer is an object and also a functionality on the other hand slice is a bigger version of reducer.

export const todoSlice = createSlice({
    name: 'todo',
    initialState, //every slice has an initial state
    reducers: { // reducers accept key:function pair (addTodo: (state, action)). Reducer contain properties(addTodo, removeTodo) and functions
        addTodo: (state, action) => { //function will always have a state and action as a parameter. State will give access of the current state or initialState and action will give us values when we want to perform some action using the function
            const todo = {
                id: nanoid(), //generation of unique id using nanoid 
                text: action.payload // payload is an object which is used to extract text of todo item
            } 
            state.todos.push(todo) //updating state of todo here
        },
        
        
        removeTodo: (state, action) => { //function will always have a state and action as a parameter State will give access of the current state or initialState and action will give us values when we want to perform some action using the function
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)
        }, 
    } //reducer contain properties and function
})

export const {addTodo, removeTodo} = todoSlice.actions // exporting individual functionalities to use in components further

export default todoSlice.reducer // exporting the store  