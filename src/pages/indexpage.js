import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"
import { useStore } from "../store/store"
export default function Indexpage(){
  const [scrolly,setscroll] = useState(false)
  const {setnaviscroll,naviscroll} = useStore()

    function scrollcontrol(){
        
        console.log(this.window.scrollY)
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
      // 스크롤에 맞춰서 네비게이션에 마진 div하나 만들어서 높이 강제로 주고 빼고 하기
    return(
        <>
        <Navbar/>
        <Outlet></Outlet>
        </>
    )
}