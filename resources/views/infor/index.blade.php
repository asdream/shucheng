<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        
        <title>编辑个人档案 -- 当当网</title>
        
        
    <script src="js1/s.js" async="" type="text/javascript"></script><script src="js1/mvl.js" async="" type="text/javascript"></script><script language="javascript" src="js1/checkword.js" type="text/javascript"></script><script language="javascript" src="js1/date.js" type="text/javascript"></script><script language="javascript" src="js1/photo.js" type="text/javascript"></script><script language="javascript" type="text/javascript" src="js1/comm.js"></script><script language="javascript" type="text/javascript" src="js1/jquery.min.1.4.2.js"></script><script src="js1/getjs.php" type="text/javascript"></script><script type="text/javascript" charset="gbk" src="js1/adall.min.js"></script><script src="js1/recommendads.js" type="text/javascript"></script><script language="javascript">
        <!--
        function getOs()
        {
            if(navigator.userAgent.indexOf("MSIE")>0)return 1;
            if(isFirefox=navigator.userAgent.indexOf("Firefox")>0)return 2;
            if(isSafari=navigator.userAgent.indexOf("Safari")>0)return 3;
            if(isCamino=navigator.userAgent.indexOf("Camino")>0)return 4;
            if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0)return 5;
            return 0;
        }

        function ChkNickname_new(){

            var info = document.getElementById("info_1");
            var obj = document.getElementById("Txt_petname");
            var username = obj.value;
            var reg = /^(\w|[\u4E00-\u9FA5])*$/;
            if(arr=username.match(reg))
            {
                return true;
            }
            else
            {
                info.className = "notice_write";
                //obj.focus();
                info.innerHTML="昵称只能是数字，字母和汉字";
                return false;
            }
        }

        function changeclass_new(name){
            var obj1 = document.getElementById(name+"_1");
            var obj2 = document.getElementById(name+"_2");
            if(obj1)
                obj1.className = "choice_cont now_color";
            if(obj2)
                obj2.className = "choice_cont now_color choice_cont_r";
        }

        function div_vis(divid){
            var div = document.getElementById(divid);
            if (div!=null)
                div.style.display='block';
        }
        function hidobj(Divid){
            var divs = document.getElementById(Divid);
            if (divs!=null)
                divs.style.visibility ="hidden";
        }



        function Chksubmit(){
            //            if (!cue_chk())
            //                return false;
            if (!chkname())
                return false;


            if (!ChkNickname_new())
                return false;
            if (!chkaddress())
                return false;
            if (!chsex())
                return false;
            if (!chkstation())
                return false;
            if (!chkbirthday())
                return false;
            return true;
            //document.getElementById("Button1").onclick;
        }

        function chkname(){


            var obj = document.getElementById("Txt_petname");
            var reg = /^\d+$/g;
            var reg1 = /[A-Z]/g;
            var reg2 = /^(\w|[\u4E00-\u9FA5])*$/;
            var info = document.getElementById("info_1");

            if (obj!=null){
                if (GetCharLength(obj.value)<4){
                    info.className = "notice_write";
                    info.innerHTML="最少四个字符，请输入您的昵称";
                    return false;
                }
                if(reg.test(obj.value)){

                    info.className = "notice_write";
                    info.innerHTML="昵称不能全由数字组成！";

                    return false;
                }
                if(reg1.test(obj.value)){

                    info.className = "notice_write";
                    info.innerHTML="昵称不能有大写字母！";
                    return false;
                }else{


                    if(obj.value.match(reg2))
                    {

                        return true;
                    }
                    else
                    {

                        info.className = "notice_write";
                        //obj.focus();
                        info.innerHTML="昵称只能是数字，字母和汉字";
                        return false;
                    }
                }

                if (obj.value==""||!chkstr(4,20,obj.value)){

                    var info = document.getElementById("info_1");
                    if (info!=null)
                    {
                        info.className = "notice_write";

                        if (obj.value==""){
                            obj.focus();
                            info.innerHTML="此项为必填项，请输入您的昵称";
                            return false;
                        }
                        else if (GetCharLength(obj.value)<4){

                            obj.focus();
                            info.innerHTML="至少4个字符";
                            return false;
                        }
                        else{

                            info.innerHTML="超出最大限制字数";
                            obj.focus();
                            return false;
                        }
                    }

                }
            }
            else{
                return false;
            }
            var v_date = document.getElementById("v_date");
            chknickname(v_date.value,obj.value);
            return true;
        }
        function chkstr(min,max,str){
            var num = GetCharLength(str);
            if (num>max||num<min)
                return false;
            else
                return true;
        }
        function chkaddress(){

            var obj = document.getElementById("hd_area");
            if (obj!=null)
            {
                if (obj.value=="" || obj.value =="0")
                {
                    var area_clientID = document.getElementById("area_clientID");
                    var area_clientID_value = area_clientID.value;
                    var ctl00_s1 = document.getElementById(area_clientID_value+"_s1");
                    ctl00_s1.focus();
                    var div = document.getElementById("notice_2");
                    div.className = "notice_write";

                    div.innerHTML="此项为必填项";
                    div.style.visibility='visible';
                    //div.style.display="block";
                    return false
                }
            }
            else{
                return false;
            }
            return true;
            //return false;
        }
        function chsex(){
            var obj1 = document.getElementById("Rd_sex_1");//男
            var obj2 = document.getElementById("Rd_sex_2");
            if (obj1!=null&&obj2!=null)
            {
                if (obj1.checked==false && obj2.checked==false){
                    obj1.focus();
                    var div = document.getElementById("notice_3");
                    div.className = "notice_write";
                    div.innerHTML="此项为必填项,请选择您的性别";
                    div.style.visibility='visible';
                    return false;
                }
            }
            else{
                return false;
            }
            return true;
        }
        function chkbirthday(){
            var chk = false;
            var obj1 = document.getElementById("Dp_year");
            var obj2 = document.getElementById("Dp_month");
            var obj3 = document.getElementById("Dp_day");

            if (obj1.value!='0'||obj2.value!='0'||obj3.value!='0')
                chk=true;
            if (obj1!=null&&obj2!=null&&obj3!=null)
            {
                if(chk && (obj1.value=='0'||obj2.value=='0'||obj3.value=='0')){
                    var div = document.getElementById("notice_4");
                    if(obj3.value=='0')
                        obj3.focus();
                    if(obj2.value=='0')
                        obj2.focus();
                    if(obj1.value=='0')
                        obj1.focus();
                    div.className = "notice_write";
                    //div.innerHTML="此项为必填项,请选择您的出生日期";
                    div.innerHTML="请选择您的出生日期";
                    div.style.visibility='visible';
                    return false;
                }
                if (!chk){//如果都不选择
                    return true;
                }
                else{
                    if (!checkdate(obj1.value,obj2.value,obj3.value)){
                        var div = document.getElementById("notice_4");
                        obj1.focus();
                        div.className = "notice_write";
                        div.innerHTML="请检查日期";
                        div.style.visibility='visible';
                        return false;
                    }
                }
            }
            else{
                return false;
            }
            return true;
        }
        function chkstation(){
            var stationobj = document.getElementById("defaultValue");
            if (stationobj!=null)
            {
                if (stationobj.value==""||!chkstr(0,40,stationobj.value)){
                    var div = document.getElementById("notice_5");
                    if (div!=null)
                    {
                        div.className = "notice_write";
                        if (stationobj.value==""){
                            div.innerHTML="此项为必填项，请选择或填写您的个性身份";
                            var Rd_student = document.getElementById("Rd_student");
                            Rd_student.focus();
                        }
                        else{
                            div.innerHTML="超出最大限制字数";
                        }
                        div.style.visibility='visible';
                        return false
                    }
                }
            }
            else{
                return false;
            }
            //
            return true;
            return false;
        }

        function IniHidDiv(){
            var obj;
            for (var i=2;i<=5;i++){
                obj = document.getElementById("notice_"+i);
                if (obj!=null){
                    //alert(obj.id);
                    obj.style.visibility='hidden';
                }
            }

            var info = document.getElementById("info_1");
            if (info==null)
                return;
            //info.className = "c_gray";
            //info.innerHTML="<p>您的昵称可以由小写英文字母、中文、数字组成，</p>长度4－20个字符，一个汉字为两个字符";

        }

        function GetCharLength(str)
        {
            var iLength = 0;
            for(var i = 0;i<str.length;i++)
            {
                if(str.charCodeAt(i) >255)
                {
                    iLength += 2;
                }
                else
                {
                    iLength += 1;
                }
            }
            return iLength;
        }

        function Keyonkeydown(obj,num,evt){
            if(navigator.userAgent.indexOf("Firefox")>0){

                evt = evt ? evt : (window.event ? window.event : null);
                if (evt.keyCode!=8){
                    if(obj.value.length >= num)
                    {
                        evt.preventDefault();
                        evt.stopPropagation();
                    }
                }
            }
            else if (navigator.userAgent.indexOf("MSIE")>0){
                if (window.event.keyCode!=8){
                    if(obj.value.length >= num)
                        event.returnValue = false;
                    event.cancelBubble = true;
                }
            }
        }

        function plaster(obj,num,evt){


        }



        function cue_chk(){

            var obj = document.getElementById("Txt_petname");
            var info = document.getElementById("info_1");
            var reg = /^\d+$/g;
            var reg1 = /[A-Z]/g;
            if (obj!=null && info!=null)
            {
                if (GetCharLength(obj.value)<4){
                    info.className = "notice_write";
                    info.innerHTML="最少四个字符，请输入您的昵称";
                    return false;
                }else if(reg.test(obj.value)){

                    info.className = "notice_write";
                    info.innerHTML="昵称不能全由数字组成！";
                    return false;
                }else if(reg1.test(obj.value)){

                    info.className = "notice_write";
                    info.innerHTML="昵称不能有大写字母！";
                    return false;
                }
                else{

                    if (ChkNickname_new()){
                        var v_date = document.getElementById("v_date");
                        if (v_date!=null){
                            var v_date_value = v_date.value;
                            info = null;
                            chknickname(v_date_value,obj.value);

                        }
                        return true;
                    }
                }
            }
        }

        function cue(){
            var obj = document.getElementById("Txt_petname");
            var info = document.getElementById("info_1");
            if (obj!=null && info!=null)
            {
                if (GetCharLength(obj.value)<4){
                    info.className = "notice_write";
                    info.innerHTML="最少四个字符，请输入您的昵称";
                }
                else{
                    info.className = "c_gray";
                    info.innerHTML="<p>您的昵称可以由小写英文字母、中文、数字组成，</p>长度4－20个字符，一个汉字为两个字符";
                }
            }
            //event.cancelBubble = true;
        }


        function SetText(obj,classname,item){
            var inter,love;
            inter=0;
            love=0;
            var Txt_interesting = document.getElementById("Txt_interesting");
            var Txt_love = document.getElementById("Txt_love");
            if (item=='0')
            {
                if (obj.name =="Txt_interesting" && inter==0 && obj.value=="不同项目之间请用空格隔开，例如“旅行 阅读 瑜伽”"){
                    obj.value="";
                    inter++;
                    obj.className =classname;
                }
                else if (obj.name =="Txt_love" && love==0  && obj.value=="不同人名之间请用空格隔开，例如“金庸 周杰伦 姚明”"){

                    obj.value="";
                    love++;
                    obj.className =classname;
                }
            }
            else
            {
                if (obj.name =="Txt_interesting" && obj.value== "")
                {
                    obj.value="不同项目之间请用空格隔开，例如“旅行 阅读 瑜伽”";
                    inter=0;
                    obj.className =classname;
                }
                else if (obj.name =="Txt_love" && obj.value== "")
                {
                    obj.value="不同人名之间请用空格隔开，例如“金庸 周杰伦 姚明”";
                    love=0;
                    obj.className =classname;
                }
            }
            if (obj.name =="Txt_interesting"){
                if (obj.value=="不同项目之间请用空格隔开，例如“旅行 阅读 瑜伽”" ||obj.value=="" )
                {
                    changeoldclass("div_5");
                }
            }
            else if (obj.name =="Txt_love"){
                if (obj.value=="不同人名之间请用空格隔开，例如“金庸 周杰伦 姚明”" ||obj.value=="" )
                {
                    changeoldclass("div_6");
                }
            }
        }

        function SetintroduceDiv(){
            var Txt_introduce = document.getElementById("Txt_introduce");
            if (Txt_introduce.value=="")
                changeoldclass("div_7");
            else
                changeclass('div_7');

        }

        function changeurl(divname){
            var url = document.getElementById("Txt_blog");

            if (url!=null)
            {
                if (url.value!='http://'){
                    changeclass('div_3');
                }
                else{
                    changeoldclass("div_3");
                }
            }
        }

        function Checkchk(){
            var chkobj;
            var ischk;
            ischk=false;
            for (i=1;i<=6;i++){
                chkobj = document.getElementById("Chk_"+i);
                if (chkobj!=null){
                    if (chkobj.checked){
                        //alert("fasdf");
                        ischk = true;
                        break;
                    }
                }
            }
            return ischk;
        }

        function chknamediv(){
            var obj = document.getElementById("Txt_petname");
            if (obj!=null)
            {
                if (obj.value !="")
                    changeclass("div_1");
            }
        }
        function chkarea(){
            var obj = document.getElementById("hd_area");
            if (obj!=null)
            {
                if (obj.value !="" && obj.value !="0")
                    changeclass("div_2");
            }
        }

        function disablcontrol(id){
            var obj1 = document.getElementById(id+"_0");
            var obj2 = document.getElementById(id+"_1");
            if (obj1!=null || obj2!=null)
            {
                obj1.disabled = false;
                obj2.disabled = false;
            }
            if (id=="Rd_standingis"){
                var defaultValue = document.getElementById("defaultValue");
                defaultValue.disabled = false;
            }
        }

        function chksex(){
            var obj1 = document.getElementById("Rd_sex_1");
            var obj2 = document.getElementById("Rd_sex_2");

            if (obj1!=null && obj2!=null)
            {

                if (obj1.checked==true||obj2.checked==true){
                    changeclass_new('span_1');
                }
                else
                {
                    var Rd_sexis_0 = document.getElementById("Rd_sexis_0");
                    var Rd_sexis_1 = document.getElementById("Rd_sexis_1");
                    Rd_sexis_0.disabled = true;
                    Rd_sexis_1.disabled = true;
                    //var Button2 = document.getElementById("Button2");
                    //Button2.disabled="true";
                }
            }
        }
        function chkbirth(){
            var obj1 = document.getElementById("Dp_year");
            var obj2 = document.getElementById("Dp_month");
            var obj3 = document.getElementById("Dp_day");
            if (obj1!=null &&obj2!=null &&obj3!=null)
            {
                //if(obj1.value!='0'||obj2.value!='0'||obj3.value!='0'){
                if(obj1.value=='0'||obj2.value=='0'||obj3.value=='0'){
                    //changeclass_new('span_2');
                    changeoldclass('div8');
                }
                else{
                    //var Rd_biris_0 = document.getElementById("Rd_biris_0");
                    //var Rd_biris_1 = document.getElementById("Rd_biris_1");
                    //Rd_biris_0.disabled = true;
                    //Rd_biris_1.disabled = true;
                    changeclass('div8');
                }
            }
        }
        function chkstation_span(){
            var obj = document.getElementById("defaultValue");
            if (obj!=null)
            {
                if (obj.value!="")
                    changeclass_new('span_3');
                else{

                    var Rd_standingis_0 = document.getElementById("Rd_standingis_0");
                    var Rd_standingis_1 = document.getElementById("Rd_standingis_1");
                    var defaultValue = document.getElementById("defaultValue");
                    Rd_standingis_0.disabled = true;
                    Rd_standingis_1.disabled = true;
                    defaultValue.disabled = true;
                }
            }
        }

        function changeclass_timechk(objid){
            var objyear = document.getElementById("Dp_year");
            var objmonth = document.getElementById("Dp_month");
            var objday = document.getElementById("Dp_day");

            if (objyear!=null && objmonth!=null && objday!=null)
            {
                if (objyear.value=='0' && objmonth.value=='0' && objday.value=='0'){
                    changeoldclass(objid);
                }
                else{
                    changeclass(objid);
                }
            }
        }

        function changeclass(objname){
            var obj = document.getElementById(objname);
            obj.className = "list_other now_color";
        }

        function changeoldclass(objname){
            //alert(objname);
            var obj = document.getElementById(objname);
            if (obj)
                obj.className = "list_other";
            //alert("changeoldclass:"+objname);
        }

        function CheckForm(){

            chknamediv();
            chkarea();
            chksex();
            chkbirth();
            chkstation_span();
            changeurl("div_3");
            changeclass_chk();

            obj = document.getElementById("Txt_interesting");
            if (obj!=null){

                if (obj.value ==""||obj.value =="不同项目之间请用空格隔开，例如“旅行 阅读 瑜伽”"){
                    obj.value ="不同项目之间请用空格隔开，例如“旅行 阅读 瑜伽”";
                    var objdiv = document.getElementById("div_5");
                    objdiv.className = "list_other";
                    changeoldclass("div_5");
                }
                else{
                    changeclass("div_5");
                }
            }

            obj = document.getElementById("Txt_love");
            if (obj!=null){

                if (obj.value ==""||obj.value =="不同人名之间请用空格隔开，例如“金庸 周杰伦 姚明”"){
                    obj.value ="不同人名之间请用空格隔开，例如“金庸 周杰伦 姚明”";
                    var objdiv = document.getElementById("div_6");
                    objdiv.className = "list_other";
                }
                else{

                    changeclass("div_6");
                    //alert('div_6');
                }
            }
            obj = document.getElementById("Txt_introduce");
            if (obj!=null && obj.value !=""){
                changeclass("div_7");
            }

        }
        function changeclass_chk(){
            obj = document.getElementById("div_4");
            if (obj!=null)
            {
                if (Checkchk())
                    obj.className = "list_other now_color";
                else
                    obj.className = "list_other";
            }
        }

        function change_select_div(){
            var area_div = document.getElementById("area_div");
            var area_select_div = document.getElementById("area_select_div");
            area_div.style.display = "none";
            area_select_div.style.display ="block";
            area_div = null;
            area_select_div = null;

        }

        function Hid_stateinfo_info(){
            var stateinfo_info = document.getElementById("stateinfo_info");
            if (stateinfo_info!=null)
                stateinfo_info.style.display = "none";
        }

        -->
    </script><script async="" src="cpc_new.php"></script><script async="" src="logurl.htm"></script>
<link rel="stylesheet" type="text/css" href="css1/index.css" media="all">
</head>
<body><iframe src="index_1.html" style="display: none;" sandbox="allow-scripts allow-same-origin"></iframe>
 <!--页头开始-->
        




<script src="js1/adv.js"></script><script type="text/javascript">
    eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('r(1c 1H=="O"){o U;(p(){o k={1d:"1I.1J",1e:\'1K\',D:\'O\',1f:\'O\'};k.1g={1h:0,1L:"",F:8,1i:p(a){o b=l.1h?"1M":"1N";o c="";P(o i=0;i<a.B*4;i++){c+=b.1j((a[i>>2]>>((i%4)*8+4))&1k)+b.1j((a[i>>2]>>((i%4)*8))&1k)}u c},1l:p(x,e){x[e>>5]|=1O<<((e)%32);x[(((e+1P)>>>9)<<4)+14]=e;o a=1Q;o b=-1R;o c=-1S;o d=1T;P(o i=0;i<x.B;i+=16){o f=a;o g=b;o h=c;o j=d;a=l.v(a,b,c,d,x[i+0],7,-1U);d=l.v(d,a,b,c,x[i+1],12,-1V);c=l.v(c,d,a,b,x[i+2],17,1W);b=l.v(b,c,d,a,x[i+3],22,-1X);a=l.v(a,b,c,d,x[i+4],7,-1Y);d=l.v(d,a,b,c,x[i+5],12,1Z);c=l.v(c,d,a,b,x[i+6],17,-24);b=l.v(b,c,d,a,x[i+7],22,-25);a=l.v(a,b,c,d,x[i+8],7,26);d=l.v(d,a,b,c,x[i+9],12,-27);c=l.v(c,d,a,b,x[i+10],17,-28);b=l.v(b,c,d,a,x[i+11],22,-29);a=l.v(a,b,c,d,x[i+12],7,2a);d=l.v(d,a,b,c,x[i+13],12,-2b);c=l.v(c,d,a,b,x[i+14],17,-2c);b=l.v(b,c,d,a,x[i+15],22,2d);a=l.w(a,b,c,d,x[i+1],5,-2e);d=l.w(d,a,b,c,x[i+6],9,-2f);c=l.w(c,d,a,b,x[i+11],14,2g);b=l.w(b,c,d,a,x[i+0],20,-2h);a=l.w(a,b,c,d,x[i+5],5,-2i);d=l.w(d,a,b,c,x[i+10],9,2j);c=l.w(c,d,a,b,x[i+15],14,-2k);b=l.w(b,c,d,a,x[i+4],20,-2l);a=l.w(a,b,c,d,x[i+9],5,2m);d=l.w(d,a,b,c,x[i+14],9,-2n);c=l.w(c,d,a,b,x[i+3],14,-2o);b=l.w(b,c,d,a,x[i+8],20,2p);a=l.w(a,b,c,d,x[i+13],5,-2q);d=l.w(d,a,b,c,x[i+2],9,-2r);c=l.w(c,d,a,b,x[i+7],14,2s);b=l.w(b,c,d,a,x[i+12],20,-2t);a=l.z(a,b,c,d,x[i+5],4,-2u);d=l.z(d,a,b,c,x[i+8],11,-2v);c=l.z(c,d,a,b,x[i+11],16,2w);b=l.z(b,c,d,a,x[i+14],23,-2x);a=l.z(a,b,c,d,x[i+1],4,-2y);d=l.z(d,a,b,c,x[i+4],11,2z);c=l.z(c,d,a,b,x[i+7],16,-2A);b=l.z(b,c,d,a,x[i+10],23,-2B);a=l.z(a,b,c,d,x[i+13],4,2C);d=l.z(d,a,b,c,x[i+0],11,-2D);c=l.z(c,d,a,b,x[i+3],16,-2E);b=l.z(b,c,d,a,x[i+6],23,2F);a=l.z(a,b,c,d,x[i+9],4,-2G);d=l.z(d,a,b,c,x[i+12],11,-2H);c=l.z(c,d,a,b,x[i+15],16,2I);b=l.z(b,c,d,a,x[i+2],23,-2J);a=l.A(a,b,c,d,x[i+0],6,-2K);d=l.A(d,a,b,c,x[i+7],10,2L);c=l.A(c,d,a,b,x[i+14],15,-2M);b=l.A(b,c,d,a,x[i+5],21,-2N);a=l.A(a,b,c,d,x[i+12],6,2O);d=l.A(d,a,b,c,x[i+3],10,-2P);c=l.A(c,d,a,b,x[i+10],15,-2Q);b=l.A(b,c,d,a,x[i+1],21,-2R);a=l.A(a,b,c,d,x[i+8],6,2S);d=l.A(d,a,b,c,x[i+15],10,-2T);c=l.A(c,d,a,b,x[i+6],15,-2U);b=l.A(b,c,d,a,x[i+13],21,2V);a=l.A(a,b,c,d,x[i+4],6,-2W);d=l.A(d,a,b,c,x[i+11],10,-2X);c=l.A(c,d,a,b,x[i+2],15,2Y);b=l.A(b,c,d,a,x[i+9],21,-2Z);a=l.C(a,f);b=l.C(b,g);c=l.C(c,h);d=l.C(d,j)}u V(a,b,c,d)},J:p(q,a,b,x,s,t){u l.C(l.1m(l.C(l.C(a,q),l.C(x,t)),s),b)},v:p(a,b,c,d,x,s,t){u l.J((b&c)|((~b)&d),a,b,x,s,t)},w:p(a,b,c,d,x,s,t){u l.J((b&d)|(c&(~d)),a,b,x,s,t)},z:p(a,b,c,d,x,s,t){u l.J(b^c^d,a,b,x,s,t)},A:p(a,b,c,d,x,s,t){u l.J(c^(b|(~d)),a,b,x,s,t)},1n:p(a){o b=V();o c=(1<<l.F)-1;P(o i=0;i<a.B*l.F;i+=l.F)b[i>>5]|=(a.30(i/l.F)&c)<<(i%32);u b},C:p(x,y){o a=(x&W)+(y&W);o b=(x>>16)+(y>>16)+(a>>16);u(b<<16)|(a&W)},1m:p(a,b){u(a<<b)|(a>>>(32-b))},1o:p(s){u l.1i(l.1l(l.1n(s),s.B*l.F))}};k.X={1p:p(a){o b=Y(a)+"=",Q=K.L.E(b),Z=1q;r(Q>-1){o c=K.L.E(";",Q);r(c==-1){c=K.L.B}Z=31(K.L.18(Q+b.B,c))}u Z},19:p(a,b,c,d,e,f){o g=Y(a)+"="+Y(b);r(c 33 N){g+="; 34="+c.36()}r(d){g+="; 37="+d}r(e){g+="; 38="+e}r(f){g+="; 39"}K.L=g},3a:p(a,b,c,d){l.19(a,"",G N(0),b,c,d)}};k.3b={3c:p(a){o b=G 3d();r(a.E("?")>0){o c=a.18(a.E("?")+1);r(c.E("#")>0){c=c.18(0,c.E("#"))}o d=c.1a("&");P(o i=0;i<d.B;i++){b[d[i].1a("=")[0]]=d[i].1a("=")[1]}}u b}};k.3e=p(a,b,c){r(a.1r){a.1r(b,c,1s)}R r(a.1t){a.1t("T"+b,c)}R{a["T"+b]=c}};k.3f=p(a,b,c){r(a.1u){a.1u(b,c,1s)}R r(a.1v){a.1v("T"+b,c)}R{a["T"+b]=1q}};k.3g=p(x){o a=3h(x);r(3i(a)){u 0.1w}o a=I.3j(x*1x)/1x;o b=a.3k();o c=b.E(\'.\');r(c<0){c=b.B;b+=\'.\'}3l(b.B<=c+2){b+=\'0\'}u b};k.1y=p(){o n=G N();o y=n.3m()+\'\';o m=n.3n()+1;r(m<10)m="0"+m;o d=n.3o();r(d<10)d="0"+d;o H=n.3p();r(H<10)H="0"+H;o M=n.3q();r(M<10)M="0"+M;o S=n.3r();r(S<10)S="0"+S;o a="1w"+n.3s();a=a.1b(a.B-3,3);o b=I.1z(1A+I.1B()*1C);o c=I.1z(1A+I.1B()*1C);o e=y+m+d+H+M+S+a+b+c+k.1e;o f=k.1g.1o(e);f=k.1D(f);u y+m+d+H+M+S+a+f+b+c};k.1D=p(a){o b=3t(a.1b(0,8),16);o c=3u(b).1b(0,6);o d=c.B;r(d<6){c+=k.1E(\'0\',I.3v(6-d))}u c};k.1E=p(a,b){u G V(b+1).3w(a)};k.1F=p(){o t=G N();u t.3x()};k.1G=p(){k.D=k.X.1p("D");r(1c k.D==\'O\'||!/^\\d{35}$/.3y(k.D)){o a=G N(3z,1,1);k.D=k.1y();k.X.19("D",k.D,a,"/",k.1d)}k.1f=k.1F()};U=k;U.1G()})()}',62,222,'|||||||||||||||||||||this|||var|function||if|||return|md5_ff|md5_gg|||md5_hh|md5_ii|length|safe_add|__permanent_id|indexOf|chrsz|new||Math|md5_cmn|document|cookie||Date|undefined|for|cookieStart|else||on|ddclick_head_functions|Array|0xFFFF|CookieUtil|encodeURIComponent|cookieValue|||||||||substring|set|split|substr|typeof|__cookieDomain|__ddclick_hash_key|__timestap|Md5Util|hexcase|binl2hex|charAt|0xF|core_md5|bit_rol|str2binl|hex_md5|get|null|addEventListener|false|attachEvent|removeEventListener|detachEvent|00|100|createPermanentID|floor|100000|random|900000|formatHashCode|str_repeat|initTime|init|ddclick_page_tracker|dangdang|com|DDClick521|b64pad|0123456789ABCDEF|0123456789abcdef|0x80|64|1732584193|271733879|1732584194|271733878|680876936|389564586|606105819|1044525330|176418897|1200080426|||||1473231341|45705983|1770035416|1958414417|42063|1990404162|1804603682|40341101|1502002290|1236535329|165796510|1069501632|643717713|373897302|701558691|38016083|660478335|405537848|568446438|1019803690|187363961|1163531501|1444681467|51403784|1735328473|1926607734|378558|2022574463|1839030562|35309556|1530992060|1272893353|155497632|1094730640|681279174|358537222|722521979|76029189|640364487|421815835|530742520|995338651|198630844|1126891415|1416354905|57434055|1700485571|1894986606|1051523|2054922799|1873313359|30611744|1560198380|1309151649|145523070|1120210379|718787259|343485551|charCodeAt|decodeURIComponent||instanceof|expires||toGMTString|path|domain|secure|unset|URLUtil|getKeyValueArray|Object|addEventHandler|removeEventHandler|changeTwoDecimal|parseFloat|isNaN|round|toString|while|getFullYear|getMonth|getDate|getHours|getMinutes|getSeconds|getMilliseconds|parseInt|String|abs|join|getTime|test|2020'.split('|'),0,{}))</script>

<script charset="gb2312" type="text/javascript">var width = 0; narrow = 1;</script>
<script src="js1/pagetop2015_0827.js" charset="gb2312" type="text/javascript"></script>
<script src="dd.menu-aim.js" charset="gb2312" type="text/javascript"></script>


<div id="hd">
<div id="tools">
<div class="tools">
    <div class="ddnewhead_operate" dd_name="顶链接">
        <ul class="ddnewhead_operate_nav">
	<li><a target="_top" href="http://e.dangdang.com/touch/special/goldenIP/index.html" name="mydd_7" dd_name="原创征文">原创征文</a></li>
        <li class="dang_erweima">
          <a target="_top" href="http://t.dangdang.com/20130220_ydmr" id="a_phonechannel" onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');" onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');" class="menu_btn"><i class="icon_tel"></i>手机当当</a>
          <div class="tel_pop" style="display: none;" id="__ddnav_sjdd" onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');" onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');">
                <a target="_top" href="http://t.dangdang.com/20130220_ydmr" class="title"><i class="icon_tel"></i>手机当当</a><i class="title_shadow"></i>
                <div class="tel_pop_box clearfix">
                    <div class="tel_pop_box_li"><a href="http://t.dangdang.com/20130220_ydmr" dd_name="手机二维码" target="_top"><span>当当购物客户端</span><img src="go_erweima.png"><span class="text">下载购物APP<br>手机端1元秒</span></a></div>
                    <div class="tel_pop_box_li"><a href="http://t.dangdang.com/20140107_5pz1" dd_name="手机二维码" target="_top"><span>当当读书客户端</span><img src="image1/du_erweima.png"><span class="text">万本电子书<br>免费读</span></a></div>
                </div>
          </div>
        </li>
        <li class="my_dd"><a class="menu_btn" target="_top" href="http://myhome.dangdang.com/" name="我的当当" dd_name="我的当当" id="a_myddchannel" onmouseover="showgaoji('a_myddchannel','__ddnav_mydd')" onmouseout="hideotherchannel('a_myddchannel','__ddnav_mydd');">我的当当</a>
            <ul class="ddnewhead_gcard_list" id="__ddnav_mydd" onmouseover="showgaoji('a_myddchannel','__ddnav_mydd')" onmouseout="hideotherchannel('a_myddchannel','__ddnav_mydd');">
                <li><a target="_top" href="http://orderb.dangdang.com/myallorders.aspx" name="mydd_7" dd_name="新_我的订单">我的订单</a></li>
                <li><a target="_top" href="http://shopping.dangdang.com/shoppingcart/shopping_cart.aspx" name="mydd_8" dd_name="新_购物车" rel="nofollow">购物车</a></li>		
                <li><a target="_top" href="http://point.dangdang.com/index.html?ref=my-0-L" name="mydd_4" dd_name="积分抵现" rel="nofollow">积分抵现</a></li>
                <li><a target="_top" href="http://wish.dangdang.com/wishlist/cust_wish_list.aspx?ref=my-0-L" name="mydd_1" dd_name="我的收藏" rel="nofollow">我的收藏</a></li>
                <li><a target="_top" href="http://newaccount.dangdang.com/payhistory/mybalance.aspx" name="mydd_5" dd_name="我的余额" rel="nofollow">我的余额</a></li>
                <li><a target="_top" href="http://comm.dangdang.com/review/reviewbuy.php?ref=my-0-L" name="mydd_4" dd_name="我的评论" rel="nofollow">我的评论</a></li>
                <li><a target="_top" href="http://newaccount.dangdang.com/payhistory/mycoupon.aspx" name="mydd_2" dd_name="礼券/礼品卡" rel="nofollow">礼券/礼品卡</a></li>
		<li><a target="_top" href="http://e.dangdang.com/ebook/listUserEbooks.do" name="mydd_6" dd_name="电子书架">电子书架</a></li>
            </ul>
        </li>
        <li><a class="menu_btn" href="javascript:void(0);" style="cursor: default;" name="qycg" dd_name="企业采购" id="a_qycgchannel" onmouseover="showgaoji('a_qycgchannel','__ddnav_qycg');" onmouseout="hideotherchannel('a_qycgchannel','__ddnav_qycg');">企业采购</a>
            <ul class="ddnewhead_gcard_list" id="__ddnav_qycg" onmouseover="showgaoji('a_qycgchannel','__ddnav_qycg');" onmouseout="hideotherchannel('a_qycgchannel','__ddnav_qycg');">
                <li><a target="_top" href="http://giftcard.dangdang.com/giftcardCompany" name="qycg_1" dd_name="大宗采购">大宗采购</a></li>
                <li><a target="_top" href="http://giftcard.dangdang.com/" name="qycg_2" dd_name="礼品卡采购">礼品卡采购</a></li>
                <li><a target="_top" href="http://newaccount.dangdang.com/payhistory/mymoney.aspx" name="gqycg_3" dd_name="礼品卡激活" rel="nofollow">礼品卡激活</a></li>
                <li><a target="_top" href="http://help.dangdang.com/details/page24" name="qycg_4" dd_name="礼品卡使用">礼品卡使用</a></li>
                 <li><a target="_top" href="http://b2b.dangdang.com/" name="qycg_5" dd_name="3C数码团购">3C数码团购</a></li>
            </ul>
        </li>
        <li class="hover "><a class="menu_btn" href="javascript:void(0);" style="cursor: default;" name="ddkf_0" dd_name="客户服务" id="a_bzzxchannel" onmouseover="showgaoji('a_bzzxchannel','__ddnav_bzzx');" onmouseout="hideotherchannel('a_bzzxchannel','__ddnav_bzzx');">客户服务</a>
            <ul class="ddnewhead_gcard_list" id="__ddnav_bzzx" onmouseover="showgaoji('a_bzzxchannel','__ddnav_bzzx');" onmouseout="hideotherchannel('a_bzzxchannel','__ddnav_bzzx');">
                <li><a target="_top" href="http://help.dangdang.com/index" name="ddkf_2" dd_name="帮助中心">帮助中心</a></li>
		<li><a target="_top" href="http://return.dangdang.com/reverseapplyselect.aspx" name="ddkf_3" dd_name="自助退换货">自助退换货</a></li>
                <li><a target="_top" href="http://help.dangdang.com/details/page206" name="ddkf_4" dd_name="联系客服">联系客服</a></li>
                <li><a target="_top" href="http://help.dangdang.com/email_contact" name="tsjy_1" dd_name="我要投诉" rel="nofollow">我要投诉</a></li>
                <li><a target="_top" href="http://help.dangdang.com/email_contact" name="tsjy_2" dd_name="意见建议" rel="nofollow">意见建议</a></li>
               <li><a target="_top" href="http://order.dangdang.com/InvoiceApply/InvoiceReissue.aspx" name="tsjy_2" dd_name="自助发票" rel="nofollow">自助发票</a></li>
            </ul>
        </li>
        </ul>
        <div class="new_head_znx" id="znx_content" style="display: none;"></div>
        <div class="ddnewhead_welcome" display="none;">
            <span id="nickname"><span class="hi">Hi，<a href="http://myhome.dangdang.com/" class="login_link" target="_top"><b>157**…</b></a><a href="javascript:PageTopSignOut();" target="_self">[退出]</a></span></span>
            <div class="tel_pop" style="display: none;" id="__ddnav_sjdd" onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');" onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');">
                <a target="_top" href="http://t.dangdang.com/20130220_ydmr" class="title"><i class="icon_tel"></i>手机当当</a><i class="title_shadow"></i>
                <ul class="tel_pop_box">
                    <li><a href="http://t.dangdang.com/20130220_ydmr" dd_name="手机二维码"><span>当当手机客户端</span><img src="image1/erweima2.png"><span class="text">随手查订单<br>随时享优惠</span></a></li>
                </ul>
            </div>
        </div>
       <div class="ddnewhead_area">
            <a href="javascript:void(0);" id="area_one" class="ddnewhead_area_a" onmouseover="show_area_list();" onmouseout="hidden_area_list();">送至：<span id="curent_area">北京</span></a>
            <ul class="ddnewhead_area_list" style="display: none;" id="area_list" onmouseover="this.style.display='block';" onmouseout="this.style.display='none';">
                <li><a href="javascript:void(0);" onclick="change_area('111','北京')" num="111">北京</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('112','天津')" num="112">天津</a></li>   
                <li><a href="javascript:void(0);" onclick="change_area('113','河北')" num="113">河北</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('114','山西')" num="114">山西</a></li>    
                <li><a href="javascript:void(0);" onclick="change_area('115','内蒙古')" num="115">内蒙古</a></li>  
                <li><a href="javascript:void(0);" onclick="change_area('121','辽宁')" num="121">辽宁</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('122','吉林')" num="122">吉林</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('123','黑龙江')" num="123">黑龙江</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('131','上海')" num="131">上海</a></li>  
                <li><a href="javascript:void(0);" onclick="change_area('132','江苏')" num="132">江苏</a></li>  
                <li><a href="javascript:void(0);" onclick="change_area('133','浙江')" num="133">浙江</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('134','安徽')" num="134">安徽</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('135','福建')" num="135">福建</a></li>  
                <li><a href="javascript:void(0);" onclick="change_area('136','江西')" num="136">江西</a></li>  
                <li><a href="javascript:void(0);" onclick="change_area('137','山东')" num="137">山东</a></li>   
                <li><a href="javascript:void(0);" onclick="change_area('141','河南')" num="141">河南</a></li>       
                <li><a href="javascript:void(0);" onclick="change_area('142','湖北')" num="142">湖北</a></li>  
                <li><a href="javascript:void(0);" onclick="change_area('143','湖南')" num="143">湖南</a></li>       
                <li><a href="javascript:void(0);" onclick="change_area('144','广东')" num="144">广东</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('145','广西')" num="145">广西</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('146','海南')" num="146">海南</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('150','重庆')" num="150">重庆</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('151','四川')" num="151">四川</a></li>           
                <li><a href="javascript:void(0);" onclick="change_area('152','贵州')" num="152">贵州</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('153','云南')" num="153">云南</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('154','西藏')" num="154">西藏</a></li>   
                <li><a href="javascript:void(0);" onclick="change_area('161','陕西')" num="161">陕西</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('162','甘肃')" num="162">甘肃</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('163','青海')" num="163">青海</a></li> 
                <li><a href="javascript:void(0);" onclick="change_area('164','宁夏')" num="164">宁夏</a></li>
                <li><a href="javascript:void(0);" onclick="change_area('165','新疆')" num="165">新疆</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('171','台湾')" num="171">台湾</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('172','香港')" num="172">香港</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('173','澳门')" num="173">澳门</a></li>        
                <li><a href="javascript:void(0);" onclick="change_area('174','钓鱼岛')" num="174">钓鱼岛</a></li>                
            </ul>
        </div>
    </div>
</div>
</div>
<div id="header_end"></div>
<!--CreateDate  2016-09-28 19:00:01--><div style="position: relative;" class="logo_line_out">
<div class="logo_line" dd_name="搜索框">
    <div class="logo"><img src="image1/ddlogonew.gif" usemap="#logo_link">
                         <map name="logo_link" id="logo_link" dd_name="logo区"><area shape="rect" coords="0,18,200,93" href="http://www.dangdang.com/" title="当当" onfocus="this.blur();">
                         <area shape="rect" coords="200,18,320,93" href="http://www.dangdang.com/" title="" target="_top" onfocus="this.blur();"></map></div>
    <div class="search">
        <form action="http://search.dangdang.com/" name="searchform" id="form_search_new" onsubmit="return searchsubmit();" method="GET">
            <label for="key_S" class="label_search" id="label_key" onclick="this.style.color='rgb(255, 255, 255)';" style="visibility: visible; color: rgb(102, 102, 102);">女装秋季新品</label>
            <input value="" class="text gray" name="key" id="key_S" autocomplete="off" onclick="key_onclick(event);" onfocus="key_onfocus(event);" onblur="key_onblur();" onbeforepaste="onpaste_search();" type="text"><a href="javascript:void(0);" onclick="clearkeys();" class="del-keywords"></a><span class="select" onmouseover="allCategoryShow();" onmouseleave="allCategoryHide();" onmouseout="if(&quot;\v&quot;!=&quot;v&quot;){ allCategoryHide();}"><span id="Show_Category_Name" dd_name="全部分类">全部分类</span><span class="icon"></span>
                <div id="search_all_category" class="select_pop" style="height: 0px; padding: 0px; border-width: 0px;" dd_name="搜索分类">
                    <a href="javascript:void(0);" onclick="selectCategory('',this);"><span id="Show_Category_Name" dd_name="全部分类">全部分类</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory('100000',this);" dd_name="尾品汇"><span>尾品汇</span></a>
                                        <a href="http://customer.dangdang.com/profile/01.00.00.00.00.00" dd_name="图书"><span>图书</span></a>
                                        <a href="http://customer.dangdang.com/profile/03.00.00.00.00.00" dd_name="音像"><span>音像</span></a>
                                        <a href="http://customer.dangdang.com/profile/05.00.00.00.00.00" dd_name="影视"><span>影视</span></a>
                                        <a href="http://customer.dangdang.com/profile/98.00.00.00.00.00" dd_name="数字商品"><span>数字商品</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4002074,this);" dd_name="时尚美妆"><span>时尚美妆</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4001940,this);" dd_name="母婴用品"><span>母婴用品</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4002061,this);" dd_name="玩具"><span>玩具</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4004866,this);" dd_name="孕婴服饰"><span>孕婴服饰</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4004344,this);" dd_name="童装童鞋"><span>童装童鞋</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003900,this);" dd_name="家居日用"><span>家居日用</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003760,this);" dd_name="家具装饰"><span>家具装饰</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003844,this);" dd_name="服装"><span>服装</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003872,this);" dd_name="鞋"><span>鞋</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4001829,this);" dd_name="箱包皮具"><span>箱包皮具</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003639,this);" dd_name="手表饰品"><span>手表饰品</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003728,this);" dd_name="运动户外"><span>运动户外</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4002429,this);" dd_name="汽车用品"><span>汽车用品</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4002145,this);" dd_name="食品"><span>食品</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4006497,this);" dd_name="手机通讯"><span>手机通讯</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003613,this);" dd_name="数码影音"><span>数码影音</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4003819,this);" dd_name="电脑办公"><span>电脑办公</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4007241,this);" dd_name="大家电"><span>大家电</span></a>
                                        <a href="javascript:void(0);" onclick="selectCategory(4001001,this);" dd_name="家用电器"><span>家用电器</span></a>
                                    </div>
            </span>
            <input id="default_key" value="女装秋季新品" type="hidden">
            <input id="search_btn" dd_name="搜索按钮" style="display: none;" type="submit">
            <input id="SearchFromTop" style="display: none;" name="SearchFromTop" value="1" type="hidden">
            <input id="suggest_product_btn" name="suggestproduct_btn" style="display: none;" onclick="void(0)" type="button">
            <input id="suggest_class_btn" name="suggestclass_btn" style="display: none;" onclick="void(0)" type="button">
            <input id="suggest_searchkey_btn" name="suggestsearchkey_btn" style="display: none;" type="submit">
            <input id="catalog_S" name="catalog" value="" type="hidden">
            <input class="button" dd_name="搜索按钮" onclick="javascript:document.getElementById('search_btn').click();" type="button">
        </form>
    </div>
    <div class="search_bottom">
        <div class="search_hot"><a href="http://www.dangdang.com/sales/brands/" target="_top" style="margin-right: 0px;">热搜</a>: <a href="http://search.dangdang.com/?key=%C0%F1%C6%B7%BF%A8&amp;act=hot" name="hotword" target="_top">礼品卡</a><a href="http://search.dangdang.com/?key=%BC%AB%BC%F2%C9%FA%BB%EE&amp;act=hot" name="hotword" target="_top">极简生活</a><a href="http://search.dangdang.com/?key=%C1%AC%D2%C2%C8%B9&amp;act=hot" name="hotword" target="_top">连衣裙</a><a href="http://search.dangdang.com/?key=%C6%B7%C5%C6%C8%D5&amp;act=hot" name="hotword" target="_top">品牌日</a><a href="http://search.dangdang.com/?key=%C2%AC%CB%BC%BA%C6&amp;act=hot" name="hotword" target="_top">卢思浩</a><a href="http://search.dangdang.com/?key=%C2%FA299%BC%F5100&amp;act=hot" name="hotword" target="_top">满299减100</a></div>
        <a href="http://search.dangdang.com/advsearch" class="search_advs" target="_top" name="ddnav_adv_s" dd_name="高级搜索">高级搜索</a>
    </div>
    <div id="suggest_key" class="suggest_key" style="display: none;"></div>
    <div class="ddnew_cart"><a href="javascript:AddToShoppingCart(0);" name="购物车" dd_name="购物车"><i class="icon_card"></i>购物车<b id="cart_items_count">1</b></a></div>
    <div class="ddnew_order"><a target="_top" href="http://orderb.dangdang.com/myallorders.aspx" name="我的订单" dd_name="我的订单" rel="nofollow">我的订单<b id="unpaid_num" style="color: rgb(255, 40, 50); font: bold 12px Arial;"></b></a></div>
</div>
</div><div class="nav_top" dd_name="一级导航条">
<div class="nav_top">
    <ul>
        <li class="all"><a href="http://category.dangdang.com/?ref=www-0-C" id="a_category" name="cate" class="sort_button" onmouseover="showCategory('a_category','__ddnav_sort','http://static.dangdang.com/js1/header2012/categorydata_new.js?2016092820160906');" onmouseout="closeCategory('__ddnav_sort');" dd_name="全部商品分类" target="_top">全部商品分类</a></li>
                <li><a name="nav1" href="http://v.dangdang.com/" target="_top">尾品汇</a></li>
                <li><a name="nav1" href="http://book.dangdang.com/" target="_top">图书</a></li>
                <li><a name="nav1" href="http://e.dangdang.com/" target="_top">电子书</a></li>
                <li><a name="nav1" href="http://e.dangdang.com/new_original_index_page.html" target="_top">原创文学</a></li>
                <li><a name="nav1" href="http://fashion.dangdang.com/" target="_top">服装</a></li>
                <li><a name="nav1" href="http://fashion.dangdang.com/sports" target="_top">运动户外</a></li>
                <li><a name="nav1" href="http://baobao.dangdang.com/" target="_top">孕婴童</a></li>
                <li><a name="nav1" href="http://living.dangdang.com/" target="_top">家居</a></li>
                <li><a name="nav1" href="http://store.dangdang.com/145" target="_top">当当优品</a></li>
                <li><a name="nav1" href="http://food.dangdang.com/fresh" target="_top">地方特产</a></li>
                <li><a name="nav1" href="http://globaldangdang.hk/" target="_top">海外购</a></li>
                <li><a name="nav1" href="http://3c.dangdang.com/" target="_top">电器城</a></li>
            </ul>
</div>
</div><div class="home_nav_l_box">
<div class="home_nav_l" id="nav_l" style="display: none;">

<div class="new_pub_nav_box" style="display: none;" id="__ddnav_sort" onmouseover="showdiv(event,'__ddnav_sort');" onmouseout="hiddenCategory(event,'__ddnav_sort');">
    <span class="new_pub_line_a"></span>
    <span class="new_pub_line_b"></span>
    <div class="new_pub_nav_shadow" id="menu_list">
		<ul class="new_pub_nav" id="menulist_content">
            			<li class="n_b first" id="li_label_1" data-submenu-id="__ddnav_sort1" data_index="1" data_key="34102" data_type="'goods'">
                <span class="nav" id="categoryh_1">
                    <a name="newcate1" id="cate_34242" href="http://book.dangdang.com/" target="_top">图书</a>、<a name="newcate1" id="cate_34272" href="http://e.dangdang.com/" target="_top">电子书</a>、<a name="newcate1" id="cate_34252" href="http://book.dangdang.com/children?ref=book-01-A" target="_top">童书</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_2" data-submenu-id="__ddnav_sort2" data_index="2" data_key="55442" data_type="'book'">
                <span class="nav" id="categoryh_2">
                    <a name="newcate2" id="cate_55469" href="http://category.dangdang.com/cid10009416.html" target="_top">创意文具</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_3" data-submenu-id="__ddnav_sort3" data_index="3" data_key="34202" data_type="'goods'">
                <span class="nav" id="categoryh_3">
                    <a name="newcate3" id="cate_45522" href="http://fashion.dangdang.com/" target="_top">服饰</a>、<a name="newcate3" id="cate_53062" href="http://fashion.dangdang.com/underwear" target="_top">内衣</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_4" data-submenu-id="__ddnav_sort4" data_index="4" data_key="34212" data_type="'goods'">
                <span class="nav" id="categoryh_4">
                    <a name="newcate4" id="cate_45532" href="http://fashion.dangdang.com/shoes" target="_top">鞋靴</a>、<a name="newcate4" id="cate_53072" href="http://fashion.dangdang.com/bags" target="_top">箱包</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_5" data-submenu-id="__ddnav_sort5" data_index="5" data_key="34232" data_type="'goods'">
                <span class="nav" id="categoryh_5">
                    <a name="newcate5" id="cate_45552" href="http://fashion.dangdang.com/sports" target="_top">运动户外</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_6" data-submenu-id="__ddnav_sort6" data_index="6" data_key="34112" data_type="'goods'">
                <span class="nav" id="categoryh_6">
                    <a name="newcate6" id="cate_35772" href="http://mama.dangdang.com/" target="_top">孕</a>、<a name="newcate6" id="cate_35782" href="http://baby.dangdang.com/" target="_top">婴</a>、<a name="newcate6" id="cate_35792" href="http://kids.dangdang.com/" target="_top">童</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_7" data-submenu-id="__ddnav_sort7" data_index="7" data_key="34142" data_type="'goods'">
                <span class="nav" id="categoryh_7">
                    <a name="newcate7" id="cate_38642" href="http://living.dangdang.com/" target="_top">家居</a>、<a name="newcate7" id="cate_53032" href="http://living.dangdang.com/textile" target="_top">家纺</a>、<a name="newcate7" id="cate_38662" href="http://automobile.dangdang.com/" target="_top">汽车</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_8" data-submenu-id="__ddnav_sort8" data_index="8" data_key="34132" data_type="'goods'">
                <span class="nav" id="categoryh_8">
                    <a name="newcate8" id="cate_52282" href="http://living.dangdang.com/furniture" target="_top">家具</a>、<a name="newcate8" id="cate_54045" href="http://living.dangdang.com/decoration" target="_top">家装</a>、<a name="newcate8" id="cate_54046" href="http://health.dangdang.com/" target="_top">康体</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_9" data-submenu-id="__ddnav_sort9" data_index="9" data_key="34122" data_type="'goods'">
                <span class="nav" id="categoryh_9">
                    <a name="newcate9" id="cate_37332" href="http://cosmetic.dangdang.com/" target="_top">美妆</a>、<a name="newcate9" id="cate_54231" href="http://cosmetic.dangdang.com/" target="_top">个人护理</a>、<a name="newcate9" id="cate_54230" href="http://sex.dangdang.com/" target="_top">成人</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_10" data-submenu-id="__ddnav_sort10" data_index="10" data_key="34152" data_type="'goods'">
                <span class="nav" id="categoryh_10">
                    <a name="newcate10" id="cate_40152" href="http://food.dangdang.com/" target="_top">食品</a>、<a name="newcate10" id="cate_53794" href="http://food.dangdang.com/alcohol" target="_top">茶酒</a>、<a name="newcate10" id="cate_40162" href="http://food.dangdang.com/fresh" target="_top">生鲜</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_11" data-submenu-id="__ddnav_sort11" data_index="11" data_key="34222" data_type="'goods'">
                <span class="nav" id="categoryh_11">
                    <a name="newcate11" id="cate_54859" href="http://fashion.dangdang.com/watch" target="_top">腕表</a>、<a name="newcate11" id="cate_45542" href="http://fashion.dangdang.com/jewelry" target="_top">珠宝饰品</a>、<a name="newcate11" id="cate_53122" href="http://category.dangdang.com/cid4009587.html" target="_top">眼镜</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_12" data-submenu-id="__ddnav_sort12" data_index="12" data_key="34162" data_type="'goods'">
                <span class="nav" id="categoryh_12">
                    <a name="newcate12" id="cate_41592" href="http://3c.dangdang.com/mobile" target="_top">手机</a>、<a name="newcate12" id="cate_41602" href="http://3c.dangdang.com/digital" target="_top">数码</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_13" data-submenu-id="__ddnav_sort13" data_index="13" data_key="34172" data_type="'goods'">
                <span class="nav" id="categoryh_13">
                    <a name="newcate13" id="cate_42602" href="http://3c.dangdang.com/pc" target="_top">电脑办公</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_14" data-submenu-id="__ddnav_sort14" data_index="14" data_key="34182" data_type="'goods'">
                <span class="nav" id="categoryh_14">
                    <a name="newcate14" id="cate_44162" href="http://3c.dangdang.com/appliance" target="_top">家用电器</a></span><span class="sign"></span>
            </li>
            			<li class="n_b" id="li_label_15" data-submenu-id="__ddnav_sort15" data_index="15" data_key="54895" data_type="'goods'">
                <span class="nav" id="categoryh_15">
                    <a name="newcate15" id="cate_54896" href="http://giftcard.dangdang.com/" target="_top">当当礼品卡</a>、<a name="newcate15" id="cate_55733" href="http://category.dangdang.com/cid11618.html" target="_top">生活服务</a></span><span class="sign"></span>
            </li>
            		</ul>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort1"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort2"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort3"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort4"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort5"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort6"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort7"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort8"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort9"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort10"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort11"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort12"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort13"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort14"></div>
                <div class="new_pub_nav_pop" style="display: none;" id="__ddnav_sort15"></div>
            </div>
</div>
</div></div>
<div class="sub">
    <ul>
                <li><a name="nav2" target="_top" href="http://bang.dangdang.com/books/bestsellers/01.00.00.00.00.00-recent7-0-0-1-1">图书畅销榜</a></li>
                        <li><a name="nav2" target="_top" href="http://bang.dangdang.com/books/childrensbooks">童书榜</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4002778.html">女士服装</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4002742.html">男士服装</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4009359.html">童装</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4003728.html">运动户外</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4003872.html">鞋靴</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4001829.html">箱包皮具</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4001976.html">奶粉</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4002074.html">美妆</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4008009.html">生鲜</a></li>
                        <li><a name="nav2" target="_top" href="http://category.dangdang.com/cid4002061.html">玩具童车</a></li>
                    </ul>
</div></div>
<script type="text/javascript">
var newsuggesturl = "http://schprompt.dangdang.com/suggest_new.php?";
var nick_num = 0;
initHeaderOperate();Suggest_Initialize("key_S");
if(!window.onload){
    window.onload=function(){if(sug_gid("label_key").style.visibility=="visible")sug_gid(search_input_id).value="";}
}else{
    var funcload=window.onload;
    window.onload=function(){funcload();if(sug_gid("label_key").style.visibility=="visible")sug_gid(search_input_id).value="";}
}
ddmenuaim(document.getElementById("menulist_content"),{activate: activateSubmenu,deactivate: deactivateSubmenu});
</script><script src="queryunpaid" type="text/javascript"></script>       <!--操作区开始-->
        
 <div class="mydnew_break">您现在的位置：<a href="http://www.dangdang.com/">当当</a> &gt; <span><a href="http://myhome.dangdang.com/">我的当当</a></span> &gt; <span>个人档案</span> </div> 
    
    
     <!--操作区结束-->
        <form id="form1" method="post" action="http://customer.dangdang.com/profile/Myarchives.php?save=ok" onsubmit="return Chksubmit();" enctype="multipart/form-data">
            <script language="javascript">
                <!--
                var currentobj;
                var parentobj,childobj,select1_s1,select2_sel,select3_sel,select2,select3;
                var c_parent_value='';
                var c_child_value='';
                function dp(parent,child){
                    if (parent.value=='0' || parent.value=='')
                    {
                        sethidvalue('');
                        div_hid_control('ctl04_select3');
                        return;
                    }
                    div_vis_control('ctl04_select3');
                    currentobj = parent;
                    if (currentobj.id!='select3_sel'){
                        parentobj=parent;
                        childobj = child;
                        var flag = parentobj.value;
                        send_request('select_area_option.php?flag='+flag+'&child='+child);
                    }
                    else{
                        return;
                    }
                }
                function dp_new(object,value1,divname,value2){
                    currentobj = parent;
                    if (currentobj.id!='select3_sel'){
                        parentobj=object;
                        childobj = divname;
                        send_request_new('select_option_init.php?flag='+value1+'&child='+divname+'&item='+value2);
                    }
                    else{
                        GetInfo('select3_sel');
                        return;
                    }
                }
                function dpstr(parentvalue,childvalue)
                {
                    var ctl04_s2 = document.getElementById('ctl04_s2');
                    var ctl04_s1 = document.getElementById('ctl04_s1');
                    ctl04_s1.value=1;
                    if (parentvalue!='1'){
                        div_vis_control('select2');
                        div_vis_control('ctl04_select3');
                        ctl04_s2.value = parentvalue;
                        var select3_sel = document.getElementById('select3_sel');
                        var select2_sel = document.getElementById('ctl04_s2');
                        dp_new(select2_sel,parentvalue,'ctl04_select3',childvalue);
                    }
                    else{
                        div_vis_control('select2');
                        div_hid_control('ctl04_select3');
                        ctl04_s2.value = childvalue;
                    }
                    c_parent_value=parentvalue;
                    c_child_value=childvalue;
                }
                function chg(obj){
                    var div2 = document.getElementById('select2');
                    var div3 = document.getElementById('ctl04_select3');
                    if(obj.value !=1){
                        div2.style.visibility='hidden';
                        div3.style.visibility='hidden';
                        SevValue(obj);
                    }
                    else{
                        div2.style.visibility='visible';
                        sethidvalue('');
                    }
                }
                function CheckInit(){
                    var ctl04_s1 = document.getElementById('ctl04_s1');
                    if (ctl04_s1.value!=1){
                        var div2 = document.getElementById('select2');
                        var div3 = document.getElementById('ctl04_select3');
                        div2.style.visibility='hidden';
                        div3.style.visibility='hidden';
                    }
                }
                function SevValue(val){
                    sethidvalue(val.value);
                }
                function SevValueNull(val){
                    sethidvalue('');
                }
                -->
            </script>

            <div class="main_frame">
	<!--左栏开始-->
		      		<div class="mydang_left">
                    <div class="mydang_left_inner">
                        <h3 class="mydang_left_title border_top0">我的常用链接<a id="DocPersonal_set" name="setting" href="javascript:showDocSetPage()" style="font-size: 12px; color: rgb(26, 102, 179); font-family: 宋体; font-weight: normal; padding-left: 40px;">设置</a></h3>
                        <ul style="padding: 0px;" class="my_href" id="myfavoriteLink"><input id="rememberCustomerID" value="0" type="hidden"></ul><h3 class="mydang_left_title">我的交易<a class="slide_up" id="class600" href="javascript:void(click_a('class600','display600'))"></a></h3><ul class="my_content" style="display: block;" id="display600"><li><a class="" target="_parent" href="http://orderb.dangdang.com/myallorders.aspx" name="myallorders">我的订单</a>
</li><li><a class="" target="_parent" href="http://e.dangdang.com/ebook/listUserEbooks.do" name="myebook">电子书</a>
</li><li><a class="" target="_parent" href="http://newaccount.dangdang.com/payhistory/mypaymenthistory.aspx" name="mypaymenthistory">我的账单</a>
</li></ul><h3 class="mydang_left_title">我的收藏<a class="slide_up" id="class610" href="javascript:void(click_a('class610','display610'))"></a></h3><ul class="my_content" style="display: block;" id="display610"><li><a class="" target="_parent" href="http://wish.dangdang.com/wishlist/cust_wish_list.php" name="wishlist">商品收藏</a>
</li><li><a class="" target="_parent" href="http://wish.dangdang.com/collectshop/collect_list.php" name="collectlist">店铺收藏</a>
</li></ul><h3 class="mydang_left_title">我的钱包<a class="slide_up" id="class620" href="javascript:void(click_a('class620','display620'))"></a></h3><ul class="my_content" style="display: block;" id="display620"><li><a class="" target="_parent" href="http://newaccount.dangdang.com/payhistory/mymoney.aspx" name="mymoneys">我的礼品卡</a>
</li><li><a class="" target="_parent" href="http://newaccount.dangdang.com/payhistory/mycoupon.aspx" name="mycoupons">我的礼券</a>
</li><li><a class="" target="_parent" href="http://newaccount.dangdang.com/payhistory/mybalance.aspx" name="mybalance">我的余额</a>
</li><li><a class="" target="_parent" href="http://my.dangdang.com/memberpoints/index.aspx" name="points_index_list">我的积分</a>
</li></ul><h3 class="mydang_left_title">售后服务<a class="slide_up" id="class630" href="javascript:void(click_a('class630','display630'))"></a></h3><ul class="my_content" style="display: block;" id="display630"><li><a class="" target="_parent" href="http://return.dangdang.com/reverseapplystart.aspx" name="re_list">申请/查询退换货</a>
</li><li><a class="" target="_parent" href="http://order.dangdang.com/InvoiceApply/InvoiceReissue.aspx" name="myinvoice">补开/合并发票</a>
</li></ul><h3 class="mydang_left_title">个人中心<a class="slide_up" id="class640" href="javascript:void(click_a('class640','display640'))"></a></h3><ul class="my_content" style="display: block;" id="display640"><li><a href="http://customer.dangdang.com/profile/" class="on">个人信息</a>
</li><li><a class="" target="_parent" href="http://safe.dangdang.com/" name="safe_center">安全中心</a>
</li><li><a class="" target="_parent" href="http://customer.dangdang.com/myaddress/myaddress.php" name="myaddress">收货地址</a>
</li><li><a class="" target="_parent" href="http://customer.dangdang.com/onekey_buy/info.php" name="onekeybuy">一键购买地址</a>
</li><li><a class="" target="_parent" href="http://customer.dangdang.com/message/email_sub.php" name="myfeed">邮件/短信订阅</a>
</li></ul><h3 class="mydang_left_title">社区<a class="slide_up" id="class650" href="javascript:void(click_a('class650','display650'))"></a></h3><ul class="my_content" style="display: block;" id="display650"><li><a class="" target="_parent" href="http://comm.dangdang.com/review/reviewbuy.php" name="myreview">评论/晒单</a>
</li><li><a class="" target="_parent" href="http://comm.dangdang.com/question/myquestion.php" name="myquestion">提问/回答</a>
</li><li><a class="" target="_parent" href="http://comm.dangdang.com/interesting/interesting.php" name="myinteresting">好友关注</a>
</li><li><a class="" target="_parent" href="http://comm.dangdang.com/bookshelf/mybookshelf.php" name="mybookmark">我的书架</a>
</li><li><a class="" target="_parent" href="http://comm.dangdang.com/message/message.php" name="mymessage">我的留言板</a>
</li></ul><script type="text/javascript">
function addScriptTag(src){
     var script = document.createElement('script');
     script.setAttribute('type','text/javascript');
     script.src = src;
     document.body.appendChild(script);
}

function getunreadmessagecount(){

var customer_id = getCookie_ones('customerid','dang');
        var perm_id = getCookie_ones('__permanent_id','');
        var message_url = 'http://message.dangdang.com/api/msg_count_api.php?customer_id='+customer_id+'&perm_id='+perm_id+'&data_type=jsonp&callback=message_result';
 addScriptTag(message_url);     
  
}
function message_result(data) {

    if(data['errorCode']=='200'){
        var jytx_num = data['data']['1'];
        var zhtx_num = data['data']['2'];
        var sqxx_num = data['data']['3'];
        var fwtz_num = data['data']['4'];
        var scjtx_num = data['data']['5'];
        if(parseInt(jytx_num)>=100){jytx_num = '99+';}
        if(parseInt(zhtx_num)>=100){zhtx_num = '99+';}
        if(parseInt(sqxx_num)>=100){sqxx_num = '99+';}
        if(parseInt(fwtz_num)>=100){fwtz_num = '99+';}
        if(parseInt(scjtx_num)>=100){scjtx_num = '99+';}
        var znx_sum = parseInt(jytx_num)+parseInt(zhtx_num)+parseInt(sqxx_num)+parseInt(fwtz_num)+parseInt(scjtx_num);

        if(znx_sum>=100){znx_sum = '99+';}
            var obj = document.getElementById('leftmenumymsgcount');
            obj.innerHTML = '（'+znx_sum+'）';

            }

}
function getCookie_ones(name,type){
  var cookies=document.cookie.split(';')  ;
  var temp ;
  var find_name;
  if(type=='dangdang' || type=='ddoy'|| type=='login'){
    if(type == 'dangdang'){find_name = 'dangdang.com=';}
    if(type == 'ddoy'){find_name = 'ddoy=';}
    if(type == 'login'){find_name = 'login.dangdang.com=';}
    var dangdangcookie='';
     for(i=0;i<cookies.length;i++){
        if(cookies[i].indexOf(find_name)>-1){
            dangdangcookie=cookies[i].split('&');
            for(x=0;x<dangdangcookie.length;x++){
                 temp = dangdangcookie[x].split('=')  ;
                 if(header_trims(temp[0])==name){
                     return unescape(temp[1])
                 }
            }
        }
     }
  }else if(type=='login_comm'){
      for(j=0;j<cookies.length;j++){
          if(cookies[j].indexOf('login.dangdang.com=')>0){
              dangdangcookie=cookies[j].split('.ASPXAUTH=');
              return dangdangcookie[1];
          }
      }
  }else if(type=='dang'){
      for(j=0;j<cookies.length;j++){
          if(cookies[j].indexOf('dangdang.com=')==1){
              dangdangcookie=cookies[j].split('customerid=');
              temp = dangdangcookie[1].split('&');
              return temp[0];
          }
      }
  }else{
       for(i=0;i<cookies.length;i++){
        if(cookies[i].indexOf('dangdang.com=')<0){
            temp = cookies[i].split('=')  ;
             if(header_trims(temp[0])==name){
                 return unescape(temp[1]);
             }
        }
      }
  }
  return '';
}
function header_trims(str)
{
 return str.replace(/(\s*$)|(^\s*)/g, '');
}

window.onload=function (){
    doc_prev_referer = ddclick_page_tracker .__dd_referrer;
    doc_referer = ddclick_page_tracker .__dd_url;
    getunreadmessagecount();
};


</script>                    </div>
                    </div>








   


<script type="text/javascript">

var StringBuilder = function(){
    this.cache = [];
    if(arguments.length)this.append.apply(this,arguments);
}
StringBuilder.prototype = {
    prepend:function(){
        this.cache.splice.apply(this.cache,[].concat.apply([0,0],arguments));
        return this;
    },
    append:function(){
        this.cache = this.cache.concat.apply(this.cache,arguments);
        return this;
    },
    toString:function(){
        return this.getString();
    },
    getString:function(){
        return this.cache.join('');
    }
}


//个性化设置弹出
function doc_show_window(survey_url)
{
    var sb = new StringBuilder('<div id="e1" style="width:336px; border:solid 2px #447aa9; background-color:#f7fff8;">');
    var sb = new StringBuilder('<div id="e1" class="new_window">');
    sb.append('<div id="handle" class="wind_top">');
    sb.append('<div  class="title_left">用户常用链接设置<\/div>');
    sb.append('<div class="w_close"><a href=javascript:hidden1();><img src="http://my.dangdang.com\/myhome\/images\/windo_close.gif" title="关闭窗口"\/><\/a><\/div>');

    sb.append('<\/div>');

     sb.append('<iframe   src="',survey_url,'" style="background-color:#f7fff8;width:336px;height:800px;" frameborder="0" scrolling="no" name="survey_frame" id="survey_frame" ></iframe>');
     sb.append('<\/div>');
    return sb.getString();
}


function IsIE(){
		return ( navigator.appName=="Microsoft Internet Explorer" );
}

function IsNav(){
	return ( navigator.appName=="Netscape" );
}

var survey_url="http://my.dangdang.com/myhome/DocPersonalMenu.aspx";

function showDocSetPage()
{
   var lin =  document.getElementById("tag_box1");

           lin.innerHTML = doc_show_window(survey_url);

            new dragObject(lin, "handle", null, null, null, null, null, false);
             var pos = getPosition(document.getElementById("DocPersonal_set"));
             lin.style.left= pos.x +80 + "px";
             lin.style.top = pos.y -10 + "px";

            lin.style.display="block";

}


function windowMoveToCenterfororderlistsurvey()
{
    var lin =  document.getElementById("tag_box1");
    if(document.documentElement)
    {
        if(document.documentElement.clientWidth > 320)
        {
            lin.style.left= ((document.documentElement.clientWidth-320)/2 + document.documentElement.scrollLeft)  + "px";
        }
        else
        {
            lin.style.left= "10px";
        }

        if(document.documentElement.clientHeight > 200)
        {
            var xh = (document.documentElement.clientHeight-200)/2 + document.documentElement.scrollTop ;
            lin.style.top=((document.documentElement.clientHeight-200)/2 )  + "px";
        }
        else
        {
            lin.style.top= "10px";
        }
    }

    m_is_windowMoveToCenter = true;
}


function hidden1()
{
    var lin =  document.getElementById("tag_box1");
    if(lin)lin.style.display="none";
}

function NormalBind(str)
{
 document.getElementById("myfavoriteLink").innerHTML=str;
}

function GetCustid()
{
 return  document.getElementById("rememberCustomerID").value;
}

/////////////////////////


function Position(x, y)
{
  this.X = x;
  this.Y = y;

  this.Add = function(val)
  {
    var newPos = new Position(this.X, this.Y);
    if(val != null)
    {
      if(!isNaN(val.X))
        newPos.X += val.X;
      if(!isNaN(val.Y))
        newPos.Y += val.Y
    }
    return newPos;
  }

  this.Subtract = function(val)
  {
    var newPos = new Position(this.X, this.Y);
    if(val != null)
    {
      if(!isNaN(val.X))
        newPos.X -= val.X;
      if(!isNaN(val.Y))
        newPos.Y -= val.Y
    }
    return newPos;
  }

  this.Min = function(val)
  {
    var newPos = new Position(this.X, this.Y)
    if(val == null)
      return newPos;

    if(!isNaN(val.X) && this.X > val.X)
      newPos.X = val.X;
    if(!isNaN(val.Y) && this.Y > val.Y)
      newPos.Y = val.Y;

    return newPos;
  }

  this.Max = function(val)
  {
    var newPos = new Position(this.X, this.Y)
    if(val == null)
      return newPos;

    if(!isNaN(val.X) && this.X < val.X)
      newPos.X = val.X;
    if(!isNaN(val.Y) && this.Y < val.Y)
      newPos.Y = val.Y;

    return newPos;
  }

  this.Bound = function(lower, upper)
  {
    var newPos = this.Max(lower);
    return newPos.Min(upper);
  }

  this.Check = function()
  {
    var newPos = new Position(this.X, this.Y);
    if(isNaN(newPos.X))
      newPos.X = 0;
    if(isNaN(newPos.Y))
      newPos.Y = 0;
    return newPos;
  }

  this.Apply = function(element)
  {
    if(typeof(element) == "string")
      element = document.getElementById(element);
    if(element == null)
      return;
    if(!isNaN(this.X))
      element.style.left = this.X + 'px';
    if(!isNaN(this.Y))
      element.style.top = this.Y + 'px';
  }
}

function hookEvent(element, eventName, callback)
{
  if(typeof(element) == "string")
    element = document.getElementById(element);
  if(element == null)
    return;
  if(element.addEventListener)
  {
    element.addEventListener(eventName, callback, false);
  }
  else if(element.attachEvent)
    element.attachEvent("on" + eventName, callback);
}

function unhookEvent(element, eventName, callback)
{
  if(typeof(element) == "string")
    element = document.getElementById(element);
  if(element == null)
    return;
  if(element.removeEventListener)
    element.removeEventListener(eventName, callback, false);
  else if(element.detachEvent)
    element.detachEvent("on" + eventName, callback);
}

function cancelEvent(e)
{
  e = e ? e : window.event;
  if(e.stopPropagation)
    e.stopPropagation();
  if(e.preventDefault)
    e.preventDefault();
  e.cancelBubble = true;
  e.cancel = true;
  e.returnValue = false;
  return false;
}

function getEventTarget(e)
{
  e = e ? e : window.event;
  return e.target ? e.target : e.srcElement;
}

function absoluteCursorPostion(eventObj)
{
  eventObj = eventObj ? eventObj : window.event;

  if(isNaN(window.scrollX))
    return new Position(eventObj.clientX + document.documentElement.scrollLeft + document.body.scrollLeft,
      eventObj.clientY + document.documentElement.scrollTop + document.body.scrollTop);
  else
    return new Position(eventObj.clientX + window.scrollX, eventObj.clientY + window.scrollY);
}

function dragObject(element, attachElement, lowerBound, upperBound, startCallback, moveCallback, endCallback, attachLater)
{
  if(typeof(element) == "string")
    element = document.getElementById(element);
  if(element == null)
      return;

  if(lowerBound != null && upperBound != null)
  {
    var temp = lowerBound.Min(upperBound);
    upperBound = lowerBound.Max(upperBound);
    lowerBound = temp;
  }

  var cursorStartPos = null;
  var elementStartPos = null;
  var dragging = false;
  var listening = false;
  var disposed = false;

  function dragStart(eventObj)
  {
    if(dragging || !listening || disposed) return;
    dragging = true;

    if(startCallback != null)
      startCallback(eventObj, element);

    cursorStartPos = absoluteCursorPostion(eventObj);

    elementStartPos = new Position(parseInt(element.style.left), parseInt(element.style.top));

    elementStartPos = elementStartPos.Check();

    hookEvent(document, "mousemove", dragGo);
    hookEvent(document, "mouseup", dragStopHook);

    return cancelEvent(eventObj);
  }

  function dragGo(eventObj)
  {
    if(!dragging || disposed) return;

    var newPos = absoluteCursorPostion(eventObj);
    newPos = newPos.Add(elementStartPos).Subtract(cursorStartPos);

    newPos = newPos.Bound(lowerBound, upperBound)
    newPos.Apply(element);
    if(moveCallback != null)
      moveCallback(newPos, element, eventObj);

    return cancelEvent(eventObj);
  }

  function dragStopHook(eventObj)
  {
    dragStop();
    return cancelEvent(eventObj);
  }

  function dragStop()
  {
    if(!dragging || disposed) return;
    unhookEvent(document, "mousemove", dragGo);
    unhookEvent(document, "mouseup", dragStopHook);
    cursorStartPos = null;
    elementStartPos = null;
    if(endCallback != null)
      endCallback(element);
    dragging = false;
  }

  this.Dispose = function()
  {
    if(disposed) return;
    this.StopListening(true);
    element = null;
    attachElement = null
    lowerBound = null;
    upperBound = null;
    startCallback = null;
    moveCallback = null
    endCallback = null;
    disposed = true;
  }

  this.StartListening = function()
  {
    if(listening || disposed) return;
    listening = true;
    hookEvent(attachElement, "mousedown", dragStart);
  }

  this.StopListening = function(stopCurrentDragging)
  {
    if(!listening || disposed) return;
    unhookEvent(attachElement, "mousedown", dragStart);
    listening = false;

    if(stopCurrentDragging && dragging)
      dragStop();
  }

  this.IsDragging = function(){ return dragging; }
  this.IsListening = function() { return listening; }
  this.IsDisposed = function() { return disposed; }

  if(typeof(attachElement) == "string")
    attachElement = document.getElementById(attachElement);
  if(attachElement == null)
    attachElement = element;

  if(!attachLater)
    this.StartListening();
}


function getPosition(o){

	var nLt=0;
	var nTp=0;
	var offsetParent = o;

	while (offsetParent!=null && offsetParent!=document.body) {

			nLt+=offsetParent.offsetLeft;
			nTp+=offsetParent.offsetTop;

	if(!IsNav()){
		parseInt(offsetParent.currentStyle.borderLeftWidth)>0?nLt+=parseInt(offsetParent.currentStyle.borderLeftWidth):"";
		parseInt(offsetParent.currentStyle.borderTopWidth)>0?nTp+=parseInt(offsetParent.currentStyle.borderTopWidth):"";
		}
	offsetParent=offsetParent.offsetParent;
	}

	return {x:nLt, y:nTp};
}




   </script>


    <script language="javascript" type="text/javascript">
        /***
        *功能：隐藏和显示div
        *参数divDisplay：html标签id
        ***/
        function click_a(changecss,divDisplay)
        {

            if(document.getElementById(divDisplay).style.display != "block")
            {
   document.getElementById(changecss).className  = "slide_up";
                document.getElementById(divDisplay).style.display = "block";
            }
            else
            {

                document.getElementById(divDisplay).style.display = "none";
                   document.getElementById(changecss).className  = "slide_down";
            }
        }
    </script>


<div id="tag_box1" style="display: none; position: absolute; z-index: 20000;"></div>
<div id="callbackjs"><script src="doccallbackjs.aspx" type="text/javascript"></script></div>
  <script type="text/javascript" language="javascript">
  document.domain = "dangdang.com";
 </script>





    	<!--左栏结束-->
                <!--右栏开始-->
                <div class="account_right" id="your_position">
                    <div>
                        <div class="archives_title">
                            <h2>编辑个人档案<span class=" gray666 f12 bnone"> (带<span class="red">*</span>号的项目为必填项)</span></h2>
                        </div>
                        <!--更改头像-->
                        <div class="edit_message">
                            <div class="edit_photo">
                                <div class="photo_prev">
                                    <div class="photo_prev_head">
                                        <img id="img_head_select" src="img_big.php" height="96" width="96"></div>
                                </div>
                                <div class="photo_browse">
                                    <input id="hiddenphototypeid" value="1" type="hidden">
                                    <input id="hinddenimgindex" value="0" type="hidden">
                                    <input name="is_from_mydd" value="false" type="hidden">

                                    <!--上传状态开始-->
                                    <!--上传状态结束-->
                                    <p class="go_choice2">您可以在下方选择自己喜欢的头像：</p>
                                    <span class=" gray_b3">(更新后的头像将稍后显示在其它页面)</span>
                                    <div class="clear"></div>
                                    <div class="all_photo_title">
                                        <div classname="all_photo_title_other" class="all_photo_title_other" id="head_type_0" onmouseover="javascript:ShowHeadPhotoType(0)">酷男</div>

                                        <div classname="all_photo_title_mo" class="all_photo_title_mo" id="head_type_1" onmouseover="javascript:ShowHeadPhotoType(1)">靓女</div>
                                        <div classname="all_photo_title_other" class="all_photo_title_other" id="head_type_2" onmouseover="javascript:ShowHeadPhotoType(2)">可爱动物</div>
                                        <div classname="all_photo_title_other" class="all_photo_title_other" id="head_type_3" onmouseover="javascript:ShowHeadPhotoType(3)">个性</div>
                                    </div>
                                    <div class="clear"></div>
                                    <div style="display: none;" class="all_photo" id="all_photo_0">
                                        <div id="head_index_1" onmouseover="mouseoverchangeclass(1)" onmouseout="mouseoutchangeclass(1)"><a onclick="javascript:ChangeClientHeadPhoto(1)" style="cursor:pointer"><img src="image1/pic_head_1_s.gif"></a></div>
                                        <div id="head_index_2" onmouseover="mouseoverchangeclass(2)" onmouseout="mouseoutchangeclass(2)"><a onclick="javascript:ChangeClientHeadPhoto(2)" style="cursor:pointer"><img src="image1/pic_head_2_s.gif"></a></div>
                                        <div id="head_index_3" onmouseover="mouseoverchangeclass(3)" onmouseout="mouseoutchangeclass(3)"><a onclick="javascript:ChangeClientHeadPhoto(3)" style="cursor:pointer"><img src="image1/pic_head_3_s.gif"></a></div>
                                        <div id="head_index_4" onmouseover="mouseoverchangeclass(4)" onmouseout="mouseoutchangeclass(4)"><a onclick="javascript:ChangeClientHeadPhoto(4)" style="cursor:pointer"><img src="image1/pic_head_4_s.gif"></a></div>
                                        <div id="head_index_5" onmouseover="mouseoverchangeclass(5)" onmouseout="mouseoutchangeclass(5)"><a onclick="javascript:ChangeClientHeadPhoto(5)" style="cursor:pointer"><img src="image1/pic_head_5_s.gif"></a></div>
                                        <div id="head_index_6" onmouseover="mouseoverchangeclass(6)" onmouseout="mouseoutchangeclass(6)"><a onclick="javascript:ChangeClientHeadPhoto(6)" style="cursor:pointer"><img src="image1/pic_head_6_s.gif"></a></div>
                                        <div id="head_index_7" onmouseover="mouseoverchangeclass(7)" onmouseout="mouseoutchangeclass(7)"><a onclick="javascript:ChangeClientHeadPhoto(7)" style="cursor:pointer"><img src="image1/pic_head_7_s.gif"></a></div>
                                        <div id="head_index_8" onmouseover="mouseoverchangeclass(8)" onmouseout="mouseoutchangeclass(8)"><a onclick="javascript:ChangeClientHeadPhoto(8)" style="cursor:pointer"><img src="image1/pic_head_8_s.gif"></a></div>
                                        <div id="head_index_9" onmouseover="mouseoverchangeclass(9)" onmouseout="mouseoutchangeclass(9)"><a onclick="javascript:ChangeClientHeadPhoto(9)" style="cursor:pointer"><img src="image1/pic_head_9_s.gif"></a></div>
                                        <div id="head_index_10" onmouseover="mouseoverchangeclass(10)" onmouseout="mouseoutchangeclass(10)"><a onclick="javascript:ChangeClientHeadPhoto(10)" style="cursor:pointer"><img src="image1/pic_head_10_s.gif"></a></div>
                                    </div>
                                    <div class="all_photo" id="all_photo_1" style="display: block;">
                                        <div id="head_index_11" onmouseover="mouseoverchangeclass(11)" onmouseout="mouseoutchangeclass(11)"><a onclick="javascript:ChangeClientHeadPhoto(11)"><img src="image1/pic_head_11_s.gif"></a></div>
                                        <div id="head_index_12" onmouseover="mouseoverchangeclass(12)" onmouseout="mouseoutchangeclass(12)"><a onclick="javascript:ChangeClientHeadPhoto(12)"><img src="image1/pic_head_12_s.gif"></a></div>
                                        <div id="head_index_13" onmouseover="mouseoverchangeclass(13)" onmouseout="mouseoutchangeclass(13)"><a onclick="javascript:ChangeClientHeadPhoto(13)"><img src="image1/pic_head_13_s.gif"></a></div>
                                        <div id="head_index_14" onmouseover="mouseoverchangeclass(14)" onmouseout="mouseoutchangeclass(14)"><a onclick="javascript:ChangeClientHeadPhoto(14)"><img src="image1/pic_head_14_s.gif"></a></div>
                                        <div id="head_index_15" onmouseover="mouseoverchangeclass(15)" onmouseout="mouseoutchangeclass(15)"><a onclick="javascript:ChangeClientHeadPhoto(15)"><img src="image1/pic_head_15_s.gif"></a></div>
                                        <div id="head_index_16" onmouseover="mouseoverchangeclass(16)" onmouseout="mouseoutchangeclass(16)"><a onclick="javascript:ChangeClientHeadPhoto(16)"><img src="image1/pic_head_16_s.gif"></a></div>
                                        <div id="head_index_17" onmouseover="mouseoverchangeclass(17)" onmouseout="mouseoutchangeclass(17)"><a onclick="javascript:ChangeClientHeadPhoto(17)"><img src="image1/pic_head_17_s.gif"></a></div>
                                        <div id="head_index_18" onmouseover="mouseoverchangeclass(18)" onmouseout="mouseoutchangeclass(18)"><a onclick="javascript:ChangeClientHeadPhoto(18)"><img src="image1/pic_head_18_s.gif"></a></div>
                                        <div id="head_index_19" onmouseover="mouseoverchangeclass(19)" onmouseout="mouseoutchangeclass(19)"><a onclick="javascript:ChangeClientHeadPhoto(19)"><img src="image1/pic_head_19_s.gif"></a></div>
                                        <div id="head_index_20" onmouseover="mouseoverchangeclass(20)" onmouseout="mouseoutchangeclass(20)"><a onclick="javascript:ChangeClientHeadPhoto(20)"><img src="image1/pic_head_20_s.gif"></a></div>
                                    </div>
                                    <div class="all_photo" id="all_photo_2" style="display: none;">
                                        <div id="head_index_21" onmouseover="mouseoverchangeclass(21)" onmouseout="mouseoutchangeclass(21)"><a onclick="javascript:ChangeClientHeadPhoto(21)"><img src="image1/pic_head_21_s.gif"></a></div>
                                        <div id="head_index_22" onmouseover="mouseoverchangeclass(22)" onmouseout="mouseoutchangeclass(22)"><a onclick="javascript:ChangeClientHeadPhoto(22)"><img src="image1/pic_head_22_s.gif"></a></div>
                                        <div id="head_index_23" onmouseover="mouseoverchangeclass(23)" onmouseout="mouseoutchangeclass(23)"><a onclick="javascript:ChangeClientHeadPhoto(23)"><img src="image1/pic_head_23_s.gif"></a></div>
                                        <div id="head_index_24" onmouseover="mouseoverchangeclass(24)" onmouseout="mouseoutchangeclass(24)"><a onclick="javascript:ChangeClientHeadPhoto(24)"><img src="image1/pic_head_24_s.gif"></a></div>
                                        <div id="head_index_25" onmouseover="mouseoverchangeclass(25)" onmouseout="mouseoutchangeclass(25)"><a onclick="javascript:ChangeClientHeadPhoto(25)"><img src="image1/pic_head_25_s.gif"></a></div>
                                        <div id="head_index_26" onmouseover="mouseoverchangeclass(26)" onmouseout="mouseoutchangeclass(26)"><a onclick="javascript:ChangeClientHeadPhoto(26)"><img src="image1/pic_head_26_s.gif"></a></div>
                                        <div id="head_index_27" onmouseover="mouseoverchangeclass(27)" onmouseout="mouseoutchangeclass(27)"><a onclick="javascript:ChangeClientHeadPhoto(27)"><img src="image1/pic_head_27_s.gif"></a></div>
                                        <div id="head_index_28" onmouseover="mouseoverchangeclass(28)" onmouseout="mouseoutchangeclass(28)"><a onclick="javascript:ChangeClientHeadPhoto(28)"><img src="image1/pic_head_28_s.gif"></a></div>
                                        <div id="head_index_29" onmouseover="mouseoverchangeclass(29)" onmouseout="mouseoutchangeclass(29)"><a onclick="javascript:ChangeClientHeadPhoto(29)"><img src="image1/pic_head_29_s.gif"></a></div>
                                        <div id="head_index_30" onmouseover="mouseoverchangeclass(30)" onmouseout="mouseoutchangeclass(30)"><a onclick="javascript:ChangeClientHeadPhoto(30)"><img src="image1/pic_head_30_s.gif"></a></div>
                                    </div>
                                    <div class="all_photo" id="all_photo_3" style="display: none;">
                                        <div id="head_index_31" onmouseover="mouseoverchangeclass(31)" onmouseout="mouseoutchangeclass(31)"><a onclick="javascript:ChangeClientHeadPhoto(31)"><img src="image1/pic_head_31_s.gif"></a></div>
                                        <div id="head_index_32" onmouseover="mouseoverchangeclass(32)" onmouseout="mouseoutchangeclass(32)"><a onclick="javascript:ChangeClientHeadPhoto(32)"><img src="image1/pic_head_32_s.gif"></a></div>
                                        <div id="head_index_33" onmouseover="mouseoverchangeclass(33)" onmouseout="mouseoutchangeclass(33)"><a onclick="javascript:ChangeClientHeadPhoto(33)"><img src="image1/pic_head_33_s.gif"></a></div>
                                        <div id="head_index_34" onmouseover="mouseoverchangeclass(34)" onmouseout="mouseoutchangeclass(34)"><a onclick="javascript:ChangeClientHeadPhoto(34)"><img src="image1/pic_head_34_s.gif"></a></div>
                                        <div id="head_index_35" onmouseover="mouseoverchangeclass(35)" onmouseout="mouseoutchangeclass(35)"><a onclick="javascript:ChangeClientHeadPhoto(35)"><img src="image1/pic_head_35_s.gif"></a></div>
                                        <div id="head_index_36" onmouseover="mouseoverchangeclass(36)" onmouseout="mouseoutchangeclass(36)"><a onclick="javascript:ChangeClientHeadPhoto(36)"><img src="image1/pic_head_36_s.gif"></a></div>
                                        <div id="head_index_37" onmouseover="mouseoverchangeclass(37)" onmouseout="mouseoutchangeclass(37)"><a onclick="javascript:ChangeClientHeadPhoto(37)"><img src="image1/pic_head_37_s.gif"></a></div>
                                        <div id="head_index_38" onmouseover="mouseoverchangeclass(38)" onmouseout="mouseoutchangeclass(38)"><a onclick="javascript:ChangeClientHeadPhoto(38)"><img src="image1/pic_head_38_s.gif"></a></div>
                                        <div id="head_index_39" onmouseover="mouseoverchangeclass(39)" onmouseout="mouseoutchangeclass(39)"><a onclick="javascript:ChangeClientHeadPhoto(39)"><img src="image1/pic_head_39_s.gif"></a></div>
                                        <div id="head_index_40" onmouseover="mouseoverchangeclass(40)" onmouseout="mouseoutchangeclass(40)"><a onclick="javascript:ChangeClientHeadPhoto(40)"><img src="image1/pic_head_40_s.gif"></a></div>
                                    </div>
                                    <input onclick="Hid(1); __doPostBack('btnSaveHead','')" name="btnSaveHead" id="btnSaveHead" class="save_photo" disabled="disabled" value="保存头像" type="button">
                                    <input name="hd_value" id="hd_value" type="hidden">
                                    <div class="total_ok_pic_green" id="div_update_state" style="display: none;">头像已保存！</div>
                                    <div class="clear"></div>
                                    <p class="go_choice">或从您的电脑中上传图片作为头像：<span class="gray_b3">(建议尺寸96*96像素，300k以内)</span></p>
                                    <div class="browse_mypic">
                                        <input name="Myfile" id="Myfile" size="36" maxlength="30" onchange="changeSrc(this)" onclick="div_hidden('div_update_state');" onkeydown="chkonkeydown(event);" style="height: 21px; width: 290px; font-size: 12px; padding-top: 3px; float: left;" type="file">
                                        <input name="hid_opt" id="hid_opt" type="hidden">
                                        <input onclick="if (!Chkfile()) return false; __doPostBack('btnUpload','')" name="btnUpload" id="btnUpload" class="browse_button" value="上传" disabled="disabled" height="20px" type="button">
                                        <div class="loading" name="div_upload_state" id="div_upload_state" style="display: none;"></div>
                                        <div class="total_ok_pic_green2" id="headsave2" style="display: none;">头像已保存！</div>
                                        <div class="loading" id="headsave3" style="display: none;"><img src="image1/loading.gif" title="上传状态中"><p>上传中...</p> </div>
                                        <div class="notice_write1" id="headsave4" style="display: none;">图片大小超过300k</div>
                                        <img id="imghidden" src="about:blank" style="width: 0px; height: 0px;">
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <!--编辑基本信息-->
                        <div class="edit_message1">
                            <div class="mesage_list">
                                <div class="list_title"><em>*</em>昵称：<input name="v_date" id="v_date" value="220102590" type="hidden"></div>
                                <div class="list_edit">
                                                                        <input name="Txt_petname" value="" maxlength="20" id="Txt_petname" class="nickname" onfocus="changeclass('div_1');" onblur="cue_chk()" type="text">
                                                                       <span class="c_gray" id="info_1"><p>您的昵称可以由小写英文字母、中文、数字组成，</p>长度4－20个字符，一个汉字为两个字符</span></div>
                                <div class="list_other" id="div_1">[公开]</div>
                                <div class="empty_box_left"></div>
                            </div>
                            <div id="area_div" class="mesage_list" style="display: none;"><div class="list_title"><em>*</em>居住地：</div><div class="list_edit"><p class="add_top_h">　<span onmouseover="this.className='modify_address_over'" onmouseout="this.className='modify_address'" class="modify_address" onclick="change_select_div();">更改</span></p></div><div class="list_other now_color">[公开]</div><div class="empty_box_left"></div></div>
                            <div id="area_select_div" class="mesage_list" style="display: block;">
                                <div class="list_title"><em>*</em>居住地：<input name="area_clientID" id="area_clientID" value="ctl04" type="hidden"></div>

                                <script language="javascript" defer="">
                                    <!--

                                    //var var parentobj,childobj,select1_s1,select2_sel,select3_sel,select2,select3;
                                    //var c_parent_value='';
                                    //var c_child_value='';

                                    var http_request=false;

                                    function send_request(url){
                                        http_request=false;
                                        if(window.XMLHttpRequest){
                                            http_request=new XMLHttpRequest();
                                            if(http_request.overrideMimeType){
                                                http_request.overrideMimeType('text/xml');
                                            }
                                        }
                                        else if(window.ActiveXObject){
                                            try{
                                                http_request=new ActiveXObject('Msxml2.XMLHTTP');
                                            }
                                            catch(e){
                                                try{
                                                    http_request=new ActiveXObject('Microsoft.XMLHTTP');
                                                }
                                                catch(e){}
                                            }
                                        }
                                        if(!http_request){
                                            window.alert('不能创建XMLHttpRequest对象实例!');
                                            return false;
                                        }
                                        http_request.onreadystatechange=processRequest;
                                        http_request.open('GET',url,true);
                                        http_request.send(null);
                                    }

                                    function processRequest(){
                                        if(http_request.readyState==4){
                                            if(http_request.status==200){
                                                document.getElementById(childobj).innerHTML=http_request.responseText;
                                                if (http_request.responseText==''){
                                                    SevValue(parentobj);
                                                }
                                                else{

                                                    //if(navigator.userAgent.indexOf("MSIE")>0)
                                                    SevValueNull(parentobj);

                                                }
                                            }
                                            else {
                                                alert('您所请求的页面有异常!错误状态:'+http_request.status);
                                            }
                                        }
                                    }

                                    function send_request_new(url){
                                        http_request=false;
                                        if(window.XMLHttpRequest){
                                            http_request=new XMLHttpRequest();
                                            if(http_request.overrideMimeType){
                                                http_request.overrideMimeType('text/xml');
                                            }
                                        }
                                        else if(window.ActiveXObject){
                                            try{
                                                http_request=new ActiveXObject('Msxml2.XMLHTTP');
                                            }
                                            catch(e){
                                                try{
                                                    http_request=new ActiveXObject('Microsoft.XMLHTTP');
                                                }
                                                catch(e){}
                                            }
                                        }
                                        if(!http_request){
                                            window.alert('不能创建XMLHttpRequest对象实例!');
                                            return false;
                                        }
                                        http_request.onreadystatechange=processRequest_new;
                                        http_request.open('GET',url,true);
                                        http_request.send(null);
                                    }

                                    function processRequest_new(){
                                        if(http_request.readyState==4){
                                            if(http_request.status==200){
                                                document.getElementById(childobj).innerHTML=http_request.responseText;
                                                if (http_request.responseText==''){
                                                    SevValue(parentobj);
                                                }
                                                else{

                                                    //if(navigator.userAgent.indexOf("MSIE")>0)
                                                    //SevValueNull(parentobj);

                                                }
                                            }
                                            else {
                                                alert('您所请求的页面有异常!错误状态:'+http_request.status);
                                            }
                                        }
                                    }

                                    CheckInit();

                                    function setvalue(parentvalue,childvalue){

                                        dpstr(parentvalue,childvalue);
                                        sethidvalue(childvalue);

                                    }

                                    function sethidvalue(value){
                                        changeclass('div_2');
                                        var hidtxt = document.getElementById('hd_area');
                                        if (hidtxt==null)
                                            return;
                                        hidtxt.value=value;
                                    }

                                    function changeclass(objname){
                                        var obj = document.getElementById(objname);
                                        if (obj==null)
                                            return;
                                        obj.className = "list_other now_color";

                                    }

                                    function div_vis_control(divid){
                                        var div = document.getElementById(divid);
                                        if (div==null)
                                            return;
                                        div.style.visibility='visible';
                                    }

                                    function div_hid_control(Divid){
                                        var divs = document.getElementById(Divid);
                                        if (divs==null)
                                            return;
                                        divs.style.visibility ="hidden";
                                    }
                                    -->
                                </script>

                                <div class="list_edit">
                                    <div class="address">
                                        <select name="ctl04$s1" id="ctl04_s1" onchange="chg(this);">
                                            <option value="1">中国</option><option value="2">阿尔及利亚</option><option value="3">阿根廷</option><option value="4">阿联酋</option><option value="5">埃及</option><option value="6">爱尔兰</option><option value="7">奥地利</option><option value="8">澳大利亚</option><option value="9">巴基斯坦</option><option value="10">巴拿马</option><option value="11">巴西</option><option value="12">白俄罗斯</option><option value="13">保加利亚</option><option value="14">比利时</option><option value="15">波多黎各</option><option value="16">波兰</option><option value="17">玻利维亚</option><option value="18">丹麦</option><option value="19">德国</option><option value="20">俄罗斯</option><option value="21">法国</option><option value="22">菲律宾</option><option value="23">芬兰</option><option value="24">古巴</option><option value="25">关岛</option><option value="26">韩国</option><option value="27">荷兰</option><option value="28">加拿大</option><option value="29">柬埔寨</option><option value="30">捷克</option><option value="31">喀麦隆</option><option value="32">科威特</option><option value="33">老挝</option><option value="34">黎嫩</option><option value="35">列支敦士登</option><option value="36">卢森堡</option><option value="37">卢旺达</option><option value="38">罗马尼亚</option><option value="39">马尔代夫</option><option value="40">马来西亚</option><option value="41">美国</option><option value="42">蒙古</option><option value="43">孟加拉</option><option value="44">秘鲁</option><option value="45">墨西哥</option><option value="46">南非</option><option value="47">南斯拉夫</option><option value="48">尼日利亚</option><option value="49">挪威</option><option value="50">葡萄牙</option><option value="51">日本</option><option value="52">瑞典</option><option value="53">瑞士</option><option value="54">塞浦路斯</option><option value="55">沙特阿拉伯</option><option value="56">斯里兰卡</option><option value="57">泰国</option><option value="58">坦桑尼亚</option><option value="59">土耳其</option><option value="60">委内瑞拉</option><option value="61">文莱</option><option value="62">乌克兰</option><option value="63">乌拉圭</option><option value="64">西班牙</option><option value="65">希腊</option><option value="66">新加坡</option><option value="67">新西兰</option><option value="68">匈牙利</option><option value="69">牙买加</option><option value="70">意大利</option><option value="71">印度</option><option value="72">印度尼西亚</option><option value="73">英国</option><option value="74">越南</option><option value="75">智利</option><option value="76">其他国家或地区</option>                                        </select>
                                        <div style="float: left; height: 20px;" id="select2">
                                            <select name="ctl04$s2" id="ctl04_s2" onchange="javascript:dp(this,'ctl04_select3');">
                                                <option value="0">-请选择-</option>

                                                <option value="111">安徽</option><option value="113">北京</option><option value="144">重庆</option><option value="114">福建</option><option value="115">甘肃</option><option value="116">广东</option><option value="117">广西</option><option value="118">贵州</option><option value="119">海南</option><option value="120">河北</option><option value="121">河南</option><option value="122">黑龙江</option><option value="123">湖北</option><option value="124">湖南</option><option value="125">吉林</option><option value="126">江苏</option><option value="127">江西</option><option value="128">辽宁</option><option value="129">内蒙古</option><option value="130">宁夏</option><option value="131">青海</option><option value="132">山东</option><option value="133">山西</option><option value="134">陕西</option><option value="135">上海</option><option value="136">四川</option><option value="138">天津</option><option value="139">西藏</option><option value="141">新疆</option><option value="142">云南</option><option value="143">浙江</option><option value="140">香港</option><option value="112">澳门</option><option value="137">台湾</option>                                            </select>
                                        </div>
                                        <div id="ctl04_select3" style="float: left; height: 20px; visibility: hidden;">
                                                                                    </div>
                                        <!--<div class="notice_w" id="notice_2" style="width:80px">此项为必选项</div>-->
                                        <div style="visibility: hidden;" id="notice_2"></div>

                                    </div>
                                    <p class="c_gray">较多的用户居住在以下地区(可直接选取)：</p>
                                    <div class="choice_city"><ul>
                                            <li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('1','113');">北京</li>
                                            <li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('1','135');">上海</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('116','189');">深圳</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('116','188');">广州</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('1','138');">天津</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('143','521');">杭州</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('123','292');">武汉</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('126','336');">苏州</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('1','144');">重庆</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('126','332');">南京</li><li onmouseover="this.className='li_over'" onmouseout="this.className='li_out'" onclick="setvalue('136','434');">成都</li><li onclick="setvalue('134','423');" onmouseover="this.className='li_over'" onmouseout="this.className='li_out'">西安</li></ul></div>

                                </div>
                                <script language="javascript">
                                    <!--
                                    if(navigator.userAgent.indexOf("Firefox")>0){
                                        CheckInit();
                                    }
                                    -->
                                </script>

                                <div class="list_other" id="div_2">[公开]</div>
                                <div class="empty_box_left">
                                </div>

                            </div><input name="hd_area" id="hd_area" value="" type="hidden"><input name="hd_area_parent" id="hd_area_parent" value="" type="hidden">
                            <div class="mesage_list">
                                <div class="list_title"><em>*</em>性别：</div>

                                <div class="list_edit add_edit_h"><input value="Rd_sex_1" name="gp_sex" id="Rd_sex_1" class="radio_button" onclick="disablcontrol('Rd_sexis');changeclass_new('span_1');" checked="checked" type="radio"><span class="choice_cont">男</span><input value="Rd_sex_2" name="gp_sex" id="Rd_sex_2" class="radio_button" onclick="disablcontrol('Rd_sexis');changeclass_new('span_1');" type="radio"><span class="choice_cont">女</span><div style="visibility: hidden;" id="notice_3"></div></div>
                                <div class="list_other reduice_other_w"><input value="0" name="Rd_sexis" id="Rd_sexis_0" class="radio_button" checked="checked" type="radio"><span class="choice_cont now_color" id="span_1_1">[公开]</span><input value="1" name="Rd_sexis" id="Rd_sexis_1" class="radio_button" type="radio"><span class="choice_cont now_color choice_cont_r" id="span_1_2">[保密]</span></div>
                                <div class="empty_box_left"></div>
                            </div>
                            <div class="mesage_list">
                                <div class="list_title"><em>*</em>身份：</div>

                                <div class="list_edit"><div class="add_edit_h">
                                        <input value="student" name="gp_standing" id="Rd_student" onselect="clearShenfenDefaultValue(1)" class="radio_button" onclick="disablcontrol('Rd_standingis');BindInfo('student');optionDivShow();changeclass_new('span_3');clearShenfenDefaultValue(1);" type="radio"><span class="choice_cont">在校学生</span>
                                        <input value="teacher" name="gp_standing" id="Rd_teacher" onselect="clearShenfenDefaultValue(2)" class="radio_button" onclick="disablcontrol('Rd_standingis');BindInfo('teacher');optionDivShow();changeclass_new('span_3');clearShenfenDefaultValue(2);" type="radio"><span class="choice_cont">教师</span>
                                        <input value="worker" name="gp_standing" id="Rd_worker" onselect="clearShenfenDefaultValue(3)" class="radio_button" onclick="disablcontrol('Rd_standingis');BindInfo('worker');optionDivShow();changeclass_new('span_3');clearShenfenDefaultValue(3);" type="radio"><span class="choice_cont">上班族</span>
                                        <input value="profession" name="gp_standing" id="Rd_profession" onselect="clearShenfenDefaultValue(4)" class="radio_button" onclick="disablcontrol('Rd_standingis');BindInfo('profession');optionDivShow();changeclass_new('span_3');clearShenfenDefaultValue(4);" type="radio"><span class="choice_cont">自由职业</span></div><div><div class="my_work" id="select"><input disabled="" name="defaultValue" id="defaultValue" maxlength="40" style="width: 194px;" value="" type="text"><a onclick="td_click()" style="cursor:hand"><img src="image1/pic_select.gif" title="下拉框" border="0"></a></div><div style="visibility: hidden;" id="notice_5"></div></div>
                                </div><div class="list_other reduice_other_w"><input disabled="" value="0" name="Rd_standingis" id="Rd_standingis_0" class="radio_button" checked="checked" type="radio"><span class="choice_cont" id="span_3_1">[公开]</span><input disabled="" value="1" name="Rd_standingis" id="Rd_standingis_1" class="radio_button" type="radio"><span class="choice_cont choice_cont_r" id="span_3_2">[保密]</span></div><div class="empty_box_left"></div>		  </div>

                            <script language="javascript" defer="defer">
                                <!--
                                var str="";
                                var str_student="<div class='windo_work'><ul><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"'  onclick='Setinputvalue(\"初中生\")'>初中生</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"本科生\")'>本科生</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"高中生\")'>高中生</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"硕士生\")'>硕士生</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"大专生\")'>大专生</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"博士生\")'>博士生</li><div class='empty_box_left'>&nbsp;</div></ul></div>";
                                var str_teacher="<div class='windo_work'><ul><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"幼儿教育\")'>幼儿教育</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"大学教师/教授\")'>大学教师/教授</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"小学教师\")'>小学教师</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"教务管理人员\")'>教务管理人员</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"中学教师\")'>中学教师</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"培训教练/顾问\")'>培训教练/顾问</li><div class='empty_box_left'>&nbsp;</div></ul></div>";
                                var str_worker="<div class='windo_work'><ul><li   onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"'  onclick='Setinputvalue(\"IT从业者\")'>IT从业者</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"科研人员\")'>科研人员</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"广告设计\")'>广告设计</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"金融从业者\")'>金融从业者</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"美术设计\")'>美术设计</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"保险\")'>保险</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"影视制作\")'>影视制作</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"财务\")'>财务</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"公务员\")'>公务员</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"销售\")'>销售</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"咨询/顾问\")'>咨询/顾问</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"医生\")'>医生</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"市场/公关\")'>市场/公关</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"律师\")'>律师</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"编辑/记者\")'>编辑/记者</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"人力资源\")'>人力资源</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"翻译\")'>翻译</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"建筑师\")'>建筑师</li><div class='empty_box_left'>&nbsp;</div></ul></div>";
                                var str_profession="<div class='windo_work'><ul><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"作家\")'>作家</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"个体工商业\")'>个体工商业</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"摄影师\")'>摄影师</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"农林渔牧\")'>农林渔牧</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"离退休\")'>离退休</li><li  onMouseOver='this.className=\"m_over\"' onMouseOut='this.className=\"m_out\"' onclick='Setinputvalue(\"求职中\")'>求职中</li><div class='empty_box_left'>&nbsp;</div></ul></div>";

                                //var select = document.getElementById("select");
                                var select = document.getElementById("select");
                                var defaultValue = document.getElementById("defaultValue");
                                var oWhere = document.body;
                                var optionDiv = document.createElement("div");

                                //<iframe width=0 height=0></iframe>
                                //var myiframe = document.createElement("iframe");
                                //myiframe.width = 0;
                                //myiframe.height = 0;
                                //document.body.appendChild(myiframe);
                                //myiframe.appendChild(optionDiv);

                                function Setinputvalue(objvalue){
                                    defaultValue.value = objvalue;
                                    optionDiv.style.visibility = "hidden";
                                }


                                function changestate(control_id){
                                    var obj1 = document.getElementById(control_id + "_0");
                                    var obj2 = document.getElementById(control_id + "_1");
                                    obj1.disabled = false;
                                    obj2.disabled = false;
                                }

                                function BindInfo(name){

                                    DpDivInit();

                                    if(navigator.userAgent.indexOf("MSIE")>0){
                                        event.cancelBubble = true;
                                    }

                                    if (name == "student")
                                        str = str_student;
                                    if (name == "teacher")
                                        str = str_teacher;
                                    if (name == "worker")
                                        str = str_worker;
                                    if (name == "profession")
                                        str = str_profession;
                                    //if (str=="")
                                    //alert("请先选择分类");

                                    optionDiv.innerHTML=str+"<iframe src='javascript:false' style='position:absolute; visibility:inherit; top:0px; left:0px; width:300px; height:200px; z-index:-1; filter=progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0);'></iframe>";
                                    //optionDiv.style.visibility="visible";
                                }

                                function optionDivShow(){
                                    optionDiv.style.visibility="visible";
                                }

                                function getSelectPosition(obj) {
                                    var objLeft = obj.offsetLeft;
                                    var objTop = obj.offsetTop;
                                    var objParent = obj.offsetParent;
                                    while (objParent.tagName != "BODY") {
                                        objLeft += objParent.offsetLeft;
                                        objTop += objParent.offsetTop;
                                        objParent = objParent.offsetParent;
                                    }
                                    return([objLeft,objTop]);
                                }

                                function getposOffset(what, offsettype)
                                {
                                    var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
                                    var parentEl=what.offsetParent;
                                    while (parentEl!=null)
                                    {
                                        totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
                                        parentEl=parentEl.offsetParent;
                                    }
                                    return totaloffset;
                                }

                                //********************下拉菜单 END *********************************
                                function DpDivInit(){

                                    //oWhere.appendChild(myiframe);
                                    var defaultValue = document.getElementById("defaultValue");
                                    var xy = getSelectPosition(defaultValue);
                                    if(navigator.userAgent.indexOf("Firefox")>0){
                                        optionDiv.style.left = parseInt(xy[0],10)-2+'px';
                                        optionDiv.style.top = parseInt(xy[1]+select.offsetHeight,10)+'px';
                                        optionDiv.className = "optionDiv";
                                        oWhere.appendChild(optionDiv);
                                    }
                                    if(navigator.userAgent.indexOf("MSIE")>0){
                                        var version = checkIE();
                                        if(parseFloat(version)<10.0){

                                            optionDiv.style.left = parseInt(xy[0],10)+'px';
                                            optionDiv.style.top = parseInt(xy[1]+select.offsetHeight,10)+'px';
                                            optionDiv.className = "optionDiv";
                                            oWhere.appendChild(optionDiv);
                                        }
                                        else{

                                            with(optionDiv.style) {

                                                pixelLeft = getposOffset(your_position,"left")+xy[0]-331;
                                                pixelTop = xy[1]+select.offsetHeight;
                                                width = select.offsetWidth-4;
                                                optionDiv.className = "optionDiv";
                                            }

                                        }
                                        oWhere.appendChild(optionDiv);
                                    }else{
                                        optionDiv.style.left = parseInt(xy[0],10)-2+'px';
                                        optionDiv.style.top = parseInt(xy[1]+select.offsetHeight,10)+'px';
                                        optionDiv.className = "optionDiv";
                                        oWhere.appendChild(optionDiv);
                                    }


                                }

                                function checkIE(){
                                    var  X,V;
                                    X=0;
                                    V=navigator.appVersion;
                                    var index = V.indexOf("MSIE");

                                    if(index>0){
                                        X=V.substr(parseInt(index,10)+5,1);
                                    }
                                    return X;
                                }

                                function GetArrstr(){
                                }

                                document.onclick = function() {
                                    if (optionDiv!=null)
                                    {
                                        if(navigator.userAgent.indexOf("MSIE")>0){
                                            optionDiv.style.visibility = "hidden";
                                        }
                                    }
                                    IniHidDiv();
                                    Hid_stateinfo_info();

                                    //cue();
                                }
                                defaultValue.onclick = function() {
                                    event.cancelBubble = true;
                                    optionDiv.style.visibility = optionDiv.style.visibility=="visible"?"hidden":"visible";
                                }
                                //移动 ******************** Option ********************时的动态效果

                                function moveWithOptions(bg,color) {
                                    with(event.srcElement) {
                                        style.backgroundColor = bg;
                                        style.color = color;
                                    }
                                }
                                function selectedText() {
                                    with(event.srcElement) {
                                        defaultValue.innerText = innerText;
                                    }
                                    with(defaultValue.style)color="black";
                                }

                                function td_click(){
                                    if(navigator.userAgent.indexOf("MSIE")>0)
                                        event.cancelBubble = true;
                                    var Rd_student = document.getElementById("Rd_student");
                                    var Rd_teacher = document.getElementById("Rd_teacher");
                                    var Rd_worker = document.getElementById("Rd_worker");
                                    var Rd_profession = document.getElementById("Rd_profession");
                                    var chevalue="";
                                    if (Rd_student.checked)
                                        chevalue = "student";
                                    if (Rd_teacher.checked)
                                        chevalue = "teacher";
                                    if (Rd_worker.checked)
                                        chevalue = "worker";
                                    if (Rd_profession.checked)
                                        chevalue = "profession";
                                    optionDiv.style.visibility = optionDiv.style.visibility=="visible"?"hidden":"visible";
                                    if (chevalue =="")//首次
                                    {
                                        optionDiv.style.visibility = optionDiv.style.visibility=="visible"?"hidden":"visible";

                                    }
                                    else
                                    {
                                        BindInfo(chevalue);
                                    }
                                }
                                -->
                            </script>
                            <!--分隔线开始-->
                            <div class="separate_line"></div>
                            <!--分隔线结束-->

                            <div class="mesage_list">
                                <div class="list_title">生日：</div>
                                <div class="list_edit"><select name="Dp_year" id="Dp_year" class="model_select" onclick="disablcontrol('Rd_biris');changeclass_new('span_2');" onchange="changeclass_timechk('div8');">

                                        <option value="0">------</option>
                                        <option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option>
                                    </select><span class="model_span"> 年 </span><select name="Dp_month" id="Dp_month" class="model_select" onclick="disablcontrol('Rd_biris');changeclass_new('span_2');" onchange="changeclass_timechk('div8');">
                                        <option value="0">----</option>
                                        <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>                                    </select><span class="model_span"> 月 </span><select name="Dp_day" id="Dp_day" class="model_select" onclick="disablcontrol('Rd_biris');changeclass_new('span_2');" onchange="changeclass_timechk('div8');">
                                        <option value="0">----</option>
                                        <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
                                    </select><span class="model_span"> 日 </span><div style="visibility: hidden;" id="notice_4"></div></div>

                                <!--<div class="list_other reduice_other_w">
                                <input value="0" name="Rd_biris" type="radio" id="Rd_biris_0" class="radio_button" /><span class="choice_cont" id="span_2_1">[公开]</span>
                                <input value="1" name="Rd_biris" type="radio" id="Rd_biris_1" class="radio_button" /><span class="choice_cont choice_cont_r" id="span_2_2">[保密]</span>
			           </div>-->
                                <div class="list_other" id="div8">[公开]</div>
                                <div class="empty_box_left"></div>
                            </div>
                            <div class="mesage_list">
                                <div class="list_title">博客地址：</div>
                                <div class="list_edit">
                                    <input name="Txt_blog" value="http://" id="Txt_blog" class="blog_address" onblur="changeurl('div_3');" type="text"></div>

                                <div class="list_other" id="div_3">[公开]</div>
                                <div class="empty_box_left"></div>
                            </div>
                            <div class="mesage_list">
                                <div class="list_title">居住状态：</div>
                                <div class="list_edit">
                                                                        <input name="Chk_1" id="Chk_1" class="checkbox" onclick="changeclass_chk('div_4');" type="checkbox"><span class="checkbox_cont">独居</span>
                                    <input name="Chk_2" id="Chk_2" class="checkbox" onclick="changeclass_chk('div_4');" type="checkbox"><span class="checkbox_cont">和伴侣</span>

                                    <input name="Chk_3" id="Chk_3" class="checkbox" onclick="changeclass_chk('div_4');" type="checkbox"><span class="checkbox_cont">和室友</span>
                                    <input name="Chk_4" id="Chk_4" class="checkbox" onclick="changeclass_chk('div_4');" type="checkbox"><span class="checkbox_cont">和父母</span>
                                    <input name="Chk_5" id="Chk_5" class="checkbox" onclick="changeclass_chk('div_4');" type="checkbox"><span class="checkbox_cont">和孩子</span>
                                    <input name="Chk_6" id="Chk_6" class="checkbox" onclick="changeclass_chk('div_4');" type="checkbox"><span class="checkbox_cont">和宠物</span>
                                </div>
                                <div class="list_other" id="div_4">[公开]</div>

                                <div class="empty_box_left"></div>
                            </div>
                            <div class="mesage_list">
                                <div class="list_title">兴趣爱好：</div>
                                <div class="list_edit">
                                                                        <textarea name="Txt_interesting" rows="2" cols="20" id="Txt_interesting" class="text_interest add_textarea_gray" onkeydown="changeclass('div_5');Keyonkeydown(this,'500',event);" onpropertychange="plaster(this,'500',event);" onclick="SetText(this,'text_interest','0');" onblur="SetText(this,'text_interest add_textarea_gray','1');">不同项目之间请用空格隔开，例如“旅行 阅读 瑜伽”</textarea></div>
                                                            <div class="list_other" id="div_5">[公开]</div>
                            <div class="empty_box_left"></div>
                        </div>

                        <div class="mesage_list">
                            <div class="list_title">喜欢或欣赏的人：</div>
                            <div class="list_edit">

                                                                <textarea name="Txt_love" rows="2" cols="20" id="Txt_love" class="text_love add_textarea_gray" onkeydown="changeclass('div_6');Keyonkeydown(this,'500',event);" onpropertychange="plaster(this,'500',event);" onclick="SetText(this,'text_love','0');" onblur="SetText(this,'text_love add_textarea_gray','1');">不同人名之间请用空格隔开，例如“金庸 周杰伦 姚明”</textarea>&nbsp;
                                                            </div>
                            <div class="list_other" id="div_6">[公开]</div>
                            <div class="empty_box_left"></div>
                        </div>

                        <div class="mesage_list">
                            <div class="list_title">自我介绍：</div>
                            <div class="list_edit">

                                                                <textarea name="Txt_introduce" rows="2" cols="20" id="Txt_introduce" class="text_intro" onkeydown="changeclass('div_7');Keyonkeydown(this,'2000',event);" onpropertychange="plaster(this,'2000',event);" onblur="SetintroduceDiv();"></textarea>
                                                            </div>
                            <div class="list_other" id="div_7">[公开]</div>
                            <div class="empty_box_left"></div>
                        </div>

                        <div class="mesage_list">
                            <input name="Button1" value="保存基本信息" id="Button1" class="save_mess" type="submit">
                            <!--<div class="total_ok">基本信息已更新!</div>--><div style="display: none;" id="stateinfo_info">

                            </div>

                        </div>
                    </div>
                    <div id="myddhome_ads" class="narrow_page">
                        <div class="reco_wrap">
                            <div id="mydd_home_ads_tab" class="tab"><a href="javascript:;" class="on" id="reco_tab_hot" style="background: url(&quot;http://img63.ddimg.cn/upload_img/00111/gg/guanggao02.png &quot;) no-repeat local 350px 10px rgb(245, 245, 245);">推广商品</a><a href="javascript:;" class="" id="reco_tab_history">根据您的浏览历史为您推荐</a></div>
                            <div class="recommend" id="cpc_0"><div class="over"><ul style="left: 0px;"><li id="p9_seq_0"><a target="_top" rel="nofollow" class="pic" href="http://a.dangdang.com/jump.php?q=dvvJWLOEg2SDv3BDkLEryYjiyZEMN4OjBbcHMWn9qwRER6bi6RIjblOEHlQDWhEOzruDnUiRPBA2b3YktjEJ%2BA0YaEfivz%2FJhxetBIjl7Dv%2BaaxdI0pg6qrnVFe51gMWu6X2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u9KQ7SHFuZceBUyndl00vTYTuWoNB3VdU%2FiXFvUQnZeHHftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D"><img src="image1/1247672035-1_l_1.jpg"></a><a class="name" target="_top" href="http://a.dangdang.com/jump.php?q=dvvJWLOEg2SDv3BDkLEryYjiyZEMN4OjBbcHMWn9qwRER6bi6RIjblOEHlQDWhEOzruDnUiRPBA2b3YktjEJ%2BA0YaEfivz%2FJhxetBIjl7Dv%2BaaxdI0pg6qrnVFe51gMWu6X2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u9KQ7SHFuZceBUyndl00vTYTuWoNB3VdU%2FiXFvUQnZeHHftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D" rel="nofollow">极米Z4极光智能300吋无屏电视 3D智能4K微型</a><p class="red">高清家用投影机</p><p class="price_p"><span class="d_price">¥3999.00</span></p></li><li id="p9_seq_1"><a target="_top" rel="nofollow" class="pic" href="http://a.dangdang.com/jump.php?q=duukL3INpkprLsX45YvK9IoSLcQUY2LfLmWtxXi5Ym3eWfVrnhP0Q8ZWkKybZuCBfS8u2n%2F53cwb8nRmkzaSci74LRZrpUfIHWgJIWvz%2FTeoxuwCKS9ynXf1ecCn%2F5gypml2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u%2FfCm%2FyKqTr5v5Eussyh%2Fh18RmLkWXOGpI0F7FbE4EoGHftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D"><img src="image1/1247145435-1_l_1.jpg"></a><a class="name" target="_top" href="http://a.dangdang.com/jump.php?q=duukL3INpkprLsX45YvK9IoSLcQUY2LfLmWtxXi5Ym3eWfVrnhP0Q8ZWkKybZuCBfS8u2n%2F53cwb8nRmkzaSci74LRZrpUfIHWgJIWvz%2FTeoxuwCKS9ynXf1ecCn%2F5gypml2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u%2FfCm%2FyKqTr5v5Eussyh%2Fh18RmLkWXOGpI0F7FbE4EoGHftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D" rel="nofollow">极米（XGIMI）芒果小觅（曜岩黑）LED投影机</a><p class="red"> 家用 微型投影仪 3D智能巨幕影院</p><p class="price_p"><span class="d_price">¥2699.00</span></p></li><li id="p9_seq_2"><a target="_top" rel="nofollow" class="pic" href="http://a.dangdang.com/jump.php?q=dkkmf%2BdgbsuPD3syoJMkF%2FbsnZdIqUFKaJiZv9N%2Bcn2Th3ZJgmO%2FUZ%2FbMh5qhFrUyVUC4XHuXZNDbpI33%2BPnI3iBrl%2FQ1tpeZRwD8PdA2iIJi1qZXR9emw33VOOpT5piwPa2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u8vrpEN4fRUvzlrRqYj9V5ev9j6C5A%2BF0M5LsXFWTKai3ftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D"><img src="image1/1245133335-1_l_1.jpg"></a><a class="name" target="_top" href="http://a.dangdang.com/jump.php?q=dkkmf%2BdgbsuPD3syoJMkF%2FbsnZdIqUFKaJiZv9N%2Bcn2Th3ZJgmO%2FUZ%2FbMh5qhFrUyVUC4XHuXZNDbpI33%2BPnI3iBrl%2FQ1tpeZRwD8PdA2iIJi1qZXR9emw33VOOpT5piwPa2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u8vrpEN4fRUvzlrRqYj9V5ev9j6C5A%2BF0M5LsXFWTKai3ftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D" rel="nofollow">极米（XGIMI）无屏电视Z4X（ 投影机 家用 4</a><p class="red">K微型高清投影仪 挥手切歌 3D家庭</p><p class="price_p"><span class="d_price">¥2799.00</span></p></li><li id="p9_seq_3"><a target="_top" rel="nofollow" class="pic" href="http://a.dangdang.com/jump.php?q=dhhnqtdrvrsnZ%2FfH2YaplkD1ZqNfZOmVGzS%2Bgns%2B%2BlzManc3BOQY%2Bo%2BV0gXZ6N7Q1o0MK4aqx6f1MyNI48HQxNF81pdjOokkAfez8xSfR0%2Fz3A7FRWNSb4BZt0MLvdrZgIq2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u%2FtS6IeVb3QktdHATomqlZpWO3%2BoexX7a7YmKxVY304EnftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D"><img src="image1/1247145235-1_l_1.jpg"></a><a class="name" target="_top" href="http://a.dangdang.com/jump.php?q=dhhnqtdrvrsnZ%2FfH2YaplkD1ZqNfZOmVGzS%2Bgns%2B%2BlzManc3BOQY%2Bo%2BV0gXZ6N7Q1o0MK4aqx6f1MyNI48HQxNF81pdjOokkAfez8xSfR0%2Fz3A7FRWNSb4BZt0MLvdrZgIq2SRp1Uk3selavXxE2rahTJuqlDcUgrdIKRFl5I%2Bq4u%2FtS6IeVb3QktdHATomqlZpWO3%2BoexX7a7YmKxVY304EnftNfzbNiVuJrdwlOrFtJBqm5cd%2FMzeV0Sf0sV11aSHawFmDuUh5uOaC2N0pPsgVjLnPMErX37zVlsWPxttijA%3D" rel="nofollow">极米（XGIMI）芒果小觅（水晶蓝） LED投影</a><p class="red">机 家用 微型投影仪 3D智能巨幕影</p><p class="price_p"><span class="d_price">¥2699.00</span></p></li></ul></div></div>
                            <div class="recommend" id="cpc_1" style="display: none;"><div class="pages">第<i id="current_pageindex" class="orange">1</i>页（共<span id="recommend_total_page">4</span>页）<a target="_top" href="http://reco.dangdang.com/?ref=product_page-recobar-dp">更多 &gt;&gt;</a></div><div class="over" id="reco_history_div"><ul id="reco_history_ul"><li><a class="pic" target="_top" href="http://product.dangdang.com/1498413300.html#ddclick_reco_recobar_2" title="珍藏版彩印正版缠中说禅著《缠论解盘》，赠准确的原创自动分笔分段指标,是《教你炒股票》重要补充，缠中说禅历时2年多的每日解盘"><img src="image1/1498413300-1_w.jpg" alt="珍藏版彩印正版缠中说禅著《缠论解盘》，赠准确的原创自动分笔分段指标,是《教你炒股票》重要补充，缠中说禅历时2年多的每日解盘" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1498413300.html#ddclick_reco_recobar_2" title="珍藏版彩印正版缠中说禅著《缠论解盘》，赠准确的原创自动分笔分段指标,是《教你炒股票》重要补充，缠中说禅历时2年多的每日解盘">珍藏版彩印正版缠中说禅著《缠论解盘》，赠准确的原创自动分笔分段指标,是《教你炒股票》重要补充，缠中说禅历时2年多的每日解盘</a><p class="price_p"><span class="d_price">¥108.80</span><i class="m_price">¥136.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1498413300">399</a>条评论</p></li><li><a class="pic" target="_top" href="http://product.dangdang.com/1429836328.html#ddclick_reco_recobar_2" title="缠中说禅原著《缠中说禅选集》，含诗词，经济，音乐，数理科技"><img src="image1/1429836328-1_w.jpg" alt="缠中说禅原著《缠中说禅选集》，含诗词，经济，音乐，数理科技" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1429836328.html#ddclick_reco_recobar_2" title="缠中说禅原著《缠中说禅选集》，含诗词，经济，音乐，数理科技">缠中说禅原著《缠中说禅选集》，含诗词，经济，音乐，数理科技</a><p class="price_p"><span class="d_price">¥31.80</span><i class="m_price">¥36.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1429836328">766</a>条评论</p></li><li><a class="pic" target="_top" href="http://product.dangdang.com/1241988800.html#ddclick_reco_recobar_2" title="正版缠中说禅著《缠解论语》（论语详解）——颠覆传统，重解《论语》书！为孔子正名，挑战史上所有版本《论语》"><img src="image1/1241988800-1_w.jpg" alt="正版缠中说禅著《缠解论语》（论语详解）——颠覆传统，重解《论语》书！为孔子正名，挑战史上所有版本《论语》" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1241988800.html#ddclick_reco_recobar_2" title="正版缠中说禅著《缠解论语》（论语详解）——颠覆传统，重解《论语》书！为孔子正名，挑战史上所有版本《论语》">正版缠中说禅著《缠解论语》（论语详解）——颠覆传统，重解《论语》书！为孔子正名，挑战史上所有版本《论语》</a><p class="price_p"><span class="d_price">¥25.00</span><i class="m_price">¥28.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1241988800">1176</a>条评论</p></li><li><a class="pic" target="_top" href="http://product.dangdang.com/1284436900.html#ddclick_reco_recobar_2" title="正版炒股书籍日本蜡烛图技术-古老东方投资术的现代指南-股票期货"><img src="image1/1284436900-1_w.jpg" alt="正版炒股书籍日本蜡烛图技术-古老东方投资术的现代指南-股票期货" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1284436900.html#ddclick_reco_recobar_2" title="正版炒股书籍日本蜡烛图技术-古老东方投资术的现代指南-股票期货">正版炒股书籍日本蜡烛图技术-古老东方投资术的现代指南-股票期货</a><p class="price_p"><span class="d_price">¥39.98</span><i class="m_price">¥60.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1284436900">78</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1284623800.html#ddclick_reco_recobar_2" title="正版遥远的救世主，电视剧《天道》原著，缠中说禅原型畅销小说 ,阅读该小说，或者看以此改编的电视剧《天道》（王志文主演），读后您一定会深深地体会到缠师的味道"><img src="image1/1284623800-1_w.jpg" alt="正版遥远的救世主，电视剧《天道》原著，缠中说禅原型畅销小说 ,阅读该小说，或者看以此改编的电视剧《天道》（王志文主演），读后您一定会深深地体会到缠师的味道" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1284623800.html#ddclick_reco_recobar_2" title="正版遥远的救世主，电视剧《天道》原著，缠中说禅原型畅销小说 ,阅读该小说，或者看以此改编的电视剧《天道》（王志文主演），读后您一定会深深地体会到缠师的味道">正版遥远的救世主，电视剧《天道》原著，缠中说禅原型畅销小说 ,阅读该小说，或者看以此改编的电视剧《天道》（王志文主演），读后您一定会深深地体会到缠师的味道</a><p class="price_p"><span class="d_price">¥21.78</span><i class="m_price">¥33.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1284623800">74</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1247145435.html#ddclick_reco_recobar_2" title="极米（XGIMI）芒果小觅（曜岩黑）LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视"><img src="image1/1247145435-1_w.jpg" alt="极米（XGIMI）芒果小觅（曜岩黑）LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1247145435.html#ddclick_reco_recobar_2" title="极米（XGIMI）芒果小觅（曜岩黑）LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视">极米（XGIMI）芒果小觅（曜岩黑）LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视</a><p class="price_p"><span class="d_price">¥2699.00</span><i class="m_price">¥2799.00</i></p><p><span class="starlevel s0"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1247145435">0</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1247145235.html#ddclick_reco_recobar_2" title="极米（XGIMI）芒果小觅（水晶蓝） LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视"><img src="image1/1247145235-1_w.jpg" alt="极米（XGIMI）芒果小觅（水晶蓝） LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1247145235.html#ddclick_reco_recobar_2" title="极米（XGIMI）芒果小觅（水晶蓝） LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视">极米（XGIMI）芒果小觅（水晶蓝） LED投影机 家用 微型投影仪 3D智能巨幕影院 无屏电视</a><p class="price_p"><span class="d_price">¥2699.00</span><i class="m_price">¥2899.00</i></p><p><span class="starlevel s0"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1247145235">0</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1245133335.html#ddclick_reco_recobar_2" title="极米（XGIMI）无屏电视Z4X（ 投影机家用 4K微型高清投影仪 挥手切歌 3D家庭影院 微投 高亮度高对比 哈曼卡顿高品质wifi音响 电动调焦 微型投影仪 智能微投）品质生活！智能创造！"><img src="image1/1245133335-1_w.jpg" alt="极米（XGIMI）无屏电视Z4X（ 投影机家用 4K微型高清投影仪 挥手切歌 3D家庭影院 微投 高亮度高对比 哈曼卡顿高品质wifi音响 电动调焦 微型投影仪 智能微投）品质生活！智能创造！" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1245133335.html#ddclick_reco_recobar_2" title="极米（XGIMI）无屏电视Z4X（ 投影机家用 4K微型高清投影仪 挥手切歌 3D家庭影院 微投 高亮度高对比 哈曼卡顿高品质wifi音响 电动调焦 微型投影仪 智能微投）品质生活！智能创造！">极米（XGIMI）无屏电视Z4X（ 投影机家用 4K微型高清投影仪 挥手切歌 3D家庭影院 微投 高亮度高对比 哈曼卡顿高品质wifi音响 电动调焦 微型投影仪 智能微投）品质生活！智能创造！</a><p class="price_p"><span class="d_price">¥2799.00</span><i class="m_price">¥2999.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1245133335">23</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1253060335.html#ddclick_reco_recobar_2" title="极米100英寸16:10支架幕布"><img src="image1/1253060335-1_w.jpg" alt="极米100英寸16:10支架幕布" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1253060335.html#ddclick_reco_recobar_2" title="极米100英寸16:10支架幕布">极米100英寸16:10支架幕布</a><p class="price_p"><span class="d_price">¥369.00</span><i class="m_price">¥369.00</i></p><p><span class="starlevel s0"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1253060335">0</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900433167.html#ddclick_reco_recobar_2" title="岛上书店(电子书)"><img src="image1/1900433167-1_w.jpg" alt="岛上书店(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900433167.html#ddclick_reco_recobar_2" title="岛上书店(电子书)">岛上书店(电子书)</a><p class="price_p"><span class="d_price">¥7.99</span><i class="m_price">¥35.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900433167">576</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900430143.html#ddclick_reco_recobar_2" title="解忧杂货店(电子书)"><img src="image1/1900430143-1_w.jpg" alt="解忧杂货店(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900430143.html#ddclick_reco_recobar_2" title="解忧杂货店(电子书)">解忧杂货店(电子书)</a><p class="price_p"><span class="d_price">¥11.85</span><i class="m_price">¥39.50</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900430143">1814</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900492476.html#ddclick_reco_recobar_2" title="阿弥陀佛么么哒(电子书)"><img src="image1/1900492476-1_w.jpg" alt="阿弥陀佛么么哒(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900492476.html#ddclick_reco_recobar_2" title="阿弥陀佛么么哒(电子书)">阿弥陀佛么么哒(电子书)</a><p class="price_p"><span class="d_price">¥4.99</span><i class="m_price">¥38.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900492476">790</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900483259.html#ddclick_reco_recobar_2" title="无声告白(电子书)"><img src="image1/1900483259-1_w.jpg" alt="无声告白(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900483259.html#ddclick_reco_recobar_2" title="无声告白(电子书)">无声告白(电子书)</a><p class="price_p"><span class="d_price">¥5.99</span><i class="m_price">¥35.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900483259">361</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900409370.html#ddclick_reco_recobar_2" title="小王子【精装本】(电子书)"><img src="image1/1900409370-1_w.jpg" alt="小王子【精装本】(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900409370.html#ddclick_reco_recobar_2" title="小王子【精装本】(电子书)">小王子【精装本】(电子书)</a><p class="price_p"><span class="d_price">¥4.80</span><i class="m_price">¥32.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900409370">1140</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900494849.html#ddclick_reco_recobar_2" title="女神一号(电子书)"><img src="image1/1900494849-1_w.jpg" alt="女神一号(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900494849.html#ddclick_reco_recobar_2" title="女神一号(电子书)">女神一号(电子书)</a><p class="price_p"><span class="d_price">¥4.79</span><i class="m_price">¥39.00</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900494849">105</a>条评论</p></li><li style="display: none;"><a class="pic" target="_top" href="http://product.dangdang.com/1900304235.html#ddclick_reco_recobar_2" title="金色笔记(电子书)"><img src="image1/1900304235-1_w.jpg" alt="金色笔记(电子书)" height="150" width="150"></a><a class="name" target="_top" href="http://product.dangdang.com/1900304235.html#ddclick_reco_recobar_2" title="金色笔记(电子书)">金色笔记(电子书)</a><p class="price_p"><span class="d_price">¥21.50</span><i class="m_price">¥35.80</i></p><p><span class="starlevel s5"></span><a target="_top" href="http://comm.dangdang.com/comment/review_list.php?pid=1900304235">69</a>条评论</p></li></ul></div><a class="btn_slide prev_none" href="javascript:void(0);" title="上一页" id="btn_prev"><span></span></a><a class="btn_slide btn_next" href="javascript:void(0);" title="下一页" id="btn_next"><span></span></a></div>
                        </div>
                    </div>
                </div>
                <div class="empty_box"></div>

            </div>

            <a id="bottom_a" name="bottom_a"></a>

            <!--右栏结束-->
            <div class="empty_box"></div>
               </div>
            <div class="window" id="locListDiv" style="display: none;">
                <div class="wind_title" id="win_title_bar">
                    <div class="window_close" id="win_close_bar"><a onclick="javascript:cancel_click()"><img src="image1/window_close.gif" title="关闭窗口"></a></div>
                </div>
                <div class="wind_cont">
                    <div class="w_notice_1">您的个人档案已更新！</div>
                </div>
            </div>
            <div id="div_shield" class="div_shield"></div>
        </form>
        <script language="javascript" type="text/javascript">
            <!--
            if(navigator.userAgent.indexOf("Firefox")>0){
                IniHidDiv();
                CheckForm();
            }
            else if (navigator.userAgent.indexOf("MSIE")>0){
                IniHidDiv();
                CheckForm();
            }


            function __doPostBack(eventTarget, eventArgument)
            {

                var theForm = document.forms['form1'];

                if (!theForm) {
                    theForm = document.form1;
                }

                if (!theForm.onsubmit || (theForm.onsubmit() != false) || eventTarget=="btnSaveHead" || eventTarget=="btnUpload") {
                    if(eventTarget=="btnSaveHead"|| eventTarget=="btnUpload"){
                        theForm.action="save_headerimg.php";
                    }
                    //theForm.__EVENTARGUMENT.value = eventArgument;
                    theForm.submit();
                }
            }
            -->
        </script>
        <script>

            jQuery("#myddhome_ads").reco_module({});
        </script>
<!--页尾开始-->

 <div id="footer">

<div class="footer" dd_name="页尾">
	<div class="footer_pic_new">
		<div class="footer_pic_new_inner">
		    <a name="foot_1" href="http://help.dangdang.com/details/page13" target="_top" class="footer_pic01"><span>正规渠道正品保障</span></a>
		    <a name="foot_2" class="footer_pic02" href="http://help.dangdang.com/details/page21" target="_top"><span>放心购物货到付款</span></a>
		    <a name="foot_3" class="footer_pic03" href="http://help.dangdang.com/details/page16" target="_top"><span>150城市次日送达</span></a>
		    <a name="foot_4" class="footer_pic04" href="http://help.dangdang.com/details/page29" target="_top"><span>上门退货当场退款</span></a>
		</div>
	</div>
	<div class="public_footer_new">
		<div class="footer_sort footer_nvice">
			<span class="f_title">购物指南</span>
			<ul>
			    <li><a name="foot_gouwu" href="http://help.dangdang.com/details/page2" target="_top" class="main" rel="nofollow">购物流程</a></li>
			    <li><a name="foot_jifen" href="http://help.dangdang.com/details/page6" target="_top" rel="nofollow">发票制度</a></li>
			    <li><a name="foot_fapiao" href="http://safe.dangdang.com/" target="_top" rel="nofollow">账户管理</a></li>
			    <li><a name="foot_mydangdang" href="http://help.dangdang.com/details/page8" target="_top" rel="nofollow">会员优惠</a></li>
			</ul>
		</div>
		<div class="footer_sort footer_pay">
			<span class="f_title">支付方式</span>
			<ul>
				<li><a name="foot_tuihuanhuoliucheng" href="http://help.dangdang.com/details/page21" target="_top" rel="nofollow">货到付款</a></li>
			    <li><a name="foot_tuihuanhuo" href="http://help.dangdang.com/details/page22" target="_top" rel="nofollow">网上支付</a></li>
			    <li><a name="foot_huanhuo" href="http://help.dangdang.com/details/page24" target="_top" rel="nofollow">礼品卡支付</a></li>
			    <li><a name="foot_tuihuo" href="http://help.dangdang.com/details/page23" target="_top" rel="nofollow">银行转帐</a></li>
			</ul>
		</div>
		<div class="footer_sort footer_characteristic">
			<span class="f_title">订单服务</span>
			<ul>
				<li><a name="foot_jifen" href="http://help.dangdang.com/details/page19" target="_top" class="main" rel="nofollow">订单配送查询</a></li>
			    <li><a name="foot_lipinka" href="http://help.dangdang.com/details/page4" target="_top" rel="nofollow">订单状态说明</a></li>
			    <li><a name="foot_ershoushu" href="http://orderb.dangdang.com/myallorders.aspx" target="_top" rel="nofollow">自助取消订单</a></li>
			    <li><a name="foot_shouji" href="http://orderb.dangdang.com/myallorders.aspx" target="_top" rel="nofollow">自助修改订单</a></li>
			</ul>
		</div>
		<div class="footer_sort footer_distribution">
			<span class="f_title">配送方式</span>
			<ul>
			    <li><a name="foot_huodaofukuan" href="http://help.dangdang.com/details/page14" target="_top" class="main" rel="nofollow">配送范围及免邮标准</a></li>
			    <li><a name="foot_yinhangzhuanzhang" href="http://help.dangdang.com/details/page15" target="_top" class="main" rel="nofollow">当日递/次日达</a></li>
			    <li><a name="foot_dangdanglijuan" href="http://help.dangdang.com/details/page18" target="_top" rel="nofollow">订单自提</a></li>
			    <li><a name="foot_dangdanglijuan" href="http://help.dangdang.com/details/page20" target="_top" rel="nofollow">验货与签收</a></li>
			</ul>
		</div>
		<div class="footer_sort footer_help">
			<span class="f_title">退换货</span>
			<ul>
			    <li><a name="foot_faq" href="http://help.dangdang.com/details/page28" target="_top" rel="nofollow">退换货政策</a></li>
			    <li><a name="foot_zhaohuimima" href="http://return.dangdang.com/reverseapplyselect.aspx" target="_top" rel="nofollow">自助申请退换货</a></li>
			    <li><a name="foot_huikuandan" href="http://return.dangdang.com/reverseapplylist.aspx" target="_top" rel="nofollow">退换货进度查询</a></li>
			    <li><a name="foot_tuiding" href="http://help.dangdang.com/details/page31" target="_top" rel="nofollow">退款方式和时间</a></li>
			</ul>
		</div>
		<div class="footer_sort footer_shangjia">
			<span class="f_title">商家服务</span>
			<ul>
			    <li><a name="foot_zhaohuimima" href="http://shop.dangdang.com/shangjia" target="_top" rel="nofollow">商家中心</a></li>
			    <li><a name="foot_huikuandan" href="http://outlets.dangdang.com/merchants_cooperation" target="_top" rel="nofollow">运营服务</a></li>
			    <li><a name="foot_tuiding" href="http://outlets.dangdang.com/merchants_outlets" target="_top" rel="nofollow">加入尾品汇</a></li>
			</ul>
		</div>
	</div>
	<div class="footer_nav_box">
		<div class="footer_nav"><a href="http://static.dangdang.com/topic/2227/176801.shtml" target="_top" rel="nofollow">公司简介</a><span class="sep">|</span><a href="http://ir.dangdang.com/" target="_top">Investor Relations</a><span class="sep">|</span><a href="http://zhaopin.dangdang.com/" target="_top">诚聘英才</a><span class="sep">|</span><a href="http://union.dangdang.com/" target="_top">网站联盟</a><span class="sep">|</span><a href="http://outlets.dangdang.com/merchants_open" target="_top">当当招商</a><span class="sep">|</span><a href="http://misc.dangdang.com/groupbuy/Default.aspx" target="_top" rel="nofollow">机构销售</a><span class="sep">|</span><a href="http://static.dangdang.com/topic/744/200778.shtml" target="_top">手机当当</a><span class="sep">|</span><a href="http://blog.dangdang.com/" target="_top">官方Blog</a>
                <span class="sep">|</span><div class="footer_hot_search"><a href="http://www.dangdang.com/sales/brands/" target="_top" class="footer_a" id="hot_search" onmouseover="showghotsearch('hot_search','hot_search_content')" onmouseout="hidehotsearch('hot_search','hot_search_content');">热词搜索</a><div class="pos_a_box" style="display: none;" id="hot_search_content" onmouseover="showghotsearch('hot_search','hot_search_content')" onmouseout="hidehotsearch('hot_search','hot_search_content');">
                    <a href="http://www.dangdang.com/sales/brands/a-1.html" target="_top">A</a><a href="http://www.dangdang.com/sales/brands/b-1.html" target="_top">B</a><a href="http://www.dangdang.com/sales/brands/c-1.html" target="_top">C</a><a href="http://www.dangdang.com/sales/brands/d-1.html" target="_top">D</a><a href="http://www.dangdang.com/sales/brands/e-1.html" target="_top">E</a><a href="http://www.dangdang.com/sales/brands/f-1.html" target="_top">F</a><a href="http://www.dangdang.com/sales/brands/g-1.html" target="_top">G</a>
                    <a href="http://www.dangdang.com/sales/brands/h-1.html" target="_top">H</a><a href="http://www.dangdang.com/sales/brands/i-1.html" target="_top">I</a><a href="http://www.dangdang.com/sales/brands/j-1.html" target="_top">J</a><a href="http://www.dangdang.com/sales/brands/k-1.html" target="_top">K</a><a href="http://www.dangdang.com/sales/brands/l-1.html" target="_top">L</a><a href="http://www.dangdang.com/sales/brands/m-1.html" target="_top">M</a><a href="http://www.dangdang.com/sales/brands/n-1.html" target="_top">N</a>
                    <a href="http://www.dangdang.com/sales/brands/o-1.html" target="_top">O</a><a href="http://www.dangdang.com/sales/brands/p-1.html" target="_top">P</a><a href="http://www.dangdang.com/sales/brands/q-1.html" target="_top">Q</a><a href="http://www.dangdang.com/sales/brands/r-1.html" target="_top">R</a><a href="http://www.dangdang.com/sales/brands/s-1.html" target="_top">S</a><a href="http://www.dangdang.com/sales/brands/t-1.html" target="_top">T</a><a href="http://www.dangdang.com/sales/brands/u-1.html" target="_top">U</a>
                    <a href="http://www.dangdang.com/sales/brands/v-1.html" target="_top">V</a><a href="http://www.dangdang.com/sales/brands/w-1.html" target="_top">W</a><a href="http://www.dangdang.com/sales/brands/x-1.html" target="_top">X</a><a href="http://www.dangdang.com/sales/brands/y-1.html" target="_top">Y</a><a href="http://www.dangdang.com/sales/brands/z-1.html" target="_top">Z</a><a href="http://www.dangdang.com/sales/brands/other-1.html" target="_top">0-9</a>
                <i></i></div></div>
                <script>
                    var setTo = null;
                    function showghotsearch(){
                        clearTimeout(setTo);
                        document.getElementById("hot_search_content").style.display="block";
                    }
                    function hidehotsearch(){
                        setTo = setTimeout(function(){
                          document.getElementById("hot_search_content").style.display="none";
                        },100)                        
                    }
                </script> 		
		</div>
		<div class="footer_copyright"><span>Copyright (C) 当当网 2004-2016, All Rights Reserved</span></div>
		<div class="footer_copyright"><span><a href="http://www.miibeian.gov.cn/" target="_top" rel="nofollow">京ICP证041189号</a></span><span class="sep">|</span><span>出版物经营许可证 新出发京批字第直0673号</span><span class="sep">|</span><span>食品流通许可证：SP1101011010021855(1-1)</span><br><span>互联网药品信息服务资格证编号：(京)-非经营性-2012-0016</span><span class="sep">|</span><span>京公网安备110101000001号</span></div>
	<!-- 有三个icon的时候加footer_icon2 -->
		<div class="footer_icon footer_icon2">
				<div class="validator"><a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202001051000098" target="_top" class="footer_img"><img src="image1/validate.gif"></a></div>
				<div class="knet"><!-- 可信网站LOGO安装开始 -->
					<script type="text/JavaScript">
						function CNNIC_change(eleId) {
							var str = document.getElementById(eleId).href;
							var str1 = str.substring(0, (str.length - 6));
							str1 += CNNIC_RndNum(6);
							document.getElementById(eleId).href = str1;
						}

						function CNNIC_RndNum(k) {
							var rnd = "";
							for (var i = 0; i < k; i++)
								rnd += Math.floor(Math.random() * 10);
							return rnd;
						}
					</script>
					<a href="https://ss.knet.cn/verifyseal.dll?sn=2010091900100002234&amp;pa=2940051" tabindex="-1" id="urlknet" target="_top" rel="nofollow"><img alt="可信网站" name="CNNIC_seal" src="image1/knetseallogo.png" oncontextmenu="return false;" onclick="CNNIC_change('urlknet')" border="true" height="47" width="128"></a><!-- 可信网站LOGO安装结束 -->
					</div>
					<div class="clear"></div>
				</div>
	</div>
</div>
</div>
<div id="footer_end"></div>
<!--CreateDate  2016-09-28 18:30:01-->    <div class="foot_tip_ad">广告</div>
    
<script src="js1/check_snbrowse.js" type="text/javascript"></script>
<script type="text/javascript">login_session.browsePageOperate();</script>
<script src="js1/utopia.js" type="text/javascript"></script>
<script type="text/javascript" src="js1/js_tracker.js"></script>
<script type="text/javascript">
//MediaV
var _mvq = _mvq || [];
_mvq.push(['$setAccount', 'm-111-0']);
_mvq.push(['$logConversion']);
(function() {
var mvl = document.createElement('script');
mvl.type = 'text/javascript'; mvl.async = true;
mvl.src = ('https:' == document.location.protocol ? 'http://static.dangdang.com/js1/header2012/mvl.js' : 'http://static.dangdang.com/js1/header2012/mvl.js');
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(mvl, s);
})();
//pinyou
var _py = _py || [];
_py.push(['a', 'xT..hNvyCM_tldiECftJyo-LKP']);
_py.push(['domain','stats.teller.cn']);
_py.push(['e','']);
-function(d) {
var s = d.createElement('script'),
e = d.body.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e),
f = 'https:' == location.protocol;
s.src = (f ? 'https' : 'http') + '://'+(f?'js.teller.cn':'js.teller.cn')+'/j/adv.js';
}(document);
//jingzan
(function(param){
var c = {query:[], args:param||{}};
c.query.push(["_setAccount","100"]);
c.query.push(["_setSiteID","1"]);
(window.__zpSMConfig = window.__zpSMConfig||[]).push(c);
var zp = document.createElement("script"); zp.type = "text/javascript"; zp.async = true;
zp.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//cdn.zampda.net/s.js";
var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(zp, s);
})(window.__zp_tags_params);
</script>
<noscript><img src="//stats.teller.cn/adv.gif?a=xT..hNvyCM_tldiECftJyo-LKP&e=" style="display:none;"/></noscript>



                
    

<iframe id="mv_cm" src="index_2.html" style="width: 1px; border: 0px none; position: absolute; left: -100px; top: -100px; height: 1px;"></iframe><script src="msg_count_api.php" type="text/javascript"></script></body>
</html>
