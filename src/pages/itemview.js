import { useRef } from 'react'
import '../css/Itemview.css'

export default function Itemview(){
    const myfood = useRef(null)
    console.log(myfood.current)
    // myfood.current= '../imgs/KakaoTalk_20240226_133505813_01.jpg'
    return(<>
    
        <div className='mygridwrap min-h-screen'>
<div className="card w-full bg-base-100 shadow-xl myarea1">
 
  <div className="card-body items-center text-center">
    <div className="textdivider">
    <h2 className="card  text-3xl myarea1 text-left">용규의 포트폴리오</h2>
    <div className="card myarea2 bg-base-100 shadow-xl text-center" > 
        여기에도 이미지 넣어야함
    </div>

    <div className='text-2xl myarea3 text-left'>
    <h2 className='text-2xl'>레이아웃만 일단 잡아보고 해볼까나..</h2>
    <h2 className='text-2xl'>레이아웃만 일단 잡아보고 해볼까나..</h2>
    <h2 className='text-2xl'>레이아웃만 일단 잡아보고 해볼까나..</h2>
    <h2 className='text-2xl'>레이아웃만 일단 잡아보고 해볼까나..</h2>
    </div>
  

    </div>
    <div className="card-actions">
    </div>
  </div>
</div>
<div className="card bg-base-100 shadow-xl myarea2 bgmyfood">
   
</div>
         <div className="card w-full bg-base-100 shadow-xl myarea3" >
 
  <div className="card-body">
    <div className='cardivder'>
    <div className='card text-3xl myarea1 bg-lime-100' >

    <h2 className="card-title">Shoes!</h2>
    </div>
    <div className='card myarea2 bg-rose-400 shadow-xl text-center'>
    <p>If a dog chews shoes whose shoes does he choose?</p>

    </div>
    <div className="card bg-orange-400 shadow-xl myarea3 justify-end">
    
    </div>
    </div>
 
  </div>
</div>
        </div>
        </>
    )

}