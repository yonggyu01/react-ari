export default function Drawlist(){
    return(
        <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><h1>회원정보</h1></li>
          <li><a>아이디 : </a></li>
          
        </ul>
      </div>
    )
}