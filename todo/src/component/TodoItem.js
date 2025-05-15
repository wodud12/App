import React from "react";
import "./TodoItem.css";


const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
    // 체크 박스를 클릭 했을 때 실행 되어야 되는 함수를 만든다.
    console.log(`${id} TodoItem update`)
    const onChangeCheckbox = () => {
        //해당 항목의 완료 상태가 변경하기 위해 부모
        //컴포넌트(App.js) 업데이트 되어야 되는 함수 실행
        onUpdate(id);
        // 부모 컴포넌트에 "이 할일(id)를 바꿔"라고 알려줌
    };
    //삭제 버튼을 실행 할 하는 함수 실행
    const onClickDelete = () => {
        //부모 컴포넌트에 "이 할일(id)를 삭제 해줘"
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input
                    onChange={onChangeCheckbox}
                    checked={isDone}
                    type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">{new Date().toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};
export default React.memo(TodoItem);