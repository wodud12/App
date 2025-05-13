import { BrowserRouter, Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';

function App(){
  return(
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;










//state(상태)
//화면에 보여지는 변할 수 있는 값을 저장하는 공간
//박스를 하나 만들고, 그 안에 숫자나 글자를 넣고 계속 바꿀 수 있다.
//그리고 그 안에 박스가 바뀌면 자동으로 화면이 바뀐다.