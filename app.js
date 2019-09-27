

const express = require("express");
const bodyParser = require("body-parser"); 


// 导入用户模块路由器
const user_router = require("./routes/user");


const app = express();
app.listen(8080,()=>{
    console.log('http://localhost:8080');
});


// 日志中间件
app.use((req,res,next)=>{
    console.log(`HOME : ${new Date().toLocaleString()} ${req.method} ${req.url}`);
    next();
});
// 托管静态资源
app.use(express.static('public'));
// 解析 post 数据的 中间件
app.use(bodyParser.urlencoded({extended:false}));


// 挂载 用户模块路由器
app.use("/user",user_router);
