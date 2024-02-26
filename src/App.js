import './App.css';
// 사용기술  -> 상태관리 zustand, api 상태관리 react-query
// 디자인 
import Parallaxpage from './pages/parallax'
import Footerline from './components/Footerline';  
import Dicemain from './pages/mainpage'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <div className="App">
   {/* <Navbar> </Navbar> */}
    <Dicemain/>
    {/* <Parallaxpage/> */}
    </div>
  );
}

export default App;
