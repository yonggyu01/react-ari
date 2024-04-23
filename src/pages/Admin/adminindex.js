import {Outlet } from "react-router-dom"
import Adminnav from "../../components/adminnav"

export default function Adminindex(){
  
return(
    <div>
        <Adminnav></Adminnav>
        <Outlet></Outlet>
    </div>
)
}