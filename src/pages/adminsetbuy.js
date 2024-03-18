import axios from "axios"
import { useEffect, useState } from "react"
import { useStore } from "../store/store"


export default function Adminsetbuy(){
    const [ubuy,setubuy] =useState([])
    const {userallinfo} =useStore()

    function get_cartlist(){
        axios.post('/cart',{
          mode:'get'
        }).then(res => {
          setubuy(res.data)
          }).catch(err => console.log('구매데이터 회신 실패'))
       }
useEffect(()=>{

    get_cartlist()
},[])
    return(
        <div className="container p-2 mx-auto sm:p-4 text-gray-800 h-screen">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">회원 구매현황</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-300">
				<tr className="text-left">
					<th className="p-3">구매번호</th>
					<th className="p-3">구매자</th>
					<th className="p-3">물품명</th>
					<th className="p-3">구매일</th>
					<th className="p-3 text-right">가격</th>
					<th className="p-3 text-center">수량</th>
				</tr>
			</thead>
			<tbody>
                {ubuy&&ubuy.map((item)=> <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
					<td className="p-3">
						<p>{item.order_id}</p>
					</td>
					<td className="p-3">
						<p>{item.u_id}</p>
					</td>
					<td className="p-3">
						<p className="text-gray-600">{item.item}</p>
					</td>
					<td className="p-3">
						<p className="text-gray-600">{item.create_date}</p>
					</td>
					<td className="p-3 text-right">
						<p>{item.price} 원</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-cyan-600 text-gray-50">
							<span>{item.quantity} 개</span>
						</span>
					</td>
				</tr>)}
				
				
			</tbody>
		</table>
	</div>
</div>
    )
}