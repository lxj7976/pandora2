
require('./modules/a')

console.log(' this is list ')
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
    }
}
//验证密码
$id("pwd").onblur=function(e){
    //定义三个正则表示包含数字 字母 特殊字符
    var _regNum=/\d+/;
    var _regLetter=/[a-z]+/i;
    var _regChar=/[^0-9a-z]+/i;
    var str=this.value;
    
    if(this.value==""){
        $id("s3").innerHTML="必填字段";
    }
}
var loginBtn=document.getElementById("submit");
var flaglogin=null;
loginBtn.onclick = function(){
    //获取cookie
    var str = getCookie("userlist");
    var arr = JSON.parse( str );
    var cookieName = arr[0].username;
    var cookiePwd = arr[0].userpwd;
    //获取用户输入的用户名和密码 :
    var tname = $id("email").value;
    var tpwd = $id("pwd").value;
    console.log(cookieName);
    console.log(cookiePwd);

    if( cookieName == tname && cookiePwd == tpwd ){
        alert("登录成功");
        location.href="page.html";//无法实现跳转
    }else{
        alert("密码或账户无效");
        $id("s4").innerHTML="密码或账户无效";
    }
}



function getCookie(key){
    var str = document.cookie;
    if( str ){ //如果cookie存在  根据key取对应的值
        str = str.replace( /\s/g ,"");//去掉cookie中的空格
        var arr = str.split(";");//将字符串拆成数组
        for( var i = 0 ; i < arr.length ; i++ ){
            var item = arr[i].split("=");
            if( item[0] == key ){
                return item[1];
            }
        }
        //循环结束后 如果没有找到对应的key   返回""
        return "";
    }
    //cookie 不存在  返回""
    return "";
}
