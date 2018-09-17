console.log('aa!!')
//轮播2
function $id(id){
    return document.getElementById(id);
}

var obtnLeft=$id("left");
var obtnRight=$id("rightbtn");
var list=$id("imgs").children;
var arr=$id("arr");
var box=$id("box");
var target=0;
obtnRight.onclick=function(){
    if(target==0){
        target=0
    }else{
        target+=960;
    }
    startMove($id("imgs"), target, "left")
}

obtnLeft.onclick=function(){
    if(target==-960){
        target=-960;
    }else{
        target-=960;
    }
    startMove($id("imgs"), target, "left")
}
function startMove(obj, target, attr){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var current=0;
        if(current=="opacity"){
            current=getStyle(obj,attr)*100;
        }else{
            current=parseInt(getStyle(obj,attr));
        }
        
        var speed=(target-current)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(target==current){
            clearInterval(obj.timer);
        }else{
            if(current=="opacity"){
                obj.style[attr]=(current+speed)/100;
            }else{
                obj.style[attr]=current+speed+"px";
            }
        }
    },30)
}

function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}