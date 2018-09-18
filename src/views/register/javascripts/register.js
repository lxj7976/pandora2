function $id(id){
    return document.getElementById(id);
}

//验证邮箱
var flagEmail=null;
$id("email").onblur=function(){
    var Email=$id("email").value;
    var regEmail = /^[a-z0-9]+@\w+\.\w+$/;
    if(this.value==""){
        $id("s7").innerHTML="必填字段";
        flagEmail=false;
    }else if(regEmail.test(Email)){
        $id("s7").innerHTML="";
        flagEmail=true;
    }else{
        $id("s7").innerHTML="电子邮箱地址无效";
        flagEmail=false;
    }
}
//验证密码
$id("pwd").onblur=function(e){
    //定义三个正则表示包含数字 字母 特殊字符
    var _regNum=/\d+/;
    var _regLetter=/[a-z]+/i;
    var _regChar=/[^0-9a-z]+/i;
    var str=this.value;
    
    if(str.length<5){
        $id("s3").innerHTML="密码不满足复杂度要求";
    }else{
        $id("s3").innerHTML="";
    }
}
//确认密码
var flagQpwd=null;
$id("qpwd").onblur=function(){
    var qpwd=$id("qpwd").value;
    if(!qpwd==""){
    if(qpwd==$id("pwd").value){
            $id("s4").style.display="none";
            $id("s4").innerHTML="";
            flagQpwd=true;
        }else{
            $id("s4").innerHTML="密码不一致";
            flagQpwd=false;
        }
    }
   
}

var fm=document.querySelector("form");
fm.onsubmit=function(){
    if(!flagQpwd){
        return false;
    }else{
        alert("创建成功");
    }
}
var saveBtn = document.querySelector("#submit");
var txtName = document.querySelector("#email");
var txtPwd = document.querySelector("#pwd");
var arr = []; //[{},{},{},{},...] 
saveBtn.onclick = function(){
    var strName = txtName.value;
    var strPwd = txtPwd.value;
    //将用户名和密码作为整体对象 存入到数组中
    arr.push( {
        "username":strName,
        "userpwd":strPwd
    } )
    
    JSON.stringify()
    //将数组存入到cookie中
    var now = new Date();
	now.setDate( now.getDate() + 10 );
    document.cookie = "userlist=" + JSON.stringify( arr )+";expires="+now + ";Path=" + escape("/");
    // location.href = "/list/list.html";
    // if(flagEmail&&flagQpwd){
    //     location.href = "/list/list.html";
    // }
}





// //存cookie的函数
// function setCookie(key,value,days){
// 	var now = new Date();
// 	now.setTime(now.getTime() + days*24*60*60*1000 ) 
// 	document.cookie=key+"="+value + ";expires="+now+";Path="+escape("/");
// }
// //cookie存数据
// var arr=[];
// $id("submit").click(function(){
//     var strName=$id("email").value();
//     var strPwd=$id("pwd").value();
//     arr.push({
//         "username":strName,
//         "userpwd":strPwd
//     })
//    setCookie("userlist",JSON.stringify(arr),2);
   
//    console.log(arr);
//    console.log("userlist");
// })


