import ari from '../imgs/아리1.png'
import windo from '../imgs/윈도.PNG'
import cgv from '../imgs/cgv.PNG'
import vue from '../imgs/vue.PNG'
import { useId } from 'react'
import { useLocation,Link,useNavigate } from 'react-router-dom'
export default function Myviewpage({Clicklogo}){
	let { state } = useLocation();
	const navigate = useNavigate();
	const mypage = [
		{	id: useId(),
			title : 'Ari Fan Site',
			contents : 'React,Zustand,tailwindcss',
			create : '2024',
			views : '50K views',
			src : '/imgs/아리1.png',
			pagestate:{ page : 'https://engproject-ba2f9.firebaseapp.com/'} ,
			skills : <div className='flex flex-row'><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="M21.7 12c0-1.4-1.3-2.7-3.4-3.5V8c.3-2.1-.2-3.6-1.3-4.2-1.3-.7-3-.2-4.8 1.2-1.8-1.4-3.5-2-4.7-1.2C6.4 4.4 5.9 5.9 6 8v.5c-2 .8-3.4 2-3.4 3.5 0 1.4 1.4 2.7 3.5 3.5L6 16c-.2 2.1.3 3.6 1.4 4.2.3.2.8.3 1.2.3a6 6 0 0 0 3.5-1.5 6 6 0 0 0 3.5 1.5c.5 0 .9 0 1.3-.3 1-.6 1.6-2.1 1.3-4.2v-.5c2-.8 3.4-2 3.4-3.5Zm-6-7.5.8.1c.7.5 1 1.6.9 3.3l-.1.3c-.8-.3-1.7-.4-2.6-.5-.5-.7-1-1.4-1.7-2 .7-.7 1.7-1.1 2.7-1.2Zm-8 8.7.6 1 .6 1c-.5 0-1-.2-1.6-.4l.5-1.6Zm-.4-4L9 8.8l-.6 1-.5 1-.5-1.6Zm1 2.8a19.3 19.3 0 0 1 2-3.4 19.9 19.9 0 0 1 3.9 0 19.6 19.6 0 0 1 2 3.4 19.3 19.3 0 0 1-2 3.4 20 20 0 0 1-4 0A20.2 20.2 0 0 1 8.4 12Zm7.8 2.3.5-1 .5 1.5-1.6.4.6-1Zm.5-3.5-.5-1-.6-1c.6 0 1 .2 1.6.4l-.5 1.6Zm-4.4-4.5 1.1 1.2a20.9 20.9 0 0 0-2.2 0l1.1-1.2ZM8 4.6c.2 0 .5-.2.7-.1 1 0 2 .5 2.8 1.2-.7.6-1.3 1.3-1.8 2a8 8 0 0 0-2.6.5v-.3c-.2-1.7.1-2.8.9-3.3ZM3.7 12c0-.9 1-1.8 2.7-2.5l.8 2.5-.8 2.5C4.7 13.8 3.7 13 3.7 12ZM8 19.4c-.8-.5-1-1.6-1-3.3l.1-.3c.9.3 1.7.4 2.6.5.5.7 1.1 1.4 1.8 2-1.5 1.1-2.8 1.5-3.5 1Zm3-3a20.3 20.3 0 0 0 2.4 0l-1.2 1.3-1.1-1.2Zm5.5 3c-.8.4-2.1 0-3.5-1l1.7-2c.9-.2 1.8-.3 2.6-.6v.3c.2 1.7-.1 2.8-.8 3.3Zm1.6-4.9c-.2-.9-.5-1.7-.9-2.5.4-.8.7-1.6.9-2.5 1.6.7 2.6 1.6 2.6 2.5 0 .9-1 1.8-2.6 2.5Z"/>
			<path d="M12.2 13.8a1.8 1.8 0 1 0-1.8-1.8 1.8 1.8 0 0 0 1.8 1.8Z"/>
		  </svg><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.8 5.7A4.8 4.8 0 0 0 7 10a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4 1c2-.7 2.9-3 3.1-4-1 1.4-2.4 2.2-4.3 1.2-1.2-.6-2.1-3.4-6-3.3Zm-5 6.3A4.8 4.8 0 0 0 2 16.2a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4.9c2-.7 3-2.9 3.1-4-1 1.4-2.4 2.3-4.2 1.3-1.3-.7-2.2-3.4-6-3.3Z"/>
  </svg>
   </div>,
		  new : <div className="indicator absolute top-2 left-5">
		  <span className="indicator-item badge badge-primary">new</span> 
		 
		</div>
		  
		},
		{
			id: useId(),
			title : 'window프로젝트',
			contents :  'Html,CSS, Javascript',
			create : 'Nov 20, 2023',
			views : '50K views',
			src : '/imgs/윈도.PNG',
			pagestate:{ page : 'https://mywindow95.netlify.app'} ,
			skills : <div className='flex flex-row'><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
		  </svg>
		  <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
  </svg><img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" className="w-8"></img>
  </div>
  
		  
		},

		{	
			id: useId(),
			title : 'CGV clone 코딩',
			contents : 'Html,CSS, Javascript',
			create : '2023',
			views : '15K views',
			src : '/imgs/cgv.PNG',
			pagestate:{ page : 'https://yonggyu01.github.io/finalcgv/'} ,
			skills : 		<div className='flex flex-row'><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
		  </svg>
		  <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
  </svg><img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" className="w-8"></img>
  </div>
		},
		{
			id: useId(),
			title : '육아정보 APP',
			contents :  'Vue',
			create : '2024',
			views : '25K views',
			src : '/imgs/vue.PNG',
			pagestate:{ page : 'https://engproject-ba2f9.firebaseapp.com/'} ,
			skills: 	<div className='flex flex-row'>
				<svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.5 3 12 7.2 9.9 3H2l10 18L22 3h-7.5Zm-10 1.5h2.4l5.1 9.3 5.1-9.3h2.4L12 18 4.5 4.5Z"/>
  </svg>
  <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
  </svg>
  <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
  </svg>
  
  
			</div>
		},
	]




	return(
        <div className='bg-white h-full'>
        <section className="card py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-medium ">나의 포트폴리오</h2>
			<p className="font-serif text-sm dark:text-gray-400">고생한 목록</p>
		</div>
		<div className="grid  gap-x-4 gap-y-8  sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4">
		{mypage && mypage.map((item,idx )=>  <article className="card bg-white shadow-xl flex flex-col dark:bg-gray-900" key={item.id}>
				<Link rel="noopener noreferrer" aria-label="" onClick={(e)=>{
					e.preventDefault()
					// navigate('/popo',{state :{page : item.pagestate.page}})
					document.getElementById(`my_modal_${idx}`).showModal()}}				>
				<figure>
					<img alt="" id={`my_img${idx}`} className="object-fit w-full h-52 dark:bg-gray-500 rounded-lg object-center" src={item.src} />
					{/* https://source.unsplash.com/200x200/?fashion?1 */}
					</figure>
				</Link>
				<div className="flex flex-col flex-1 p-6">
								
					{item.new}
					<Link rel="noopener noreferrer" className="text-lg tracki uppercase font-semibold hover:underline dark:text-violet-400" onClick={(e)=>{
					e.preventDefault()
					// navigate('/popo',{state :{page : item.pagestate.page}})
					document.getElementById(`my_modal_${idx}`).showModal()}} >{item.title}</Link>
					<h2 className="flex-1 py-2 text-xs  leadi"> {item.contents}</h2>
					<div className="badge badge-outline">stack</div>
					{item.skills}
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>{item.create}</span>
						<span>{item.views}</span>
					</div>
				</div>
				<dialog id={`my_modal_${idx}`} className="modal h-500px">
				<div className="modal-box ">
					<figure className='mb-3'>
					<div id={'bgimgs'+idx} className='block h-96 w-96'/>

					</figure>
					<h3 className="font-bold text-lg ">{item.title}</h3>
					<div className='flex flex-row items-center'>
					<div className='w-1/2'>
					<p className="py-4 pt-2	"> Stack (사용기술) </p>
					
					<span >{item.skills} </span>
					</div>
					<div className="divider divider-horizontal"></div> 
					<div className='flex flex-col gap-2 items-center'>

					<h1 className='pt-3 pb-2'> 페이지 구경하기</h1>
					<button className="btn btn-outline btn-info btn-sm" onClick={()=>{navigate('/popo',{state :{page : item.pagestate.page}})}}>구경하기</button>
					</div>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
				</dialog>

			</article>
			)}
	</div>

	</div>
</section>


        </div>



    )

}

