const http = require("http");
const express = require("express");
const path = require("path");
const mysql= require('mysql')
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())
const port = 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
});
res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 데이터베이스주소 위치 로그인아이디 패스워드 데이터베이스명
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  database: 'userinfo'
})

let select = null
//여기서 데이터베이스랑 연동 및 로그인 데이터 구현해보기
app.post('/sign',(req,res)=>{
  if(req.body.mode === 'get'){
    const sql = 'SELECT * FROM user'
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  }else if(req.body.mode ==='sign'){
    const sql = 'INSERT INTO user(`u_name`, `u_id`, `pwd`, `create_account`) VALUES (?)'
    const values = [
      req.body.name,
      req.body.uid,
      req.body.pwd,
      req.body.create_account
  ]
  db.query(sql ,[values] ,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
  }else if(req.body.mode ==='login'){
    const sql = 'SELECT * FROM user'
   
    db.query(sql,(err,data)=>{
      if(err) return res.json(err)
      
       data.filter(item=>{
        if(item.u_id===req.body.uid){
          item.state  = true
          return  select = item
        }
      })
        console.log(select,'로그인')
        if(select==undefined){
          select = {text:'아이디, 비밀번호 불일치',state:false}
              return    res.json(select) 
                 }else{
                  return  res.json(select)
          }
  })
  }
})

// 데이터베이스에 현재테이블 3개 있음  user review cart
// 각컬럼마다 필수값은 다르며  user의 u_id만 모든 테이블 공통정보임 

app.post('/review',(req,res)=>{
  if(req.body.mode === 'get'){
    const sql = 'SELECT * FROM review'
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  }else if(req.body.mode === 'add'){
    const sql = 'INSERT INTO review (`title`, `content`, `u_id`,`star`,`totalstar`) VALUES (?)'
    const values = [
      req.body.title,
        req.body.content,
        req.body.uid,
        req.body.star,
        req.body.totalstar
  
    ]
    db.query(sql,[values], (err,data)=>{
      if(err) return res.json(err)
      return res.json(data)
    }) 
  }

})
// 데이터베이스 키와 일치해야만 지워짐;;;  엄청  귀찮네

app.post('/dele', (req,res)=>{

  if(req.body.mode == 'delete'){
    const sql = 'DELETE FROM user WHERE u_id=?'
    const u_id = req.body.uid
    db.query(sql ,[u_id] ,(err,data)=>{
      if(err) return res.json(err)
      return res.json(data)
    })
  }

})





http.createServer(app).listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});