import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 0,
      thing: "今天打麻将",
      avatar: "A",
    },
    {
      id: 1,
      thing: "wee1",
      avatar: "B",
    },
  ],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
    },
    deleteList: (state, action) => {
      state.list = state.list.filter((item)=>{
        return item.id === action.payload;
      })
    },
  },
});

export const { addList , deleteList } = todolistSlice.actions;

export default todolistSlice.reducer;
