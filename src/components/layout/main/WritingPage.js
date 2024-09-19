import React, { useState } from 'react';
import './WritingPage.css';

const WritingPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // 임시 저장 기능 (콘솔로 출력 또는 로컬 스토리지에 저장 가능)
    console.log("임시 저장: ", { title, content });
  };

  const handleSubmit = () => {
    // 등록 기능 (실제로 서버로 전송하거나 추가 작업 처리)
    console.log("등록 완료: ", { title, content });
  };

  return (
    <div className="writing-container">
      <header className="header">
        <h1>RAKU</h1>
    
      </header>
      
      <div className="writing-form">
        <input 
          type="text" 
          placeholder="대충 제목 입니다" 
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="대충 내용" 
          className="content-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="button-group">
          <button className="save-btn" onClick={handleSave}>임시 저장</button>
          <button className="submit-btn" onClick={handleSubmit}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default WritingPage;