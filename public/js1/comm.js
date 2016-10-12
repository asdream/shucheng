// JScript ÎÄ¼þ
var locListDivTips=null;
var vip_price_client = 0;
var economy_client = 0;
var choice_count_client =0;


function init_ajax()
{
    locListDivTips=document.getElementById('locListDiv');   
  
}
function Ajax(url)
{
    this.m_xmlReq=false;
    this.Url=url;
    
    if(window.XMLHttpRequest)
    {
        this.m_xmlReq = new XMLHttpRequest();
        if(this.m_xmlReq.overrideMimeType)  this.m_xmlReq.overrideMimeType('text/xml');
    }
    else if(window.ActiveXObject)
    { 
       try{this.m_xmlReq = new ActiveXObject('Msxml2.XMLHTTP');}
       catch(e)
       {
          try{this.m_xmlReq = new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}
       }
    }
    
    this.invokeServer=function(send_data,method)
    {
        if(!this.m_xmlReq)  return;
        
        this.m_xmlReq.open(method,this.Url,false);
        
        if(method=='POST') 
        this.m_xmlReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');  
        this.m_xmlReq.send(send_data.toString());
        
        
        var result=null;
        if(this.m_xmlReq.status==200 && this.m_xmlReq.readyState == 4)
            eval("result="+this.m_xmlReq.responseText);  
        
        return result;         
    }
}

function parsePrice(s)
{
    if (s == null || s=='')
    {
        return 0;
    }
   return s.replace(/£¤/g,'');
}
function formatFloat(f)
{
    var oNumberObject = new Number(f);
    return oNumberObject.toFixed(2);
};

function checkAll_click(chk_obj)
{
    var  div_row = chk_obj.parentNode.parentNode;
    var cur_vip_price =parsePrice(chk_obj.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
    var cur_economy = parsePrice(chk_obj.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
    if(parseFloat(cur_vip_price)>0)
        ;
    else
        cur_vip_price=parsePrice(chk_obj.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
            
    if(chk_obj.checked)
    {
        
        vip_price_client=formatFloat(parseFloat(vip_price_client)+parseFloat(cur_vip_price));
        economy_client=formatFloat(parseFloat(economy_client)+parseFloat(cur_economy));
        choice_count_client=choice_count_client+1;
         
        div_row.className='temp_detail div_mouseover';
        div_row.onmouseout=null;
        div_row.onmouseover=null;
    }
    else
    {
        vip_price_client=formatFloat(parseFloat(vip_price_client)-parseFloat(parsePrice(cur_vip_price)));
        economy_client=formatFloat(parseFloat(economy_client)-parseFloat(parsePrice(cur_economy)));
        choice_count_client=choice_count_client-1; 
        div_row.className='temp_detail';
        div_row.onmouseout=function(){this.className='temp_detail div_mouseout';};
        div_row.onmouseover=function(){this.className='temp_detail div_mouseover'};
    }


    var checks =document.getElementsByName("choice_tips");
    if(choice_count_client>0)//¼ÆËã²¢Ìæ»»ÏÔÊ¾½ð¶î    {
      for(var k=0;k<checks.length;k++)
      {
        checks[k].className = 'price_total';¡¡
        checks[k].childNodes[1].childNodes[0].innerHTML=choice_count_client;
        checks[k].childNodes[3].innerHTML=vip_price_client;
        checks[k].childNodes[5].innerHTML =economy_client;
        
      }
        
    }
    else
    {
      for(var k=0;k<checks.length;k++)
      {
        checks[k].className = 'objhide';¡¡
      }

    }

}



function ChooseAll(obj)
{
    var checkFlag = true;
¡¡¡¡if( checkFlag ) 
¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡var inputs = document.getElementsByTagName("input");
¡¡¡¡¡¡¡¡¡¡var j = 0;
¡¡¡¡¡¡¡¡¡¡var total_vip_price =0;//×ÜÏû·Ñ¼Û¸ñ
          var total_economy =0; //×Ü½ÚÊ¡ 
¡¡¡¡¡¡¡¡¡¡for (var i=0; i < inputs.length; i++) 
¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡if (inputs[i].type == "checkbox" && inputs[i].id == "CheckAll" )
¡¡¡¡¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡inputs[i].checked = obj.checked;
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡if(inputs[i].checked)
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    j++;
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    inputs[i].parentNode.parentNode.className='temp_detail div_mouseover';
                        inputs[i].parentNode.parentNode.onmouseout=null;
                        inputs[i].parentNode.parentNode.onmouseover=null;
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡}
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡else
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    inputs[i].parentNode.parentNode.className='temp_detail';
                        inputs[i].parentNode.parentNode.onmouseout=function(){this.className='temp_detail div_mouseout';};
                        inputs[i].parentNode.parentNode.onmouseover=function(){this.className='temp_detail div_mouseover'};
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡}
¡¡¡¡¡¡¡¡¡¡¡¡¡¡}     
¡¡¡¡¡¡¡¡¡¡}
¡¡¡¡¡¡¡¡¡¡checkFlag = false;
¡¡¡¡¡¡¡¡¡¡var checks =document.getElementsByName("choice_tips");
¡¡¡¡¡¡¡¡¡¡if(j>0)//¼ÆËã²¢Ìæ»»ÏÔÊ¾½ð¶î¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡    total_vip_price =formatFloat(document.getElementById('hid_total_vip_price').value);
¡¡¡¡¡¡¡¡      total_economy =formatFloat(document.getElementById('hid_total_economy').value);
              //is_choice_all= true;
              vip_price_client = total_vip_price;
              economy_client = total_economy;
              choice_count_client =j;

¡¡¡¡¡¡¡¡¡¡    for(var k=0;k<checks.length;k++)
¡¡¡¡¡¡¡¡¡¡    {
¡¡¡¡¡¡¡¡¡¡      checks[k].className = 'price_total';¡¡
¡¡¡¡¡¡¡¡¡¡      checks[k].childNodes[1].childNodes[0].innerHTML=j;
¡¡¡¡¡¡¡¡¡¡      checks[k].childNodes[3].innerHTML=total_vip_price;
                checks[k].childNodes[5].innerHTML =total_economy;
 ¡¡¡¡¡¡¡¡¡¡    }
¡¡¡¡¡¡¡¡¡¡      
¡¡¡¡¡¡¡¡¡¡}
¡¡¡¡¡¡¡¡¡¡else
¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡   // is_choice_all = false;
¡¡¡¡¡¡¡¡¡¡    vip_price_client = 0;
              economy_client = 0;
              choice_count_client =0;
¡¡¡¡¡¡¡¡¡¡    for(var k=0;k<checks.length;k++)
¡¡¡¡¡¡¡¡¡¡    {
¡¡¡¡¡¡¡¡¡¡      checks[k].className = 'objhide';¡¡

¡¡¡¡¡¡¡¡¡¡    }
¡¡¡¡¡¡¡¡¡¡
¡¡¡¡¡¡¡¡¡¡}
¡¡¡¡¡¡¡¡¡¡
¡¡¡¡¡¡¡¡¡¡
¡¡¡¡}
}



function getSelPrd()
{
   var inputs = document.getElementsByTagName("input");
   var strid = "";
¡¡¡¡¡¡¡¡¡¡for (var i=0; i < inputs.length; i++) 
¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡if (inputs[i].type == "checkbox" && inputs[i].id == "CheckAll" )
¡¡¡¡¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡if (inputs[i].checked == true)
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡{
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    var patrn=/^[0-9]{1,20}$/; 
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    if (patrn.exec(inputs[i].value))
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    {
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡        strid = strid + "," + inputs[i].value;
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡    }
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡}
¡¡¡¡¡¡¡¡¡¡¡¡¡¡}     
¡¡¡¡¡¡¡¡¡¡}

¡¡¡¡¡¡¡¡¡¡return strid.substring(1, strid.length);
 
}


function checkAdviceSubmit()
{
    if(document.getElementById("UIResearch1_btnAdviceSubmit").value == "")
    {
        window.alert("ÇëÌîÐ´ÄÚÈÝ£¡");
        return false;
    }
}


String.prototype.trim=function() 
{ 
	return this.replace(/(\s*$)|(^\s*)/g, ''); 
}
/*****************************/

function setlocListDivTips(div_name)
{
    switch(div_name)
    {
        case "delete_single_confirm":
            locListDivTips.innerHTML="<div class='wind_title' id='win_title_bar'><div class='title_left'>É¾³ýÉÌÆ·</div><div class='window_close' id='win_close_bar'><a href='javascript:for_99click();'><img src='images/windo_close.gif' title='¹Ø±Õ´°¿Ú' /></a></div></div><div class='w_notice_2'>ÄúÈ·¶¨É¾³ý´ËÉÌÆ·Âð£¿</div><div class='div_button'><input id='single_del_con' class='w_ok' name='' type='button' value='ÊÇ' /><input id='single_cancel' class='w_cancel' name='' type='button' value='·ñ' /></div>";
            locListDivTips.className = "window_100";
            break;  
          
        case "delete_confirm":
            locListDivTips.innerHTML="<div class='wind_title' id='win_title_bar'><div class='title_left'>É¾³ýÉÌÆ·</div><div class='window_close' id='win_close_bar'><a href='javascript:for_99click();'><img src='images/windo_close.gif' title='¹Ø±Õ´°¿Ú' /></a></div></div><div class='w_notice_2'>ÄúÈ·¶¨É¾³ýËùÑ¡µÄ <span id='select_product_count' class='c_red_bold'></span> ¼þÉÌÆ·Âð£¿</div><div class='div_button'><input id='del_con' class='w_ok' name='' type='button' value='ÊÇ' /><input id='cancel' class='w_cancel' name='' type='button' value='·ñ' /></div>";
            locListDivTips.className = "window_100";
            
            break;  
        
        case "has_no_choice_tips":
            locListDivTips.innerHTML="<div class='wind_title' id='win_title_bar'><div class='title_left'>Î´Ñ¡ÔñÉÌÆ·</div><div class='window_close' id='win_close_bar'><a href='javascript:for_99click();'><img src='images/windo_close.gif' title='¹Ø±Õ´°¿Ú' /></a></div></div><div class='w_notice_1'>Äú»¹Î´Ñ¡ÔñÉÌÆ·¡£</div><a href='javascript:for_99click();'  id='confirm'><div class='div_button'><input class='w_ok2' name='' type='button' value='È·¶¨' /></div></a>";
            locListDivTips.className = "window_100";
            break;  

        default:
            break; 
        
    }
    
}

function $(id)
{
    return document.getElementById(id);
};
function $h(o)
{
    o.style.display='none'
};
function $s(o)
{
    o.style.display='block';
};
function _h(o)
{
    o.style.visibility='hidden';
};
function _s(o)
{
    o.style.visibility='visible';
};

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

var isIE =!!(window.attachEvent && !window.opera);
function setLocation(obj,x,y)
{
    if(!isIE){x+='px';y+='px';}
    obj.style.left=x;obj.style.top=y;
};
function setDimension(obj,w,h)
{
    if(!isIE)
    {
        w+='px';h+='px';
    }
    obj.style.width=w;
    obj.style.height=h;
};
window.onerror = function ()
{
    return true;
};
function getWinSize()
{
        return [window.screen.width,document.body.clientHeight]
};
function getScrollTop()
{
    if (typeof(window.pageYOffset) != 'undefined')
    {
        return window.pageYOffset; 
    }
    else if (typeof(document.compatMode)!= 'undefined' && document.compatMode != 'BackCompat') 
    {
        return document.documentElement.scrollTop;
    }
    else if(typeof(document.body)!= 'undefined')
    {
    return document.body.scrollTop;
    }
};


function DivModelDialog(div_id,title_bar_id,xbox_id,shield_id)
{
    var can_move = false,PX,PY,
    obj_move = $(div_id),
    obj_xbox = $(xbox_id),
    obj_shield = $(shield_id);
    
    var closeW = function()
    {
        $h(obj_move);
        _cl();
        $h(obj_shield);

        document.onmouseup=null;
        document.onmousemove=null;
    };
    var mDown=function(e)
    {
        var pos =getEventPosition(e);
        var objPos=getposOffset(obj_move);
        can_move = true;
        if(isIE) 
            obj_move.setCapture();
        pX=pos[0] - objPos[0];
        pY=pos[1] - objPos[1];
    };
    var getEventPosition = function(e)
    {
        if(isIE) return [event.x,event.y];
        return [e.pageX,e.pageY];
    };
    var mMove=function(e)
    {
        if(!can_move) return;
        var pos =getEventPosition(e);
        var win_size=getWinSize();
        if(pos[0]<0 || pos[1]<0 || pos[0]>win_size[0] || pos[1]>win_size[1]) return;
        setLocation(obj_move,pos[0]-pX,pos[1]-pY);
    };
    var mUp=function ()
    {
        if(!can_move) return;
        if(isIE) obj_move.releaseCapture();
        can_move = false;
    };


    var _cl= function()
    {
        _s(obj_xbox); 
    };
    this.closeLoading = function()
    {
        _cl();
    };
    this.show=function(x,y)
    {
        var win_size=getWinSize();
        setDimension(obj_shield,win_size[0],win_size[1]);
        setLocation(obj_move,x,y);
        $s(obj_move);
        $s(obj_shield); 
        document.onmouseup=mUp;
        document.onmousemove=function(e){mMove(e);};
        
    };
    this.closeDialog = closeW;
    $(title_bar_id).onmousedown=function(e)
    {
        mDown(e);
    };
    obj_xbox.onclick=function() 
    {
        closeW();
        $h(obj_shield);
    };
};


function AlertNoticeDiv()
{
    var cancel_click =function()
	{
	    single_delete_confirm_dialog.closeDialog();
	    return;
	}
	
	var single_delete_confirm_dialog =  new DivModelDialog('locListDiv','win_title_bar','win_close_bar','div_shield');
    var win_size = getWinSize();	    
    single_delete_confirm_dialog.show((win_size[0]-278)/2,getScrollTop()+300);
}

function btnSingleDelClick(product_id,del_span)
{
    
    setlocListDivTips("delete_single_confirm");
    var confirm_click =function()
	{
		single_delete_confirm_dialog.closeDialog();
        var remove_ajax = new Ajax('cust_wish_list_remove.aspx');
	    var result=remove_ajax.invokeServer('productid='+product_id,'POST');
	    if(result==null || result["errorCode"]!=0)  
	    {
	        alert("É¾³ýÊ§°Ü£¡");
	        return;
	    }
	    location.reload();
	}
	

	var cancel_click =function()
	{
	    single_delete_confirm_dialog.closeDialog();
	    return;
	}
	
	if(document.getElementById("single_del_con")!=null)
	    document.getElementById("single_del_con").onclick = confirm_click;
	if(document.getElementById("single_cancel")!=null)
	    document.getElementById("single_cancel").onclick = cancel_click;
	
	var single_delete_confirm_dialog =  new DivModelDialog('locListDiv','win_title_bar','win_close_bar','div_shield');
    var win_size = getWinSize();	    
    single_delete_confirm_dialog.show((win_size[0]-278)/2,getScrollTop()+300); 
}
function for_99click(){}










 
 








