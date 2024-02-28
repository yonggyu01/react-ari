import { useState,useRef, useEffect } from 'react'
import { animated  } from '@react-spring/web'
import {useStore} from '../store/store'
import { useNavigate } from "react-router-dom";
import '../css/Loginpage.css'
function Loginpage({Clicklogo}){
  const {logoclick,islogo} = useStore()
  console.log(useStore())
  const [userid,setuser] = useState()
  const navigate = useNavigate();
 
    
  

  // useEffect(()=>{
  //   if(Clicklogo){
  //     setmax('hero min-h-full bg-base-200')
  //   }else{
  //     setmax('hero min-h-screen bg-base-200')
  //   }
  // },[Clicklogo])
 
  const [sign,setsign]=useState(false)
  const [maxheight,setmax] = useState('hero min-h-screen bg-base-200')
  const [tranrotate,setroll] = useState({transform: 'perspective(700px) rotateX(0deg) rotateY( 0deg)'}) ;
  function rolling(){
    setsign(!sign)
    setroll( {transform: `perspective(700px) rotateX(0deg) rotateY(${ sign? 0 : 180}deg)` })
  }
  function clicklogo(){
    islogo()
  }
return(
<>
{/* {!Clicklogo? <div className="onlyheighbar"></div> : null} */}
<div className={maxheight}>
   
  <div className="hero-content flex-col">
    <div className="text-center">
      {!sign? <h1 className="text-5xl font-bold">회원 로그인 </h1> :<h1 className="text-5xl font-bold">회원가입 </h1> }
      <p className="py-1">반갑습니다.  </p>
    </div>
  <pre></pre>
<animated.div className="card h460px loginwrap" style={tranrotate}>
{/* 로그인창 */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 login">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" value={userid} onChange={(e)=>{setuser(e.target.value)}}  className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-neutral mb-2" onClick={(e)=>{e.preventDefault()
          
            rolling()
          }}>Sign in</button>
          <button className="btn btn-primary mb-2" onClick={(e)=>{e.preventDefault()
            navigate('/')
}}>Login</button>
          <button className="btn  btn-warning " onClick={(e)=>{e.preventDefault()

}}>Kakao Login</button>
        </div>
      </form>
    </div>

      {/* 회원가입창 */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 signin">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="userid" placeholder="Email" className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password-check</span>
          </label>
          <input type="password-check" placeholder="password" className="input input-bordered"  required />
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-neutral mb-2" onClick={(e)=>{e.preventDefault()
          setsign(!sign)
          rolling()
        
         }}>Sign in</button>
        </div>
      </form>
    </div>


    </animated.div>


  </div>
</div>
</>
)
}

export default Loginpage