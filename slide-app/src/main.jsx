import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 루트 App 컴포넌트
import './index.css'; // 기본 스타일

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* App 전체를 렌더링 */}
  </React.StrictMode>
);