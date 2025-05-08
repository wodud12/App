import { useState } from 'react';

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  
  const items = ['사과수아', '바나나영원', '포도아영', '오렌지재영', '수박은빈'];

  // 검색어에 따라 필터링
  const filteredItems = items.filter((item) =>
    item.includes(keyword)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2> 과일 검색</h2>
      
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: '8px', width: '200px' }}
      />

      <ul style={{ marginTop: '20px' }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>검색 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchBox;














//state(상태)
//화면에 보여지는 변할 수 있는 값을 저장하는 공간
//박스를 하나 만들고, 그 안에 숫자나 글자를 넣고 계속 바꿀 수 있다.
//그리고 그 안에 박스가 바뀌면 자동으로 화면이 바뀐다.