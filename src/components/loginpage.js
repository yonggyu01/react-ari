import { useState,useRef, useEffect } from 'react'
import { animated  } from '@react-spring/web'
import {useStore} from '../store/store'
import { useLocation, useNavigate } from "react-router-dom";
import {NaverLogin} from './naverlogin'
import '../css/Loginpage.css'
import Kakao from './kakaolgoin';
export default function Loginpage(){
  const location=useLocation()
  console.log(location,'로그인시')
  const {islogo,userSign,loginsuc,locallocation,setloginstate,setnavercode} = useStore()
  console.log(useStore())
  const navigate = useNavigate();
  const [userid,setuser] = useState('')
  const [username,setusername] = useState('')
  const [yourpass,setyourpass] = useState('')
  const [passcheckme,setpasscheckme] = useState('')
  const myid = useRef(null)
  const passw = useRef(null)
  const passcheck = useRef(null)
  const myname = useRef(null)
  //



  //
  async function signmypage(e){
    // 태그   myid   myname passcheck  passw  focus() 용도임
    // const mydata = [myid,myname,passcheck,passw]
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
      "state": 'account_create',
      "id": userid,
      "password":yourpass,
      "name": username,
      todo:[],
      cart : [],
    
    });
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode:'cors',
      body: raw
    };
    if(username.length<3){
      window.alert('이름은 2글자 이상 입력해줘')
      myname.current.focus()
      return false;
    }
    if(!userid.match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
      window.alert('이메일주소 입력해줘')
      myid.current.focus()
      return false;
    }
    if(yourpass.length<4||yourpass?.length>8){
      window.alert('비밀번호는 4~8글자 이상 입력해줘')
      passw.current.focus()
      return false;
    }
    if(yourpass != passcheckme){
      passcheck.current.focus()
      return window.alert('비밀번호가 틀렸습니다.')
    }else{
      userSign(username)
      loginsuc(true)
      setsign(!sign)
      setloginstate('my')
          rolling()
    
    }}


      
  
// 네이버 로그인 sdk로 그냥 할게 로그인인증요청주소 sdk 는 왜 오류나지
const naverauthurl = 'https://nid.naver.com/oauth2.0/authorize'
function naverauth(){
  let state = 'NaverLogin'
  let raw = {response_type : 'code',
  client_id : process.env.REACT_APP_naver_id,
  redirect_uri : locallocation,
  state
}
let fullurl = naverauthurl+`?response_type=${raw.response_type}&client_id=${raw.client_id}&redirect_uri=${raw.redirect_uri}&state=${raw.state}`
// const getcode = window.open(fullurl)
window.location.href = fullurl
//위에 잘 동작하는데 sdk로 다시해볼래



}
// 새창열린거 종료시키며 코드 받아오기
// window.naveroff = (value)=>{
//   console.log(value, '콜백 코드 받음')
//   setnavercode(value)

//  }
 useEffect(() => {
  // initializeNaverLogin()
  // userAccessToken()
}, [])

// 네이버 접근토큰 발급 , 갱신주소
// const url = 'https://nid.naver.com/oauth2.0/token'
// 네이버 회원프로필 조회주소
// const url = 'https://openapi.naver.com/v1/nid/me'

  
 
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
    <Kakao></Kakao>
    <div className="text-center">
      {!sign? <h1 className="text-5xl font-bold">회원 로그인 </h1> :<h1 className="text-5xl font-bold">회원가입 </h1> }
      <p className="py-1">반갑습니다.  </p>
    </div>
  <pre></pre>
<animated.div className="card h460px loginwrap" style={tranrotate}>
{/* 로그인창 */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 login">
      <form className="card-body" onSubmit={(e)=>{e.preventDefault()}} onKeyDown={(e)=>{if(e.key==='Enter'){return false} }}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" value={userid} onChange={(e)=>{setuser(e.target.value)}
            
        }  className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" value={yourpass} onChange={(e)=>{ setyourpass(e.target.value)}} />
          <label className="label">
            <button className="label-text-alt link link-hover" onClick={()=>{
              window.alert('정신차려 아이디 다시만들어 그냥')
            }}>비밀번호 잊어버렸음?</button>
          </label>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-neutral mb-2" onClick={(e)=>{e.preventDefault()

            rolling()
          }}>Sign in</button>
          <button className="btn btn-primary mb-2" onClick={(e)=>{e.preventDefault()
            navigate('/')
}}>Login</button>
  <div className='flex flex-row justify-between  '>
          <div className="btn  btn-warning box-border  w-2/4" onClick={(e)=>{e.preventDefault()

}}><Kakao/></div>
        <NaverLogin >  <div className="btn btn-success box-border w-2/4" onClick={(e)=>{e.preventDefault()
          // naverauth()
}}>Naver</div></NaverLogin>
        </div>

  </div>
      </form>
    </div>

      {/* 회원가입창 */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 signin">
      <form className="card-body"  onSubmit={(e)=>{e.preventDefault()}}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="userid" placeholder="Name" className="input input-bordered" ref={myname} required value={username} onChange={(e)=>{setusername(e.target.value)}}  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="userid" placeholder="Email" className="input input-bordered" ref={myid} required value={userid} onChange={(e)=>{setuser(e.target.value)}}  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" ref={passw} className="input input-bordered"  required value={yourpass} onChange={(e)=>{ setyourpass(e.target.value)}} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password-check</span>
          </label>
          <input type="password" placeholder="password" ref={passcheck} className="input input-bordered"  required value={passcheckme} onChange={(e)=>{ setpasscheckme(e.target.value)}}/>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-neutral mb-2" onClick={(e)=>{e.preventDefault()
          // setsign(!sign)
          // rolling()
          signmypage()
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
