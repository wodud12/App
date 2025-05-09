import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState ,useRef } from 'react';

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
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  // todo 저장하는 공간 
  return(
    <div className="App">   
        <Header />
        <TodoEditor onCreate={onCreate}/>
        <TodoList todo={todo} onDelete={onDelete} />
    </div>
  )
}

export default App;