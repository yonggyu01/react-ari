export default function kakao(){

    const kakao_java = REACT_APP_kakao_javas
    const kakaorest = REACT_APP_kakao_rest_api
    Kakao.Auth.authorize({
        redirectUri: '${REDIRECT_URI}',
})
   return(
        <div>카카오 가자</div> 
   ) 
}