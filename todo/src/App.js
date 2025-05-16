
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import React, {useCallback, useReducer, useState ,useRef } from 'react';



const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];
const TodoContext = React.createContext();

function App(){
  const idRef = useRef(3);
  const [todo,setTodo] = useState(mockTodo);
  const onCreate = (content) =>{
    let newItem = {
      id: idRef.current,
      content,
      isDone:false,
      createDate: new Date().getTime(),
    }
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }
  const onUpdate = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  // todo 저장하는 공간 
  return(
    <div className="App">
        <Header />
        <TodoContext.Provider value={{todo, onCreate, onUpdate, onDelete}}> 
          <TodoEditor onCreate={onCreate}/>
          <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        </TodoContext.Provider>
    </div>
  )
}

export default App;