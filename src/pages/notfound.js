import { useNavigate,Link } from "react-router-dom"

export default function Notfound(){
 const navigate = useNavigate()
    return(
        <>
        <div className="h-min-screen">
            <div className="flex flex-col justify-center items-center mt-9">
            <h1 className="font-bold text-xl mb-5">페이지가 없습니다 홈 화면으로 이동하세요</h1>
            <button className="bg-gray-100 w-9 text-xl" onClick={()=>{
            navigate('/')
            }}> Click </button>
            </div>
        </div>
        </>
    )
}