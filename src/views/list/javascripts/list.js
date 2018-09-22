
require('./modules/a')

console.log(' this is list ')
function $id(id){
    return document.getElementById(id);
}
window.onload = function(){
    new CheckCard().init();
}
function CheckCard(){
    this.alist = document.getElementsByClassName("check");
    this.clist = document.getElementsByClassName("contener");
    this.init = function(){
        for(let i = 0;i < this.alist.length;i ++){
            this.alist[i].onmouseenter = function(){
                this.clear();
				this.show(i);
				this.hasborder(i);
				this.hasbg(i);
				
            }.bind(this)
            this.alist[i].onmouseleave = function(){
                this.clear();
				this.hide(i);
				this.bordernone(i);
				this.nobg(i);
            }.bind(this)
            this.clist[i].onmouseenter = function(){
                this.clear();
                this.show(i);
            }.bind(this)
            this.clist[i].onmouseleave = function(){
                this.clear();
                this.hide(i);
            }.bind(this)
        }
    }
    this.clear =function(){
        for(var i = 0;i < this.alist.length;i ++){
            this.clist[i].style.display = "none";
        }
    }
    this.show = function(index){
        this.clist[index].style.display = "block";
    }
    this.hide = function(index){
        this.clist[index].style.display = "none";
	}
	//导航边框样式
	this.hasborder=function(index){
		// ../../../images/Pandora_Logo.svg
		// border-left: 1px solid transparent;
    	// border-right: 1px solid transparent;
    	// border-top: 1px solid transparent;
		this.alist[index].style.borderLeft="1px solid #d2cfd3";
		this.alist[index].style.borderRight="1px solid #d2cfd3";
		this.alist[index].style.borderTop="1px solid #d2cfd3";
	}
	//去导航边框样式
	this.bordernone=function(index){
		// ../../../images/Pandora_Logo.svg
		// border-left: 1px solid transparent;
    	// border-right: 1px solid transparent;
    	// border-top: 1px solid transparent;
		this.alist[index].style.borderLeft="1px solid transparent";
		this.alist[index].style.borderRight="1px solid transparent";
		this.alist[index].style.borderTop="1px solid transparent";
	}
	//li背景图
	this.hasbg=function(index){
		this.alist[index].style.backgroundImage="url(../../../images/arrow-down.png);"
		// this.alist[index].style.background="url(../../../images/arrow-down.png) no-repeat center 39px";
	}
	//去li背景图
	this.nobg=function(index){
		this.alist[index].style.backgroundImage="";
	}
}
function $id(id){
	return document.getElementById(id);
}

$id("searchimg").onmouseenter=function(){
	$id("q").style.display="block";
	$id("i").style.display="block";
	this.style.display="none";
}


$id("i").onclick=function(){
	$id("q").style.display="none";
	this.style.display="none";
	setTimeout(function(){
		$id("searchimg").style.display="block";
	},500)
}

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
