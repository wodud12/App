import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useReducer ,useRef } from 'react';

import TestComp from "./component/TestComp";


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

function reducer(state, action) {
  //상태 변화 코드
  return state;
}

function App(){
  const [todo,dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId) => {
  };
  const onDelete = (content) => {
  };
  // todo 저장하는 공간 
  return(
    <div className="App">   
        <TestComp /> 
        <Header />
        <TodoEditor onCreate={onCreate}/>
        <TodoList todo={todo} onDelete={onDelete} />
    </div>
  )
}

export default App;