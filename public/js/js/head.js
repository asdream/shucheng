/**
 * Created by wai on 2015/7/5.
 */

function setRightLocation( btn, btn_pop ){//两个id，分别是按钮和点击按钮弹出的菜单
    var left, top, width, t, pop;

    t = document.getElementById( btn );
    width = t.offsetWidth;
    top = getTop( t );
    left = getLeft( t );

    pop = document.getElementById( btn_pop );
    pop.style.top = top  + "px";
    pop.style.left = left + width + "px";
}

$(document).ready( function(){

    //设置绝对布局的弹出窗口的位置
    setUnderLocation( "text-btn", "text-btn-pop" );
    setRightLocation( "text_input", "text-btn" );

    $("a").click( function(){//点击超链接跳转页面
        location.assign("local.html");//加载新页面
    });

   $("#text_input").click( function(){
     $(this).val("");//修改内容为空
   });

    //“全部分类”按钮下拉菜单动作
    $(".text-btn").bind( "mouseover", text_btn_pop_over );
    $(".text-btn-pop").bind( "mouseover", text_btn_pop_over );
    $(".text-btn").bind( "mouseleave", text_btn_pop_leave );
    $(".text-btn-pop").bind( "mouseleave", text_btn_pop_leave );

});

function text_btn_pop_over(){
    $(".text-btn-pop").css("display", "block");
}
function text_btn_pop_leave(){
    $(".text-btn-pop").css("display", "none");
}