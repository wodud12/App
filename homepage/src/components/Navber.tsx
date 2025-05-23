import React from "react";
import './navbar.scss';

const Navbar: React.FC = () =>{
    return(
        <nav className="nav">
            <div className="logo">
                <span>glamping</span>
            </div>
            <ul className="main__nav">
                <li className="main__nav__li">글램핑장 검색</li>
                <li className="main__nav__li">추천</li>
                <li className="main__nav__li">관광지</li>
                <li className="main__nav__li">테마별</li>
                <li className="main__nav__li">이벤트</li>
            </ul>
        </nav>
    )
}
export default Navbar;