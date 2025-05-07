import './TodoEditor.css';
import {useRef , useState} from 'react';

const TodoEditor = ({onCreate}) => {
    const [content , setContent] = useState("");
    const inputRef = useRef();
    const onkeyDown = (e) => {
        if(e.keyCode === 13)
            onSubmit();
    }
    const onSubmit = () =>{
        if(!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        // 새 아이템을 추가하고 난 후 content 반 값으로 다시 반환
    };

    return(
        <div className='TodoEditor'>
            <h4>새로운 Todo 작성하기</h4>
            <div className='editor_wrapper'>
                <input 
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                placeholder='새로운 Todo' />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
    // const inputRef = useRef();
    // const onSubmit = () => {
    //     if(!content) {
    //         inputRef.current.focus();
    //         return;
    //     }
    //     onCreate(content);
    //     setcontent("");
    // };
    // const onkeyDown = (e) => {
    //     if (e.keyCode === 13) {
    //         onsubmit();
    //     }
    // };
    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrpper">
                <input 
                value={content} 
                onChange={onChangeContent} 
                placeholder="새로운 Todo..." />
                <button>추가</button>
            </div>
        </div>
    );
};
export default TodoEditor;