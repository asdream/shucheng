(function($){
	/*rather*/
	$('i.rather,i.leave').each(function(){
		var node = $(this).attr('node');
		$(this).animate({'width':node})
	});
	/*cutLine2*/
    $('.cutLine2').each(function(){
        var $this = $(this);
        var cutDown = $this.find('.cutDown'),
            cutUp = $('<a class="cutUp" href="javascript:;" title="收起">收起</a>'),
            content = $this.attr('title');
        var oHtml = $this.html();
        cutDown.live('click',function(){
            $this.html(content).append(cutUp);
            cutUp.unbind().bind('click',function(){
               $this.html(oHtml);
            });
        });
    });
$("a.append").bind("click",function(){
    if($(this).siblings(".pop_up_comment").css("display")=="none"){
       $(this).siblings(".pop_up_comment").show();
    }else{
      $(this).siblings(".pop_up_comment").hide();
    }
    return false;
});
$("textarea[id^=val]").bind("keyup",function(){
    if($(this).val().length<301){
        $(this).siblings("span").find("i").html($(this).val().length);
    }else{
        $(this).val($(this).val().substr(0,300));
    }
})

$(".appendcomment").live("click",function(){
    var that =$(this);
    var review_id=$(this).attr("review_id");
    var content=$("#val"+review_id).val();
    if($.trim(content)===""){
        //        alert("请至少输入5个字的评价，谢谢!");
        return false;
    }
   $.get("/comment/product_comment.php",{"mode":"ajax",'type':"append","review_id":review_id,"content":content},function(data){
       data=eval("("+data+")");
       if(data.code=="1"){
           that.replaceWith("<em id='succcomm'>- - 评论成功了,立刻关闭</em>");
          var timeid=setTimeout(function(){
            $("#pop_up_comment"+review_id).before('<p class="hasbtn cutLine2 red" title="'+content+'">追加评论:'+content+'</p>').siblings("a").remove();
            $("#pop_up_comment"+review_id).remove();
            $("#succcomm").remove();
//             $("#val"+review_id).val("").siblings("span").find("i").html("0");
//            $("#succcomm").replaceWith('<a class="appendcomment" review_id='+review_id+' href="javascript:;"></a>');
            clearTimeout(timeid);
          },1000)
       }
   });
});
        $("a[id^=closetips_]").live("click",function(){
           var id=this.id.split("_")[1];
           $("#pop_up_comment"+id).css({"display":"none"});
           $("#val"+id).val("").siblings("span").find("i").html("0");
        });

	/*showLength*/
	$('#service_area').showLength({
		maxLen:200,
		minLen:0,
		errsShow:function(){
			$(this).parent().find('.show_len').css('color','red');
		},
		errsHide:function(){
			$(this).parent().find('.show_len').css('color','#ccc');
		},
		checkLen:function(len){
			$(this).parent().find('.show_len').html(len+'/200');
		}
	});

	/*stars*/
	var service_txt = ['<i>请打分</i>','<b>1分</b>非常不满意','<b>2分</b>不满意','<b>3分</b>一般','<b>4分</b>满意','<b>5分</b>非常满意'];
	var sunReg = /h?\d{1}\b/;
	$('.sun').hstar({
		'hstarSet':function(index){
			if($(this).hasClass('readonly')){
				return;
			}
			var num=index||0,className=$(this).attr('class'),ind = className.match(sunReg)[0]-0;
			if(num!==ind){
				$(this).attr('class',className.replace(sunReg,num));
				$(this).next().html(service_txt[num]);
			}
		},
		'hstarOut':function(index){
			if($(this).hasClass('readonly')){
				return;
			}
			var num=index||0,className=$(this).attr('class'),ind=className.match(sunReg)[0]-0;
			$(this).attr('class',className.replace(sunReg,'h'+num));
			$(this).next().html(service_txt[num]);
		},
		'saveVal':function(index){
			if($(this).hasClass('readonly')){
				return;
			}
			var num=index||0,className=$(this).attr('class'),ind=className.match(sunReg)[0]-0;
			$(this).attr('class',className.replace(sunReg,'h'+num));
			$(this).next().html(service_txt[num]);
			var pForm = $(this).parents('.service_review'),
				myName = $(this).attr('name');
			pForm.find('input[name='+myName+']').val(num);
			if($(this).next().hasClass('red')){
				$(this).next().removeClass('red');
			}
		}
    });

	var starReg = /h?\d{1}\b/;
//    $('.stars').hstar({
//		'hstarSet':function(index){
//			var num=index||0,className=$(this).attr('class'),ind = className.match(starReg)[0]-0;
//			if(num !==ind){
//				$(this).attr('class',className.replace(starReg,num));
//			}
//		},
//		'hstarOut':function(index){
//			var num=index||0,className=$(this).attr('class'),ind=className.match(starReg)[0]-0;
//			$(this).attr('class',className.replace(starReg,'h'+num));
//		},
//		'saveVal':function(index){
//			var num=index||0,className=$(this).attr('class'),ind=className.match(starReg)[0]-0;
//                        var url = $(this).attr('url');
//			$(this).attr('class',className.replace(starReg,'h'+num));
//		}
//    });
	/*service_review*/
	var service_data = {};
	var service_review_tpl = '<div class="service_review">'+
				                '<p class="title review_icon">请针对本次交易、配送等服务过程进行评分<a href="javascript:;" class="review_btn close"></a></p>'+
				                '<div class="service_content">'+
				                    '<h3>商家：{$shopName}</h3>'+
                                                    '<input type="hidden" name="order_id" value="{$order_id}" />'+
                                                    '<input type="hidden" name="shop_id" value="{$shop_id}" />'+
                                                    '<input type="hidden" name="shop_type" value="{$shop_type}" />'+
                                                    '<input type="hidden" name="shop_name" value="{$shopName}" />'+
				                    '<ul class="clearfix">'+
				                        '{service_list}'+
				                    '</ul>'+
				                    '<div class="write_review">'+
				                    	'<div class="textarea_bg">'+
				                    		'<span class="show_len">0/200</span>'+
				                        	'<textarea maxlength="200" placeholder="请将您的建议和意见填写到这里（非必填）" name="content" id="service_area"></textarea>'+
				                        '</div>'+
				                        '<p><a id="submit_service" class="review_btn submit_btn"></a></p>'+
                                                        '<p class="red hidden errorTxt"></p>'+
				                    '</div>'+
				                '</div>'+
				            '</div>';
	var look_service_tpl = '<div class="service_review">'+
				                '<p class="title review_icon">您已完成该订单的服务评分<a href="javascript:;" class="review_btn close"></a></p>'+
				                '<div class="service_content">'+
				                    '<h3>商家：{$shop_name}</h3>'+
				                    '<ul class="clearfix">'+
				                        '{service_list}'+
				                    '</ul>'+
				                    '<div class="leave_review">'+
				                        '<b>您的留言</b>'+
				                        '<p>{$user_content}</p>'+
				                        '<b>商家留言</b>'+
				                        '<p>{$seller_content}</p>'+
				                    '</div>'+
				                '</div>'+
				            '</div>';
	var service_list = {
		'dd':'<li>'+
	                '<b class="lf">商品与描述相符：</b>'+
	                '<p name="info_really_rating" num="{$info_really_rating}" class="md star_icon sun sun_h{$info_really_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="info_really_rating" />'+
	            '</li>'+
	            '<li>'+
	                '<b class="lf">商品价格满意度：</b>'+
	                '<p name="price_rating" num="{$price_rating}" class="md star_icon sun sun_h{$price_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="price_rating" />'+
	            '</li>'+
	            '<li>'+
	                '<b class="lf">当当送货速度：</b>'+
	                '<p name="deliver_rating" num="{$deliver_rating}" class="md star_icon sun sun_h{$deliver_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="deliver_rating" />'+
	            '</li>'+
	            '<li>'+
	                '<b class="lf">商品干净整洁度：</b>'+
	                '<p name="tidy_rating" num="{$tidy_rating}" class="md star_icon sun sun_h{$tidy_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="tidy_rating" />'+
	            '</li>'+
	            '<li>'+
                        '<b class="lf">包装的严实程度：</b>'+
	                '<p name="package_rating" num="{$package_rating}" class="md star_icon sun sun_h{$package_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="package_rating" />'+
	            '</li>',
	    'sj':'<li>'+
	                '<b class="lf">商品与描述相符：</b>'+
	                '<p name="info_really_rating" num="{$info_really_rating}" class="md star_icon sun sun_h{$info_really_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="info_really_rating" />'+
	            '</li>'+
	            '<li>'+
	                '<b class="lf">卖家的服务态度：</b>'+
	                '<p name="service_rating" num="{$service_rating}" class="md star_icon sun sun_h{$service_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="service_rating" />'+
	            '</li>'+
	            '<li>'+
	                '<b class="lf">卖家的发货速度：</b>'+
	                '<p name="deliver_rating" num="{$deliver_rating}" class="md star_icon sun sun_h{$deliver_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="deliver_rating" />'+
	            '</li>'+
	            '<li>'+
                        '<b class="lf">商品质量满意度：</b>'+
	                '<p name="package_rating" num="{$package_rating}" class="md star_icon sun sun_h{$package_rating}"></p>'+
	                '<span class="rt"><i>请打分</i></span>'+
	                '<input type="hidden" name="package_rating" />'+
	            '</li>',
	    'book':'<li>'+
                    '<b class="lf">商品与描述相符：</b>'+
                    '<p name="info_really_rating" num="{$info_really_rating}" class="md star_icon sun sun_h{$info_really_rating}"></p>'+
                    '<span class="rt"><i>请打分</i></span>'+
                    '<input type="hidden" name="info_really_rating" />'+
                '</li>'+
                '<li>'+
                    '<b class="lf">卖家的服务态度：</b>'+
                    '<p name="service_rating" num="{$service_rating}" class="md star_icon sun sun_h{$service_rating}"></p>'+
                    '<span class="rt"><i>请打分</i></span>'+
                    '<input type="hidden" name="service_rating" />'+
                '</li>'
	}
	$('.service_btn').bind('click',function(){
		var orderName = $(this).attr('tplName');
		var listName = $(this).attr('listName')-0;
                var shopName = $(this).attr('shop_name');
                var shopType = $(this).attr('shop_type');
                var shopId = $(this).attr('shop_id');
                var listTpl = null;
                switch (listName){
                    case 1:
                        listTpl = 'dd';
                        break;
                    case 2:
                        listTpl = 'book';
                        break;
                    case 3:
                        listTpl = 'sj';
                        break;
                }
		var oHtml = service_data[orderName],
                    tpl = null;
		var nullData = {
			'info_really_rating':'0',
			'price_rating':'0',
			'tidy_rating':'0',
			'deliver_rating':'0',
			'package_rating':'0',
			'service_rating':'0'
		}
		//var reg = /[description_num|price_num|deliver_num|tidy_num|package_num|service_num]/gm;
		if(!oHtml){
			var htmlTxt = service_review_tpl.replace('{service_list}',service_list[listTpl]);
                        htmlTxt = htmlTxt.replace('{$order_id}',orderName);
                        htmlTxt = htmlTxt.replace(/\{\$shopName}/g,shopName);
                        htmlTxt = htmlTxt.replace('{$shop_type}',shopType);
                        htmlTxt = htmlTxt.replace('{$shop_id}',shopId);
                        htmlTxt = htmlTxt.replace('{$formUrl}',Comm.windowHref);
			Comm.tplAdd(orderName,htmlTxt);
			tpl = Comm.tplGet(orderName,nullData);
		}else{
			tpl = oHtml;
		}
		Comm.shadow.show(tpl,{
			'showBack':function(){
				var oTextarea = $('#popup_wrap').find('textarea');
				oTextarea.val(oTextarea.attr('txt')).removeAttr('txt');
				if(Comm.ie6||Comm.ie7){
					oTextarea.trigger('focus').trigger('blur');
				}
			},
			'closeBack':function(){
				var oTextarea = $('#popup_wrap').find('textarea');
				oTextarea.attr('txt',oTextarea.val());
				service_data[orderName] = $('#popup_wrap').html();
			}
		});
	});

	/*submit service*/
	$('#submit_service').live('click',function(){
		var $this = $(this),oParent = $this.parents('.service_review');
		var sun = oParent.find('.sun');
                var content = oParent.find('#service_area');
                if($this.hasClass('on')){
                    return false;
                }
		var lock = true;
		sun.each(function(){
			var className = $(this).attr('class'),reg = /H?0{1}\b/,inputName = $(this).attr('name');
			var oInput = oParent.find('input[name='+inputName+']');
			if(reg.test(className)||oInput.val() == 0||oInput.val() == ''){
				$(this).next().addClass('red');
				lock = false;
				return;
			}
		});
		if(lock){
                    //oParent.submit();
                    $this.addClass('on');
                    var oHidden = oParent.find('input[type="hidden"]');
                    var params = '';
                    var val = '',s_btn = null;
                    oHidden.each(function(){
                        params+='&'+$(this).attr('name')+'='+$(this).val();
                        if($(this).attr('name')=='order_id'){
                            val = $(this).val();
                            s_btn = $('.service_btn[tplname='+val+']');
                        }
                    });
                    var contentVal = $.trim(content.val());
                    if(contentVal == $.trim(content.attr('placeholder'))){
                        contentVal='';
                    }
                    params+='&content='+contentVal;
                    Comm.getData({
                        'url': Comm.windowHref,
                        'params':'type=add'+params,
                        'callback': function(result) {
                            var ret = result;
                            if (ret.code == 1) {
                                $this.removeClass('on');
                                s_btn.attr('title','查看服务评论');
                                s_btn.html('查看服务评论');
                                s_btn.removeClass('service_btn').addClass('look_service');
                                window['server_comment_'+val] = {
                                    'code':1,
                                    'msg':{
                                        'str':'no error',
                                        'dialog':'no'
                                    }
                                };
                                window['server_comment_'+val].data = ret.data;
                                $('#shadow').trigger('click');
                            }
                        },
                        'error':function(result){
                            var errorTxt = $this.parent().next('.errorTxt').html(result.msg.dialog).show();
                            setTimeout(function(){
                                errorTxt.fadeOut(function(){
                                    $(this).html('');
                                    $this.removeClass('on');
                                });
                            },2000);
                        },
                        'sysError':function(){
                            $this.next('.errorTxt').html('提交错误，请重试！');
                        }
                    });
		}
	})
	/*look service*/
	$('.look_service').live('click',function(){
		var orderName = $(this).attr('tplName');
		var listName = $(this).attr('listName')-0;
		var oHtml = service_data[orderName+'complete'],
                    tpl = null;
                var listTpl = null;
                switch (listName){
                    case 1:
                        listTpl = 'dd';
                        break;
                    case 2:
                        listTpl = 'book';
                        break;
                    case 3:
                        listTpl = 'sj';
                        break;
                }
                var jsonData = window['server_comment_'+orderName];
                if(jsonData.code == 1){
                    var htmlTxt = look_service_tpl.replace('{service_list}',service_list[listTpl]);
			Comm.tplAdd(orderName+'complete',htmlTxt);
			tpl = Comm.tplGet(orderName+'complete',jsonData.data);
                }
		Comm.shadow.show(tpl,{
                        'showBack':function(){
				$('.popup_wrap .sun').each(function(){
                                   $(this).addClass('readonly');
                                   var num = $(this).attr('num')-0;
                                   $(this).next().html(service_txt[num]);
                                });
			},
			'closeBack':function(){
				//service_data[orderName+'complete'] = $('#popup_wrap').html();
			}
		});
	});

	/*look add*/
	$('.look_add').bind('click',function(){
		var triangle = $(this).find('i');
		var slideContent = $(this).next('.add_content');
		if(triangle.hasClass('triangle_up')){
			slideContent.slideUp();
			triangle.removeClass('triangle_up').addClass('triangle_down');
		}else{
			slideContent.slideDown();
			triangle.removeClass('triangle_down').addClass('triangle_up');
		}
	});

	/*reward icon*/
	$('.reward_icon').find('span').bind({
		'mouseover':function(){
			var txt = $(this).attr('txt');
			var tip = $(this).parent().nextAll('.reward_tip');
			tip.html(txt).show();
		},
		'mouseout':function(){
			var tip = $(this).parent().nextAll('.reward_tip');
			tip.html('').hide();
		}
	})

	/*noget*/
	$('.noget').bind('mouseover',function(){
		var triangle = $(this).find('i');
		var slideContent = $(this).next('.reward_error');
		triangle.removeClass('triangle_down').addClass('triangle_up');
		slideContent.show();
	}).bind('mouseout',function(){
		var triangle = $(this).find('i');
		var slideContent = $(this).next('.reward_error');
		triangle.removeClass('triangle_up').addClass('triangle_down');
		slideContent.hide();
	});

/*订单筛选和跳转*/
    jQuery("#time_limit,#is_comment").change(function(){
        var loc=window.location.href;
        var time_limit =jQuery("#time_limit").val();
        var is_comment=jQuery("#is_comment").val();
        window.location=loc.split("?")[0]+"?no=1&time_limit="+time_limit+"&is_comment="+is_comment;

 });

    function defaultselect(){
        var loc=window.location.href;
        var time_limit_val,is_comment_val,params;
        params=Comm.parseUrl(loc);
        if(params["time_limit"]){
            time_limit_val=params["time_limit"]-1;
        }if(params["is_comment"]){
            is_comment_val = params["is_comment"]>=0 ? (params["is_comment"]):2;
        }
            jQuery("#time_limit option").eq(time_limit_val).attr('selected','selected');
            jQuery("#is_comment option").eq(is_comment_val).attr('selected','selected');
//        if(loc.split("?")[1]!==""){
//            var time_limit_val=window.location.href.split("?")[1].split("&")[1].split("=")[1];
//            var is_comment_val=window.location.href.split("?")[1].split("&")[2].split("=")[1];
//            var time_limit_val=time_limit_val-1;
//            var is_comment_val = is_comment_val>=0 ? (is_comment_val):2;
//            jQuery("#time_limit option").eq(time_limit_val).attr('selected','selected');
//            jQuery("#is_comment option").eq(is_comment_val).attr('selected','selected');
//
//        }
    }

jQuery(function(){ defaultselect();});
})(jQuery)
