import { useContext } from "react";
import AuthContext from "./AuthContext";

function Header(){
    const {user,logout} = useContext(AuthContext);
    return(
        <header>
            {user ? (
                <>
                <p>환영합니다.</p>
                <button onClick={logout}>로그아웃</button>
                </>
                ) : (
                    <p>로그인되지 않았습니다.</p>
                )
            }

            
        </header>
    )

}
export default Header;