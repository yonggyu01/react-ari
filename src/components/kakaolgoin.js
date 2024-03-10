import { useEffect } from 'react';
import {useStore} from '../store/store'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function Kakao({aouth}){
    const location = useLocation()
    const {setkakaotoken} = useStore()
    const navigate = useNavigate()
    const {logoclick,islogo,userSign,loginsuc,locallocation,setloginstate,setnavercode,loginnow} = useStore()
    const kakao_java = process.env.REACT_APP_kakao_javas
    const kakaorest = process.env.REACT_APP_kakao_rest
    console.log(location)
useEffect(()=>{
    if(!window.Kakao.isInitialized()){
        window.Kakao.init(kakao_java);
        // window.Kakao.isInitialized()
    
    }
    // locationtoken()
    // kakaoreq()

},[])

// 문제점과 해결방안 그리고 처리방법 적기
// 인덱스 페이지에 state가 kakao인경우 로그인 페이지로 보내주고 로그인 페이지에서  로그인을 시킨뒤 바로 이전화면으로 보내버리기
// 문제점 1개는 리디렉션 주소
// 본 화면에서 처리해야할 함수는 kakao.auth.setaccesstoken함수인데
// 이 함수는 login 페이지에 location에 state로 값이 kakao로 넘어오면 실행하도록 함수를 하나 더 만들어서 처리하면 될거같음

// async function kakaologin(){
    
//  window.Kakao.Auth.authorize({
//         redirectUri: `${locallocation}`,
//         scope: 'profile_nickname',
//         // prompt:'login',
//         state : 'kakao'
//     })

  
// }
    // 카카오 인증
    const kakao =async()=>{
        const url ='https://kauth.kakao.com/oauth/authorize'
          // console.log(location.href)
        const client_id = process.env.REACT_APP_kakao_rest
        const client_secret = process.env.REACT_APP_kakao_secret
        const state = 'kakao'
        const redirect_uri = locallocation
        const response_type = 'code'
          const scope = 'profile_nickname'
       let fullurl = url +`?response_type=${encodeURI(response_type)}&client_id=${encodeURI(client_id)}&redirect_uri=${encodeURI(redirect_uri)}&scope=${encodeURI(scope)}&state=${encodeURI(state)}`
       window.location.href = fullurl
          // console.log(kakaowin.value.location.href.match(/(?<==).+[^#\none]/gm))
       }
        // 카카오 토큰발급
      const kakaoreq= async (value)=>{
        const url ='https://kauth.kakao.com/oauth/token'
        const client_id = process.env.REACT_APP_kakao_rest
        const redirect_uri = locallocation
        const client_secret = process.env.REACT_APP_kakao_secret
        const grant_type = 'authorization_code'
        const nonce = 'myfirstid'
        const scope = ''
        const code = value  
        let form_data = new FormData()
        form_data.append('client_id',client_id)
        form_data.append('redirect_uri',redirect_uri)
        form_data.append('client_secret',client_secret)
        form_data.append('grant_type',grant_type)
        form_data.append('code',code)
        form_data.append('nonce',nonce)
        form_data.append('scope',scope)
        //application/x-www-form-urlencoded;charset=utf-8 타입으로 자료를 보내려면 
        // POST 방식 Data encoding 을 해야하며  해당 encoding을 해주는 기능임  new URLSearchParams()
        let url_form_data = new URLSearchParams(form_data)
      try{
      const response = await fetch(url,{
        method : 'POST',
        headers:{'Content-type':'application/x-www-form-urlencoded;charset=utf-8'},
        body:url_form_data
      })
      const result = await response.json()
      window.Kakao.isInitialized()
      setkakaotoken(result.access_token)
      window.Kakao.Auth.setAccessToken(result.access_token)
      window.Kakao.API.request({
          url: '/v2/user/me',
          data: {
              property_keys: ['kakao_account.name', 'kakao_account.email', 'profile_nickname', 'kakao_account.profile_nickname','email'],
            }
        })
          .then(function(response) {
            console.log(response.id)
            userSign(response.id)
            loginsuc(true)
            setloginstate('kakao')
            alert(`${response.id}님 로그인에 성공하셨습니다.`)
            //  여기에 서버쪽으로 회원정보 보내야할듯함
            navigate('/')
            
          })
          .catch(function(error) {
            console.log(error);
          });
      console.log(result)
      
      } 
      catch(error){
        console.error(error);
      }
    }







//
// function locationtoken(){

//     // 여기에 조건문으로 로케이션에 state로 kakao라고 들어왔는지 보고 왔으면 gettoken함수 실행하도록 하면 될듯함    그리고 useEffect로 이니셜라이징하고 본 함수 같이 실행시키도록 하면됨
//   if( location.state.kakao ){
//      gettoken()
//   }   
// }
function gettoken(){
    console.log(location.state.kakao_code,'카카오 코드',window.Kakao.Auth.getStatusInfo())
    const accesstoken = window.Kakao.Auth.getAccessToken()
    console.log(accesstoken,'엑세스 토큰')
    window.Kakao.isInitialized()
    window.Kakao.Auth.setAccessToken(accesstoken)
    window.Kakao.API.request({
        url: '/v2/user/me',
        data: {
            property_keys: ['kakao_account.name', 'kakao_account.email', 'profile_nickname', 'kakao_account.profile_nickname','email'],
          }
      })
        .then(function(response) {
          console.log(response , '뭐주나봐');
        })
        .catch(function(error) {
          console.log(error);
        });
}

function userdata(){
  
}
return(
        <div>
            <button onClick={()=>{
                if(location.state.kakao===false){
                    // kakaologin()
                    kakao()
                }else{
                    // userdata()
                    kakaoreq(location.state.kakao_code)
                }
                }}>KAKAO</button>
        </div> 
   ) 
}