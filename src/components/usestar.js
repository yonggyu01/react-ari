import {useEffect, useState} from 'react'


export default function useStar(){
     const [star,setstar] = useState()
  
    useEffect(()=>{
        console.log()
    },[star])
    return(
        <div className="rating rating-lg">
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" value={(e)=>{
            console.log(e)
        }} />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" value={(e)=>{
            console.log(e)
        }} />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" value={(e)=>{
            console.log(e)
        }} />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" value={(e)=>{
            console.log(e)
        }} />
        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" value={(e)=>{
            console.log(e)
        }} />
       
       
      </div>
    )
}
