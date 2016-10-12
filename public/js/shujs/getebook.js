
try  {
	document.domain='dangdang.com';
}
catch(err) {}

//免费书：EBOOKCART.ADDCartWin('1900198295',this,{x:0,y:0},{});
//积分兑换：EBOOKCART.ADDCartWin('1900198295',this,{x:0,y:0},{},'points');
//一键支付：EBOOKCART.ADDCartWin('1900198295',this,{x:0,y:0},{},'onekey');
//其中1900198295为productId，其他参数为固定值

var EBOOKCART = {
	ebook_domain:'e.dangdang.com',
	free:{url:'/ebook/getFreeEbookValidate.do',tag:0},
	points:{url:'/ebook/checkPointsExchange.do',tag:0},
	onekey:{url:'/ebook/checkOneKeyPay.do',tag:0}
};

EBOOKCART.getPosXY = function (obj){
	var x=0,y=0;
	if (obj == null) {
		var toppx=parseInt((jQuery(window).height()-184)/2)+jQuery(document).scrollTop();
		var leftpx=parseInt((jQuery(window).width()-375)/2);
		return {
			x:leftpx,
			y:toppx
		};
	} 

	if(typeof obj != 'object'){
		return {
			x:0,
			y:0
		};   
	}
	var sel = obj;
	while(sel){
		x = x+sel.offsetLeft;
		y = y+sel.offsetTop;
		sel=sel.offsetParent;
	}
	return {
		x:x,
		y:y
	};
};
EBOOKCART.append=function(a,b) {
	if(typeof b == 'string') { 
		a.innerHTML += b; 
	} else {
		a.appendChild(b);
	}
};
EBOOKCART.ADDCartWin =function (p_ids,parentObj,Pos,options,type){
	if (!type) {
		type = 'free';
	}
	var opt = this[type];
	var r = Math.random();
	var src = "http://"+this.ebook_domain+opt.url+"?productId="+p_ids + "&r=" + r;
	if (opt.tag == 1) {
		window.open(src);
		return;
	}
	var EBOOKCART_PAGE_TIP_ID = 'ebook_tip_id_' + type;
	var EBOOKCART_PAGE_TIP_IFREAME_ID = 'ebook_tip_iframe_id_' + type;
	var ParentXY = this.getPosXY(parentObj);
	var oDiv = null,oIframe=null;
	oDiv = document.getElementById(EBOOKCART_PAGE_TIP_ID);
	if(!oDiv){
		oDiv = document.createElement('DIV');
		oDiv.id = EBOOKCART_PAGE_TIP_ID;
		oDiv.setAttribute('name', EBOOKCART_PAGE_TIP_ID);
		oDiv.style.backgroundColor = '#fff';
		oDiv.style.zIndex = 10000;
		oDiv.style.display = 'none';
		oDiv.style.position = 'absolute';
		this.append(document.body,oDiv);
	}
	var oiframes = document.getElementById(EBOOKCART_PAGE_TIP_ID).getElementsByTagName('IFRAME');
	if(oiframes.length==0){
		var iframeHTML = document.createElement('IFRAME');
		iframeHTML.id = EBOOKCART_PAGE_TIP_IFREAME_ID;
		iframeHTML.setAttribute('name', EBOOKCART_PAGE_TIP_IFREAME_ID);
		iframeHTML.src = '';
		iframeHTML.scrolling = 'no';
		iframeHTML.frameBorder = 0;
		iframeHTML.allowTransparency = true;
		iframeHTML.style.width = '320px';
		
		this.append(oDiv,iframeHTML);
		oiframes = document.getElementById(EBOOKCART_PAGE_TIP_ID).getElementsByTagName('IFRAME');
	}
        
	oIframe  = oiframes[0];
	
	oIframe.src = src;
    
	if(!isNaN(Pos.x)){
		ParentXY.x += Pos.x;
	}
	if(!isNaN(Pos.y)){
		ParentXY.y += Pos.y;
	}
	oDiv.style.top  = ParentXY.y+"px";
	oDiv.style.left = ParentXY.x+"px";
};

EBOOKCART.ADDCartConfirm = function(type){
	if (!type) {
		type = 'free';
	}
	var EBOOKCART_PAGE_TIP_ID = 'ebook_tip_id_' + type;
	var EBOOKCART_PAGE_TIP_IFREAME_ID = 'ebook_tip_iframe_id_' + type;
    var oIframe = document.getElementById(EBOOKCART_PAGE_TIP_IFREAME_ID);
    var src = oIframe.src;
	var r = Math.random();
	src = src.replace(/r=([\d\.]+)/g,'r='+r);
	src = src.replace(/is_add=0/g,'is_add=1');
	oIframe.src = src;
};              
                
EBOOKCART.resizeMsgBox = function(type){
	if (!type) {
		type = 'free';
	}
	var EBOOKCART_PAGE_TIP_ID = 'ebook_tip_id_' + type;
	var EBOOKCART_PAGE_TIP_IFREAME_ID = 'ebook_tip_iframe_id_' + type;
	var wp=window.parent;
	var cf = wp.document.getElementById(EBOOKCART_PAGE_TIP_IFREAME_ID);
	wp.document.getElementById(EBOOKCART_PAGE_TIP_ID).style.display = 'block';
	var documentframe=null;
	cf.style.height=null;
	cf.style.width=null;
	if(!navigator.userAgent.toUpperCase().indexOf("MSIE")){
		for (var i = 0; i < window.frames.length; i++) {
			try {
				if (window.frames[i].name == EBOOKCART_PAGE_TIP_IFREAME_ID) {
						documentframe = window.frames[i].document
				}
			} catch(e) {}
		}
	}else{
		documentframe = window.frames[EBOOKCART_PAGE_TIP_IFREAME_ID].document;
	}
	cf.style.width=documentframe.documentElement.scrollWidth+"px";
	var min=0,max=0;
	if(documentframe.documentElement.scrollHeight>documentframe.body.scrollHeight){
		max = documentframe.documentElement.scrollHeight;
		min = documentframe.body.scrollHeight;
	}else{
		min = documentframe.documentElement.scrollHeight;
		max = documentframe.body.scrollHeight;
	}
	if(min==0){
		cf.style.height=max+"px";
	}else{
		cf.style.height=min+"px"
	}
};

EBOOKCART.closeWin = function(type){
	if (!type) {
		type = 'free';
	}
	var EBOOKCART_PAGE_TIP_ID = 'ebook_tip_id_' + type;
	var EBOOKCART_PAGE_TIP_IFREAME_ID = 'ebook_tip_iframe_id_' + type;
	var wp=window.parent;
	var cf = wp.document.getElementById(EBOOKCART_PAGE_TIP_ID);
	cf.style.display = 'none';
};
EBOOKCART.open = function(url){
	window.location.href = url;
}
