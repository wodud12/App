function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}세</p>
      <p>{user.email}</p>
      {user.isAdmin ? <p>관리자입니다</p> : <p>일반 사용자입니다</p>}
    </div>
  );
}
// 

function Comments({ comments }) {
  return (
    <div>
      <h3>댓글 목록</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.username}:</p>
            <p>{comment.content}</p>
            <p>{new Date(comment.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



function CommentItem({ username, content, date }) {
  return (
    <li>
      <p>{username}:</p>
      <p>{content}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
    </li>
  );
}