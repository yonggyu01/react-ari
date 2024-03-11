import { useEffect,useRef,useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Ari_insta(){
    // https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=YOUR_ACCESS_TOKEN
    // console.log(process.env.REACT_APP_insta_code)
    const [render, setrender] = useState(false)
    const [baby,setbaby ]= useState()
    const baby1= useRef([])
    const mydata = []
    const navigate= useNavigate()
    const [more,setmore]=useState(12)
   async function instaget(num){
    const data = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,timestamp,media_type,media_url,thumbnail_url&access_token=${process.env.REACT_APP_insta_code}`)
    const result  =await data.json()
    // console.log(result)
    setbaby(result)
    // console.log(baby)
}
function instamore(num){
  setmore(more + num)
  baby&& baby.data.map((item,idx)=> {
    if(more>idx){
      baby1.current[idx] = item
    }})
  
}
// 더보기는 좀 고민해보자 충분히 가능함


useEffect(()=>{
    instaget()
},[])
useEffect(()=>{
  instamore(2)
  setrender(false)
},[render])
    return(
     
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
      {baby&&baby.data.map((item,idx)=>{
        if(idx <12){
            return  <div className="mx-auto w-full  p-4 lg:p-8 overflow-hidden " key={item.id+idx}>
            <div
              className="grid grid-cols-1 gap-4  lg:gap-8 justify-center md:gap-8  aspect-video rounded-full"
            >
              <div className="m-auto">
                <Link className="group relative block" onClick={(e)=>{e.preventDefault()
					// navigate('/popo',{state :{page : item.pagestate.page}})
					document.getElementById(`my_modal_m${idx}`).showModal()
					document.querySelector(`#my_modal_m${idx} video`).play()
          
          }}>
                  <div
                    className="absolute overflow-hidden inset-0 w-96 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition round-full group-hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hi-outline hi-play-circle inline-block  h-16 w-16 text-white transition group-hover:scale-150 group-active:scale-125"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </div>    
                  <div className="aspect-h-10 aspect-w-16">
                    <img
                      src={item.thumbnail_url}
                      alt="Video Preview"
                      className="rounded w-96 object-fit "
                    />
                  </div>
                </Link>
                <div className="py-3 w-96">
                  <h4 className="font-semibold truncate">
                    <span
                    className="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300 "
                    >
                      {item.caption}
                    </span>
                  </h4>
                  <p
                    className="text-xs font-medium text-gray-500 dark:text-gray-400/75 truncate"
                  >
                    {item.timestamp.match(/\d{4}-\d{2}-\d{2}/ , '')[0]}
                  </p>
                </div>
                </div>
            </div>
{/* 모달가자 */}
			{/* 모달임 */}
				<dialog id={`my_modal_m${idx}`} className="modal overflow-hidden">
				<div className="modal-box overflow-y-hidden dark:bg-white">
			
					<h3 className="font-bold text-lg truncate dark:text-black">{item.caption}</h3>
					<div className='flex flex-row items-center'>
				
					{/* <div className="divider divider-horizontal"></div>  */}
                    <video src={item.media_url} controls ></video>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop" onClick={()=>{
          	document.querySelector(`#my_modal_m${idx} video`).pause()
        }}>
					<button>close</button>
				</form>
				</dialog>

          </div>


        }
    })}
     <div className='flex w-full justify-center mb-5'>
        <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100 dark:bg-indigo-700 dark:text-white" onClick={()=>{
          console.log(baby1.current)
          instamore(2)
        }}>더보기</button>

        </div>

</div>
       
    )
}