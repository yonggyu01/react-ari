import { useState,useRef, useEffect } from "react"
import Myviewpage from './Myviewpage'
import Timeline from './timelinepage'
import Arimain from "./arimainpage"
import Navbar from '../components/Navbar'
import Login from '../components/loginpage'
import { animated  } from '@react-spring/web'
import Footerline from '../components/Footerline';  
import {useStore} from '../store/store'
import Myblog from "./myBlog"
import Myskill from "./Myskill"
import Yonggyu from "./yonggyu"
import Realfooter from "../components/Realfooter"
import Scrolltop from "../components/scrolltop"
function Dicemain(){

    const {logoclick,islogo,rollbox,setroll} = useStore()


const deg=useRef(-30)
const ydeg=useRef(45)
const [transform, settrans] = useState(null)
const roll = useRef()
const [Clicklogo,setlogo] = useState(false)
function onLogoclick(){
    setlogo(!Clicklogo)
}
function rolling(){
    roll.current.style=''
}
useEffect(()=>{
    rolling()
},[rollbox])

  function clickwhat(value){
    console.log(deg)
    if(rollbox===false){
         roll.current.style=''
    }else if(value==='Home'){
            ydeg.current = -30 
            deg.current = 45
            settrans(`perspective(2700px) rotateX(${ydeg.current}deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }else if(value==="Right"){
            deg.current += 45
            settrans(`perspective(2700px) rotateX(${ydeg.current}deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }else if(value==="Left"){
            deg.current-=45
            settrans(`perspective(2700px) rotateX(${ydeg.current}deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }else if(value==="Open"){
            ydeg.current = -30 
            deg.current = 45
            roll.current.style=''
            setroll()
        }else if(value === 'Up'){
            ydeg.current+=45
            settrans(`perspective(2700px) rotateX(${ydeg.current}deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }
    console.log(value)
  }
//   const [top,settop] = useState(false)
return(  <animated.div >
    {/* <Navbar /> */}
    <Scrolltop></Scrolltop>
    <animated.div className={rollbox? 'cube-wrapper mybest' : 'mybest' } ref={roll} style={{transform}} >
    <div className={rollbox? 'cube-front mybest' : 'mybest1'}>
    <Yonggyu></Yonggyu>
    
 
    </div>
    <div className={rollbox? "cube-back mybest" : 'mybest2'}>
    {/* <Itemview></Itemview> */}
    <Myviewpage Clicklogo={Clicklogo}></Myviewpage>
    </div>
    <div className={rollbox? "cube-top mybest" : 'mybest1'}>
    <Myskill></Myskill>
    </div>
    <div className={rollbox? "cube-bottom mybest" : 'mybest2'}>
    <Timeline Clicklogo={Clicklogo}></Timeline>
    </div>
    <div className={rollbox? "cube-left mybest" : 'mybest1'}>
        <Myblog/>
    </div>
    <div className={rollbox? "cube-right mybest" : 'mybest2'}>
    <Realfooter/>
    </div>
</animated.div>

{rollbox && <Footerline clickwhat={clickwhat} onLogoclick={onLogoclick}/>}
</animated.div>
)
}

export default Dicemain