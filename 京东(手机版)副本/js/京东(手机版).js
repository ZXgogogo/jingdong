var iconyuancha=document.getElementById('icon-yuancha');
var redbag=document.getElementById('redbag');
touch.on(iconyuancha,'touchstart',function(ev){
	redbag.style.display='none';
});
//第一个轮播图
var swiper = new Swiper('#bigbox .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
        loop:true,
//      autoplayDisableOnInteraction : false,
        //图片之间的间距
//      spaceBetween: 30,
    });
//第二个轮播图
 var swiper1 = new Swiper('#swiper-container1 .swiper-container', {
 		//下面圆点按钮
//      pagination: '.swiper-pagination',
        //下面圆点按钮
//      paginationClickable: true,
        //页面中显示的div数
        slidesPerView: 3.2,
        //相邻div之间的间距，单位为px
//      spaceBetween: 30,
    });
//第三个轮播图
  var swiper2 = new Swiper('#swiper-container2 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
        loop:true,
//      autoplayDisableOnInteraction : false,
        //图片之间的间距
//      spaceBetween: 30,
    });  
    //第四个轮播图
  var swiper2 = new Swiper('#swiper-container3 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
        loop:true,
//      autoplayDisableOnInteraction : false,
        //图片之间的间距
//      spaceBetween: 30,
    });  
 //第五个轮播图
  var swiper3 = new Swiper('#swiper-container4 .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:2000,
        loop:true,
//      autoplayDisableOnInteraction : false,
        //图片之间的间距
//      spaceBetween: 30,
    });  
//倒计时
//倒计时时间差值-毫秒（一个小时）
var  cDate=3600000;		
var timer=null;		
timGo();
function timGo(){
 var timer=setInterval(function(){
	var times=document.getElementById('time');
	
	var spans=times.getElementsByTagName('span');
	
	var hours=Math.floor(cDate/1000/60/60%24);//小时

	var mins=Math.floor(cDate/1000/60%60);//分钟

	var secs=Math.floor(cDate/1000%60);//秒数
	
	spans[1].innerHTML=bl(hours);
	spans[2].innerHTML=bl(mins);
	spans[3].innerHTML=bl(secs);
	 cDate=cDate-2;
},1)
			
}
//个位数，十位补0	
function bl(b){
	return b<10?"0"+b:b;
}
		
//搜索框
var search=document.getElementById('search');

window.onscroll=function(){
		
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		console.log(scrollTop);

		if (scrollTop<200) {
			search.style.backgroundColor='rgba(220,40,50,'+scrollTop/250+')';
			console.log(search.style.backgroundColor)
		}else {
			search.style.backgroundColor='rgba(220,40,50,0.8)';
		}
}




