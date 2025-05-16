import { useContext } from 'react';
import AuthContext from './AuthContext';

function Page() {
  const { user, login } = useContext(AuthContext);

  return (
    <main>
      <h2>메인 페이지</h2>
      {user ? (
        <p>유저 이메일: {user.email}</p>
      ) : (
        <button onClick={login}>로그인</button>
      )}
    </main>
  );
}

export default Page;

