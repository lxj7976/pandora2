
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


// //左边选项
// //委托  添加 
// $(".left").delegate(".tu","click",function(){
// 	alert();
// 	$(".list").css("display","block");	
	
// })



//渲染数据
// $(function () {
// 	init();
// 	function init() { // 初始化函数
// 		get_list_goods(render_goods_in_list); // 获取数据
// 		// add_event_listener(); // 给元素们绑定事件
// 	}
// 	function get_list_goods(callback) { // 获取列表中商品数据的
// 		$.ajax({
// 			url: 'data.json',
			
// 			success (res) {
// 				if (res.code == 200) {
// 					callback(res.data); // 将数据交由回调函数处理
// 				} else {
// 					alert('接口获取失败');
// 				}
// 			},
// 			error () {
// 				alert('接口获取失败');
// 			}
// 		})
// 	}

// 	function render_goods_in_list(data) { // 能接收到需要渲染的数据，作用是渲染数据
// 		var str = ''
// 		data.forEach(item => {
// 			str += good_item_template(item);
// 		});
// 		$('.good-list').html(str);
// 	}

// 	function good_item_template(good) { // 接收到对应的商品数据，返回拼接好的模板
// 		let { good_id, good_type, good_name, good_price, good_image } = good;
// 		return `
// 		<tr>
// 			<td>
// 				<div class="content" data="${good_id}">
// 					<p class="new-product">${good_type}</p>
// 					<img src="${good_image}" alt="">
// 					<p class="name">${good_name}</p>
// 					<p class="price">${good_price}</p>
// 				</div>
// 			</td>
// 			<td>
// 				<div class="content" data="${good_id}">
// 					<p class="new-product">${good_type}</p>
// 					<img src="${good_image}" alt="">
// 					<p class="name">${good_name}</p>
// 					<p class="price">${good_price}</p>
// 				</div>
// 			</td>
// 			<td>
// 				<div class="content" data="${good_id}">
// 					<p class="new-product">${good_type}</p>
// 					<img src="${good_image}" alt="">
// 					<p class="name">${good_name}</p>
// 					<p class="price">${good_price}</p>
// 				</div>
// 			</td>
// 		</tr>
// 		`
// 	}


//渲染数据
$(function () {
	init();
	function init() { // 初始化函数
		get_list_goods(render_goods_in_list); // 获取数据
		// add_event_listener(); // 给元素们绑定事件
	}
	function get_list_goods(callback) { // 获取列表中商品数据的
		$.ajax({
			url: 'data.json',
			
			success (res) {
				if (res.code == 200) {
					callback(res.data); // 将数据交由回调函数处理
				} else {
					alert('接口获取失败');
				}
			},
			error () {
				alert('接口获取失败');
			}
		})
	}

	function render_goods_in_list(data) { // 能接收到需要渲染的数据，作用是渲染数据
		var str = ''
		data.forEach(item => {
			str += good_item_template(item);
		});
		$('.good-list').html(str);
	}

	function good_item_template(good) { // 接收到对应的商品数据，返回拼接好的模板
		let { good_id, good_type, good_name, good_price, good_image } = good;
		return `
			<li class="content">
			<p class="new-product">${good_type}</p>
				<img src="${good_image}" alt="">
				<p class="name">${good_name}</p>
				<p class="price">${good_price}</p>
				<a id="quick" href="" style="display:none;" title="闪亮泪滴耳钉">快速查看</a>
			</li>
		`
	}

	// function add_event_listener() { // 在这里为大部分dom绑定事件，并且采用事件委托的方式为未来元素绑定事件
		
	// 	$('.good-list').on('click', '.add-btn', function () { // 增加数量的按钮动作
	// 		let num_input = $(this).siblings('.number');
	// 		let value = num_input.val();
	// 		num_input.val(++value);
	// 	})
	// 	$('.good-list').on('click', '.reduce-btn', function () { // 减少数量的按钮动作
	// 		let num_input = $(this).siblings('.number');
	// 		let value = num_input.val();
	// 		if ( value <= 1 ) return false;
	// 		num_input.val(--value);
	// 	})

	// 	$('.good-list').on('click', '.buy-btn', function () { // 加入购物车按钮的动作
	// 		// 判断是否登录
	// 		check_is_login( () => {
	// 			// 加入购物车
	// 			let good = get_good_by_btn.call(this); // 对应的商品
	// 			car_util.save_good_in_car(good, {
	// 				success () {
	// 					alert('加入成功')
	// 				}
	// 			}); // 加入购物车
	// 		})
	// 	})
	// }

	// function get_good_by_btn() { // 获取到加入购物车按钮所对应的商品信息
	// 	let $item = $(this).parents('.good-item')
	// 	return {
	// 		good_id: $item.data('id'),
	// 		good_name: $item.find('.name').html(),
	// 		good_price: $item.find('.price').html(),
	// 		good_num: $item.find('.number').val() * 1,
	// 		good_image: $item.find('.good-img img').prop('src')
	// 	}
	// }

	/*
	*   check_is_login 检查是否登录
	*   @params success function required 判断登录了之后执行
	*   @params fail function  判断没有登录了之后执行
	*/
	// function check_is_login(success, fail) {
	// 	let user_info = $.cookie('user_info');
	// 	// if ( user_info ) { // 登录了
	// 	if ( true ) { // 因为没有登录功能，所以默认已经登录了
	// 		success(user_info);
	// 	}else { // 没有登录
	// 		if ( fail ) {
	// 			fail();
	// 		}else {
	// 			alert('请登陆后操作')
	// 		}
	// 	}
	// }
})

