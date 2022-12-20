import { List, Avatar, Input, Button } from "@arco-design/web-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "./todolistSlice";

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
        id: 3,
        thing: text,
        avatar: item,
      })
    );
  };

  const render = (actions: any, item: any, index: any) => {
    console.log(actions);
    
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
          <span
            className="list-demo-actions-button"
            onClick={() => console.log(this)}
          >
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
