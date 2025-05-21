import { useState } from "react";

const Counter: React.FC = () =>{
    const[count, setCount] = useState<number>(0);

    const handleClick = () =>{
        setCount(count+3);
    }
    const decrease = () =>{
        setCount(prevCount=>(prevCount > 0 ?prevCount -5:0))
        // 값은 -5씩 빼주고, 무조건 0에 값이 도달 되면 0으로 만들어줘.
    }
    return(
        <div>
            <h2>숫자 증가: {count}</h2>
            <button onClick={handleClick}>+1</button>
            <button onClick={decrease}>+1</button>
        </div>
    )
}