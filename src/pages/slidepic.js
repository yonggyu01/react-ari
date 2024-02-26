export default function Slidepic(){
    return(
        <>
     
                <div className="flex flex-row flex-wrap min-h-screen bg-base-200 gap-x-3 pt-5 justify-center">
        <div className="card basis-full"><h1 className="card-title justify-center">
            포트폴리오 목록
            </h1>
            </div>
        <div className="card w-25 bg-base-100 shadow-xl h-2/5">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> </figure>
  <div className="card-body">
    <h2 className="card-title">사진5장</h2>
    <p>레이아웃 잡아보자</p>
  </div>
</div>
        <div className="card w-25 bg-base-100 shadow-xl h-2/5">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> </figure>
  <div className="card-body">
    <h2 className="card-title">사진5장</h2>
    <p>레이아웃 잡아보자</p>
  </div>
</div>
        <div className="card w-1/2 bg-base-100 shadow-xl h-2/5">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> </figure>
  <div className="card-body">
    <h2 className="card-title">사진5장</h2>
    <p>레이아웃 잡아보자</p>
  </div>
</div>



        </div>
        </>
    )
}