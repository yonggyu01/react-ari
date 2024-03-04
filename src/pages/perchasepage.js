import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Productpage (){
  const [inputval, setinputval]=useState(1)
  function sum(val){
    setinputval(val)
  }
    const productlist = [
        {
        src : 'https://img.momsdiary.co.kr/board/suda/spboard2/pds/eventpost/322641/nayounoh_2109011504352.jpg',
        link : '',
        title : '똥기저귀',
        content : '주문 즉시 제작, 빠른배송가능',
        order : 'Pre-Order',
        price : '50,000원',
        sale : 35000,
        hot: <div className="indicator absolute top-5 left-3">
          <span className="indicator-item badge badge-accent">hot</span> 
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        },
        {
        src : 'https://img.freepik.com/free-photo/business-handshake_23-2147708177.jpg?w=1380&t=st=1709196171~exp=1709196771~hmac=31ae3e418e56331c60ae969609659a0ecbf9b593709c35f91a256150690e9182',
        link : '',
        title : '악수 1회권',
        content : '하루 최대 3명 가능 - 아리 낯가림시 50% 환불가능',
        order : 'Pre-Order',
        price : '150,000원',
        sale : 10000,
        hot: <div className="indicator absolute top-5 left-3">
          <span className="indicator-item badge badge-primary">new</span> 
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        },
        {
        src : 'https://img.freepik.com/free-vector/crying-baby-concept-illustration_114360-22282.jpg?t=st=1709196239~exp=1709199839~hmac=a75433b0ede3aa1ff7f875a8e9fb522931a7b05e5a7b7020a5c6f98ba5a8476b&w=826',
        link : '',
        title : '울음소리 감상권',
        content : '하루 최대 2명 가능 - 아리 낯가림시 100% 듣기 가능',
        order : 'Pre-Order',
        price : '350,000원',
        sale : 20000,
        hot: <div className="indicator absolute top-5 left-3">
          <span className="indicator-item badge badge-primary">new</span> 
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        },
        {
        src : 'https://img.freepik.com/premium-vector/introduce-solids-isolated-cartoon-vector-illustration_107173-28027.jpg?w=826',
        link : '',
        title : '이유식 먹방 관람권',
        content : '하루 최대 1명 가능',
        order : 'Pre-Order',
        price : '450,000원',
        sale : 20000,
        hot: <div className="indicator absolute top-5 left-3">
          <span className="indicator-item badge badge-primary">new</span> 
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        },
        {
        src : '/imgs/KakaoTalk_20240229_174959550_01.jpg',
        link : '',
        title : '미소 관람권',
        content : '하루 최대 4명 가능',
        order : 'Pre-Order',
        price : '350,000원',
        sale : 30000,
        hot: <div className="indicator absolute top-5 left-3">
          <span className="indicator-item badge badge-primary">new</span> 
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        },
        {
        src : '/imgs/KakaoTalk_20240229_174959550.jpg',
        link : '',
        title : '사진 1장 교환권',
        content : '랜덤 사진뽑기',
        order : 'Pre-Order',
        price : '30,000원',
        sale : 29000,
        hot: <div className="indicator absolute top-5 left-3">
          <span className="indicator-item badge badge-primary">new</span> 
          <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </div>
        },
    ]

    function sortdata(){

    }
return(
    <div>
 <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">상품리스트</h2>

      <p className="mt-4 max-w-md text-gray-500">
            이 페이지는 아리가 사용했던 물건을 소장할 수 있는 상품으로 구성되어 있습니다.
      </p>
    </header>

    {/* <div className="mt-8 block lg:hidden">
      <button
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="text-sm font-medium"> 정렬하기 </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div> */}

    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
      
      <div className="lg:col-span-3">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
    
      
        {productlist.map((item,idx) => {return(
         <li key={item.title + idx}> 
        <Link className="group relative block overflow-hidden" onClick={()=>{
        	document.getElementById(`my_modal_pr${idx}`).showModal()  
        }}>
        <button
          className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span className="sr-only">구매리스트</span>
      
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      
        <img
          src={item.src}
          alt={item.title}
          className="h-64 grayscale hover:grayscale-0 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
      
        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
      
          <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
      
          <p className="mt-1.5 text-sm text-gray-700">{item.price}</p>
      
       
        </div>
      </Link>
      {/* 모달로 띄워야지 */}
      <dialog id={`my_modal_pr${idx}`} className="modal h-500px">
				<div className="modal-box ">
        <h3 className="font-bold text-lg text-center">{item.title}</h3>
					<figure className='mb-3 flex justify-center'>
					{/* <div id={'proimgs'+idx} className='h-96 w-96'/> */}
          <img src={item.src}  className='object-contain w-8/12'/>
					</figure>
					
					<div className=' '>
					<div className='w-full'>
			
          <div className="flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">제품명</dt>
      <dd className="text-gray-700 sm:col-span-2">{item.title}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">내용</dt>
      <dd className="text-gray-700 sm:col-span-2">{item.content}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">정상가 </dt>
      <dd className="text-gray-700 sm:col-span-2">{item.price}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 mb-5">
      <dt className="font-medium text-gray-900">세일가</dt>
      <dd className="text-gray-700 sm:col-span-2">{item.sale}</dd>
    </div>
  </dl>
</div>
<div>
  <label htmlFor="Quantity" className="sr-only"> Quantity </label>

  <div className="flex items-center gap-1 justify-center">
    <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      &minus;
    </button>

    <input
      type="number"
      id="Quantity"
      value={inputval}
      onChange={(e)=>{
        sum(e.target.value)
      }}
      className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />

    <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      +
    </button>
  </div>
</div>
			
					</div>
			
          <form className="mt-4">
            <button
              className="block w-full rounded bg-gray-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            >
              Add to Cart
            </button>
          </form>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				</dialog>
      </li>
      
      )})
      }
      
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
)
}