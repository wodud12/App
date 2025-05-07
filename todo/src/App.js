
import './App.css';
import Header from './component/Header';
// import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import {useState ,useRef} from 'react';

function App(){
  const idRef = useRef(3);
  const [todo,setTodo] = useState();
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
      <TodoList/>
    </div>
  );
}



export default App;
