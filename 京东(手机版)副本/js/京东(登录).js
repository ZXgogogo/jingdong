//京东登录
//获取元素
var inputs=youxiang.getElementsByTagName('input');
var icon=document.getElementsByTagName('i');
//聚焦
for (i=0;i<inputs.length-1;i++) {
	inputs[i].index=i
	inputs[i].onfocus=function(){
		for (i=0;i<icon.length;i++) {
			icon[i].style.display='none';
		} 
		icon[this.index].style.display='block';	
	}
}
//失焦
var timer=null;
for (i=0;i<inputs.length-1;i++) {
	inputs[i].index1=i
	inputs[i].onblur=function(){	
		var a=this.index1;
		//定时器也是一种函数，所以不能直接用this.index1，因为this指向不明，显示未定义
		timer=setTimeout(function(){ 
		icon[a].style.display='none';
		},200);		
	}
}
//点击清除内容
for (i=0;i<icon.length;i++) {
	icon[i].index2=i;
	icon[i].onclick=function(e){
		var ev=e||event;
		inputs[this.index2].value='';
		this.style.display='none';
	}
}

//隐藏按钮
var yuan=document.getElementsByClassName('yuan')[0];
var a=0;
yuan.onclick=function(e){
	var ev=e||event;
	a++;
	if(a==1){
		yuan.style.left=1.9375+'rem';
	}
	if(a==2){
		yuan.style.left=-0.0625+'rem';
		a=0;
	}
}
//登录按钮以下部分
//免登陆
var noland=document.getElementsByClassName('noland')[0];
var imgland=noland.getElementsByTagName('img')[0];
var from=document.getElementsByClassName('from')[0];
var bool=true;
var c=0;
noland.onclick=function(){
	c++;
	if(c<=1){
		bool=false;
	}
	
	if(bool){
		imgland.src='img/gouhong.png';
		bool=false;
	}else{
		imgland.src='img/gouhui.png';
		bool=true
	}	
}



//cookie
//判断上次浏览器的关闭时Cookie的状态，恢复关闭之前的状态
if(getCookie('user')){
	inputs[0].value=getCookie('user');
	bool=true;
}
if (getCookie("pass")) {
	inputs[1].value=getCookie("pass");
	bool=true;
}	
//bool真假决定上面判断是否执行
from.onsubmit=function(){
	if(bool){
		setCookie("user",inputs[0].value,30);
		setCookie("pass",inputs[1].value,30);
	}else{
		removeCookie("user",".",-1);
		removeCookie("pass",".",-1);
	}				
}
//创建cookie
function setCookie(name,value,timer){
	//创建时间对象
	var date=new Date();
	//获取时间
	var day=date.getDate();
	//设置过期时间
	date.setDate(day+timer);
	document.cookie=name+'='+value+';expires='+date;
}
setCookie("user","somebody",15);
//获取cookie
function getCookie(name){
	var ck=document.cookie;
	var arr=ck.split('; ');
	for (i=0;i<arr.length;i++) {
		arr2=arr[i].split('=');
		if(arr2[0]==name){
			return arr2[1];
		}
	}
}

//删除cookie
function removeCookie(name){
	setCookie(name,'.',-1)
}

