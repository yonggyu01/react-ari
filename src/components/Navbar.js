import { useEffect, useState } from 'react';
import baby from '../imgs/baba.jpg'
// import Drawlist from '../components/darwlist'
import {useStore} from '../store/store'
import { Link, useNavigate,useLocation } from 'react-router-dom';

export default function Navbar(){
  const navigate = useNavigate()
  const location = useLocation()
  const {logoclick,islogo,loginnow, loginsuc,userid,rollbox,setroll,setnaviscroll,naviscroll} = useStore()
  function logoc(){
    islogo()
  }

  // console.log(location.pathname.split('/')[1].length)
return (
    <>
    <div className="drawer z-10">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  {!naviscroll && <div className='h-16' />}
  <div className="drawer-content flex flex-col"></div>
    <div className="navbar bg-base-100 shadow-primary stroke-primary  fixed">
        <div className="flex-none md:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
  <div className="flex-1">
    <span className="btn btn-ghost text-xl" onClick={()=>{
      if(location.pathname.split('/')[1].length === 0){
        setroll()
        logoc()
      }else{
        navigate('/')
      }
    }}>Ari page</span>
  </div>

  <ul className="menu menu-horizontal bg-base-200 rounded-box max-md:hidden">
  <li><span><Link to='/ari'>아리 팬페이지</Link></span></li>
  <li>
    <details >
      <summary>포트폴리오 소개</summary>
      <ul>
        <li><span>기술스택</span></li>
        <li><Link onClick={(e)=>{
              e.preventDefault()
              if(location.pathname.split('/')[1].length!==0){
              }
              else{
                document.getElementById('myblog').scrollIntoView({block: "start", inline: "nearest",behavior:'smooth'})
              }}}>
              <span>블로그</span></Link></li>
        <li>
          <details >
            {/* open하면 열림 */}
            <summary><Link onClick={(e)=>{
              e.preventDefault()
              navigate('/portfolio', {state : {info : 'window'}})
              // if(location.pathname.split('/')[1].length!==0){
              // }
              // else{
                // document.getElementById('myblog').scrollIntoView({block: "start", inline: "nearest"})
              // }
            }}>포트폴리오</Link></summary>
            <ul>
              <li><Link  onClick={(e)=>{
                e.preventDefault()
              navigate('/portfolio', {state : {info : 'window'}})}} > <span>window Project</span></Link></li>
              <li><Link onClick={(e)=>{
                e.preventDefault()
              navigate('/portfolio', {state : {info : 'vue'}})}} ><span>Vue</span></Link></li>
              <li><Link onClick={(e)=>{
                e.preventDefault()
              navigate('/portfolio', {state : {info : 'react'}})}}><span>React</span></Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><Link to='/ari/product'>구매페이지</Link></li>
</ul>

  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={()=>{
              navigate('/order')
            }}> 장바구니</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="pic" src={baby} />
            
        </div>

      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <span className="justify-between">
            Profile
            <span className="badge">New</span>
          </span>
        </li>
        {loginnow?  <li><button>Logout</button></li> :  <li><Link to="/login">Login or sign in</Link></li>}
       
      </ul>
    </div>
  </div>
</div>
<div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <div className="h-full p-3 space-y-2 w-60 bg-gray-50 text-gray-800">
	<div className="flex items-center p-2 space-x-4">
		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
		<div>

			{loginnow? <h2 className="text-lg font-semibold">{userid}님</h2>:<h2 className="text-lg font-semibold"><Link to='/login' >로그인하세요</Link></h2>}
			<span className="flex items-center space-x-1">
				{loginnow?  <Link to='/login' className="text-xs hover:underline text-gray-600">View profile</Link> : '' }
			</span>
		</div>
	</div>
	<div className="divide-y divide-gray-300">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
			<li className="bg-gray-100 text-gray-900">
				<Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
						<path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
					</svg>
					<span>MainPage</span>
				</Link>
			</li>
		
			<li>
				<span rel="noopener noreferrer"  className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
						<path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
						<path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
						<path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
					</svg>
					<span><Link to="/order">Orders</Link></span>
				</span>
			</li>
			<li>
				<span rel="noopener noreferrer"  className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
					</svg>
					<span>Wishlist</span>
				</span>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			<li>
				<span rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
						<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
						<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
					</svg>
					<span>Settings</span>
				</span>
			</li>
			<li>
				<span rel="noopener noreferrer"  className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
						<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
						<rect width="32" height="64" x="256" y="232"></rect>
					</svg>
					<span>Logout</span>
				</span>
			</li>
		</ul>
	</div>
</div>
  </div>
</div>
{/* {drawbar&&<Drawlist/>} */}
    </>
)

}