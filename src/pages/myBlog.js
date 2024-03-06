import { useEffect, useState } from 'react'
import { Client } from 'dsteem';
import { Link } from 'react-router-dom';
// var dsteem = require('dsteem')

export default function Myblog(){
    const [mysteemdata, setmysteem]=useState([])
    const imgsrc = /https.+[$jpg]/i
    useEffect(()=>{
        var client = new Client('https://api.steemit.com')
        // console.log()
        client.database.getDiscussions('created', { tag: 'yongvue', limit: 5 })
        // client.database.getDiscussions('created', { tag: 'yongreact', limit: 5 })
        .then(res=>res).then(res=>  {console.log(res , '뷰')})
        // {"jsonrpc":"2.0", "method":"tags_api.get_comment_discussions_by_payout", "params":{"tag":"steem","limit":1}, "id":1}' https://api.steemit.com
        fetch('https://api.steemit.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    jsonrpc: '2.0',
    method: 'condenser_api.get_blog',
    // method: 'tags_api.get_comment_discussions_by_payout',
    params: ['yonggyu01', 0, 6],
    // params: {tag : 'yongreact', limit:5},
    id: 1,
  }),
})
  .then(response => response.json())
 .then((res)=>{
   console.log(res)
    setmysteem(res.result)
    // console.log(res)
    console.log(mysteemdata)
    // datamaker(res)
})
  .catch(error => console.error('Error:', error));

        
    },[])

//    const query = '/@yonggyu01/';




// client.database.call('get_state', [query]).then(result => {
    // work with state object
// });
    
    return (
        <>
  
        <section id="myblog" className="dark:bg-gray-800 dark:text-gray-100 w-full bg-white">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 keychainify-checked">
                <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">여긴 제목?</h3>
                    <span className="text-xs dark:text-gray-400">여기에 날짜 넣을거임</span>
                    <p>여기에 내용입력할거야 후하핫.</p>
                </div>
            </a> */}
            <div className="grid justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {mysteemdata&& mysteemdata.map((x)=>{ return <Link key={x.title} >
               <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src={x.comment.body.match(imgsrc)}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> {x.comment.created}</time>


      <h3 className="mt-0.5 text-lg text-gray-900 truncate">{x.comment.title}</h3>
  

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    {x.comment.body}
    </p>
  </div>
</article>
        
        
        {/* <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={x.comment.body.match(imgsrc)} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline truncate">{x.comment.title}</h3>
            <span className="text-xs dark:text-gray-400 ">{x.comment.created}</span> */}
            {/* <p>{x.comment.body}</p> */}
        {/* </div> */}
    </Link>
    
})}
               
         
            </div>
            {/* <div className="flex justify-center">
                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">글 더보기</button>
            </div> */}
        </div>
    </section>
    </>
    )
}