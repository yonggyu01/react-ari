import { useEffect, useId, useState ,useRef} from 'react'
// import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/store'
export default function Orderpage(){
    const {logoclick,islogo,rollbox,setroll} = useStore()
    const navigate = useNavigate()
    const {mycart,delmycart} = useStore()
    // console.log(mycart)
    const [total,settotal]  = useState(0)
    const [render,setrender] =useState(false)
    let reg = /[,원]/mg
    function totalvalue(array){
        let result = 0
        let reg = /[,원]/mg
        array.map((item)=>{ 
            let num =  Number(item.sale.replace(reg,''))
            console.log(num)

            result = result + (num*item.Quantity)
         })
        settotal(result)
        return result;
    }
    useEffect(()=>{
      totalvalue(mycart)
      setrender(false)
    },[render])
    
    // console.log('토탈',mycart)
    return(
        <>
        {/* <Navbar></Navbar> */}
        <div className='flex justify-center pt-10'>
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800 ">
	<h2 className="text-xl font-semibold">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-300">
        {/* 여기에 장바구니 목록 들어오게 세팅 */}
        {mycart.map((item,idx)=>(	<li className="flex flex-col py-6 sm:flex-row sm:justify-between" key={item.title + idx}>
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={item.src} alt={item.title} />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leadi sm:pr-8">{item.title}</h3>
							<p className="text-sm text-gray-600">{item.order}</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">{ Number(item.sale.replace(reg,''))*item.Quantity} 원</p>
							<p className="text-sm line-through text-gray-400">{item.current}</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span onClick={()=>{
                                // 나중에 아래 함수만 서버나 스토어로 바꿔주면 됨
                                delmycart(item.id)
                                setrender(true)
                                // setlist(list.filter((it)=>{return it.id!==item.id}))
                            }}>Remove</span>
						</button>
						<button type="button" className="flex items-center px-2 py-1 space-x-1">
						
                            <label className="swap">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* volume on icon */}
  <img className="swap-off w-4 h-4 fill-current"  src="/imgs/heart-svgrepo-com.svg"></img>
  
  {/* volume off icon */}
  <img className="swap-on w-4 h-4 fill-current"   src="/imgs/heart-alt-svgrepo-com.svg"></img>
  
</label>
                            {/*  */}
                          
							<span>Add to favorites</span>
						</button>
					</div>
				</div>
			</div>
		</li> ))}
	

	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold"> {total} 원</span>
		</p>
		<p className="text-sm text-gray-600">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
		<button type="button" className="px-6 py-2 border rounded-md border-cyan-600" onClick={()=>{
            navigate('/')
        }}>Back
			<span className="sr-only sm:not-sr-only">to shop</span>
		</button>
		<button type="button" className="px-6 py-2 border rounded-md bg-cyan-600 text-gray-50 border-cyan-600">
			<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
		</button>
	</div>
</div>

        </div>
        </>
    )
}