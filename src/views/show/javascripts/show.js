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
// $("#mm").siblings().css("border","#006699 3px solid") 
	//鼠标移入到底部小图时，显示对应的中图和大图
	$("#bottom li").mouseover(function(){
		var index = $(this).index();
		$("#small img").eq(index).show().siblings("img").hide();
		$("#big img").eq(index).show().siblings().hide();
	})
	//鼠标移入移出small盒子  显示或隐藏大图显示区big  和 mask
	$("#small").on({
		"mouseover":function(){
			$("#big").show();
			$("#mask").show();
		},
		"mouseout":function(){
			$("#big").hide();
			$("#mask").hide();
		},
		"mousemove":function(evt){
			var e = evt || event;
			var x = e.clientX - $("#small").offset().left - $("#mask").width()/2;
			var y = e.clientY - $("#small").offset().top - $("#mask").height()/2;
			
			var mx = $("#small").width()  - $("#mask").width();
			var my = $("#small").height()  - $("#mask").height();
			
			//边界处理
			x = x<=0 ? 0 : x>=mx ? mx : x;
			y = y<=0 ? 0 : y>=my ? my : y;
			
			//大图宽度/小图宽度 = 大图偏移 / mask的偏移
			var bigImageX = -x * $(".bigImage").width() / $("#small").width();
			var bigImageY = -y * $(".bigImage").height() / $("#small").height();
			$("#mask").css({
				"left":x + "px",
				"top":y+"px"
			})
			
			$(".bigImage").css({
				"left" : bigImageX+"px",
				"top" : bigImageY+"px"
			})
		}
	})