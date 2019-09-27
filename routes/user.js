const express = require('express');
// 引入连接模块
var pool = require('../Pool');
// 创建接口器
var router = express.Router();
// 添加注册接口
router.post('/reg',function(req,res){
    var obj = req.body;
    // 判断注册信息是否为空
    var i = 100;
    for(var key in obj){
        if(!obj[key]){
            i++;
            res.send({code:i,msg:key + ' 为空请重新填写'});
            return;
        function checkUname(str){
            var re = /^[a-zA-z]\w{3,15}$/;
            if(re.test(str)){
                alert('正确');
            }
            else{alert("错误")}
        }}
    }
    // 执行sql语句
    pool.query('INSERT INTO xx_user SET ?',[obj],function(err,result){
        if(err) throw err;
        // 如果数据插入,打印插入成功
        if(result.affectedRows>0){
            res.send({code:200,msg:'注册成功'})
        }else{res.send({code:201,msg:'注册失败'})}
    })
})
// 添加登录接口
router.post("/post_login",(req,res)=>{
    //    获取前台数据
     var $uname = req.body.uname;
     var $upwd  = req.body.upwd;
     if(!$uname){
         res.send("用户名为空");
         return;
    }
     if(!$upwd){
         res.send("密码为空");
         return;
     }
    // 查询数据库
    var sql = "SELECT * FROM xz_user where uname=? AND upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(result.length>0){
              res.send("1");
        }else{
          res.send("0");
        };
    });
    
    });
// 添加检索用户接口
router.post('/datail',function(req,res){
    // 获取数据
    var obj = req.body;
    // 验证数据是否为空
    if(!obj.uid){res.send({code:401,mgs:'输入的数据为空'})
               return;}
    // 执行SQL查询语句
    pool.query('SELECT * FROM xx_user WHERE uid=?',function(err,result){
    if(err) throw err;
    res.send(result);
    }
)});
// 修改用户接口
router.post('/update',function(req,res){
    // 获取用户信息
    var obj = req.body;
    // 检测是否为空
    var i = 400;
    for(var key in obj){
       if(!obj[key]){
           i++;
           res.send({code:i,mgs:key + '  为空,请重新填写'})
           return;
       } 
       var uid = obj.uid;
       // 取出用户编号
       delete obj.uid;
       pool.query('UPDATE xx_user SET ? WHERE uid=?',[obj.uid],function(err,result){
           if(err) throw err;
          if(result.affectedRows>0){
              res.send({code:200,msg:'修改成功'})
          }else{res.send({code:201,msg:'修改失败,请重试'})
        return;}
       })
    }})
// 分页查询用户接口
router.post('/list',function(req,res){
    // 获取数据
    var obj = req.query;
    // 如果为空设置默认值
    var count = obj.count;
    var pno = obj.pno;
    // 判断是否为空
    if(!count){
        count = 2;
              }
    if(!pno){
        pnp = 2;
            }
    // 转为整型
    count = parseInt(count);
    pno = parseInt(pno);
    // 计算开始的值=(页码-1)乘大小
    var start = (pno-1)*count;
    //  执行sql语句
    pool.query('SELECT * FROM xx_user LIMIT ?,?',[start,count],function(err,result){
        if(err) throw err;
        res.send(result);
    })
})
// 删除用户接口
router.post('/delete',function(req,res){
    // 获取数据
    var obj = req.body;
    // 验证为空
    if(!obj.affectedRows){
        res.send({code:200,msg:"牛逼删除了"})
    }else{res.send({code:201,mgs:'不行还得继续'})}
    return;
})

module.exports = router;


































































