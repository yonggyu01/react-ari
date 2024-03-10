const http = require("http");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json())
const port = 8000;

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
});
res.sendFile(path.join(__dirname, "build", "index.html"));
});




//여기서 데이터베이스랑 연동 및 로그인 데이터 구현해보기
app.post('/login',(req,res)=>{
  
})



http.createServer(app).listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});