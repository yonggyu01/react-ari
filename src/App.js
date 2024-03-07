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
import Adminpage from './pages/Adminpage';
import Myblog from './pages/myBlog';

import Portfolio from './pages/Portfolio';
import Future from './pages/arifutuer.js';
import Ari100pic from './pages/ari100pic';
import Ari_insta from './pages/ari_insta';
import Myblogdetail from './pages/myBlogdetail';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<Indexpage/>} errorElement={<Notfound/>} >
      <Route index element={<Dicemain/>}/>
        <Route path="/admin" element={<Adminpage/>}></Route>
        <Route path="/blog" element={<Myblog/>}></Route>
        <Route path="/blogdetail/:idx" element={<Myblogdetail/>}/>
        <Route path="portfolio" element={<Portfolio/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="popo" element={<Popo/>}></Route>
        <Route path="order" element={<Orderpage/>}></Route>
        <Route path="ari" element={<Ariindex/>}>
          <Route index element={<Arimain/>}></Route>
          <Route path="product" element={<Productpage/>}></Route>
          <Route path="future" element={<Future/>}></Route>
          <Route path="ari100" element={<Ari100pic/>}></Route>
          <Route path="insta" element={<Ari_insta/>}></Route>
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
