import { useState,useRef } from "react"
import Login from '../components/loginpage'
import { animated ,useSpring } from '@react-spring/web'
import Footerline from '../components/Footerline';  
function Dicemain(){
const [mymy,setmy]  =useState(false)
const deg=useRef(45)
const {transform, api} = useSpring(() => ({
        transform : `perspective(2700px) rotateX(${deg.current}deg) rotateY(${deg.current}deg) scale3d(.3, .3, 0.3)`
  }))
  function clickwhat(value){
    
        if(value=='Home'){
            settop(!top)
        }
    console.log(value)
  }
  const [top,settop] = useState(false)
return(  <animated.div>
   <button onClick={()=>{   
        setmy(!mymy)
    }}>눌러봐요</button>
    
   {/* <button onClick={handleClick}>왼족</button> */}

    <div className={mymy? 'cube-wrapper mybest' : 'mybest' } style={top? transform : null} >
    <div className={mymy? 'cube-front mybest' : 'mybest'}>
    <Login></Login>

    </div>
   
    <div className={mymy? "cube-back mybest" : 'mybest'}></div>
    <div className={mymy? "cube-top mybest" : 'mybest'}></div>
    <div className={mymy? "cube-bottom mybest" : 'mybest'}></div>
    <div className={mymy? "cube-left mybest" : 'mybest'}></div>
    <div className={mymy? "cube-right mybest" : 'mybest'}></div>
</div>

<Footerline clickwhat={clickwhat}/>
</animated.div>
)
}

export default Dicemain