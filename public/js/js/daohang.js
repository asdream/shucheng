/**
 * Created by wai on 2015/7/6.
 */
$(document).ready( function(){
    setUnderLocation( "daohang1-menu", "daohang1-menu-pop" );

    $(".daohang1-menu").bind( "click", daohang1_menu_pop_over );
    $(".daohang1-menu").bind( "mouseover", daohang1_menu_pop_over );
    $(".daohang1-menu-pop").bind( "mouseover", daohang1_menu_pop_over );

    $(".daohang1-menu").bind( "mouseleave", daohang1_menu_pop_leave );
    $(".daohang1-menu-pop").bind( "mouseleave", daohang1_menu_pop_leave );

   var liArray = $(".daohang1-menu-pop").find("li");//找儿子辈或更低辈
    $.each( liArray, function( index, value ){//for
       liArray.eq( index ).bind( "mouseover", function(){//返回对应下标的数组元素的id
            $(this).children().css({
                "color" : "red",
                "font-size": "15px"
            });
        });
        liArray.eq( index ).bind( "mouseleave", function(){
            $(this).children().css({
                "color" : "black",
                "font-size": "13px"
            });
        });
    });
});

function daohang1_menu_pop_over(){
    $(".daohang1-menu-pop").css( "display", "block" );
}
function daohang1_menu_pop_leave(){
    $(".daohang1-menu-pop").css( "display", "none" );
}