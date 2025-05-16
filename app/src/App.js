import Header from "./Header";
import Page from "./Page";
import { useState } from "react";
import AuthContext from "./AuthContext";

function  App(){
  const [user,setUser] = useState(null);
  //로그인 되어 있는 상태를 저장

  const login = () =>{
    setUser({
      name: '홍길동',
      email: 'jywodud12@gmail.com'
    })
  }
  const logout = () =>{
    setUser(null)
  }
  return(
    <AuthContext.Provider value={{user,login,logout}}>
      <Header />
      <Page />
    </AuthContext.Provider>
  )
}
export default App;









//state(상태)
//화면에 보여지는 변할 수 있는 값을 저장하는 공간
//박스를 하나 만들고, 그 안에 숫자나 글자를 넣고 계속 바꿀 수 있다.
//그리고 그 안에 박스가 바뀌면 자동으로 화면이 바뀐다.