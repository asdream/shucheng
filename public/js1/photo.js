// JScript 文件

function div_upload_state_opt(str,classname)
{
    var obj = document.getElementById("div_upload_state");
    obj.innerHTML = str;
    obj.className = classname;    
    //obj.style.visibility='visible';
    obj.style.display = "block";
}

function Disable_button(buttonid)
{
    var obj = document.getElementById(buttonid);
    obj.disabled = false;
}

var imgstate=0;
function Chkfile()
{ 
    Hid(0);
    var hid_opt=document.getElementById("hid_opt");
    if (hid_opt.value=="1"){
        ShowHidDIV('div_upload_state');
        return true;
        //document.form1.submit();
        }
    var objfile=document.getElementById("Myfile");

    if (objfile.value=="")
    {
        //div_upload_state_opt("请先从您的电脑中选择一个图片文件","notice_choice");
        div_upload_state_opt("请先选择图片文件","notice_write1");
        return false;
    }
    else
    {
    
        if (!ChkFileExist(objfile.value)){
            div_upload_state_opt("图片不存在，请重新选择图片"); 
        }
        else{
            if (Check_FileType(objfile.value))
            {
                if (this.checkSize())
                {
                    ShowHidDIV('div_upload_state');
                    return true;
                    //document.form1.submit();
                }
                else
                {
                    //alert("图片好大-_-! 请不要使用大于1M的图片");
                    div_upload_state_opt("图片大小超过300k","notice_write1");
                    return false;
                }
            }
            else{
                //div_upload_state_opt("您上传的图片必须为jpg,gif,bmp,png类型","notice_write1");
                div_upload_state_opt("仅支持jpg,gif,png,bmp格式","notice_write1");
                return false;
            }
        }
        
        
    }
}

function checkSize()
{
    
    var limitnum=300;
    var limit  = limitnum * 1024;
    var objfile=document.getElementById("imghidden");
    //alert(objfile.fileSize);
    if (objfile.fileSize > limit)
    {
        var objfile=document.getElementById("imghidden");
        if(objfile){
            objfile.src="";
        }
        return false;
    }
    else
    {
        return true;
    }
}

function changeSrc(filePicker)
{
    this.div_hidden('div_update_state');
    this.div_hidden('div_upload_state');
    var oFileChecker = document.getElementById("imghidden");
    
    if (this.Check_FileType(filePicker.value))
        oFileChecker.src = filePicker.value;
        //oFileChecker.src = "file:/// "   +   filePicker.value.replace(/\\/g, "/ ") ;
    else
    {
        //alert("您上传的图片必须为.jpg,.gif,.bmp,png类型");
        div_upload_state_opt("仅支持jpg,gif,png,bmp格式","notice_write1");
        var btnupload = document.getElementById("btnUpload");
        btnupload.disabled=true;
       
    }
        
}

function ChkFileExist(filepath)   
{   
    return true;
}

function chkonkeydown(evt){
    if(navigator.userAgent.indexOf("Firefox")>0){
        evt = evt ? evt : (window.event ? window.event : null);      
        evt.preventDefault();
        evt.stopPropagation();

    }
    else if (navigator.userAgent.indexOf("MSIE")>0){
        event.returnValue = false;
        event.cancelBubble = true;
    }
}

function Check_FileType(str)
{
    var pos = str.lastIndexOf(".");
    var lastname = str.substring(pos,str.length)  //此处文件后缀名也可用数组方式获得str.split(".") 
    if (lastname.toLowerCase()!=".jpg" && lastname.toLowerCase()!=".gif"&& lastname.toLowerCase()!=".bmp"&& lastname.toLowerCase()!=".png")
    {
        return false;
    }
    else 
    {
        var btnupload = document.getElementById("btnUpload");
        btnupload.disabled=false;
        return true;
    }
}

function div_hidden(divname){
    
    var div = document.getElementById(divname);
    if(!div)
        return;
    if (div.innerHTML!="")
        div.innerText="";
    //div.style.visibility='hidden';
    div.style.display="none";
    
    var Button2 = document.getElementById("btnSaveHead");
    Button2.disabled="true";
    
//    var Button1 = document.getElementById("btnUpload");
//    Button1.disabled=true;
}


function ShowHeadPhotoType(id)
{
    if(id <0 || id > 3)
        return;
    var type_id = 0;
    var obj_type_id = document.getElementById("hiddenphototypeid");
    if(obj_type_id != null)
        type_id=obj_type_id.value;
    if(type_id ==id)
        return;

    for(var i =0;i<4;i++)
    {
        var obj_head = document.getElementById("head_type_"+i);
        var obj_photo = document.getElementById("all_photo_"+i);
        if(obj_head!=null && obj_photo!=null)
        {
            if(i==id)
            {
                obj_head.setAttribute("class","all_photo_title_mo");
                obj_head.setAttribute("className","all_photo_title_mo");
                obj_photo.style.display="block";
            }
            else
            {
                obj_head.setAttribute("class","all_photo_title_other");
                obj_head.setAttribute("className","all_photo_title_other");
                obj_photo.style.display="none";
            }
        }
    }
    if(obj_type_id != null)
        obj_type_id.value=id;
}
function ChangeClientHeadPhoto(index)
{
    if(index <1 ||index > 40)
        return ;
    var head_img = document.getElementById("img_head_select");
    var head_index = document.getElementById("hinddenimgindex");
    if(head_index != null)
    {
        if(head_index.value == index)
            return;
    }
    var head_select ;
    for(var i=1;i<=40;i++)
    {
        head_select = document.getElementById("head_index_"+i);
        if(head_select != null)
        {
            if(i==index)
            {
                head_select.setAttribute("class","mouse_active");
                head_select.setAttribute("className","mouse_active");
            }
            else
            {
                head_select.setAttribute("class","");
                head_select.setAttribute("className","");
            }
        }
    }
    if(head_index != null)
    {
        head_index.value=index;
    }
    if(head_img != null)
    {
        head_img.src = "./images/pic_head_"+index+".gif";
    }
    var objbtn = document.getElementById("btnSaveHead");
    if(objbtn != null)
    {
        objbtn.disabled = false;
    }
    var objbtn1 = document.getElementById("btnUpload");
    if(objbtn1 != null)
    {
        objbtn1.disabled = true;
    }
    var hd_value = document.getElementById("hd_value");
    if(hd_value != null)
    {
        hd_value.value = index;
    }
    
    var savestate = document.getElementById("div_upload_state");
    if(savestate != null)
    {
        savestate.style.display="none";
    }
    
    var uploadstate = document.getElementById("div_update_state");
    if(uploadstate != null)
    {
        uploadstate.style.display="none";
    }
}
function mouseoverchangeclass(index)
{
    if(index <1 || index > 40)
        return ;
    var obj = document.getElementById("head_index_"+index)
    if(obj != null)
    {
        if(obj.className != "mouse_active")
            obj.className = "mouse_over";
    }
}
function mouseoutchangeclass(index)
{
    if(index <1 || index > 40)
        return ;
    var obj = document.getElementById("head_index_"+index)
    if(obj != null)
    {
        if(obj.className != "mouse_active")
            obj.className = "mouse_out";
    }
}


function Hid(i)
{
     var obj = document.getElementById('hid_opt');
     if (obj==null)
         return;
     else
     {
         obj.value = i;
     }
}
function ShowHidDIV(divname)
{
    var fileobj = document.getElementById('Myfile');
    var h_upload_state = document.getElementById('h_upload_state');    if (h_upload_state) h_upload_state.value=1;         div_upload_state_opt('<img src="images/loading.gif" title="上传状态中" /><p>上传中...</p>','loading');
}
function HiddenHidDIV(divname)
{
    var hiddiv = document.getElementById(divname);
     hiddiv.style.visibility='hidden';
}

var arr_student = new Array("初中生","本科生","高中生","硕士生","大专生","博士生");
var arr_teacher = new Array("幼儿教育","大学教师/教授","小学教师","教务管理人员","中学教师","培训教练/顾问");
var arr_worker = new Array("IT从业者","科研人员","广告设计","金融从业者","美术设计","保险","影视制作","财务","公务员","销售","咨询/顾问","医生","市场/公关","律师","编辑/记者","人力资源","翻译","建筑师");
var arr_profession = new Array("作家","个体工商业","摄影师","农林渔牧","离退休","求职中");

function clearShenfenDefaultValue(index)
{
    if(index < 1 || index > 4)
        return;
    var objdefault = document.getElementById("defaultValue");
    if(objdefault != null)
    {
        var shenfenvalue = objdefault.value;
        if(shenfenvalue == "")
            return ;
        switch(index)
        {
            case 1:
               for(var i =0;i<arr_student.length ;i++)
               {
                    if(shenfenvalue == arr_student[i])
                        return;
               } 
               break;
            case 2:
                for(var i=0;i<arr_teacher.length ;i++)
                {
                    if(shenfenvalue == arr_teacher[i])
                        return;
                }
                break;
            case 3:
                for(var i =0;i<arr_worker.length;i++)
                {
                    if(shenfenvalue == arr_worker[i])
                        return ;
                }
                break;
            case 4:
                for(var i=0;i<arr_profession.length ;i++)
                {
                    if(shenfenvalue == arr_profession[i])
                        return;
                }
                break;
        }
        objdefault.value = "";
    }
}
