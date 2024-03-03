import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'

export default function Indexpage(){
    return(
        <>
        <Navbar/>
        <Outlet></Outlet>
        </>
    )
}