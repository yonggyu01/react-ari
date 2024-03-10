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
  const [oauth1,setoauth1] = useState('')
  useEffect(()=>{
    setdarkmode(window.matchMedia("(prefers-color-scheme: dark).matches"))
  //  setlocation( window.location.href)
   const parmas = new URLSearchParams(window.location.search);
  //  console.log(parmas.get('code') ,parmas.get('state'),'파람')
   if(parmas.get('state')==="NaverLogin"){
    console.log('네이버로그인임')
    // window.opener.naveroff(parmas.get('code'))
    // window.close()

    setoauth1( parmas.get('code'))
    // navigate('login',{state:{naver: true,naver_code : parmas.get('code')}})
   }else if(parmas.get('state')==='kakao'){
    console.log('카카오로그인')
    setoauth1( parmas.get('code'))
    navigate('login',{state:{kakao: true, kakao_code : parmas.get('code')}})
   }
 },[])  
// console.log(locallocation, '잘저장되어있나?')
function locationset(){
  const href= /login/
  setlocation( window.location.href.replace(href, ''))
}
    function scrollcontrol(){
     
        if(this.window.scrollY>100){
          setnaviscroll(true)
        }else{
         setnaviscroll(false)
        }
      }
      useEffect(()=>{

        locationset()
   
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
        <Outlet aouth={oauth1}>
      
        </Outlet>
        </>
    )
}