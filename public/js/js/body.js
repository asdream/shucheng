/**
 * Created by wai on 2015/7/6.
 */

//实现弹出窗口在按钮的右边，且弹出窗口底边和按钮底边高度一致
function setRightTopLocation( btn, btn_pop, lnum ){//两个id，分别是按钮和点击按钮弹出的菜单, lnum是btn-pop放在btn的右边在加上num个像素
    var left, top, width, t, pop;

    t = document.getElementById( btn );
    pop = document.getElementById( btn_pop );

    width = t.offsetWidth;
    top = getTop( t );//offsetHeight是高加内边距
    left = getLeft( t );
    //console.log(pop.offsetHeight+" " + t.offsetHeight);//绝对布局的元素的offsetHeight为0？？

    pop.style.top = top - 31 + "px";// 31是btn-pop比btn的高31个像素（向下为正方向）
    pop.style.left = left + width + lnum + "px";
}

var imgArray, numArray, index, timer;//全局变量(图片切换）
var daohangArray, booksSceneArray;//（场景切换）

$(document).ready( function(){

    /************左边****************/
    //设置绝对布局的弹出窗口的位置
    setRightTopLocation( "body-left-select1", "body-left-pop1", 3 );
    setRightTopLocation( "body-left-select2", "body-left-pop2", 3 );
    setRightTopLocation( "body-left-select3", "body-left-pop3", 3 );
    setRightTopLocation( "body-left-select4", "body-left-pop4", 3 );

    //出现
   $("#body-left-select1").bind( "mouseover", body_left_select_over1 );
   $("#body-left-pop1").bind( "mouseover", body_left_select_over1 );

    $("#body-left-select2").bind( "mouseover", body_left_select_over2 );
    $("#body-left-pop2").bind( "mouseover", body_left_select_over2 );

    $("#body-left-select3").bind( "mouseover", body_left_select_over3 );
    $("#body-left-pop3").bind( "mouseover", body_left_select_over3 );

    $("#body-left-select4").bind( "mouseover", body_left_select_over4 );
    $("#body-left-pop4").bind( "mouseover", body_left_select_over4 );

    //隐藏
    $("#body-left-select1").bind( "mouseleave", body_left_select_leave1 );
    $("#body-left-pop1").bind( "mouseleave", body_left_select_leave1 );

    $("#body-left-select2").bind( "mouseleave", body_left_select_leave2 );
    $("#body-left-pop2").bind( "mouseleave", body_left_select_leave2 );

    $("#body-left-select3").bind( "mouseleave", body_left_select_leave3 );
    $("#body-left-pop3").bind( "mouseleave", body_left_select_leave3 );

    $("#body-left-select4").bind( "mouseleave", body_left_select_leave4 );
    $("#body-left-pop4").bind( "mouseleave", body_left_select_leave4 );

    /**************中间****************/
    //图片切换
    imgArray = $(".body-center-title-img");//集合保存
    numArray = $(".body-center-title-num");
    for( var i=0; i < numArray.length; i++ ){
        numArray[i].id = i;//[0,7]
        //设置id，后面鼠标放在页号上触发的事件，可根据id索引到对应页号，设置index值
    }

    index = 0;//当前显示的图片的下标（全局变量）
    timer = setInterval( body_center_title, 2000 );//每2s执行一次

    $(" .body-center-title-num").bind( "mouseover", function(){
        index = Math.floor(this.id);//当前元素的id即为页号
        //要有取整操作！直接赋值index变成字符型，所以后面+1就是强制转换为字符串后，字符串合并
        //console.log("change:" + index);
    });

    //通过列表项切换不同场景
    daohangArray = $(".body-center-daohang-li");//导航栏列表
    booksSceneArray = $(".body-center-books");//放着书的场景

    //初始化为被选中状态（显示第一个场景）
    daohangArray.eq( 0 ).addClass("style_body-center-daohang-li-mouseover");
    booksSceneArray.eq( 0 ).css( "display", "block" );

    $.each( daohangArray, function( i, v ){
       daohangArray[i].id = 10 + i; //[10, 15]
        //设置id，后面鼠标放在导航上触发的事件，可根据id索引到对应场景号
    });

    $(".body-center-daohang-li").bind( "mouseover", function(){
        var t = Math.floor( this.id );//取整
        t = t - 10;
        $.each( booksSceneArray, function( i, v ){
            booksSceneArray.eq( i ).css( "display", "none" );//场景不显示
            daohangArray.eq( i ).removeClass("style_body-center-daohang-li-mouseover");
            //对应导航项没被选中
        });
        booksSceneArray.eq( t ).css( "display", "block" );
        $(this).addClass("style_body-center-daohang-li-mouseover");/*被选中的状态*/
    });

});

/**********左边************/
//鼠标放在上面
function body_left_select_over1(){
    $("#body-left-select1").addClass("style_body_left_select");
    $("#body-left-select1").css( "padding", "8px 15px");//原本上下内边距是9px，减去边框1px，所以是8px
    $("#body-left-select1").css( "background-color", "white");//写在css上是没效果的

    $("#body-left-pop1").css( "display", "block" );
}
function body_left_select_over2(){
    $("#body-left-select2").addClass("style_body_left_select");
    $("#body-left-select2").css( "padding", "8px 15px");
    $("#body-left-select2").css( "background-color", "white");

    $("#body-left-pop2").css( "display", "block" );
}
function body_left_select_over3(){
    $("#body-left-select3").addClass("style_body_left_select");
    $("#body-left-select3").css( "padding", "8px 15px");
    $("#body-left-select3").css( "background-color", "white");

    $("#body-left-pop3").css( "display", "block" );
}
function body_left_select_over4(){
    $("#body-left-select4").addClass("style_body_left_select");
    $("#body-left-select4").css( "padding", "8px 15px");
    $("#body-left-select4").css( "background-color", "white");

    $("#body-left-pop4").css( "display", "block" );
}

//鼠标离开
function body_left_select_leave1(){
    $("#body-left-select1").removeClass("style_body_left_select");
    $("#body-left-select1").css( "padding", "9px 15px");//恢复数据
    $("#body-left-select1").css( "background-color", "#eee");//修改为背景色

    $("#body-left-pop1").css( "display", "none" );
}
function body_left_select_leave2(){
    $("#body-left-select2").removeClass("style_body_left_select");
    $("#body-left-select2").css( "padding", "9px 15px");
    $("#body-left-select2").css( "background-color", "#eee");

    $("#body-left-pop2").css( "display", "none" );
}
function body_left_select_leave3(){
    $("#body-left-select3").removeClass("style_body_left_select");
    $("#body-left-select3").css( "padding", "9px 15px");
    $("#body-left-select3").css( "background-color", "#eee");

    $("#body-left-pop3").css( "display", "none" );
}
function body_left_select_leave4(){
    $("#body-left-select4").removeClass("style_body_left_select");
    $("#body-left-select4").css( "padding", "9px 15px");
    $("#body-left-select4").css( "background-color", "#eee");

    $("#body-left-pop4").css( "display", "none" );
}

/*********中间***********/
function body_center_title(){//图片切换
    $.each( imgArray, function( i, v ){
        imgArray.eq( i ).css( "z-index", "1" );//图片
        numArray.eq( i ).css({//页码
            color : "black",
            "background-color" : "white"
        });
    });
    imgArray.eq( index ).css( "z-index", "2"  );//图片置顶
    numArray.eq( index ).css({//修改页码样式
        color : "white",
        "background-color" : "red"
    });
    //console.log(index);
    //console.log( (index+1) );//没取整时，若index= 3，人工修改后的index加1结果为31
    index = ( index+1 ) % 8;//循环！！
}
