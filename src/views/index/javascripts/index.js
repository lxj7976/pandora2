

// index中要放banner和header

// 引入banner 因为banner并没有暴露一些东西给index用，所以就用下面的方法引入进来就可以了
require('./modules/banner')
require('./modules/header')
console.log('index')
/*function $id(id){
		return document.getElementById(id);
	}
$id("i").onclick=function(){
	
	alert();
}*/
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


//楼梯
var flag = true;//开关边框控制滚动条是否被触发  假设值为true时  可以触发滚动条
	//点击左侧楼层号  除了 top
	$("#LoutiNav li:not(:last)").click(function(){
		flag = false;
		//当前点击的span的文字红色  其余默认
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");
			   
		//根据当前操作的楼层号的下标  找到对应楼层距离文档顶部的 距离 
		var topHeight = $(".Louti").eq( $(this).index() ).offset().top;
		
		//设置滚动条滚走的距离 为  topHeight
		$("body,html").stop().animate({"scrollTop":topHeight},1000,function(){
			flag = true; //点击事件动画完成后，将开关变量改变成true，让scroll滚动条事件可以继续执行
		})
	})
	
	//点击楼层号的最后一个按钮   滚动条回到顶部
	$(".last").click(function(){
		flag = false;
		$("body,html").animate({"scrollTop":0},1000,function(){
			flag = true;
		});
		$("#LoutiNav li:not(:last)").removeClass("active");
	})
	//操作滚动条
	$(window).scroll(function(){
		if(flag){
			
			//获取滚动条滚走距离
			var sTop = $(document).scrollTop();
			
			var $floor = $(".Louti").filter(function(){
				return Math.abs( $(this).offset().top - sTop )   < $(this).height()/2;
			})
	
			//根据楼层的索引  找到对应的楼层号   设置样式
			$("#LoutiNav li").eq( $floor.index() )
							 .find("span")
							 .addClass("active")
							 .end()
							 .siblings()
							 .find("span")
							 .removeClass("active");
							 
		}
	})