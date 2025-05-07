import { useEffect, useState } from 'react';

function PostList(){
  const [posts , setPosts] = useState([]); // 받아온 데이터를 저장
  const [loading , setLoading] = useState(true); // 로딩 중 인지 표시


  useEffect(()=>{
    //화면이 처음 뜰 때 실행하는 부분
    //1. promise 2. awit 3. Async<< 숙제 사전조사

    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json()) //응답을 json 형식으로 변경
    .then((data)=>{
      setPosts(data); // 받아온 글 목록을 상태에 저장
      setLoading(false); //로딩 끝
    })
  },[])
  return(
    <div>
      <h2>게시물 목록</h2>
      {
        loading ? (
          <p>불러오는중.....</p>
        ) : (
          <ul>
            {/* slice , map */}
            {posts.slice(0,6).map((post)=>{
              <li key={post.id}>
                <strong>{post.tite}</strong>
                <p>{post.body}</p>
              </li>
            })}
          {/* {posts.slice(0,5).map((post)=>{
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            })} */}
         </ul>
        )
      }
    </div>
  
  )
}


export default PostList;













//state(상태)
//화면에 보여지는 변할 수 있는 값을 저장하는 공간
//박스를 하나 만들고, 그 안에 숫자나 글자를 넣고 계속 바꿀 수 있다.
//그리고 그 안에 박스가 바뀌면 자동으로 화면이 바뀐다.