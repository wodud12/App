import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

// TodoList 에 컴포넌트를 여러개 만드는 방법
const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  // 검색창에 입력한 값을 저장하는 상태(문자열""")
  const totalCount = todo.length;
  console.log(`전체 개수 : ${totalCount}`);

  const onChangeSearch = (e) => {
    //검색창에 입력하면 실행되는 함수
    setSearch(e.target.value);
    //사용자 input 에 입력한 텍스트를 search  상태를 가져옴(저장)
  };

  const getSearchResult = () => {
    return search === ""
      ? todo //검색어가 없으면! 검색 목록을 보여주고
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;

  // const [search, setSearch] = useState("");
  // const onChangeSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const getSearchResult = () => {
  //   return search === ""
  //     ? todo
  //     : todo.filter((it) =>
  //         it.content.toLowerCase().includes(search.toLowerCase())
  //       );
  // };

    // return (
    //     <div className="TodoList">
    //       <h4>Todo List 🌱</h4>
    //       <input
    //         value={search}
    //         onChange={onChangeSearch}
    //         className="searchbar"
    //         placeholder="검색어를 입력하세요"
    //       />
    //       <div className="list_wrapper">
    //         {getSearchResult().map((it) => (
    //           <TodoItem
    //             key={it.id}
    //             {...it}
    //             onUpdate={onUpdate}
    //             onDelete={onDelete}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   );
    // };
