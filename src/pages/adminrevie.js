import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {useStore} from '../store/store'
export default function Adminreview(){
    const {review,setreview,accountP} = useStore()
    const [dbreview , setdbreview] =useState([])
    const [render,setrender] = useState(false)
    function getreview(){
        axios.post('/review',{
          mode:'get'
        }).then(res => { setreview(...res.data)
        setdbreview(res.data)
      }).catch(err => console.log('데이터 회신 실패'))
      }
      function deletereview(id){
        axios.delete('/review/'+id).then(res =>   setrender(true)).catch(err => window.alert('서버 응답이 없습니다.'))
      }
    useEffect(()=>{
        getreview()
        setrender(false)
    },[render])
// 리뷰 삭제하기




    return(
<div className="overflow-x-auto h-screen">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">작성자</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">작성일</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">글제목</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">평점</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {dbreview && dbreview.map((item,idx)=> (<tr key={item.id + idx} className="text-center">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.u_id}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.create_date}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.title}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.star} / {item.totalstar} 점</td>
        <td className="whitespace-nowrap px-4 py-2">
          <Link
            onClick={()=>{
                console.log(item.id , '아이디값')
                deletereview(item.id)
            }}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            삭제하기
          </Link>
        </td>
      </tr>

    ))}
      
    </tbody>
  </table>
</div>
    )
}