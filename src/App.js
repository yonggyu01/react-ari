import './App.css';
// 사용기술  -> 상태관리 zustand, api 상태관리 react-query
// 디자인 
import Parallaxpage from './pages/parallax'
import Footerline from './components/Footerline';  
import Dicemain from './pages/mainpage'
import Navbar from './components/Navbar'
import Arimain from './pages/arimainpage';
import { BrowserRouter, Routes, Route , RouterProvider,createBrowserRouter,createRoutesFromElements,useRouteError} from 'react-router-dom';
import Loginpage from './components/loginpage';
import Popo from './pages/popo'
import Orderpage from './pages/orderpage';
import Productpage from './pages/perchasepage';
import Notfound from './pages/notfound';
import Indexpage from './pages/indexpage';
import Ariindex from './pages/ariindex';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<Indexpage/>} errorElement={<Notfound/>} >
      <Route index element={<Dicemain/>}/>
      
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="popo" element={<Popo/>}></Route>
        <Route path="order" element={<Orderpage/>}></Route>
        <Route path="ari" element={<Ariindex/>}>
          <Route index element={<Arimain/>}></Route>
          <Route path="product" element={<Productpage/>}></Route>
        </Route>
      </Route>
      
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}>
   
      </RouterProvider>
    </div>
  );
}

export default App;
