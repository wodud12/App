import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: '공부하기', isDone: false },
    { id: 2, text: '운동하기', isDone: true },
    { id: 3, text: '청소하기', isDone: false }
  ]);

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };


  return (
    <div>
      <h2>📝 할 일 목록</h2>
      <ul>
        {todo.map((it) => (
          <li key={it.id} style={{ marginBottom: 10 , listStyle:'none'}}>
            <input type="checkbox"
            checked={it.isDone}
            onChange={()=>onUpdate(it.id)} />
            <button onClick={() => onUpdate(it.id)}>
              {it.isDone ? ' 되돌리기' : ' 완료'}
            </button>
            <span style={{TextDecoration: it.isDone ? 'line-through' : 'none'}}>
              {it.isDone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;