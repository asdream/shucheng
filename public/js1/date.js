// JScript 文件
//checkdate是判断日期,比如 2002-02-09 


function checkdate(inputyear,inputmonth,inputday) 
{ 
//alert("ddsss");
    var flag=true;  
    //getdate=fob(inpar).value; 
    var year=inputyear;
    var month=inputmonth; 
    var day=inputday; 


    flag=true; 
    if (inputyear==0||inputmonth==0||inputday==0)
        return false;
    if (month==4 || month==6 || month==9 || month==11) // 4,6,9,11月份日期不能超过30 
    {  
        if (day>30){
            flag=false; 
        } 
        else{
            flag = true;
        }
    } 
    if (month==2)  // 判断2月份 
    { 
        if (LeapYear(year)) 
        { 
            if (day>29 || day<1){ flag=false; } 
        } 
        else 
        { 
            if (day>28 || day<1){flag=false; } 
        } 
    } 
    return flag;
} 

//判断是否闰年 
//参数      intYear 代表年份的值 
//return   true: 是闰年   false: 不是闰年 
function LeapYear(intYear) { 
   if (intYear % 100 == 0) { 
      if (intYear % 400 == 0) { return true; } 
   } 
   else { 
      if ((intYear % 4) == 0) { return true; } 
   } 
   return false; 
}
