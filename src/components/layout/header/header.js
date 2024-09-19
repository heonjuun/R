// ./components/layout/header/header.js
import './header.css';
import React,{useState} from 'react';
<<<<<<< HEAD




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴의 열림
  
=======
import { FiAlignJustify } from "react-icons/fi";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴의 열림
>>>>>>> 3a232bc128c0a63e44d9b4781784ec7f7d9b5f61

    // 메뉴 열고 닫기 함수
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // 현재 상태의 반대로 변경
    };

<<<<<<< HEAD


=======
>>>>>>> 3a232bc128c0a63e44d9b4781784ec7f7d9b5f61
    
  
  
  return (
    <header className="header">
<<<<<<< HEAD
      <h1 className="main_header">RAKU</h1> 
      <div className="user-id">유우키님! 안녕하세요!</div>            
=======
      <h1>RAKU</h1> 
      <div className="user-id">김김김님! 안녕하세요!</div>            
>>>>>>> 3a232bc128c0a63e44d9b4781784ec7f7d9b5f61
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
            {/* 메뉴가 열렸을 때 보여줄 항목 */}
            {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
<<<<<<< HEAD
          <li><a href="/">메인 페이지</a></li>            
            <li><a href="/MyPage">마이페이지</a></li>            
            <li><a href="/edit-profile">개인정보 수정</a></li>           
=======
            <li><a href="/mypage">마이페이지</a></li>
            <li><a href="/edit-profile">개인정보 수정</a></li>
>>>>>>> 3a232bc128c0a63e44d9b4781784ec7f7d9b5f61
            <li><a href="/logout">로그아웃</a></li>
          </ul>
        </div>
      )}
    
    </header>
  );
};

export default Header;