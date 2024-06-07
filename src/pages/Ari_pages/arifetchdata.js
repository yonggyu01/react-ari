import axios from 'axios';
export async function instagetdata(){
    let result
    const data = await axios.get(`https://graph.instagram.com/me/media`,{
            params:{
                fields : 'id,caption,timestamp,media_type,media_url,thumbnail_url',
                access_token : process.env.REACT_APP_insta_code,
            }
        })
        result  = data
        return result
        // const data = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,timestamp,media_type,media_url,thumbnail_url&access_token=${process.env.REACT_APP_insta_code}`).catch(err => console.log('서버에서 유저정보 받아올 수 없음'))
        // const result  =await data.json()
   
 
    // return result
}
