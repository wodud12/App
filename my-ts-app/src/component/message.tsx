import React from 'react';

interface WelcomeMessageProps{
    name : string; // name은 String 타입로 전달
    // age: number;
    // text: string;
    // date: number;

    
}

const WelcomeMessage:React.FC<WelcomeMessageProps> = ({name}) => {
    return <button style={{
        backgroundColor: 'gold',
        padding: '10px 20px',
        fontSize: '18px'
    }}>{name}</button>
}

export default WelcomeMessage;