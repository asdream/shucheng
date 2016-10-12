

var recoBarUrl="http://tuijian.dangdang.com/recobar2/";


var domain_of_recobar =  window.location.host;

function addLoadEvent(a){
    var b=window.onload;
    if(typeof window.onload!="function"){
        window.onload=a
    }else{
        window.onload=function(){
            b();
            a()
        }
    }
}
function loadCSS(url) {
var h=document.getElementsByTagName('head'),link=document.createElement('link');
link.rel="stylesheet";link.type="text/css";link.href=url;
h[0].appendChild(link);
}
/*
function loadJS(url) {
var h=document.getElementsByTagName('head'),link=document.createElement('script');
link.type="text/javascript";link.src=url;
h[0].appendChild(link);
}
*/

//带callback的加载
function loadJS(src, callback) {
        var head = document.getElementsByTagName('HEAD')[0];
        var script = document.createElement('SCRIPT');
        var args = Array.prototype.slice.call(arguments, 2);
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', src);
        if(typeof(callback) != 'undefined') {
            script.onload = function() {callback(args)};
            script.onreadystatechange = function() {
                if(this.readyState == 'complete' || this.readyState == 'loaded') {
                    callback(args);
                }
            }
        }
        head.appendChild(script);
    }

//loadCSS(recoBarUrl+"css/reco_style_new.css");
//loadCSS(recoBarUrl+"css/promotion.css");
function init(){loadJS(recoBarUrl+'js/jquery.lazyload.js',lazyLoadReco)}
if(typeof window.jQuery=="undefined"){
    var a=init;
    init = function(){loadJS(recoBarUrl+'js/jquery-1.8.0.min.js',a)}
}
init();
document.getElementById('search_tuijian_content').innerHTML= '<div id="recobar"></div>';
function addRecoBar(c,d){
    if(typeof c=="undefined"){
        c=1;
        if(!getRecoBarCookie("HK",";")&&!getRecoBarCookie("producthistoryid",",")){
            $("#recobar").css("height","0");
            $("#recobar").css("display","none");
            return""
        }else{
            //$("#recobar").html('<div class="recommend_end2_body_1"><div class="recommend_end2_body_2"><div class="loading_img" style="text-align:center;"><img src="'+recoBarUrl+'img/loading.gif" /><span class="loading_wait">请稍后<span class="dot">...</span></span></div> </div></div>')
//            $("#recobar").html('<div class="another mbox interest"><div class="bucket dbox"><div class="loading_img" style="text-align:center;margin-top:10px;"><img src="'+recoBarUrl+'img/loading.gif" /><span class="loading_wait">请稍候<span class="dot">...</span></span></div> </div></div>')
            $("#recobar").html('<div><img style="margin-top:120px;" src="'+recoBarUrl+'img/loading.gif" /><span style="margin-top:120px;">请稍候</span></div>')
        }
        }
    var type = 10;//设定类型为1，显示5个商品
    var b=recoBarUrl+"jsonp.php?page="+c+"&time="+new Date()+"&domain="+domain_of_recobar+"&type="+type;
    loadJS(b)
}
function getRecoBarCookie(b,a){
    var c;
    c=b+"=";
    offset=document.cookie.indexOf(c);
    //alert(offset);
    if(offset!=-1){
        offset+=c.length;
        end=document.cookie.indexOf(a,offset);
        if(end==-1){
            end=document.cookie.length
            }
            return unescape(document.cookie.substring(offset,end))
        }else{
        return""
        }
}
function mouseOver(c,b,a,d){
    objT_id=b+d;
    objD_id=a+d;
    $("#"+objT_id).siblings("div.book_r_hot").hide();
    $("#"+objD_id).siblings("h3").show();
    $("#"+objD_id).show();
    $("#"+objT_id).hide()
}
function lazyLoadReco(){
    $("#ddtuijian").lazyload({
        func:addRecoBar
    })
}
