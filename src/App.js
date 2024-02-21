import './App.css';
import { animated ,useSpring } from '@react-spring/web'
// 사용기술  -> 상태관리 zustand, api 상태관리 react-query
// 디자인 
import Footerline from './components/Footerline';  
import Dicemain from './pages/mainpage'
function App() {

  return (
    <div className="App">
   
    <Dicemain/>
 
    </div>
  );
}

export default App;
