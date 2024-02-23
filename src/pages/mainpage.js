import { useState,useRef } from "react"
import Navbar from '../components/Navbar'
import Login from '../components/loginpage'
import { animated  } from '@react-spring/web'
import Footerline from '../components/Footerline';  
function Dicemain(){
const [mymy,setmy]  =useState(false)
const deg=useRef(45)
const [transform, settrans] = useState(null)
const roll = useRef()
function rolling(){
    roll.current.style=''
}
  function clickwhat(value){
    console.log(deg)
    if(mymy===false){
         roll.current.style=''
    }else if(value==='Home'){
            deg.current = 45
            settrans(`perspective(2700px) rotateX(-30deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }else if(value==="Right"){
            deg.current += 45
            settrans(`perspective(2700px) rotateX(-30deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }else if(value==="Left"){
            deg.current-=45
            settrans(`perspective(2700px) rotateX(-30deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`)
        }else if(value==="Open"){
            roll.current.style=''
            setmy(!mymy)
        }
    console.log(value)
  }
//   const [top,settop] = useState(false)
return(  <animated.div className="bg-red-50">
    <Navbar setmy={setmy} mymy={mymy} rolling={rolling}/>
    <animated.div className={mymy? 'cube-wrapper mybest' : 'mybest' } ref={roll} style={{transform}} >
    <div className={mymy? 'cube-front mybest' : 'mybest1'}>
    <Login></Login>

    </div>
   
    <div className={mymy? "cube-back mybest" : 'mybest2'}></div>
    <div className={mymy? "cube-top mybest" : 'mybest1'}></div>
    <div className={mymy? "cube-bottom mybest" : 'mybest2'}></div>
    <div className={mymy? "cube-left mybest" : 'mybest1'}></div>
    <div className={mymy? "cube-right mybest" : 'mybest2'}></div>
</animated.div>

<Footerline clickwhat={clickwhat}/>
</animated.div>
)
}

export default Dicemain