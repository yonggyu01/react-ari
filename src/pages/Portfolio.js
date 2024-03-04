import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

export default function Portfolio(){
		const location = useLocation()

	console.log(location)
		const portfoliodata = [
			{
			 id:'window',
			  maintitle :'Window Project  제작 관련 정보',
			  mainsub : '첫 개인프로젝트 :  Window Project',
			  main3 : 'Window 95에서 영감을 받아 제작하게된 첫 개인프로젝트입니다.',
			 stack : 	<div className='flex flex-row gap-3'><div className="flex flex-col justify-center items-center">
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
										<h4 className="text-lg font-medium leadi dark:text-gray-50 text-center">Netlify<br></br>
											배포
											</h4> 
			
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
				stack : 	<div className='flex flex-row gap-3'><div className="flex flex-col justify-center items-center">
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
											   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/nodejs-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"></img>
											   <p className="mt-2 dark:text-gray-400">Node.js </p>
											   </div>
											 </div>,
			   vers : 	<div className="flex gap-4">
										   <div className="flex flex-col justify-center items-center">
											   <img src="/imgs/github-icon-1-logo-svgrepo-com.svg" alt="svg" width="35" height="35"/>
											   <p className="mt-2 dark:text-gray-400">Git hub </p>
										   </div>
										   <h4 className="text-lg font-medium leadi dark:text-gray-50 text-center">Netlify<br></br>
											   배포
											   </h4> 
			   
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
			]
			let view = {

			}
			useEffect(()=>{
				for(let x of portfoliodata){
					if(location.state.info === x.id){
						view= {...x}
					}
				}
			},[])
    return(
        <>
        <section className="dark:bg-gray-800 dark:text-gray-100">
			
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">{view.maintitle || portfoliodata[0].maintitle}</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">기술 스택, 배포환경까지 소개합니다.</p>
		</div>
		
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">{view.mainsub || portfoliodata[0].mainsub}</h3>
				<hr></hr>
				<p className="mt-3 text-lg dark:text-gray-400">{view.main3 || portfoliodata[0].main3}</p>
	
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
							{		view.stack || portfoliodata[0].stack}
				
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
						{view.vers || portfoliodata[0].vers	}
						
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
							<p className="mt-2 dark:text-gray-400">{view.mainend || portfoliodata[0].mainend } 
							</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src={view.fsrc    || portfoliodata[0].fsrc    } alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">{view.secondtitle  || portfoliodata[0].secondtitle  }</h3>
					<p className="mt-3 text-lg dark:text-gray-400">{view.secondsubtitle   || portfoliodata[0].secondsubtitle   }</p>
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
								<h4 className="text-lg font-medium leadi dark:text-gray-50">{view.ttitle||portfoliodata[0].ttitle}</h4>
								<p className="mt-2 dark:text-gray-400">{view.tcon||portfoliodata[0].tcon}</p>
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
								<h4 className="text-lg font-medium leadi dark:text-gray-50">{view.ytitle||portfoliodata[0].ytitle}</h4>
								<p className="mt-2 dark:text-gray-400">{view.ycon||portfoliodata[0].ycon}
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
								<h4 className="text-lg font-medium leadi dark:text-gray-50">{view.utitle||portfoliodata[0].utitle}</h4>
								<p className="mt-2 dark:text-gray-400">{view.ucon||portfoliodata[0].ucon}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={view.ssrc||portfoliodata[0].ssrc} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    )
}