(function($){
    $.fn.reco_module = function(options){
        var settings = {
            hot_params:[9,0,"",1,'new','pers'],
            reco_css:"http://customer.dangdang.com/wishlist/css/reco_wrap.css",
            handle_reco_url:'http://customer.dangdang.com/wishlist/p/handle_reco_history.php',
            myddhome_ads:"#myddhome_ads",
            mydd_home_ads_tab:"#mydd_home_ads_tab",
            reco_tab_hot:"#reco_tab_hot",
            reco_tab_history:"#reco_tab_history",
            cpc_0:"#cpc_0",
            cpc_1:"#cpc_1"
        };
        settings = $.extend({},settings,options);
        DD_AD.fetchCPC(9, 0, '', 1, 'new','pers');

        var myddhome_ads_div = $(settings.myddhome_ads);
        var reco_tab_hot = $(settings.reco_tab_hot);
        var $cpc_0 = $(settings.cpc_0);
        var $cpc_1 = $(settings.cpc_1);
        var cur_page = 1;
        
        $.ajax({
            url:settings.handle_reco_url,
            type:'GET',
            cache: false,
            jsonp:'jsoncallback',
            dataType:'jsonp',
            success:function(data){
                if(data.errorCode==1){
                    return false;
                }else{
                    var page_cnt = data.page_cnt;
                    $("<div/>").addClass("pages").html("第<i id='current_pageindex' class='orange'>1</i>页（共<span id='recommend_total_page'>"+page_cnt+"</span>页）<a target='_blank' href='http://reco.dangdang.com/?ref=product_page-recobar-dp'>更多 &gt;&gt;</a>").appendTo($cpc_1);
                    $("<div/>").attr("id","reco_history_div").addClass("over").appendTo($cpc_1);

                    $("<a/>").attr({id:'btn_prev',title:'上一页',href:'javascript:void(0);'}).addClass("btn_slide prev_none").html("<span></span>").appendTo($cpc_1);
                    if(page_cnt>1){
                        $("<a/>").attr({id:'btn_next',title:'下一页',href:'javascript:void(0);'}).addClass("btn_slide btn_next").html("<span></span>").appendTo($cpc_1);
                    }else{
                        $("<a/>").attr({id:'btn_next',title:'下一页',href:'javascript:void(0);'}).addClass("btn_slide next_none").html("<span></span>").appendTo($cpc_1);
                    }

                    $("<ul/>").attr("id","reco_history_ul").appendTo($("#reco_history_div"));
                    $.each(data.main,function(k,v){
                        $("<li/>").html("<a class='pic' target='_blank' href='http://product.dangdang.com/"+v.product_id+".html#ddclick_reco_recobar_2' title='"+v.product_name+"'><img width='150' height='150' src='"+v.img_url+"' alt='"+v.product_name+"'></a><a class='name' target='_blank' href='http://product.dangdang.com/"+v.product_id+".html#ddclick_reco_recobar_2' title='"+v.product_name+"'>"+v.product_name+"</a><p class='price_p'><span class='d_price'>&yen;"+v.sale_price+"</span><i class='m_price'>&yen;"+v.original_price+"</i></p><p><span class='starlevel s"+v.score+"'></span><a target='_blank' href='http://comm.dangdang.com/comment/review_list.php?pid="+v.product_id+"'>"+v.review_cnt+"</a>条评论</p>").appendTo($("#reco_history_ul"));
                        if(k>3){
                            $($("#reco_history_ul").find("li")[k]).hide();
                        }
                    });
                    

                    $("#btn_prev").bind("click",function(){
                        if(page_cnt!=1){
                            cur_page--;
                            if(cur_page<1){
                                $("#btn_prev").addClass("prev_none").removeClass("prev");
                                cur_page = 1;
                            }else{
                                if(cur_page==1){
                                    $("#btn_prev").addClass("prev_none").removeClass("prev");
                                }
                                $("#btn_next").addClass("btn_next").removeClass("next_none");
                                for(var i=1;i<=4;i++){
                                    $($("#reco_history_ul").find("li")[4*(cur_page+1)-i]).hide();
                                    $($("#reco_history_ul").find("li")[4*cur_page-i]).show();
                                }
                            }
                            $("#current_pageindex").html(cur_page);
                        }
                    });

                    $("#btn_next").bind("click",function(){
                        if(page_cnt!=1){
                            cur_page++;
                            if(cur_page>page_cnt){
                                $("#btn_next").addClass("next_none").removeClass("btn_next");
                                cur_page--;
                            }else{
                                if(cur_page==page_cnt){
                                    $("#btn_next").addClass("next_none").removeClass("btn_next");
                                }
                                $("#btn_prev").addClass("prev").removeClass("prev_none");
                                for(var i=1;i<=4;i++){
                                    $($("#reco_history_ul").find("li")[4*(cur_page-1)-i]).hide();
                                    $($("#reco_history_ul").find("li")[4*cur_page-i]).show();
                                }
                            }
                            $("#current_pageindex").html(cur_page);
                        }
                    });
                }
            }
        });

        reco_tab_hot.bind("mouseover",function(){
            $(this).addClass("on");
            $cpc_0.show();
            $(this).siblings("a").removeClass("on");
            $cpc_1.hide();
        }).siblings("a").bind("mouseover",function(){
            $(this).addClass("on");
            $cpc_1.show();
            $(this).siblings("a").removeClass("on");
            $cpc_0.hide();
        });
    }
})(jQuery)

function check_hotsales(has_hotsales){
    if(has_hotsales){
        jQuery("#reco_tab_hot").show();
        jQuery('#cpc_0').show();
        jQuery('#cpc_1').hide();
    }else{
        jQuery("#reco_tab_hot").hide();
        jQuery("#reco_tab_history").replaceWith("<span><p>根据您的浏览历史为您推荐</p></span>");
        jQuery('#cpc_1').show();
        jQuery('#cpc_0').hide();
    }
}