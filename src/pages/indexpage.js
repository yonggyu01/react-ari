import { Outlet, useLocation } from "react-router-dom"
import Navbar from '../components/Navbar'
import { useEffect, useState } from "react"
import { useStore } from "../store/store"

export default function Indexpage(){
  const {setnaviscroll} = useStore()
const location =useLocation().pathname
const [loca,setloca] =useState(location.length)
 const {userid}=useStore()


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