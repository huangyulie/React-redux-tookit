# React-redux-tookit

To Do List
<<<<<<< HEAD

## 安装 redux toolkit 相关的包,样式方面选择 arco

> npm install @reduxjs/toolkit react-redux
> npm install #arco-design/web-react

## 创建 Redux Store

> 创建一个 src/app/store.js 文件，从 Redux toolkit 里引入 configureStore，从创建个导出一个空的 Redux Store 开始

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

> 在这里创建 Redux store 的同时也会自动配置 Redux DevTools 的拓展，因此可以在运行中检查 store

## 使用 Redux Store

> 一旦 store 创建完成，就可以在 src/index.tsx 用<Provider>包裹我们的组件，使用 Store

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## 创建一个 Redux state Slice

> 创建 src/features/todolist/todolistSlice.ts 文件
> slice 需要一个 name 作为唯一标识，需要有初始化 State 值，还需要有一个 reducer 方法来定义如何变化
> 一旦 slice 创建完成就可以到处生成的 Redux action creators 和整个 slice 的 reducer 方法
> 冷知识：Redux 需要我们通过数据副本和更新副本去不可变的更新 state，然而 toolkit 的 createSlice 和 createReducer 使用了 Immer，允许直接跟新逻辑！！！

```js
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
      state.list = state.list.filter((item) => {
        return item.id === action.payload;
      });
    },
  },
});

export const { addList, deleteList } = todolistSlice.actions;

export default todolistSlice.reducer;
```

## 将 Slice Reducer 添加至 Store

```js
import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "../features/todolist/todolistSlice";

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});
```

## 在React组件中使用Redux State和ACtion

```js
import { List, Avatar, Input, Button } from "@arco-design/web-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, deleteList } from "./todolistSlice";

function Todolist() {
  const [text, setText] = useState("");
  const dataSource = useSelector((state: any) => state.todolist.list);
  const dispatch = useDispatch();

  const addListHandle = () => {
    setText("");
    const list = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const item = list[Math.floor(Math.random() * 7)];
    dispatch(
      addList({
        id: 3,
        thing: text,
        avatar: item,
      })
    );
  };

  const a = (e: any) => {
    console.log(e);
  };

  const render = (actions: any, item: any, index: any) => {
    return (
      <List.Item key={index} actions={actions}>
        <List.Item.Meta
          avatar={<Avatar shape="square">{item.avatar}</Avatar>}
          description={item.thing}
        />
      </List.Item>
    );
  };
  return (
    <>
      <List
        className="list-demo-actions"
        style={{ width: 700, margin: "10% auto" }}
        dataSource={dataSource}
        render={render.bind(null, [
          <span className="list-demo-actions-button" onClick={a}>
            编辑
          </span>,
          <span className="list-demo-actions-button">删除</span>,
        ])}
      />
      <Input
        style={{ width: 350, marginLeft: "30%" }}
        allowClear
        placeholder="请输入日程"
        value={text}
        onChange={(e) => setText(e)}
      />
      <Button type="primary" onClick={addListHandle}>
        添加
      </Button>
    </>
  );
}

export default Todolist;


```
=======
简单复习一下redux
>>>>>>> cb29380d698f4641c4e510cda54585addbba46cd
