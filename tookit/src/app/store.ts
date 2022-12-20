import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from '../features/todolist/todolistSlice'

export const store = configureStore({
    reducer:{
        todolist:todolistReducer,
    },
})