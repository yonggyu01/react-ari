import { useNavigate ,useLocation} from "react-router-dom";

export default function Popo (){
    const navigate = useNavigate();
    const location = useLocation();
const { page } = location.state;
console.log(page)
    return(
<div>
  
   

    
    <iframe src={page} className="w-full h-screen"></iframe>

  
</div>

    )

}