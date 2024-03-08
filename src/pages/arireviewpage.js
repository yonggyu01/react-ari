import { renderIntoDocument } from 'react-dom/test-utils'
import {useStore} from '../store/store'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {useStar} from '../components/usestar'
export default function Arireviewpage(){
const {review} = useStore()
const [mystar,setstar] = useState()
 
// console.log(review)
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
            document.getElementById(`my_modal_review`).showModal()
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
				{/* <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button> */}
        <div className="rating rating-lg">
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
</div>
			</div>
		</div>
		<div className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
			<button className="btn btn-active btn-primary mb-4" onClick={()=>{
       console.log( document.querySelectorAll('input[name="rating-10"]')[0].checked)
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
        {review.map((item,idx)=> ( <blockquote key={item.id+idx} className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
          <div className="rating rating-lg">
  <input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name={'rating-'+idx} className="mask mask-star-2 bg-orange-400" checked readOnly />
</div>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{item.header}</p>

            <p className="mt-4 leading-relaxed text-gray-700">
             {item.body}
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