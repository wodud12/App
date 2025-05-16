import { createContext } from "react";

const AuthContext = createContext({
    user: null,
    // 현재 로그인 한 사용자 정보(없으면 null 빈 값)
    login : () => {},
    // 로그인 함수 (빈 함수를 작성하는 이유는 초기화)
    logout : () => {},
    // 로그아웃 함수 (빈 함수)
});

export default AuthContext;