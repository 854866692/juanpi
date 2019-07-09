const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
/*
//添加路由
router.get("/v1/login/:uname&:upwd",(req,res)=>{
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  pool.query("SELECT * FROM xz_user WHERE uname=? AND upwd=?",[$uname,$upwd],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
//2.userlist 查 get 不需要参数
router.get("/v1/userlist",(req,res)=>{
  var sql="select * from xz_user";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  });
});
//3.根据uid删除用户
router.delete("/v1/deluser/:uid",(req,res)=>{
  var $uid=req.params.uid;
  var sql="delete from xz_user where uid=?";
  pool.query(sql,[$uid],(err,result)=>{
    if(err)throw err;
    res.send("1");
  });
});
//3.1重新写一遍
router.delete("/v1/deluser_1/:uid",(req,res)=>{
  var $uid=req.params.uid;
  var sql="delete from xz_user where uid=?";
  pool.query(sql,[$uid],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
//4.根据uid修改
router.get("/v1/queryuser/:uid",(req,res)=>{
  var $uid=req.params.uid;
  var sql="select * from xz_user where uid=?";
  pool.query(sql,[$uid],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  });
});
//4.1重写一遍
router.get("/v1/queryuser_1/:uid",(req,res)=>{
  var $uid=req.params.uid;
  var sql="select * from xz_user where uid=?";
  pool.query(sql,[$uid],(err,result)=>{
    if(err)throw err;
    if(result.length=="1"){
      res.send(result);
    }else{
      res.send("0");
    }
  });
});
//5.修改用户信息的接口 put
//put 方法基本上和post一样
router.put("/v1/updateuser",(req,res)=>{
  //1.接收前端传来的数据
  var $uid=req.body.uid;
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  var $phone=req.body.phone;
  var $email=req.body.email;
  var $user_name=req.body.user_name;
  var $gender=req.body.gender;
  //2.写sql语句
  var sql="update xz_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?";
  pool.query(sql,[$uname,$upwd,$phone,$email,$user_name,$gender,$uid],(err,result)=>{
    if(err)throw err;
//    console.log(result);
    res.send("1");
  });
});*/
//6.注册模块
router.post("/v1/reg",(req,res)=>{
  var obj=req.body;
  var sql="insert into xz_user set ?";
  pool.query(sql,[obj],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
//7.注册验证模块
router.get("/v1/reg_check/:uname",(req,res)=>{
  var $uname=req.params.uname;
  var sql="select * from xz_user where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0");
    }
  });
});
//出路由器对象
module.exports=router;