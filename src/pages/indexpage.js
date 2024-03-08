import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react"
import { useStore } from "../store/store"

export default function Indexpage(){
  const {setnaviscroll,setnavercode} = useStore()
  const location =useLocation()
  const navigate = useNavigate()
  // const parmas = new URLSearchParams(window.location.search);
  
  
  const [loca,setloca] =useState(location.length)
  const {userid,locallocation,setlocation,setdarkmode,darkmode}=useStore()
//   useEffect(()=>{
//     setdarkmode(window.matchMedia("(prefers-color-scheme: dark).matches"))
//    setlocation( window.location.href)
//    const parmas = new URLSearchParams(window.location.search);
//   //  console.log(parmas.get('code') ,parmas.get('state'),'파람')
//    if(parmas.get('state')==="NaverLogin"){
//     console.log('네이버로그인임')
//     window.opener.naveroff(parmas.get('code'))
//     window.close()
//     // navigate('login',{state:{naver: true}})
//    }
//  },[])  
// console.log(locallocation, '잘저장되어있나?')
    function scrollcontrol(){
     
        if(this.window.scrollY>100){
          setnaviscroll(true)
        }else{
         setnaviscroll(false)
        }
      }
      useEffect(()=>{
        
   
        window.addEventListener('scroll',scrollcontrol)
        return()=>{
          window.removeEventListener('scroll',scrollcontrol)
        }
      },[])
      useEffect(()=>{
        console.log('화면올리기')
             if(location.length>1){
              document.getElementById("root").scrollTo(0, 0);
        }
      },[location])
      // 스크롤에 맞춰서 네비게이션에 마진 div하나 만들어서 높이 강제로 주고 빼고 하기
    return(
        <>
        {location==='/admin'?  '':<Navbar/>}
        <Outlet>
      
        </Outlet>
        </>
    )
}