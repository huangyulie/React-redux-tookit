import { List, Avatar, Input, Button } from "@arco-design/web-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList , changeList, deleteList } from "./todolistSlice";

function Todolist(this: any) {
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
        id: Math.random(),
        thing: text,
        avatar: item,
      })
    );
  };

  const changeListHandle = (props: any , options: number)=>{
    if(options === 1)
    dispatch(deleteList(props))
    else
    dispatch(changeList(props))
  }

  const render = (actions: any, item: any, index: any) => {
    let action = [
      // <span className="list-demo-actions-button" onClick={()=>changeListHandle(item,0)}>编辑</span>,
      <span className="list-demo-actions-button" onClick={()=>changeListHandle(item,1)}>删除</span>,
    ]
    return (
      <List.Item key={index} actions={action}>
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
        render={render.bind(null,[])}
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
