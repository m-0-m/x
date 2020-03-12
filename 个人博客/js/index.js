
window.onload = function (){
	
	//点击导航条背景颜色改变效果
	var aNav = document.querySelectorAll('#nav .nav-list li a');
	
	for( var i = 0; i < aNav.length; i ++ ){
		aNav[i].onclick = function () {
			for( var i = 0; i < aNav.length; i ++ ){
				aNav[i].className = "";
			}
			this.className = "back66d";
		};
	}
	
	//轮播图效果
	var aImg = document.querySelectorAll('#banner .banner-left .bannerImg img'),
		aImgBtn = document.querySelectorAll('.banner-left ul li a img'),
		oImgBtnBox = document.getElementById('imgBtnBox');
	
	for( var i = 0; i < aImg.length; i++ ){
		aImgBtn[i].index = i;
		aImgBtn[i].onmouseover = function (){
			oImgBtnBox.style.top = this.index*60+6+'px';
			oImgBtnBox.style.transition = '1s';
			for( var i = 0; i < aImg.length; i++ ){
				aImg[i].style.zIndex = 0;
			}
			aImg[this.index].style.zIndex = 1;
		};
	}
	
	//鼠标触碰方框翻转效果
	var aMainNavBox = document.querySelectorAll('.main-nav .main-nav-li'),
		aMainNavA = document.querySelectorAll('.main-nav .main-nav-li a');
	
	for( var i = 0; i < aMainNavBox.length; i++ ){
		aMainNavBox[i].index = i;
		aMainNavBox[i].onmouseover = function () {
			aMainNavA[this.index].style.transform  = "rotate(360deg)";
		};
		aMainNavBox[i].onmouseout = function () {		
			aMainNavA[this.index].style.transform = "rotate(0deg)";
		};
	}
	
	//鼠标点击切换列表效果
	var aHotTitle = document.querySelectorAll(".hot-recommend-title .hot-recommend-title-li"),
		oHotList = document.querySelector(".hot-recommend-box .hot-recommend-list");
		
	for( var i = 0; i < aHotTitle.length; i++ ){
		aHotTitle[i].index = i;
		aHotTitle[i].onclick = function () {
			oHotList.style.marginLeft = this.index * (-300) + 'px';
			for( var i = 0; i < aHotTitle.length; i++ ){
				aHotTitle[i].className = "hot-recommend-title-li";
			}
			this.className = "hot-recommend-title-li coloBlu-borBtu";
		};
	}
	
	//回到顶部按钮消失效果
	var nWindTop,
	 	oFixedSidebar = document.getElementById("fixedSidebar"),
		oReturnTop = document.querySelector('#fixedSidebar ul li');
	
	function newWindTop(){
		nWindTop = document.documentElement.scrollTop || document.body.scrollTop; 
		if( nWindTop == 0 ){
			oReturnTop.style.opacity = 0;
		}else{
			oReturnTop.style.opacity= 1;
		}
	}
	setInterval(newWindTop,10);
	
	 oReturnTop.onclick = function () {
	 	document.documentElement.scrollTop = 0;

	 };
}
