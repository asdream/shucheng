String.prototype.len=function(){ 
return this.replace(/[^\x00-\xff]/g,"**").length; 
} 
 
//Set maxlength for multiline TextBox 
function setMaxLength(object,length) 
{ 
 
 var result = true; 
 var controlid = document.selection.createRange().parentElement().id; 
 var controlValue = document.selection.createRange().text; 
 var tempString=object.value; 
 
 var tt=""; 
 for(var i=0;i<length;i++) 
 { 
 if(tt.len()<length) 
 tt=tempString.substr(0,i+1); 
 else 
 break; 
 } 
 if(tt.len()>length) 
 tt=tt.substr(0,tt.length-1); 
   object.value=tt; 
} 
 
//Check maxlength for multiline TextBox when paste 
function limitPaste(object,length) 
{ 
 var tempLength = 0; 
 if(document.selection) 
 { 
 if(document.selection.createRange().parentElement().id == object.id) 
 { 
 tempLength = document.selection.createRange().text.len(); 
 } 
 } 
 var tempValue = window.clipboardData.getData("Text"); 
 tempLength = object.value.len() + tempValue.len() - tempLength; 
 
 if (tempLength > length) 
 { 
 tempLength -= length; 
 var tt=""; 
 for(var i=0;i<tempValue.len()-tempLength;i++) 
 { 
 if(tt.len()<(tempValue.len()-tempLength)) 
 tt=tempValue.substr(0,i+1); 
 else 
 break; 
 } 
 if(tt.len()<=0) 
 { 
 window.event.returnValue=false; 
 
 } 
 else 
 { 
 tempValue=tt; 
 window.clipboardData.setData("Text", tempValue); 
 window.event.returnValue = true; 
 } 
 } 
 
 
} 
 
function PressLength() 
{ 
 
 if(event.srcElement.type=="text" || event.srcElement.type=="textarea" ) 
 { 
 if(event.srcElement.length!=null) 
 setMaxLength(event.srcElement,event.srcElement.length); 
 
 } 
} 
 
function LimitLength() 
{ 
 
 if(event.srcElement.type=="text" || event.srcElement.type=="textarea" ) 
 { 
 if(event.srcElement.length!=null) 
 limitPaste(event.srcElement,event.srcElement.length); 
 } 
}
//ff支持s
function isIEnow()
{
  return !!(window.attachEvent && !window.opera);
}
if(isIEnow()){
    document.documentElement.attachEvent('onBlur', PressLength); 
    document.documentElement.attachEvent('onpaste', LimitLength); 
}
 






 var http_request_chknickname=false;

 function send_chknickname_request(url){
     http_request_chknickname=false;
     if(window.XMLHttpRequest){
         http_request_chknickname=new XMLHttpRequest();
         if(http_request_chknickname.overrideMimeType){
             http_request_chknickname.overrideMimeType('text/xml');
         }
     }
     else if(window.ActiveXObject){
         try{
             http_request_chknickname=new ActiveXObject('Msxml2.XMLHTTP');
         }
         catch(e){
             try{
                 http_request_chknickname=new ActiveXObject('Microsoft.XMLHTTP');
             }
             catch(e){}
         }
     }
     if(!http_request_chknickname){
         window.alert('不能创建XMLHttpRequest对象实例!');
         return false;
     }
     http_request_chknickname.onreadystatechange=process_chknickname_Request;
     http_request_chknickname.open('GET',url,true);
     http_request_chknickname.send(null);
 }

 function process_chknickname_Request(){
     
     if(http_request_chknickname.readyState==4){
     if(http_request_chknickname.status==200){
         
            var info = document.getElementById("info_1");
            if (http_request_chknickname.responseText=="")
            {
                
                info.className = "c_gray";
                info.innerHTML="<p>您的昵称可以由小写英文字母、中文、数字组成，</p>长度4－20个字符，一个汉字为两个字符";
                return false;
            }
            else
            {
                var obj = document.getElementById("Txt_petname");
                obj.focus();
                info.className = "notice_write";
                info.innerHTML=http_request_chknickname.responseText;
                return true;
            }

         }
         else {
             //alert('您所请求的页面有异常!错误状态:'+http_request_chknickname.status);
            return false;
            
         }
     }
 }
 function chknickname(custid,nickname){
     //alert(nickname); 
     //alert(encodeURIComponent(nickname));
     
     send_chknickname_request('checknickname.php?custid='+custid+'&nickname='+nickname);
     //alert(custid);

}
