import { useEffect,useState } from "react"
import { useLocation, useNavigate } from "react-router"
import Scrolltop from '../components/scrolltop';
export default function Portfolio(){
		const location = useLocation()
		const [port , setport] = useState(location.state.info)
		if(port !== location.state.info){
			setport(location.state.info)
			console.log(port ,'포트')
		}
		const portfoliodata = [
			{
			 id:'window',
			  maintitle :'Window Project  제작 관련 정보',
			  mainsub : '첫 개인프로젝트 :  Window Project',
			  main3 : 'Window 95에서 영감을 받아 제작하게된 첫 개인프로젝트입니다.',
			 stack : 	<div className='flex flex-row gap-3'><div className="flex flex-col justify-center items-end">
											<svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
											<path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
											  </svg>
											  <p className="mt-2 dark:text-gray-400">HTML </p>
											</div>
											<div className="flex flex-col justify-center items-center">
											  <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
												<path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
											 </svg>
											 <p className="mt-2 dark:text-gray-400">CSS </p>
											</div>
											<div className="flex flex-col justify-center items-center">
											<img src="/imgs/javascript-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											<p className="mt-2 dark:text-gray-400">Javascript </p>
											</div>
										  </div>,
			vers : 	<div className="flex gap-4">
										<div className="flex flex-col justify-center items-center">
											<img src="/imgs/github-icon-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											<p className="mt-2 dark:text-gray-400">Git hub </p>
										</div>
										<p className=" leadi dark:text-gray-50 text-center flex items-end">Netlify<br></br>
										
											</p> 
			
										</div>,
			mainend : `순수 자바스크립트, CSS를 활용한 SPA 프로젝트입니다.  <br/>
											페이지별로 화면 전환이 없고 전부 한 페이지에서 작동합니다.`,
			secondtitle : 'Window95와 유사하게 동작',
			secondsubtitle : 'Window운영체제에 포함된 기능들을 최대한 Javascript와 css를 활용해서 구현하기 위해 노력했습니다.',
			ttitle:'파일 드래그 앤 드롭기능',
			tcon : '바탕화면에 아이콘을 드래그 앤 드롭을 통해 다른 폴더로 옮길 수 있습니다.',
			ytitle:'Canvas 활용한 그림판 구현',
			ycon : `Window의 대표기능중 하나인 그림판을 Canvas 엘리먼트를 통해 구현 <br></br>
											해당 그림판을 제작하면서 좌표에 대한 공부를 많이 할 수 있었습니다.`,
			utitle: '그 밖의 다양한 아이디어',
			ucon : `Cmd창에서 일부 입력과 실행이 가능하도록 구현, 메모장 작성 후 파일 저장 및 불러오기 <br></br>
											한컴 타자연습등등.. 다양한 기능들을 구현해봤습니다.`,
			fsrc : './imgs/윈도.PNG',
			ssrc : './imgs/윈도1.PNG'
			},
			{
				id:'vue',
				 maintitle :'Vue Project  제작 관련 정보',
				 mainsub : 'Vue를 활용한 개인프로젝트 :  Project Ari',
				 main3 : '육아에 관련된 정보와, Vue의 다양한 기능 및 APi를 활용하기 위한 모바일전용 페이지입니다.',
				stack : 	<div className='flex flex-row gap-3'><div className="flex flex-col justify-center items-end">
											  <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.5 3 12 7.2 9.9 3H2l10 18L22 3h-7.5Zm-10 1.5h2.4l5.1 9.3 5.1-9.3h2.4L12 18 4.5 4.5Z"/>
  </svg>
												 <p className="mt-2 dark:text-gray-400">Vue </p>
											   </div>
											   <div className="flex flex-col justify-center items-center">
												 <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
												   <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
												</svg>
												<p className="mt-2 dark:text-gray-400">CSS </p>
											   </div>
											   <div className="flex flex-col justify-center items-center">
											   <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
  </svg>
												<p className="mt-2 dark:text-gray-400">Html </p>
											   </div>
											   <div className="flex flex-col justify-center items-center ">
											   <img src="/imgs/nodejs-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"></img>
											   <p className="mt-2 dark:text-gray-400">Node.js </p>
											   </div>
											 </div>,
			   vers : 	<div className="flex gap-4 items-end">
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/github-icon-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Git hub </p>
										   </div>
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/firebase-icon.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Firebase 배포 </p>
										   </div>
										   <h4 className=" leadi dark:text-gray-50 text-center ">Cloudtype
											  
											   </h4> 
			   
										   </div>,
			   mainend : `Vue3를 활용한 SPA프로젝트입니다. 다양한 API를 활용하여 제작하였습니다.`,
			   secondtitle : '다양한 API를 도입하여 제작',
			   secondsubtitle : 'Kakao login, Youtube, Gemini, Openweathermap, Steemit 등의 API사용',
			   ttitle:'Kakao oauth2.0 ',
			   tcon : '권한 부여 승인 코드 방식으로 로그인 구현',
			   ytitle:'Node.js 를 사용하여 기본적인 CRUD 기능 구현',
			   ycon : `전역 상태관리는 vuex를 통해 진행하였으나, 회원가입 Todo 리스트, 장바구니등의 기능은 node.js를 사용하여 서버에 직접 저장하는 형식으로 구현하였습니다`,
			   utitle: '그 밖의 다양한 아이디어',
			   ucon : `구글 ai인 gemini와 openweathermap api를 조합하여 해당 그날그날 날씨에 따른 여행지를 추천해주는 페이지를 구성하였습니다.`,
			   fsrc : './imgs/vue.PNG',
			   ssrc : './imgs/vue1.PNG'
			   },
			{
				id:'react',
				 maintitle :'React  제작 관련 정보',
				 mainsub : 'React를 활용한 개인프로젝트 :  Ari fanpage',
				 main3 : '제 첫 포트폴리오 딸 아리를 자랑하기위한 페이지입니다..',
				stack : 	<div className='flex flex-row gap-3'>
					<div className="flex flex-col justify-center items-center">
					<svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
			<path d="M21.7 12c0-1.4-1.3-2.7-3.4-3.5V8c.3-2.1-.2-3.6-1.3-4.2-1.3-.7-3-.2-4.8 1.2-1.8-1.4-3.5-2-4.7-1.2C6.4 4.4 5.9 5.9 6 8v.5c-2 .8-3.4 2-3.4 3.5 0 1.4 1.4 2.7 3.5 3.5L6 16c-.2 2.1.3 3.6 1.4 4.2.3.2.8.3 1.2.3a6 6 0 0 0 3.5-1.5 6 6 0 0 0 3.5 1.5c.5 0 .9 0 1.3-.3 1-.6 1.6-2.1 1.3-4.2v-.5c2-.8 3.4-2 3.4-3.5Zm-6-7.5.8.1c.7.5 1 1.6.9 3.3l-.1.3c-.8-.3-1.7-.4-2.6-.5-.5-.7-1-1.4-1.7-2 .7-.7 1.7-1.1 2.7-1.2Zm-8 8.7.6 1 .6 1c-.5 0-1-.2-1.6-.4l.5-1.6Zm-.4-4L9 8.8l-.6 1-.5 1-.5-1.6Zm1 2.8a19.3 19.3 0 0 1 2-3.4 19.9 19.9 0 0 1 3.9 0 19.6 19.6 0 0 1 2 3.4 19.3 19.3 0 0 1-2 3.4 20 20 0 0 1-4 0A20.2 20.2 0 0 1 8.4 12Zm7.8 2.3.5-1 .5 1.5-1.6.4.6-1Zm.5-3.5-.5-1-.6-1c.6 0 1 .2 1.6.4l-.5 1.6Zm-4.4-4.5 1.1 1.2a20.9 20.9 0 0 0-2.2 0l1.1-1.2ZM8 4.6c.2 0 .5-.2.7-.1 1 0 2 .5 2.8 1.2-.7.6-1.3 1.3-1.8 2a8 8 0 0 0-2.6.5v-.3c-.2-1.7.1-2.8.9-3.3ZM3.7 12c0-.9 1-1.8 2.7-2.5l.8 2.5-.8 2.5C4.7 13.8 3.7 13 3.7 12ZM8 19.4c-.8-.5-1-1.6-1-3.3l.1-.3c.9.3 1.7.4 2.6.5.5.7 1.1 1.4 1.8 2-1.5 1.1-2.8 1.5-3.5 1Zm3-3a20.3 20.3 0 0 0 2.4 0l-1.2 1.3-1.1-1.2Zm5.5 3c-.8.4-2.1 0-3.5-1l1.7-2c.9-.2 1.8-.3 2.6-.6v.3c.2 1.7-.1 2.8-.8 3.3Zm1.6-4.9c-.2-.9-.5-1.7-.9-2.5.4-.8.7-1.6.9-2.5 1.6.7 2.6 1.6 2.6 2.5 0 .9-1 1.8-2.6 2.5Z"/>
			<path d="M12.2 13.8a1.8 1.8 0 1 0-1.8-1.8 1.8 1.8 0 0 0 1.8 1.8Z"/>
		  </svg>
												 <p className="mt-2 dark:text-gray-400">React </p>
											   </div>
											   <div className="flex flex-col justify-center items-center">
											   <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
  </svg>
												<p className="mt-2 dark:text-gray-400">CSS </p>
											   </div>
											   <div className="flex flex-col justify-center items-center">
											   <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
  </svg>
												<p className="mt-2 dark:text-gray-400">Html </p>
											   </div>
											   <div className="flex flex-col justify-center items-center ">
											   <img src="/imgs/nodejs-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"></img>
											   <p className="mt-2 dark:text-gray-400">Node.js </p>
											   </div>
											   <div className="flex flex-col justify-center items-center ">
											   <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.8 5.7A4.8 4.8 0 0 0 7 10a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4 1c2-.7 2.9-3 3.1-4-1 1.4-2.4 2.2-4.3 1.2-1.2-.6-2.1-3.4-6-3.3Zm-5 6.3A4.8 4.8 0 0 0 2 16.2a3.4 3.4 0 0 1 2.7-1.7c1.7 0 3 2 3.8 2.6a5.7 5.7 0 0 0 5.4.9c2-.7 3-2.9 3.1-4-1 1.4-2.4 2.3-4.2 1.3-1.3-.7-2.2-3.4-6-3.3Z"/>
  </svg>
											   <p className="mt-2 dark:text-gray-400">tailwind css </p>
											   </div>
											 </div>,
			   vers : 	<div className="flex gap-4 items-end">
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/github-icon-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Git hub </p>
										   </div>
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/firebase-icon.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Firebase 배포 </p>
										   </div>
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/aws-icon.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">AWS 배포 </p>
										   </div>
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/mariadb-icon.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">MariaDB </p>
										   </div>
			   
										   </div>,
			   mainend : `React를 활용한 SPA프로젝트입니다. 제 포트폴리오를 소개할 수 있는 페이지와 딸의 팬페이지를 합쳐서 만들었습니다.`,
			   secondtitle : '다양한 API를 도입하여 제작',
			   secondsubtitle : 'Kakao login, Youtube, Steemit 등의 API사용',
			   ttitle:'AWS EC2 서버, AWS RDB + mysql MariaDB 사용. ',
			   tcon : '해당 서버를 활용하여 회원가입 기능및 장바구니 등을 처리하였습니다.',
			   ytitle:'디자인 라이브러리 Tailwind css, Daisy ui',
			   ycon : `이전에 제작했던 Vue 프로젝트에서의 경험을 토대로 이번 React 프로젝트에서는 디자인을 전부 라이브러리를 사용하여 처리하였습니다.`,
			   utitle: 'Admin Page 도입',
			   ucon : `회원 정보, 관리, 상품판매 관련 정보를 확인 할 수 있도록 admin page를 도입하였습니다.`,
			   fsrc : './imgs/arifanpage.PNG',
			   ssrc : './imgs/arifanpage1.PNG'
			   },	{
				id:'team',
				 maintitle :'CGV Clone site 제작 관련 정보',
				 mainsub : '팀프로젝트 :  CGV',
				 main3 : '첫 팀프로젝트로 3명이서 작업했으며  일부 페이지 html + css작업과 전체페이지의 자바스크립트를 담당했습니다. ',
				stack : 	<div className='flex flex-row gap-3'><div className="flex flex-col justify-center items-end">
											   <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
											   <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
												 </svg>
												 <p className="mt-2 dark:text-gray-400">HTML </p>
											   </div>
											   <div className="flex flex-col justify-center items-center">
												 <svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
												   <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
												</svg>
												<p className="mt-2 dark:text-gray-400">CSS </p>
											   </div>
											   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/javascript-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Javascript </p>
											   </div>
											 </div>,
			   vers : 	<div className="flex gap-4">
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/github-icon-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Git hub </p>
										   </div>
										   </div>,
			   mainend : `첫 팀프로젝트로 다양한 기능을 구현해보며 자바스크립트에 익숙해지는 계기가 되는 프로젝트입니다.`,
			   secondtitle : 'CGV 페이지의 대부분의 기능 구현',
			   secondsubtitle : '간단한 슬라이드 부터 회원가입 기능까지 구현',
			   ttitle:'영화 정렬기능 구현',
			   tcon : 'sort함수를 사용하여 영화 정렬기능 구현',
			   ytitle:'Event 페이지에 카드 맞추기 게임 구현',
			   ycon : `클릭한 카드의 class명을 받아와서 비교하는 방식으로 구현.`,
			   utitle: '회원가입 및 로그인 기능 구현',
			   ucon : `Localstorage를 활용하여 간단한 회원정보를 저장하여 로그인 기능, 회원 중복검사 기능들을 구현함`,
			   fsrc : './imgs/cgv1.PNG',
			   ssrc : './imgs/cgv2.PNG'
			   },
			]
			let [view,setview] = useState({

			})
			console.log(location.state.info	)
			useEffect(()=>{
				for(let x of portfoliodata){
					if(location.state.info === x.id){
						setview({...x})
					}
					console.log(view)
				}
			},[port])
    return(
        <>
		<Scrolltop></Scrolltop>
        <section className="dark:bg-gray-800 dark:text-gray-100">
			
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">{view.maintitle}</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">기술 스택, 배포환경까지 소개합니다.</p>
		</div>
		
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">{view.mainsub }</h3>
				<hr></hr>
				<p className="mt-3 text-lg dark:text-gray-400">{view.main3 }</p>
	
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-semibold leadi dark:text-gray-50 mb-2">사용기술</h4>
							{		view.stack}
				
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-semibold leadi dark:text-gray-50 mb-2">버전관리 / 배포 </h4>
						{view.vers }
						
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-semibold leadi dark:text-gray-50 mb-2">특이사항</h4>
							<p className="mt-2 dark:text-gray-400">{view.mainend  } 
							</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src={view.fsrc      } alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">{view.secondtitle   }</h3>
					<p className="mt-3 text-lg dark:text-gray-400">{view.secondsubtitle      }</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi dark:text-gray-50">{view.ttitle}</h4>
								<p className="mt-2 dark:text-gray-400">{view.tcon}</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi dark:text-gray-50">{view.ytitle}</h4>
								<p className="mt-2 dark:text-gray-400">{view.ycon}
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi dark:text-gray-50">{view.utitle}</h4>
								<p className="mt-2 dark:text-gray-400">{view.ucon}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={view.ssrc} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    )
}