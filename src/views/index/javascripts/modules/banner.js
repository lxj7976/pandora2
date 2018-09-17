
console.log('banner')
function $id(id){
    return document.getElementById(id);
}
//轮播图效果
//按钮	
var oBtnRound=$id("round");
	var oBtnSingle=$id("single");
	var oBtnPrev=$id("prev");
	var oBtnNext=$id("next");
	var oDivOrder=$id("order");
	var oDivInfo=$id("info");
	var oImg=$id("picture");
	var arrPic=["../../../images/lunbo1.jpg", "../../../images/lunbo2.jpg"];
	var arrInfo=["贵族童话系列全新上市", "值得拥有的PANDORA经典系列"];
	var arrTxt=["立即选购", "立即选购"];
	var index=0;
	var flag=true;
	//第一张图片
	function imgShow(index){
		oImg.src=arrPic[index];
		oDivOrder.innerHTML=arrTxt[index];
        oDivInfo.innerHTML=arrInfo[index];
        oDivInfo.style.fontSize="30px";
        oDivInfo.style.paddingTop="40px";
        oDivInfo.style.paddingBottom="20px";
        oDivInfo.style.color="#333";
        oDivInfo.style.fontFamily="Optima LT W01 Roman";
        oDivInfo.style.fontWeight="400";
        oDivInfo.style.letterSpacing=".1em";
        oDivOrder.style.height="50px";
        oDivOrder.style.lineHeight="50px";
        oDivOrder.style.width="260px";
        oDivOrder.style.fontSize="13px";
        oDivOrder.style.border="1px solid #333";
        oDivOrder.style.textAlign="center";
        oDivOrder.style.margin="0 auto";
	}
	imgShow(index);
	
	//下一张
	oBtnNext.onclick=function(){
		index++;
		if(index==arrPic.length&&flag){
			index=0;
		}else if(index==arrPic.length&&!flag){
			index=arrPic.length-1;
		}
		imgShow(index);
	}
	
	//上一页
	oBtnPrev.onclick=function(){
		index--;
		if(index==-1&&flag){
			index=arrPic.length-1;
		}else if(index==-1&&!flag){
			index=0;
		}
		imgShow(index);
	}
	
	