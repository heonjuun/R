//./components/layout/layout.js
import Header from './header/header';
import Footer from './footer/footer'; 
import MyPage from './main/MyPage';
import './layout.css';


const layout = (props) => {
    return<>
    <div className="layout">
        <Header/>                
        <main className="main">     
            {props.children}
        </main>
        
    </div>
    </>
}
export default layout;