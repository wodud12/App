import React from "react";
import {useNavigate} from 'react-router-dom';

const About: React.FC = () =>{
  const navigate = useNavigate();
  return(
    <div>
        <h1>어바웃 페이지입니다.</h1>
        <button onClick={() => navigate('/')}>
        Home으로 이동</button>
    </div>
  )
}
export default About;