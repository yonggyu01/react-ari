import '../css/Loginpage.css'
function Loginpage(){
return(
<>

<div className="hero min-h-calc bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">가입,로그인 </h1>
      <p className="py-1">반갑습니다. </p>
    </div>


{/* 로그인창 */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-neutral mb-2" onClick={(e)=>{e.preventDefault()

          }}>Sign in</button>
          <button className="btn btn-primary mb-2" onClick={(e)=>{e.preventDefault()

}}>Login</button>
          <button className="btn  btn-warning " onClick={(e)=>{e.preventDefault()

}}>Kakao Login</button>
        </div>
      </form>
    </div>

      {/* 회원가입창 */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">ID</span>
          </label>
          <input type="userid" placeholder="userid" className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-neutral mb-2" onClick={(e)=>{e.preventDefault()
          }}>Sign in</button>
        </div>
      </form>
    </div>





  </div>
</div>
</>
)
}

export default Loginpage