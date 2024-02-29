import { Link, useNavigate } from 'react-router-dom'
import aripic1 from '../imgs/ari1.jpg'
import aripic2 from '../imgs/ari2.jpg'
import Productpage from './perchasepage'
import { useStore } from '../store/store'

export default function Arimain(){
  const {userid,loginnow} = useStore()
  const navigate = useNavigate()
    return(
        <>
        <div className="p-6 bg-gray-600 text-gray-50 hidden lg:block">
	<div className="container mx-auto ">
		<div className="flex flex-row  items-center justify-between">
			<h2 className="text-center text-6xl tracki font-bold">Up to
				<br  className="sm:hidden" />10% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>무료배송 이벤트 진행중</span>
			
			</div>
			<Link to="product" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-cyan-900 text-gray-50 border-gray-600">Shop Now</Link>
		</div>
	</div>
</div>
<div className="navbar fixed lg:hidden z-10">
  <div className="flex-1">
   </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content rounded-full w-10">
  {loginnow? <span className="text-xs truncate">{userid}</span> :<span className="text-xs truncate">login</span> }
    
  </div>
</div> 
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to='/'>Home</Link></li>
        {loginnow? <li><a>Logout</a></li> :<li><Link to="/login">Login</Link></li> }
      </ul>
    </div>
  </div>
</div>
        <div className="min-h-full sm:flex sm:flex-row w-full justify-center items-center gap-5 bg-white relative">
          <img src={aripic1} className='grayscale	sm:w-3/5 md:w-2/5 min-w-96 rounded-md'/>
          <div className='flex flex-col justyfi-end'>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-7xl mt-1 pl-1'>Ari Fan Page</h1>
          <p className="font-semibold text-lg mt-2 mb-9 pl-3">Welcome to ari fanclub.</p>
          <div className='sm:absolute sm:bottom-0 md:bottom-3 lg:bottom-62'>
          <p className='font-semibold text-lg mb-1 pl-3'>Go Store</p> 
          <button className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800 w-48 md:w-96" onClick={()=>{
            navigate('/ari/product')
          }}>Pre-Order</button>
          </div>
          </div>
        </div>
        <Productpage></Productpage>
        </>
    )
    
}