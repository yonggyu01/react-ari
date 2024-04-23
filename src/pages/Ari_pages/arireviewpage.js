import { renderIntoDocument } from 'react-dom/test-utils'
import {useStore} from '../../store/store'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useStar} from '../../components/usestar'
import axios from 'axios'
export default function Arireviewpage(){
const [render,setrender] = useState(false)
const {review,userid,loginnow,setreview,accountP} = useStore()
const [mystar,setstar] = useState(0)
const [myreview,setmyreview] = useState('')
const [mytitle,setmytitle] = useState('')
const [dbreview , setdbreview] =useState([])
// console.log(dbreview, '디비자료')

  function getreview(){
    axios.post('/review',{
      mode:'get'
    }).then(res => { setreview(...res.data)
    setdbreview(res.data)
  }).catch(err => window.alert('데이터 회신 실패'))
  }


/**
 * @name 리뷰남겨주는함수
 * @param1 array = elements
 * @param2 title = 글제목
 */ 
async function creatreview(array,title){
  if(!title){
    return window.alert('글제목을 작성해주세요')
  }
  if(!myreview){
    return window.alert('글 내용을 작성해주세요')
  }
  let mynum = 0
  for(let x= 0; x<5 ; x++){
    if(array[x].checked ){
      mynum= x
    }
  }
  const date = new Date()
  // console.log(mystar,review)
 const data = {
  mode : 'add',
  title : title, 
  content : myreview,
  star : mynum,
  totalstar : 5,
  uid : accountP.id,
  create_date :date.getFullYear()+'년'+date.getMonth()+'월'+date.getDate()+'일'
}
axios.post('/review',data).then(res => console.log(res, '리뷰받아옴'))
setreview(data)
// 위 함수가 store에 리뷰 등록함  

setrender(true)
document.getElementById(`my_modal_review`).close() 
setmyreview('')
 }
useEffect(()=>{
  getreview()
  setrender(false)
},[render])
// console.log(review)
function starmaker(idx,starnum){
  let mystar = []
  for(let x = 0 ; x<5 ; x++){
      if(x==starnum){
        mystar.push(<input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400" readOnly checked/>)
      }else{
        mystar.push(<input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400" readOnly/>)
      }
  }
return  mystar
}
    return(
   
<section className="bg-gray-50 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div className="md:flex md:items-end md:justify-between">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
          아리 팬분들의 구매후기
        </h2>

        <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
          구매하신 팬분들의 지극히 개인적인 후기입니다.<br/>
          아리의 상품을 구매하실때 참고하시길 바라며, <br/>
         작성한 후기는 수정 및 삭제 불가이며 마케팅으로 활용됩니다<br/> 감사합니다 
        </p>
      </div>

      <Link
        onClick={()=>{
          loginnow ===true ?  document.getElementById(`my_modal_review`).showModal() : alert('로그인을 해주세요')
        }}
        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full shadow-lg border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
      >
        <span className="font-medium"> 리뷰 등록 </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </div>
    {/* 리뷰 모달 */}
    <dialog id='my_modal_review' className="modal h-500px">
				<div className="modal-box ">
                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">리뷰 남기기</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">평점을 입력해주세요</span>
			<div className="flex space-x-3">
			
        <div className="rating rating-lg">

  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
</div>
			</div>
		</div>
		<div className="flex flex-col w-full">
      <input  placeholder='Title' className='mb-2 pl-4 h-10' id='titletext'/>
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"  value={myreview} onChange={(e)=>{
        setmyreview(e.target.value)
      }}></textarea>
			<button className="btn btn-active btn-primary mb-4" onClick={()=>{
       creatreview(document.querySelectorAll('input[name="rating-10"]'),document.querySelector('#titletext').value)  
       document.querySelector('#titletext').value = ''
      }}>리뷰 남기기</button>
      {/* 이런식으로 찾아야할듯? */}
		</div>
	</div>

</div>
					
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				</dialog>

    {/* 리뷰모달완료 */}
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {dbreview && dbreview.map((item,idx)=> ( <blockquote key={item.title+idx} className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
          <div className="rating rating-lg">
   {   starmaker(idx, item.star)}
  
</div>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{item.title}</p>

            <p className="mt-4 leading-relaxed text-gray-700">
             {item.content}
            </p>
          </div>
        </div>

     
      </blockquote>

        ))}
      
    </div>
  </div>
</section>

    )
}