import { useState } from 'react';

function SimpletTodoItem(){
  const [isDone , setIsDone] = useState(false);
  
  const handleCheckboxChange=()=>{
    setIsDone(!isDone)
    // 체크할 때 마다 true / false 반전
  }

  return(
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        textDecoration: isDone ? 'line-through' : 'none',
      }}
    >
      <input type='checkbox'
      onChange={handleCheckboxChange}
      checked={isDone}/>
      <span>공부하기</span>
    </div>
  )

}

export default SimpletTodoItem;












//state(상태)
//화면에 보여지는 변할 수 있는 값을 저장하는 공간
//박스를 하나 만들고, 그 안에 숫자나 글자를 넣고 계속 바꿀 수 있다.
//그리고 그 안에 박스가 바뀌면 자동으로 화면이 바뀐다.