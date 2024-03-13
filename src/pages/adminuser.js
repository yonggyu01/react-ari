import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useStore } from "../store/store"
import axios from "axios"

export default function Adminuser(){
    const { userallinfo,setuserinfo}=useStore()
    function userinfo(){
        axios.post('/sign',{mode : 'get'}).then(res => {setuserinfo(res.data)
          // console.log(res.data)
        //   console.log(userallinfo, '어드민 관련자료')
        }  ).catch(err => console.log('서버에서 유저정보 받아올 수 없음'))
       }
    const location  =useLocation()
    const [render,setrender] = useState(false)
    // console.log(location)
    // const [data,setdata] = useState([...location.state])
    // console.log(userallinfo , '데이터')
    async function deleteid(id){
        axios.post('/dele',{ mode : 'delete',uid : id} ).then(res => {setrender(true)
        console.log(res,'삭제결과')
        }).catch(err => console.log('데이터 삭제 오류'))
    }
    useEffect(()=>{
        setrender(false)
        userinfo()
    },[render])
return(
    <div>
        <section className="bg-gray-900 h-screen text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">회원 관리페이지 입니다.</h2>

      <p className="mt-4 text-gray-300 ">
       회원 정보 및 아이디 삭제, 비밀번호 강제변경등이 가능합니다.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
     { userallinfo.map((item)=><Link
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      
      >
        <h2 className="mt-4 text-xl font-bold text-white">아이디 : {item.u_id}</h2>

        <p className="mt-1 text-sm text-gray-300">
            이름 : {item.u_name}
        </p>
        <p className="mt-1 text-sm text-gray-300 mb-2">
            비밀번호 : {item.pwd}
        </p>
        <button className="inline-block rounded bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        onClick={()=>{
            deleteid(item.u_id)
        }}
      >
        삭제
      </button>   
      </Link> )}
   


    </div>

    <div className="mt-12 text-center">
      <Link to='/admin'
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        뒤로가기
      </Link>
    </div>
  </div>
</section>
    </div>
)
}