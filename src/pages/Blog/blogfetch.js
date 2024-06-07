import axios from 'axios';
const blogfetch =async (number)=>{  
   
    let bodydata = {
     jsonrpc: '2.0',
     method: 'condenser_api.get_blog',
     params: ['yonggyu01', 0, 150
     ],  
     id: '1',
   }
   let url = 'https://api.steemit.com'
    let data =await axios.post(url,bodydata)
 let result = data.data
//  if(number){
//     result = data.data.result[number]
//  } 
 return result
 }
 export default blogfetch