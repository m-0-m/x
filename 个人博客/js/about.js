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