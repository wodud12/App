import React from "react";

interface GreetingProps {
    name : string;
    age? : number;
    //선택적

}

const Name: React.FC<GreetingProps> = ((name,age)) =>{
    return(
        <div>
            <p>안녕하세요 {name}</p>
            <p>안녕하세요 {age}</p>
        </div>
    )
}

export default Name;