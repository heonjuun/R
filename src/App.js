import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './components/layout/layout';
import MainBoard from './components/layout/main/mainboard';
import RegionBoardList from './components/layout/main/region_board_list';
import FestivalBoardList from './components/layout/main/festival_board_list';
import WritingPage from './components/layout/main/WritingPage';
import MyPage from './components/layout/main/MyPage';
import ViewBoard from "./components/layout/main/view_board";
import ViewFestival from "./components/layout/main/view_festival";



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
         <Route path="/view_board"element={<ViewBoard/>}/>
         <Route path="/view_festival" element={<ViewFestival/>}/>
         </Routes>
        </BrowserRouter>        
    </Layout>

  
  );
}

export default App;
