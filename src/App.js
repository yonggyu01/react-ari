import './App.css';
// 사용기술  -> 상태관리 zustand, api 상태관리 react-query
// 디자인 
 
import Dicemain from './pages/mainpage'

import Arimain from './pages/Ari_pages/arimainpage';
import {  Route , RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Loginpage from './components/loginpage';
import Popo from './pages/popo'
import Orderpage from './pages/orderpage';
import Productpage from './pages/perchasepage';
import Notfound from './pages/notfound';
import Indexpage from './pages/indexpage';
import Ariindex from './pages/Ari_pages/ariindex';
import Adminpage from './pages/Admin/Adminpage';
import Myblog from './pages/Blog/myBlog';

import Portfolio from './pages/Portfolio';
import Future from './pages/Ari_pages/arifutuer.js';
import Ari100pic from './pages/Ari_pages/ari100pic';
import AriInsta from './pages/Ari_pages/ariinsta';
import Myblogdetail from './pages/Blog/myBlogdetail';
import Adminuser from './pages/Admin/adminuser';
import Adminindex from './pages/Admin/adminindex';
import Profile from './components/profile';
import Adminreview from './pages/Admin/adminrevie';
import Adminsetbuy from './pages/Admin/adminsetbuy';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<Indexpage/>} errorElement={<Notfound/>} >
      <Route index element={<Dicemain/>}/>
        <Route path="admin" element={<Adminindex/>}>
          <Route index element={<Adminpage/>}/>
          <Route path="user" element={<Adminuser/>}/>
          <Route path="review" element={<Adminreview/>}/>
          <Route path="buy" element={<Adminsetbuy/>}/>
        </Route>
        <Route path="/blog" element={<Myblog/>}></Route>
        <Route path="/blogdetail/:idx" element={<Myblogdetail/>}/>
        <Route path="portfolio" element={<Portfolio/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="popo" element={<Popo/>}></Route>
        <Route path="order" element={<Orderpage/>}></Route>
        <Route path="ari" element={<Ariindex/>}>
          <Route index element={<Arimain/>}></Route>
          <Route path="product" element={<Productpage/>}></Route>
          <Route path="future" element={<Future/>}></Route>
          <Route path="ari100" element={<Ari100pic/>}></Route>
          <Route path="insta" element={<AriInsta/>}></Route>
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
