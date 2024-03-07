import { Link, useLocation, useParams,useNavigate } from "react-router-dom"
import { useStore } from "../store/store"
import Scrolltop from "../components/scrolltop"

export default function Myblogdetail(){
const {idx} = useParams()
const navigate = useNavigate()
const {selectblog}=useStore()
const imgsrc = /https.+[$jpg]/igm
const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
const hangul = /[ㄱ-ㅣ가-힣].+/gm
const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
    return(
        <section>
            <Scrolltop></Scrolltop>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-full overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        
        {selectblog.comment.body.match(imgsrc).map((item)=><img
        alt=""
        src={item}
        className=" inset-0 w-full object-cover mb-8"
      />)}
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">{selectblog.comment.title}</h2>

        {selectblog.comment.body.split("\n").map((text)=>{      
            const mytext = text.replace(imgsrc, '').replace(/!.*\)/gm,'')

            return  <p className="mt-4 text-gray-600 mb-6">
            {mytext}
        </p>

})}

        <Link
          onClick={()=>navigate(-1)}
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
{selectblog.comment.created }
        </Link>
      </div>
    </div>
  </div>
</section>
    )
}