<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>小说-当当图书</title>
    <link rel="stylesheet" type="text/css" href={{ asset('css/css/style_menu.css') }} />
    <link rel="stylesheet" type="text/css" href={{ asset('css/css/style_head.css') }} />
    <link rel="stylesheet" type="text/css" href={{ asset('css/css/style_daohang.css') }}   />
    <link rel="stylesheet" type="text/css" href={{ asset("css/css/style_body.css") }} />
    <link rel="stylesheet" type="text/css" href={{ asset("css/css/style_tail.css") }} />
    <script src={{ asset("js/js/jquery-2.1.1.min.js") }} ></script>
    <script src={{ asset("js/js/menu.js") }} ></script>
    <script src={{ asset("js/js/head.js") }} ></script>
    <script src={{ asset("js/js/daohang.js") }} ></script>
    <script src={{ asset("js/js/body.js") }} ></script>
</head>
<body>

    <div class="menu">
        <div class="container">

            <div class="login">
                 <span>
                     欢迎光临当当，请<a class="a1" href="{{ asset('/login')}}">登陆</a> <a class="a2" href="{{ asset('/sign') }}">免费注册</a>
                 </span>
            </div>

            <div class="right-menu">

                <ul class="right-menu-ul1" >
                    <li><a href="local.html">购物车</a></li>
                    <li><a href="local.html">我的订单</a></li>
                    <li><a href="local.html">当当出版社</a></li>
                </ul>

                <ul class="right-menu-ul2">
                    <li id="right-menu-ul2-li1" class="right-menu-ul2-li1" style="padding-left: 30px;"><a href="local.html">手机当当</a> </li>
                    <li id="right-menu-ul2-li2" class="right-menu-ul2-li2" style="padding-right: 30px;"><a href="local.html">我的当当</a> </li>
                </ul>

                <ul class="right-menu-ul3">
                    <li id="right-menu-ul3-li1" class="right-menu-ul3-li1" style="padding-right: 25px"><a href="local.html">企业采购</a> </li>
                    <li id="right-menu-ul3-li2" class="right-menu-ul3-li2" style="padding-right: 25px"><a href="local.html">客户服务</a> </li>
                </ul>

                <span style="padding: 8px; float: right">
                    <a href="local.html" style="color: red">纽交所上市公司</a>
                </span>

                <!--弹出窗口-->

                <div id="right-menu-ul2-li1-pop" class="right-menu-ul2-li1-pop" style="display: none"> <!--”手机当当“的弹出窗口-->

                    <div class="right-menu-ul2-li1-pop-left"> <!--左二维码-->
                        <a href="local.html" style="color: #666">
                            <p style="padding: 5px">当当购物客户端</p>
                            <img src="{{ asset('images/images/go_erweima.png') }}">
                            <p>下载购物APP<br/>首单立减5元</p>
                        </a>
                    </div>
                    <div class="right-menu-ul2-li1-pop-right">  <!--右二维码-->
                        <a href="local.html" style="color: #666">
                            <p style="padding: 5px">当当读书客户端</p>
                            <img src="{{ asset('images/images/du_erweima.png') }} " >
                            <p>万本电子书<br/>免费读</p>
                        </a>
                    </div>
                    <div class="right-menu-ul2-li1-pop-box"></div><!--遮挡物-->

                </div>

                <div id="right-menu-ul2-li2-pop" class="right-menu-ul2-li2-pop" style="display:none"> <!--”我的当当“的弹出窗口-->
                    <ul class="pop-ul">
                        <li><a href="local.html">我的积分</a> </li>
                        <li><a href="local.html">我的收藏</a> </li>
                        <li><a href="local.html">我的余额</a> </li>
                        <li><a href="local.html">我的评论</a> </li>
                        <li><a href="local.html">礼券/礼品卡</a> </li>
                        <li><a href="local.html">电子书架</a> </li>
                    </ul>
                </div>

                <div id="right-menu-ul3-li1-pop" class="right-menu-ul3-li1-pop" style="display: none"> <!--”企业采购“的弹出窗口-->
                    <ul class="pop-ul">
                        <li><a href="local.html">大宗采购</a> </li>
                        <li><a href="local.html">礼品卡采购</a> </li>
                        <li><a href="local.html">礼品卡激活</a> </li>
                        <li><a href="local.html">礼品卡使用</a> </li>
                    </ul>
                </div>

                <div id="right-menu-ul3-li2-pop" class="right-menu-ul3-li2-pop" style="display: none"> <!--”客户服务“的弹出窗口-->
                    <ul class="pop-ul">
                        <li><a href="local.html">帮助中心</a> </li>
                        <li><a href="local.html">联系客服</a> </li>
                        <li><a href="local.html">我要投诉</a> </li>
                        <li><a href="local.html">意见建议</a> </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>

    <div class="head">
        <div class="container">
            <div class="logo">
                <img src="{{ asset('images/images/logo-2.jpg')}}">
            </div>

            <div class="text">
                <input id="text_input" type="text" value="致遗忘了我的你" style="color: #666">
                <span id="text-btn" class="text-btn">全部分类</span>

                <div id="text-btn-pop" class="text-btn-pop" style="display: none"> <!--弹出的下拉菜单-->
                    <ul>
                        <li><a>全部分类</a></li>
                        <li><a>尾品会</a></li>
                        <li><a>图书</a></li>
                        <li><a>音像</a></li>
                        <li><a>影视</a></li>
                        <li><a>数字商品</a></li>
                        <li><a>时尚美妆</a></li>
                        <li><a>母婴用品</a></li>
                        <li><a>玩具</a></li>
                        <li><a>孕婴服饰</a></li>
                        <li><a>童装童鞋</a></li>
                        <li><a>家居日用</a></li>
                        <li><a>家具装饰</a></li>
                        <li><a>服装</a></li>
                        <li><a>鞋</a></li>
                        <li><a>箱包皮具</a></li>
                        <li><a>手表饰品</a></li>
                        <li><a>运动户外</a></li>
                        <li><a>汽车用品</a></li>
                        <li><a>食品</a></li>
                        <li><a>手机通讯</a></li>
                        <li><a>数码影音</a></li>
                        <li><a>电脑办公</a></li>
                        <li><a>大家电</a></li>
                        <li><a>家用电器</a></li>
                    </ul>
                </div>

                <p> <!--输入文本框下面的文字连接-->
                    <a href="local.html">热搜:</a>
                    <a href="local.html">学霸宝典</a>
                    <a href="local.html">商业冒险</a>
                    <a href="local.html">传家</a>
                    <a href="local.html">自然手册</a>
                    <a href="local.html">天之炽</a>
                    <a id="gaojisousuo" href="local.html">高级搜索</a>
                </p>

            </div>

            <div class="erweima">
                <a><img src="{{ asset('images/images/erweima.png')}} "></a>
            </div>
        </div>
    </div>

    <div class="daohang">

        <div class="daohang1">
            <div class="container">

                <ul>
                    <li id="daohang1-menu" class="daohang1-menu" style="padding-right: 80px">全部商品详细分类</li>
                    <li>
                        <img class="daohang1-img" src="{{ asset('images/images/629.png')}}">
                        <a>暑期大促</a>
                    </li>
                    <li><a>尾品汇</a></li>
                    <li><a>图书</a></li>
                    <li><a>电子书</a></li>
                    <li><a>服装</a></li>
                    <li><a>户外活动</a></li>
                    <li><a>孕婴童</a></li>
                    <li><a>家居</a></li>
                    <li><a>当当优品</a></li>
                    <li><a>电器城</a></li>
                    <li><a>当当超市</a></li>
                    <li><a>海外购</a></li>
                </ul>

                <div id="daohang1-menu-pop" class="daohang1-menu-pop" style="display: none">
                    <ul>
                        <li><a>图书/童书/电子书</a></li>
                        <li><a>服饰/内衣</a></li>
                        <li><a>鞋靴/箱包</a></li>
                        <li><a>运动户外</a></li>
                        <li><a>孕/婴/童</a></li>
                        <li><a>家居/家纺/汽车</a></li>
                        <li><a>家具/家装/康体</a></li>
                        <li><a>美妆/个人护理/成人</a></li>
                        <li><a>食品/茶酒/宠物</a></li>
                        <li><a>珠宝饰品/手表眼镜</a></li>
                        <li><a>手机/数码</a></li>
                        <li><a>电脑办公</a></li>
                        <li><a>家用电器</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="daohang2">
            <div class="container">
                <ul>
                    <li><a>图书排行榜</a></li>
                    <li><a>童书</a></li>
                    <li><a>教辅</a></li>
                    <li><a>小说</a></li>
                    <li><a>管理</a></li>
                    <li><a>文学</a></li>
                    <li><a>成功励志</a></li>
                    <li><a>青春文学</a></li>
                    <li><a>历史</a></li>
                    <li><a>哲学宗教</a></li>
                    <li><a>亲子家教</a></li>
                    <li><a>传记</a></li>
                    <li><a>保健养生</a></li>
                    <li><a>新书预售</a></li>
                    <li><a>图书尾品汇</a></li>
                    <li><a>电子书</a></li>
                    <li><a>当当原创</a></li>
                </ul>
            </div>
        </div>

        <!--导航栏1中的弹出菜单的二级弹出菜单-->
        <div class="daohang1-menu-pop-pop"></div>

    </div>

    <div class="body">
        <div class="container">

            <div class="body-left">

                <div class="body-left-title">
                    <a>图书</a>
                    <a>小说</a>
                </div>

                <div class="body-left-content">
                    <ul>
                        <li><a>图书分类</a></li>

                     <!--  <div class="body-left-content-div">
                            <a>欧洲</a>
                            <a>美洲</a>
                            <a>亚洲</a>
                            <p><a>其他地区</a></p>
                        </div>  -->

                        <li id="body-left-select1" class="body-left-select"><a href="{{ asset('/wenyi') }}">文艺</a></li>
                        <li><a>中国古典小说</a></li>
                        <li id="body-left-select2" class="body-left-select">经管</li>
                       <li><a>中国当代小说</a></li>
                        <li id="body-left-select3" class="body-left-select">社科</li>
                        <li><a>科幻小说</a></li>
                        <li><a>侦探/悬疑/推理</a></li>
                        <li id="body-left-select4" class="body-left-select">生活</li>
                        <li><a>魔幻小说</a></li>
                        <li><a>社会</a></li>
                        <li><a>武侠</a></li>
                        <li><a>惊悚/恐怖</a></li>
                        <li><a>历史</a></li>
                        <li><a>影视小说</a></li>
                        <li><a>官场小说</a></li>
                        <li><a>职场小说</a></li>
                        <li><a>中国近代小说</a></li>
                        <li><a>财经</a></li>
                        <li><a>军事</a></li>
                    </ul>
                </div>

                <!--弹出窗口-->
                <div id="body-left-pop1" class="body-left-pop" style="top: 77px; left: 200px;">
                    <a class="body-left-pop-first">文学</a>
                    <a>艺术</a>
                    <a>传记</a>
					<a>青春文学</a>
					
                </div>
                <div id="body-left-pop2" class="body-left-pop" style="top: 141px; left:200px;">
                    <a class="body-left-pop-first">管理</a>
                    <a>投资理财</a>
                    <a>经济</a>
                    <a>成功励志</a>
                </div>
                <div id="body-left-pop3" class="body-left-pop" style="top: 205px; left:200px;">
                    <a class="body-left-pop-first">社会科学</a>
                    <a>心理学</a>
                    <a>法律</a>
                   <!--  <a>法国</a>
                    <a>日本</a>
                    <a>俄罗斯</a>
                    <a>韩国</a>
                    <a>其他国家</a> -->
                </div>
                <div id="body-left-pop4" class="body-left-pop" style="top: 301px; left:200px;">
                    <a class="body-left-pop-first">两性关系</a>
                    <a>育儿早教</a>
                    <a>亲子家教</a>
<!--                     <a>情色</a>
                    <a>其他</a> -->
                </div>

                <div class="body-left-tail">
                    <p class="body-left-tail-title">推荐分类</p>
                    <p>
                        <a>特价小说</a>
                        <a>原版小说</a>
                    </p>
                    <p><a>小说电子书</a></p>
                </div>

            </div>

            <div class="body-center">

                <div class="body-center-title">

                    <img class="body-center-title-img" src="{{ asset('images/bdr750315_hw150519.jpg') }}">
                    <img class="body-center-title-img" src="{{ asset('images/images/bl750315_hw150624.jpg') }}">
                    <img class="body-center-title-img" src="{{ asset('images/images/dacu7503152-.jpg') }}">
                    <img class="body-center-title-img" src="{{ asset('images/images/fqz750315_hw140903.jpg')}}">
                    <img class="body-center-title-img" src="{{ asset('images/images/gt750315_hw150529.jpg') }}">
                    <img class="body-center-title-img" src="{{ asset('images/images/xsk750315_pxh20150205.jpg') }}">
                    <img class="body-center-title-img" src="{{ asset('images/images/yw750315_hw150618.jpg')}}">
                    <img class="body-center-title-img" src="{{ asset('images/images/WSGB-750-315.jpg') }}">

                    <div class="body-center-title-number">
                        <div class="body-center-title-num">1</div>
                        <div class="body-center-title-num">2</div>
                        <div class="body-center-title-num">3</div>
                        <div class="body-center-title-num">4</div>
                        <div class="body-center-title-num">5</div>
                        <div class="body-center-title-num">6</div>
                        <div class="body-center-title-num">7</div>
                        <div class="body-center-title-num">8</div>
                    </div>
                </div>

                <div class="body-center-daohang">
                    <h3>小编推荐</h3>
                    <ul>
                        <li class="body-center-daohang-li">最流行</li>
                        <li class="body-center-daohang-li">文学/艺术</li>
                        <li class="body-center-daohang-li">经管/理财</li>
                        <li class="body-center-daohang-li">社会/科学</li>
                        <li class="body-center-daohang-li">生活/两性</li>
                       <!-- <li class="body-center-daohang-li">精选套装</li> -->
                    </ul>
                </div>

                <div> <!--导航栏有6个链接，每个连接8本书-->
<!---------------------------------------最流行开始--------------------------------------------------------------->
                    <div class="body-center-books"> <!--8本书-->

                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23635950-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>肖申克的救赎（独家赠送）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥28.50 <del>￥38.00</del> </p> <!--删除字-->
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23646182-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>余生皆假期</a></p>
                                <p class="book-writer">麦家&nbsp著，译</p>
                                <p class="book-price">￥20.50 <del>￥28.80</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23652073-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>没有女人的男人们（新版）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥26.30 <del>￥35.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694383-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>深夜将至，别吃罐头</a></p>
                                <p class="book-writer">不带剑</p>
                                <p class="book-price">￥81.40 <del>￥138.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668847-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天机（1-4册含套套装）</a></p>
                                <p class="book-writer">超好看&nbsp主编</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668397-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天王套装</a></p>
                                <p class="book-writer">丹西蒙斯</p>
                                <p class="book-price">￥178.00 <del>￥279.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23670664-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>守夜人</a></p>
                                <p class="book-writer">（日）宫部美雪</p>
                                <p class="book-price">￥105.80 <del>￥168.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694647-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>摆渡人</a></p>
                                <p class="book-writer">（日）伊太郎</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>

                    </div>
<!---------------------------------------最流行结束--------------------------------------------------------------->

<!---------------------------------------都市情感开始--------------------------------------------------------------->
                    <div class="body-center-books"> <!--8本书-->

                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694647-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>摆渡人</a></p>
                                <p class="book-writer">（日）伊太郎</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23652073-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>没有女人的男人们（新版）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥26.30 <del>￥35.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23646182-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>余生皆假期</a></p>
                                <p class="book-writer">麦家&nbsp著，译</p>
                                <p class="book-price">￥20.50 <del>￥28.80</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694383-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>深夜将至，别吃罐头</a></p>
                                <p class="book-writer">不带剑</p>
                                <p class="book-price">￥81.40 <del>￥138.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668847-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天机（1-4册含套套装）</a></p>
                                <p class="book-writer">超好看&nbsp主编</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668397-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天王套装</a></p>
                                <p class="book-writer">丹西蒙斯</p>
                                <p class="book-price">￥178.00 <del>￥279.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23670664-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>守夜人</a></p>
                                <p class="book-writer">（日）宫部美雪</p>
                                <p class="book-price">￥105.80 <del>￥168.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23635950-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>肖申克的救赎（独家赠送）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥28.50 <del>￥38.00</del> </p> <!--删除字-->
                            </div>
                        </div>

                    </div>
<!---------------------------------------都市情感结束--------------------------------------------------------------->


<!---------------------------------------历史/官场开始--------------------------------------------------------------->
                    <div class="body-center-books"> <!--8本书-->

                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23635950-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>肖申克的救赎（独家赠送）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥28.50 <del>￥38.00</del> </p> <!--删除字-->
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694383-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>深夜将至，别吃罐头</a></p>
                                <p class="book-writer">不带剑</p>
                                <p class="book-price">￥81.40 <del>￥138.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23704263-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>我这一辈子</a></p>
                                <p class="book-writer">麦家&nbsp著，译</p>
                                <p class="book-price">￥20.50 <del>￥28.80</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668397-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天王套装</a></p>
                                <p class="book-writer">丹西蒙斯</p>
                                <p class="book-price">￥178.00 <del>￥279.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23670664-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>守夜人</a></p>
                                <p class="book-writer">（日）宫部美雪</p>
                                <p class="book-price">￥105.80 <del>￥168.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694647-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>摆渡人</a></p>
                                <p class="book-writer">（日）伊太郎</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23652073-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>没有女人的男人们（新版）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥26.30 <del>￥35.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668847-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天机（1-4册含套套装）</a></p>
                                <p class="book-writer">超好看&nbsp主编</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>

                    </div>
<!---------------------------------------历史/官场结束--------------------------------------------------------------->


<!---------------------------------------科幻/悬疑开始--------------------------------------------------------------->
                    <div class="body-center-books"> <!--8本书-->

                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694383-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>深夜将至，别吃罐头</a></p>
                                <p class="book-writer">不带剑</p>
                                <p class="book-price">￥81.40 <del>￥138.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23635950-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>肖申克的救赎（独家赠送）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥28.50 <del>￥38.00</del> </p> <!--删除字-->
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23646182-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>余生皆假期</a></p>
                                <p class="book-writer">麦家&nbsp著，译</p>
                                <p class="book-price">￥20.50 <del>￥28.80</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23652073-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>没有女人的男人们（新版）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥26.30 <del>￥35.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23670664-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>守夜人</a></p>
                                <p class="book-writer">（日）宫部美雪</p>
                                <p class="book-price">￥105.80 <del>￥168.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694647-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>摆渡人</a></p>
                                <p class="book-writer">（日）伊太郎</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668847-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天机（1-4册含套套装）</a></p>
                                <p class="book-writer">超好看&nbsp主编</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668397-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天王套装</a></p>
                                <p class="book-writer">丹西蒙斯</p>
                                <p class="book-price">￥178.00 <del>￥279.00</del> </p>
                            </div>
                        </div>

                    </div>
<!---------------------------------------科幻/悬疑结束--------------------------------------------------------------->


<!---------------------------------------心灵/社会开始--------------------------------------------------------------->
                    <div class="body-center-books"> <!--8本书-->

                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23670664-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>守夜人</a></p>
                                <p class="book-writer">（日）宫部美雪</p>
                                <p class="book-price">￥105.80 <del>￥168.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23635950-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>肖申克的救赎（独家赠送）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥28.50 <del>￥38.00</del> </p> <!--删除字-->
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23646182-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>余生皆假期</a></p>
                                <p class="book-writer">麦家&nbsp著，译</p>
                                <p class="book-price">￥20.50 <del>￥28.80</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694383-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>深夜将至，别吃罐头</a></p>
                                <p class="book-writer">不带剑</p>
                                <p class="book-price">￥81.40 <del>￥138.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668847-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天机（1-4册含套套装）</a></p>
                                <p class="book-writer">超好看&nbsp主编</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23652073-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>没有女人的男人们（新版）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥26.30 <del>￥35.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668397-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天王套装</a></p>
                                <p class="book-writer">丹西蒙斯</p>
                                <p class="book-price">￥178.00 <del>￥279.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694647-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>摆渡人</a></p>
                                <p class="book-writer">（日）伊太郎</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>

                    </div>
<!---------------------------------------心灵/社会结束--------------------------------------------------------------->


<!---------------------------------------精选套装开始---<!--8本书------------------------------------------------------------->
                <!--    <div class="body-center-books"> 

                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23646182-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>余生皆假期</a></p>
                                <p class="book-writer">麦家&nbsp著，译</p>
                                <p class="book-price">￥20.50 <del>￥28.80</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694383-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>深夜将至，别吃罐头</a></p>
                                <p class="book-writer">不带剑</p>
                                <p class="book-price">￥81.40 <del>￥138.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23670664-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>守夜人</a></p>
                                <p class="book-writer">（日）宫部美雪</p>
                                <p class="book-price">￥105.80 <del>￥168.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23635950-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>肖申克的救赎（独家赠送）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥28.50 <del>￥38.00</del> </p> 
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668847-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天机（1-4册含套套装）</a></p>
                                <p class="book-writer">超好看&nbsp主编</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23694647-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>摆渡人</a></p>
                                <p class="book-writer">（日）伊太郎</p>
                                <p class="book-price">￥20.20 <del>￥28.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23652073-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>没有女人的男人们（新版）</a></p>
                                <p class="book-writer">蔡骏&nbsp著</p>
                                <p class="book-price">￥26.30 <del>￥35.00</del> </p>
                            </div>
                        </div>
                        <div class="body-center-books-box">
                            <a><img src="{{ asset('images/books/23668397-1_l_1.jpg') }}"></a>
                            <div class="books-info">
                                <p class="books-title"><a>天王套装</a></p>
                                <p class="book-writer">丹西蒙斯</p>
                                <p class="book-price">￥178.00 <del>￥279.00</del> </p>
                            </div>
                        </div>

                    </div>   -->
<!---------------------------------------精选套装结束--------------------------------------------------------------->
                </div>

            </div>

            <div class="body-right">

                <div class="body-right-div">
                    <h3>书讯快递</h3>
                    <div style="padding: 0px 10px">
                        <p><a>蓝光人：预售好礼！悬疑幻想小说新星</a></p>
                        <p><a>秋微新作《再见，少年》重磅上市！</a></p>
                        <p><a>第九届茅盾文学奖入围作品</a></p>
                    </div>
                </div>

                <div class="body-right-div">

                    <div>
                        <div style="float: left"> <h3>新书预售</h3> </div>
                        <div style="float: right">
                            <a style="color: dodgerblue">更多预售</a>
                        </div>
                    </div>

                    <div style="height: 180px">
                        <div style="float: left">
                            <a>
                                <img src="{{ asset('images/books/23710759-1_l.jpg') }}">
                            </a>
                        </div>
                        <div style="float: left; margin-top: 20px">
                            <a style="margin: 5px 0px">老人与海</a>

                            <p class="right-book-price">￥20.80</p>
                            <p><del>￥32.00</del></p>

                            <p style="font-size: 12px; color: green; margin-top: 10px">0条评论</p>
                        </div>
                    </div>

                </div>

                <div class="body-right-div">

                    <h3>精彩专题</h3>

                    <div class="body-right-div-3-img">
                        <a><img src="{{ asset('images/images/ge240120_pxh20150515.jpg') }}"></a>
                        <a><img src="{{ asset('images/images/xd220120_hw150630.jpg') }}"></a>
                        <a><img src="{{ asset('images/images/jm220x120_hw150604.jpg') }}"></a>
                        <a><img src="{{ asset('images/images/sn220120_pxh20150512.jpg') }}"></a>
                    </div>

                </div>

            </div>

        </div>
    </div>

     <div class="tail">
         <div class="container">

             <div class="tail-img">
                 <a><img src="{{ asset('images/images/qa382140_pxh20150522.jpg') }}"></a>
             </div>
             <div class="tail-img">
                 <a><img src="{{ asset('images/images/gs382140_hw150526.jpg') }}"></a>
             </div>
             <div class="tail-img">
                 <a><img src="{{ asset('images/images/sadcksj382140_pxh20150618.jpg')}}"></a>
             </div>

         </div>
     </div>


</body>
</html>