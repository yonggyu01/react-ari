import {useState} from 'react'
import '../css/footer.css'
function Footerline(event){
	const {clickwhat} = event
	console.log(event)
    return(
		<>
		<footer>
		<ul>
				<li data-title="Home" ><span className="material-symbols-outlined" onClick={()=>{clickwhat('Home')}}>home</span></li>
				<li data-title="Open"><span className="material-symbols-outlined"  onClick={()=>{clickwhat('Open')}}>
open_in_full
</span></li>
				
				<li data-title="Left"><span className="material-symbols-outlined"  onClick={()=>{clickwhat('Left')}}>
arrow_left_alt
</span></li>
				<li data-title="Right"><span className="material-symbols-outlined"  onClick={()=>{clickwhat('Right')}}>
arrow_right_alt
</span></li>
				<li data-title="Cartpage"><span className="material-symbols-outlined" >
shopping_cart_checkout
</span></li>
		</ul>
   		 </footer>
		</>
    )
}

export default Footerline