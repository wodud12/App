
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import {useState ,useRef} from 'react';

const mockTodo = [
  {
    id:0,
    isDone:false,
    content: "react 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content: "밥 먹기",
    createDate: new Date().getTime(),
  },
]
function App(){
  const idRef = useRef(3);
  const [todo,setTodo] = useState(mockTodo);
  const onCreate = (content) => {
    let newItem ={
      id: idRef.current,
      content,
      isDone: false,
      date: new Date().getTime(),
    }
    setTodo([newItem,...todo]);
    idRef.current += 1;
  }
  
  // todo 란 저장하는 공간
  return (
    <div className="App">
      <Header/>
      <TodoEditor  onCreate={onCreate}/>
      <TodoList todo={todo}/>
    </div>
  );
}

export default App;
