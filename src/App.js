import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './components/layout/layout';
import MainBoard from './components/layout/main/mainboard';

import RegionBoardList from './components/layout/main/region_board_list';
import FestivalBoardList from './components/layout/main/festival_board_list';
import WritingPage from './components/layout/main/WritingPage';
import MyPage from './components/layout/main/MyPage';



function App() {
  return (
    
    <Layout>      
    <BrowserRouter>
    <Routes>                
    <Route path="/" element={<MainBoard/>}/>          
    <Route path="/MyPage" element={<MyPage/>}/>          
    <Route path="/region_board_list/:region" element={<RegionBoardList />} />         
         <Route path="/festival_board_list/:region" element={<FestivalBoardList/>}/>                 
         <Route path="/WritingPage" element={<WritingPage/>}/>         
         </Routes>
        </BrowserRouter>        
    </Layout>

  
  );
}

export default App;
