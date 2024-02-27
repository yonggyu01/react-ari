import { useState,useRef } from "react"
import Itemview from './itemview'
import Myviewpage from './Myviewpage'
import Timeline from './timelinepage'
import Arimain from "./arimainpage"
import Navbar from '../components/Navbar'
import Login from '../components/loginpage'
import { animated  } from '@react-spring/web'
import Footerline from '../components/Footerline';  
import Slidepic from "./slidepic"
function Dicemain(){
const [mymy,setmy]  =useState(false)
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

  function clickwhat(value){
    console.log(deg)
    if(mymy===false){
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
            setmy(!mymy)
        }else if(value === 'Up'){
            ydeg.current+=45
            settrans(`perspective(2700px) rotateX(${ydeg.current}deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }
    console.log(value)
  }
//   const [top,settop] = useState(false)
return(  <animated.div >
    <Navbar setmy={setmy} mymy={mymy} rolling={rolling} onLogoclick={onLogoclick}  />
   
    <animated.div className={mymy? 'cube-wrapper mybest' : 'mybest' } ref={roll} style={{transform}} >
    <div className={mymy? 'cube-front mybest' : 'mybest1'}>
    
    <Login Clicklogo={Clicklogo} ></Login>
    <Arimain></Arimain>
   

    </div>
    <div className={mymy? "cube-back mybest" : 'mybest2'}>
    {/* <Itemview></Itemview> */}
    <Myviewpage Clicklogo={Clicklogo}></Myviewpage>
    </div>
    <div className={mymy? "cube-top mybest" : 'mybest1'}>
    <Slidepic/>
    </div>

    <div className={mymy? "cube-bottom mybest" : 'mybest2'}>
    <Timeline Clicklogo={Clicklogo}></Timeline>
    </div>
    <div className={mymy? "cube-left mybest" : 'mybest1'}>

    </div>
    <div className={mymy? "cube-right mybest" : 'mybest2'}></div>
</animated.div>

{Clicklogo && <Footerline clickwhat={clickwhat} onLogoclick={onLogoclick}/>}
</animated.div>
)
}

export default Dicemain