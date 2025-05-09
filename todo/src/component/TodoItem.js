import "./TodoItem.css";
const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDelete = () => {
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
            <div className="title_col">할 일</div>
            <div className="date_col">{new Date().toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};
export default TodoItem;