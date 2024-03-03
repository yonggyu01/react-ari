import { Outlet } from "react-router-dom"
import { useStore } from '../store/store'
import { Link, useNavigate } from 'react-router-dom'
export default function Ariindex(){
    const {userid,loginnow} = useStore()
    return(<>
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
        <Outlet></Outlet>
        </>
    )
} 