import { useNavigate ,useLocation} from "react-router-dom";

export default function Popo (){
    const navigate = useNavigate();
    const location = useLocation();
const { page } = location.state;
console.log(page)
    return(
<div className="mockup-window border bg-white-300">
    <button className="absolute top-2 right-10" onClick={()=>{navigate('/')}}><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/>
  </svg></button>
  <div className="flex justify-center border-t border-base-300">
    
    <iframe src={page} className="w-full h-screen"></iframe>

  </div>
</div>

    )

}