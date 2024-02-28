import './App.css';
// 사용기술  -> 상태관리 zustand, api 상태관리 react-query
// 디자인 
import Parallaxpage from './pages/parallax'
import Footerline from './components/Footerline';  
import Dicemain from './pages/mainpage'
import Navbar from './components/Navbar'
import Arimain from './pages/arimainpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginpage from './components/loginpage';
import Popo from './pages/popo'
import Orderpage from './pages/orderpage';
import Productpage from './pages/perchasepage';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
					<Route path="/" element={<Dicemain/>}></Route>
					<Route path="/login" element={<Loginpage/>}></Route>
					<Route path="/popo" element={<Popo/>}></Route>
					<Route path="/order" element={<Orderpage/>}></Route>
					<Route path="*" element={<Dicemain/>}></Route>
					<Route path="/product" element={<Productpage/>}></Route>
					<Route path="/ari" element={<Arimain/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
