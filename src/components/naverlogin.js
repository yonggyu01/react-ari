import { useEffect } from 'react'
import {useStore} from '../store/store'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const NaverLogin = ({ setGetToken, setUserInfo },props) => {
    const {userSign,loginsuc,locallocation,setloginstate,setnavertoken,loginnow,setaccountP} = useStore()
    console.log(props,setUserInfo)
    const navigate=useNavigate()
  
    const NAVER_CLIENT_ID = process.env.REACT_APP_naver_id
    const NAVER_CALLBACK_URL = locallocation
    // console.log(locallocation,'콜백주소')
  


    
	const initNaverLogin = () => {
		const naverLogin = new window.naver.LoginWithNaverId({
            
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL+'/login',         
			isPopup: false,
			loginButton:{ color: 'green', type: 3, height: 100 },
			callbackHandle: true,
		})
		naverLogin.init()
        console.log(window.naver , '윈도우네이버')
           // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데  
           // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어  
           // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.
           // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
     
      naverLogin.getLoginStatus(async function (status) {
			if (status) {
              // 아래처럼 선택하여 추출이 가능하고, 
				const userid = naverLogin.user.getEmail()
				const username = naverLogin.user.getName()
                console.log(userid, username)
                if(!loginnow && username){
                    axios.post('/sign',{
                        mode: 'login',
                        uid : userid,
                        pwd : '네이버로그인'
                      }).then(res=> {
                        if(res.data.state){
                            userSign(res.data.u_name)
                            loginsuc(true)
                            // setsign(!sign)
                            setaccountP({
                              name : res.data.u_name,
                              id : res.data.u_id,
                              create_account : res.data.create_account,
                              pwd: res.data.pwd
                            })
                            navigate('/')
                        }else{
                                axios.post('/sign',{
                                    mode : 'sign',
                                    name : username,
                                    uid : userid,
                                    pwd : '네이버로그인',
                                    create_account : Date.now(),
                                    }).then(res => {
                                        setaccountP({
                                            name : username,
                                            id : userid,
                                            create_account : Date.now(),
                                            pwd: '네이버로그인'
                                          })
                                        userSign(username)
                                        loginsuc(true)
                                        setloginstate('naver')
                                        console.log(res, '네이버 가입')}).catch(err => console.log('가입오류'))
                                navigate('/')
                            }
                    }).catch(err => console.log('오류'))
                       
                }else{
                    naverLogin.reprompt()
                }
         
			}
		})     
           
	}
    
 
    
            // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 어스코드가 붙어서 전달된다.
           
	    const userAccessToken = () => {
		    window.location.href.includes('access_token') && getToken()
	}
        
      	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
        console.log(token)
        setnavertoken(token)
             // console.log, alert 창을 통해 어스코드가 잘 추출 되는지 확인하자! 
             // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
                // localStorage.setItem('access_token', token)
		        // setGetToken(token)
	}
	useEffect(() => {
		initNaverLogin()
		userAccessToken()
	}, [])
    // const getData = () => {
    //     if (window.location.href.includes("access_token")) {
    //       console.log("We got AccessToken");
    //     }
    //   };
	return (
		<>
            <div className='btn btn-success box-border w-2/4' style={{cursor:'pointer'}} onClick={()=>{
                document.querySelector('#naverIdLogin a').dispatchEvent(new Event('click'))
            }}>Naver</div>
			<div id="naverIdLogin" className='w-0 h-0' >Naver</div> 
		</>
	)
}