;
(function($,exports){
    var doc = window.document,msie=$.browser.msie,bVersion=$.browser.version;
    function COMM(){}
    COMM.prototype = {
        extend:function(obj,rewrite){
            var args=arguments;
            if(args.length===1){
                if (this.getType(args[0]) === 'object') {
                    for (var i in args[0]) {
                        if (this[i]) {
                            continue
                        }
                        this[i] = args[0][i];
                    }
                    return this
                }
            }
            if(args.length>=2){
                if(this.getType(args[0]) === 'string' && this.getType(args[1]) === 'function'){
                    if (this[args[0]]) {
                        if (args[2] && args[2] !== true) {
                            return
                        }
                    }
                    this[args[0]]=args[1];
                    return this[args[0]]
                }
                if(this.getType(args[0]) === 'string' && this.getType(args[1]) === 'object'){
                    if (this[args[0]]) {
                        if (args[2] && args[2] !== true) {
                            return
                        }
                    }
                    this[args[0]]=args[1];
                    return this[args[0]]
                }
                if (this.getType(args[0]) === 'object' && this.getType(args[1]) === 'boolean') {
                    for (var i in args[0]) {
                        if (this[i]) {
                            if (args[1]!==true) {
                                continue
                            }
                        }
                        this[i] = args[0][i]
                    }
                    return args[0]
                }
                if (this.getType(args[0]) === 'object' && this.getType(args[1]) === 'object') {
                    for (var i in args[1]) {
                        if (args[0][i]) {
                            if (args[2]&&args[2]!==true) {
                                continue
                            }
                        }
                        args[0][i] = args[1][i]
                    }
                    return args[0]
                }
            }
        },
        calss2Type:{
            '[object Array]':'array',
            '[object Boolean]':'boolean', 
            '[object Date]':'date',
            '[object Function]':'function',
            '[object Number]':'number',
            '[object Object]':'object',
            '[object RegExp]':'regexp',
            '[object String]':'string'
        },
        getType:function(args){
            return args&&this.calss2Type[Object.prototype.toString.call(args)]
        },
        ajaxHandler:'',
        getData:function(options){
            var opts={
                url:'',
                postType:'POST',
                params:'',
                callback:function(){},
                error:function(){},
                sysError:function(){},
                scope:this
            }
            $$.extend(opts,options,true);
            options=null;
            if(!opts.url){
                return
            };
            var s=opts.url.indexOf('?')==-1?'?':'&';
            return $.ajax({
                url:opts.url+s+$$.now(),
                type:opts.postType,
                data:'mode=ajax&'+opts.params,
                success:function(result){
                    var ret='',data=!1;
                    try{
                        ret=decodeURIComponent(result);
                    }catch(e){
                        ret=result
                    }
                    result=null;
                    try{
                        data=$.parseJSON(ret);
                    }catch(r){
                        try{
                            data=eval('('+ret+')');
                        }catch(r){}
                    }
                    if (data&&data.code==1) {
                        opts.callback.call(opts.scope, data);
                    }else if(data&&data.code==-1){
                        opts.error.call(opts.scope,data);
                    }else if(data&&data.code==-2){
                        opts.error.call(opts.scope,data);
                    }
                },
                error:function(er){
                    opts.sysError.call(opts.scope,er);
                }
            });
        },
        now:function(){
            return new Date().getTime();
        }
    }
    COMM.prototype.constructor = COMM;
    var $$ = new COMM();

    $$.extend({
        tplList:[],
        tplGet:function(name,data){
            if(!data){
                return this['tplList'][name]||name
            }
            var ret=[];
            if(this.getType(data) === 'array'){
                for(var i=0,l=data.length;i<l;i++){
                    ret.push(this.tplBindData(name,data[i]));
                }
                return ret.join('');
            }else{
                return this['tplBindData'](name,data)
            }
        },
        tplReg:{
            compareReg:/\s*([\<\>\!\=]{1,2}\=?)\s*/,
            compareReg2:/([\|&]{2})/g,
            numReg:/^\s*\d+[\.\d]*\s*$/,
            tplReg:/\{\$([^$}]*)}/g,
            ifReg:/\{\$IF\(([^\)]+)*\)\$}((.*?)?\{\$EndIF\$})/,
            cpReg:/\{\$\(([^0][^\)]+)\)\$}/g,
            computingReg:/\s*(\*|\+|\-|\/|\%)\s*/g
        },
        tplAdd:function(name,tpl){
            if(!this['tplList'][name]){
                this['tplList'][name]=tpl;
                return
            }
        },
        tplCompare:function(str,data){
            var str=str+'',ret=false,_this=this,odata=data;
            if(_this['tplReg']['compareReg2'].exec(str)){
                var separator2=RegExp.$1;
                var arr=str.split(separator2);
                if(separator2=='||'){
                    for(var i=0; i<arr.length;i++){
                        if(_this['tplCompare'](arr[i]),odata){
                            return true
                        }
                    }
                    return false
                }else{
                    for(var i=0; i<arr.length;i++){
                        if(!_this['tplCompare'](arr[i]),odata){
                            return false
                        }
                    }
                    return true
                }
            }
            if(_this['tplReg']['compareReg'].exec(str)){
                var separator=RegExp.$1;
                var arr=str.split(separator);
                for(var i=0; i<arr.length;i++){
                    _this['tplReg']['numReg'].test(arr[i])&&(arr[i]-=0);
                    (arr[i]==="''"||arr[i]==='""')&&(arr[i]='');
                }
                //return [object Object] [object Array] [object String]... 
                switch(separator) {
                    case '<':
                        ret=arr[0]<arr[1];
                        break;
                    case '<=':
                        ret=arr[0]<=arr[1];
                        break;
                    case '>':
                        ret=arr[0]>arr[1];
                        break;
                    case '>=':
                        ret=arr[0]>=arr[1];
                        break;
                    case '!=':
                        ret=arr[0]!=arr[1];
                        break;
                    case '!==':
                        ret=arr[0]!==arr[1];
                        break;
                    case '==':
                        ret=arr[0]==arr[1];
                        break;
                    case '===':
                        ret=arr[0]===arr[1];
                        break;
                    case '||':
                        ret=(arr[0]||arr[1]);
                        break;
                }
                return !!ret
            }else{
                if(_this['tplReg']['numReg'].test(str)){
                    str-=0;
                    return !!str
                }else{
                    return !!odata[str];
                }
            }
        },
        tplBindData:function(name,data){
            var tpl_context=this['tplList'][name]||name,_this=this;
            var tmpData=data,match=null;

            while(_this['tplReg']['ifReg'].test(tpl_context)){
                match=tpl_context.match(_this['tplReg']['ifReg']);
                if(!match[3]){
                    tpl_context=tpl_context.replace(match[0],'');
                }else if(_this['tplReg']['ifReg'].test(match[2])){
                    if(_this['tplCompare'](_this['tplGet'](match[2], tmpData),tmpData)){
                        tpl_context=tpl_context.replace(match[2],_this['tplGet'](match[2], tmpData));
                    }else{
                        tpl_context=tpl_context.replace(match[2],'');
                    }
                }else{
                    if(_this['tplCompare'](_this['tplGet'](match[1], tmpData),tmpData)){
                        var rdata=_this['tplReg']['tplReg'].test(match[1])?tmpData:tmpData[match[1]];
                        tpl_context=tpl_context.replace(match[0],_this['tplGet'](match[3],rdata));
                    }else{
                        tpl_context=tpl_context.replace(match[0],'');
                    }
                }
            }

            tpl_context=tpl_context.replace(_this['tplReg']['tplReg'],function(all,ext){
                if (ext.indexOf('.') < 1) {
                    return tmpData[ext] ? tmpData[ext] : ''
                } else {
                    var exts = tmpData, i = 0, arr = ext.split('.');
                    while (arr[i]) {
                        exts = exts[arr[i]] ? exts[arr[i]] : exts;
                        i++;
                    }
                    return exts || ''
                }
            });
            if(_this['tplReg']['cpReg'].test(tpl_context)){
                tpl_context=tpl_context.replace(_this['tplReg']['cpReg'],function(all,ext1){
                    var arr=[],arr2=[],sum=null;
                    ext1=ext1.replace(_this['tplReg']['computingReg'],function(a,b){
                        arr2.push(b);
                        return "\x0f"
                    })
                    arr=ext1.split('\x0f');
                    var i=0,k=0;
                    while(arr[i]){
                        if(_this['tplReg']['numReg'].test(arr[i])){
                            arr[i]-=0;
                        }
                        i++
                    }
                    while(arr2[k]&&arr[k+1]){
                        sum=sum||arr[k];
                        switch(arr2[k]) {
                            case '*':
                                sum*=arr[k+1];
                                break;
                            case '/':
                                sum/=arr[k+1]
                                break;
                            case '+':
                                sum+=arr[k+1]
                                break;
                            case '':
                                sum-=arr[k+1]
                                break;
                            case '%':
                                sum%=arr[k+1]
                                break;
                        }
                        k++
                    }
                    return sum;
                })
            }
            return tpl_context
        }
    });

    $$.extend({
        ie6:(msie&&bVersion==6),
        ie7:(msie&&bVersion==7),
        getWinHeight:$(window).height(),
        getBodyHeight:function(){
            var bodyHeight=document.body.scrollHeight;
            return bodyHeight > $$.getWinHeight ? bodyHeight : $$.getWinHeight
        },
        SrollMain:function(elem){
            if(!$('#popup_wrap').length){
                return $('<div id="popup_wrap" class="popup_wrap" style="height:735px;"></div>').append(elem).appendTo('body');
            }else{
                return $('#popup_wrap').empty().append(elem);
            }	
        },
        hideBody:function(callback){
            var oh=$(window).height();
            var d=document.body;
            var dh=$(document.body).height();
            //var mh=$('#pinwrap').outerHeight(true);
            var pdr=dh<=oh ? 0+'px' : '17px';
            if($$.ie7||$$.ie6){
                d=document.documentElement;
                pdr='17px'
            }
            if($$.ie6){
                $$.SrollBox.css({
                    'height':oh,
                    'top':$(window).scrollTop(),
                    'display':'block'
                });
                $('.main').css({
                    'padding-right': pdr
                });
                $(d).css({
                    'height':oh,
                    'overflow':'hidden'
                });
            }else{
                $$.SrollBox.css({
                    'height':oh,
                    'display':'block'
                });
                $(d).css({
                    'height':oh,
                    'overflow':'hidden',
                    'padding-right':pdr
                });
            }
            $('#popup_wrap').unbind().bind('click',function(e){
                var e=e||window.event;
                var elm=e.target||e.srcElement;
                if($(this).attr('id')==$(elm).attr('id')){
                    $('#shadow').trigger('click');
                }
            }).find('.close').die().live('click',function(){
                $('#shadow').trigger('click');
            });
            if(callback) callback();
        },
        showBody:function(){
            if (document.getElementById('popup_wrap')) {
                var d = document.body;
                if ($$.ie7 || $$.ie6) {
                    d = document.documentElement
                }
                document.getElementById('popup_wrap').scrollTop =0+'px';
                $$.SrollBox.css({
                    'height': '',
                    'display': 'none'
                });
                $(d).removeAttr('style');
                $('div.header .wrap').removeAttr('style');
                if($$.ie6){
                    $('.main').removeAttr('style')
                }
            }
        },
        windowHref:window.location.href,
        hostName:window.location.protocol+'//'+window.location.hostname,
        shadow:{
            show:function(elem,callbackOpt){
                var opts = $.extend({
                    'showBack':function(){},
                    'closeBack':function(){}
                },callbackOpt)
                var _this=this,scrollInbox = true;
                var height=($(document.body).height()||10000);
                var wh=$(window).height();
                height= height > wh? height : wh;
                if(!$('#shadow').length){
                    var shadow='<div id="shadow" style="height:'+height+'px"><!--[if IE 6]><iframe frameborder=0 scrolling="no" style="filter:alpha(opacity=0);width:100%;height:'+height+'px;" ></iframe><![endif]--></div>';
                    $(shadow).appendTo($(document.body));
                }else{
                    var shadow = ('#shadow');
                }
                if($$.ie6){
                    $(shadow).height(height);
                }
                $('#shadow').show().unbind().bind('click',function(){
                    _this.close(opts.closeBack);
                });
                if(scrollInbox){
                    $$.SrollBox = $$.SrollMain(elem);
                    $$.hideBody(opts.showBack);
                }
            },
            close:function(callback){
                $('#shadow').hide();
                if($$.ajaxHandler){
                    $$.ajaxHandler.abort();
                    $$.ajaxHandler=null;
                }
                $$.showBody();
                if(callback) callback();
            }
        },
        parseUrl:function(url){
            var arr=url.split("?"),map={}; 
            if(arr.length>=2){
                arr = arr[1].split("&");
                for(var i=0;i<arr.length;i++){
                    var param = arr[i].split("=");
                    var key=param[0];
                    map[key]=param[1];
                }
            
            }
            return map;
        }
                
    });
    exports.Comm = $$;

    /************* jquery extend *************/
    //stars
    $.fn.hstar=function(opts){
        var opts=$.extend(1,{
            maxWidth:133,
            subWidth:28,
            _this:this,
            hstarSet:function(){},
            hstarOut:function(){},
            getMousePoint:function(ev) {
                var x=y=0,ev=ev||window.event;
                x = document.body.scrollLeft||document.documentElement.scrollLeft||0;
                y = document.body.scrollTop||document.documentElement.scrollTop||0;
                x += ev.clientX;
                y += ev.clientY;
                return {
                    'x':x,
                    'y':y
                };
            },
            saveVal:function(){}
        },opts);
        $(this).live('mousemove',function(e){
            var elmX,index;
            elmX= Math.floor(opts.getMousePoint(e).x - $(this).offset().left);
            if(elmX>opts.maxWidth){
                elmX=opts.maxWidth
            }
            index = Math.ceil(elmX/opts.subWidth);
            if(index === 0){
                index = 1
            }
            opts.hstarSet.call($(this),index);
        }).live('click',function(e){
            var elmX,index;
            var hstarVal = $(this).attr('num')-0;
            elmX= Math.floor(opts.getMousePoint(e).x - $(this).offset().left);
            if(elmX>opts.maxWidth){
                elmX=opts.maxWidth
            }
            index = Math.ceil(elmX/opts.subWidth);
            if(index === 0){
                index = 1
            }
            if(hstarVal!==index){
                hstarVal=index;
                $(this).attr('num',index);
                                
                if($(this).attr("href")){
                    console.log(2);
                    if(!$(this).attr("href").match("star")){
                        $(this).attr("href",$(this).attr("href")+"&star="+index); 
                    }else{
                        $(this).attr("href",$(this).attr("href").split("star")[0]+"star="+index);
                    }
                }
                opts.saveVal.call($(this),hstarVal)
            }
        }).live('mouseleave',function(){
            var hstarVal = $(this).attr('num')-0;
            opts.hstarOut.call($(this),hstarVal);
        });
    }

    //cutLine2
    $.fn.cutLine = function(len,dot,callback){
        $(this).each(function(en){
            var $this = $(this);
            var oHtml = $.trim($this.html());
            var str = oHtml;
            if(oHtml.length>len){
                str = oHtml.substr(0,len)+dot;
            }else{
                return;
            }
            $this.html(str);
            if(callback){
                callback.call($this,str,oHtml);
            }
        });
    }

    //showLength
    $.fn.showLength=function(options){
        var opts=$.extend(true,{
            maxLen:null,
            minLen:null,
            errsShow:function(){},
            errsHide:function(){},
            checkLen:function(){},
            centerTm:false
        },options);
        $(this).live('blur focus keyup',function(e){
            var $this=$(this);
            var oval=$.trim($this.val());
            var max=opts.maxLen||$.trim($this.attr('maxlength'))-0;
            var min=opts.minLen;
            if(opts.centerTm){
                oval = oval.replace(/([\s\v])+/g,'$1');
            }
            var len=oval.length;
            if(oval==$.trim($(this).attr('placeholder'))){
                len=0;
            }
            if(max&&len>max||min&&len<min){
                opts.errsShow.call($this,len,min,max,oval,e.type);
            }else{
                opts.errsHide.call($this,len,min,max,oval,e.type);
            }
            opts.checkLen.call($this,len,min,max,oval,e.type);
        });
        return $(this);
    };

    //placeholder
    if (!('placeholder' in document.createElement('input'))) {
        $('input[placeholder],textarea[placeholder]').each(function(){
            var holderText=$.trim($(this).attr('placeholder'));
            $(this).val(holderText)
        });
        $('input,textarea').live('focus',function(){
            var holderText=$.trim($(this).attr('placeholder'));
            $(this).val()==holderText&&$(this).val('');
        }).live('blur',function(){
            var holderText=$.trim($(this).attr('placeholder'));
            $(this).val().length<1&&$(this).val(holderText);
        })
    }
    //maxlength
    if (!('maxlength' in document.createElement('textarea'))){
        $('textarea[maxlength]').live('blur focus keyup',function(){
            var $this = $(this);
            var oval=$.trim($this.val());
            var max=$.trim($this.attr('maxlength'))-0;
            var len=oval.length;
            if(max&&len>max){
                $this.val(oval.substr(0,max)).trigger('keyup');
            }
        });
    }

    //input textarea
    $('input[type=text],textarea').live('focus',function(){
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
    }).live('blur',function(){
        var oval=$.trim($(this).val());
        if(oval.length>0 && oval!=$(this).attr('placeholder')){
            $(this).addClass('val');
        }else{
            $(this).removeClass('val');
        }
        $(this).removeClass('focus');
        $(this).parent().removeClass('focus');
    });
})(jQuery,window);