import { Link } from "react-router-dom"
export default function Adminnav(){
    return(
        <div className="navbar bg-base-100">
  <Link to="/admin" className="btn btn-ghost text-xl">관리자페이지</Link>
</div>
    )
}