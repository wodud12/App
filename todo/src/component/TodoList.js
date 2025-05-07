import TodoItem from "./TodoItem";
import './TodoList.css';



const TodoList = ({ todo }) => {
    return (
        <div className="TodoList">
            <h4>Todo List 🌴</h4>
            <input className="searchbar" placeholder="검색어를입력하세요"/>  
            <div className="list_wrapper">
                {todo.map((it) => (
                    <div>{it.content}</div>
                ))}
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    );
};
export default TodoList;