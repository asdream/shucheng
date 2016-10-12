<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>当当——支付</title>
    <link media="all" href="./css/index.css" type="text/css" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="./css/common.min.css">
    <link href="./css/header_150611.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery" src="./js/jquery-1.8.0.min.js"></script>
    <script src="./js/pagetop2015_0827.js" charset="gb2312" type="text/javascript"></script>
</head>
<body style="width:1200px;margin:0 auto;">
   <!-- 页头begin -->

<div id="hd">
<div id="tools">
<div class="tools">
    <div class="ddnewhead_operate" dd_name="顶链接">
        <div class="new_york"><a target="_blank" href="http://static.dangdang.com/topic/2227/176801.shtml" title="当当网?纽约证券交易所上市企业">纽交所上市公司</a></div>
        <ul class="ddnewhead_operate_nav">
       <!-- <li class="ddnewhead_cart"><a href="javascript:AddToShoppingCart(0);" name="购物车" dd_name="购物车"><i class="icon_card"></i>购物车<b id="cart_items_count"></b></a></li>
        <li><a target="_blank" href="http://orderb.dangdang.com/myallorders.aspx" name="我的订单" dd_name="我的订单" rel="nofollow">我的订单<b id="unpaid_num" style="color:#ff2832;font:bold 12px Arial;"></b></a></li>-->
  <li><a target="_blank" href="http://chuban.dangdang.com/" name="mydd_7" dd_name="当当自出版">当当自出版</a></li>
        <li class="dang_erweima">
          <a target="_blank" href="http://t.dangdang.com/20130220_ydmr" id="a_phonechannel" onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');" onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');" class="menu_btn"><i class="icon_tel"></i>手机当当</a>
          <div class="tel_pop" style="display: none;" id="__ddnav_sjdd" onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');" onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');">
                <a target="_blank" href="http://t.dangdang.com/20130220_ydmr" class="title"><i class="icon_tel"></i>手机当当</a><i class="title_shadow"></i>
                <div class="tel_pop_box clearfix">
                    <div class="tel_pop_box_li"><a href="http://t.dangdang.com/20130220_ydmr" dd_name="手机二维码" target="_blank"><span>当当购物客户端</span><img src="./images/go_erweima.png"><span class="text">下载购物App<br>手机端1元秒</span></a></div>
                    <div class="tel_pop_box_li"><a href="http://t.dangdang.com/20140107_5pz1" dd_name="手机二维码" target="_blank"><span>当当读书客户端</span><img src="./images/du_erweima.png"><span class="text">万本电子书<br>免费读</span></a></div>
                </div>
          </div>
        </li>
        <li class="my_dd"><a class="menu_btn" target="_blank" href="http://myhome.dangdang.com/" name="我的当当" dd_name="我的当当" id="a_myddchannel" onmouseover="showgaoji('a_myddchannel','__ddnav_mydd')" onmouseout="hideotherchannel('a_myddchannel','__ddnav_mydd');">我的当当</a>
            <ul class="ddnewhead_gcard_list" id="__ddnav_mydd" onmouseover="showgaoji('a_myddchannel','__ddnav_mydd')" onmouseout="hideotherchannel('a_myddchannel','__ddnav_mydd');">
                <li><a target="_blank" href="http://point.dangdang.com/index.html?ref=my-0-L" name="mydd_4" dd_name="我的积分" rel="nofollow">我的积分</a></li>
                <li><a target="_blank" href="http://wish.dangdang.com/wishlist/cust_wish_list.aspx?ref=my-0-L" name="mydd_1" dd_name="我的收藏" rel="nofollow">我的收藏</a></li>
                <li><a target="_blank" href="http://newaccount.dangdang.com/payhistory/mybalance.aspx" name="mydd_5" dd_name="我的余额" rel="nofollow">我的余额</a></li>
                <li><a target="_blank" href="http://comm.dangdang.com/review/reviewbuy.php?ref=my-0-L" name="mydd_4" dd_name="我的评论" rel="nofollow">我的评论</a></li>
                <li><a target="_blank" href="http://newaccount.dangdang.com/payhistory/mycoupon.aspx" name="mydd_2" dd_name="礼券/礼品卡" rel="nofollow">礼券/礼品卡</a></li>
    <li><a target="_blank" href="http://e.dangdang.com/ebook/listUserEbooks.do" name="mydd_6" dd_name="电子书架">电子书架</a></li>
            </ul>
        </li>
        <li><a class="menu_btn" href="javascript:void(0);" style="cursor: default;" name="qycg" dd_name="企业采购" id="a_qycgchannel" onmouseover="showgaoji('a_qycgchannel','__ddnav_qycg');" onmouseout="hideotherchannel('a_qycgchannel','__ddnav_qycg');">企业采购</a>
            <ul class="ddnewhead_gcard_list" id="__ddnav_qycg" onmouseover="showgaoji('a_qycgchannel','__ddnav_qycg');" onmouseout="hideotherchannel('a_qycgchannel','__ddnav_qycg');">
                <li><a target="_blank" href="http://misc.dangdang.com/giftcardCompany/company.aspx" name="qycg_1" dd_name="大宗采购">大宗采购</a></li>
                <li><a target="_blank" href="http://giftcard.dangdang.com/" name="qycg_2" dd_name="礼品卡采购">礼品卡采购</a></li>
                <li><a target="_blank" href="http://account.dangdang.com/payhistory/mymoney.aspx" name="gqycg_3" dd_name="礼品卡激活" rel="nofollow">礼品卡激活</a></li>
                <li><a target="_blank" href="http://help.dangdang.com/details/page24" name="qycg_4" dd_name="礼品卡使用">礼品卡使用</a></li>
            </ul>
        </li>
        <li class="hover "><a class="menu_btn" href="javascript:void(0);" style="cursor: default;" name="ddkf_0" dd_name="客户服务" id="a_bzzxchannel" onmouseover="showgaoji('a_bzzxchannel','__ddnav_bzzx');" onmouseout="hideotherchannel('a_bzzxchannel','__ddnav_bzzx');">客户服务</a>
            <ul class="ddnewhead_gcard_list" id="__ddnav_bzzx" onmouseover="showgaoji('a_bzzxchannel','__ddnav_bzzx');" onmouseout="hideotherchannel('a_bzzxchannel','__ddnav_bzzx');">
                <li><a target="_blank" href="http://help.dangdang.com/index" name="ddkf_2" dd_name="帮助中心">帮助中心</a></li>
    <li><a target="_blank" href="http://return.dangdang.com/reverseapplyselect.aspx" name="ddkf_3" dd_name="自助退换货">自助退换货</a></li>
                <li><a target="_blank" href="http://help.dangdang.com/details/page206" name="ddkf_4" dd_name="联系客服">联系客服</a></li>
                <li><a target="_blank" href="http://help.dangdang.com/email_contact" name="tsjy_1" dd_name="我要投诉" rel="nofollow">我要投诉</a></li>
                <li><a target="_blank" href="http://help.dangdang.com/email_contact" name="tsjy_2" dd_name="意见建议" rel="nofollow">意见建议</a></li>
            </ul>
        </li>
        </ul>
        <div class="ddnewhead_welcome" display="none;">
            <span id="nickname"><span class="hi">Hi，<a href="http://myhome.dangdang.com/" class="login_link" target="_blank"><b>706906721</b></a><a href="javascript:PageTopSignOut();" target="_self">[退出]</a></span></span>
            <div class="tel_pop" style="display: none;" id="__ddnav_sjdd" onmouseover="showgaoji('a_phonechannel','__ddnav_sjdd');" onmouseout="hideotherchannel('a_phonechannel','__ddnav_sjdd');">
                <a target="_blank" href="http://t.dangdang.com/20130220_ydmr" class="title"><i class="icon_tel"></i>手机当当</a><i class="title_shadow"></i>
                <ul class="tel_pop_box">
                    <li><a href="http://t.dangdang.com/20130220_ydmr" dd_name="手机二维码"><span>当当手机客户端</span><img src="./images/erweima2.png"><span class="text">随手查订单<br>随时享优惠</span></a></li>
                </ul>
            </div>
        </div>
        <div class="ddnewhead_area" style="display: none;">
            <a href="javascript:void(0);" id="area_one" class="ddnewhead_area_a" onmouseover="show_area_list();" onmouseout="hidden_area_list();">送至：<span id="curent_area">北京</span></a>
            <ul class="ddnewhead_area_list" style="display: none;" id="area_list" onmouseover="this.style.display='block';" onmouseout="this.style.display='none';">
                <li><a href="javascript:void(0);" onclick="change_area('111','北京')" num="111">北京</a></li>
                         
            </ul>
        </div>
        <div class="new_head_znx" id="znx_content" style="display: none;"></div>
    </div>
</div>
</div>
<div id="header_end"></div>
<!--CreateDate  2015-11-25 18:00:02--></div>
<form action="http://search.dangdang.com/search.aspx" id="bootpagetopSearch" name="bootpagetopSearch" method="GET"></form>
<!--<script type="text/javascript">var nick_num = 1;initHeaderOperate();</script>-->


	
 <!--二级导航开始-->
    <div class="public_child_nav" dd_name="导航浮层" style="display: none;">
        <div class="public_headerchildnav_module">
			<div class="childrennav">
				<div class="chuban" style="display: none;">
					<div class="inner">
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=WY1&amp;dimension=dd_sale&amp;order=0">文艺</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=JG&amp;dimension=dd_sale&amp;order=0">经管</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=SK&amp;dimension=dd_sale&amp;order=0">社科</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=SH&amp;dimension=dd_sale&amp;order=0">生活</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=JY&amp;dimension=dd_sale&amp;order=0">教育</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=KJ&amp;dimension=dd_sale&amp;order=0">科技</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=TS&amp;dimension=dd_sale&amp;order=0">童书</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=JKS&amp;dimension=dd_sale&amp;order=0">进口书</a>|
						<a target="_blank" href="http://e.dangdang.com/classification_list_page.html?category=QKZZ&amp;dimension=dd_sale&amp;order=0">期刊杂志</a>
					</div>
				</div>
				<div class="yuanchuang" style="display: none;">
					<div class="inner">
						<a href="http://e.dangdang.com/original_index_page.html?originalSex=man" class="boy" id="publicChildMan"><i class="on"></i>男频</a>|
						<a href="http://e.dangdang.com/original_index_page.html?originalSex=woman" class="girl" id="publicChildWoman"><i></i>女频</a>
					</div>
				</div>
			</div>
		</div>
    </div>
<!--二级导航结束-->

<!-- 头部开始 -->
	<div class="public_headersearch_module" dd_name="头部搜索">
	<div class="clearfix">
		<a href="http://www.dangdang.com/" class="logo">
			<img src="./images/logo.jpg">
		</a>
		<div class="search">
			<input value="作品、作者、出版社" class="searchtext" type="text">
			<span type="button" value="提交" class="searchbtn"></span>
		</div>
		<ul class="header_fun clearfix">
			<li class="header_cart">
					<a href="javascript:AddToShoppingCart(0);" name="购物车" dd_name="购物车">
						<i class="icon"></i>
						购物车
						<b id="cart_items_count">0</b>
					</a>
			</li>
			<li class="header_order">
				<a href="javascript:void(0)" id="headerMyOrder">
					<i class="icon"></i>
					我的订单
				</a>
			</li>
			<li class="header_my">
				<a href="javascript:void(0)" id="readingCenterBtn">
					<i class="icon"></i>
					阅读中心
				</a>
			</li>
		</ul>
	</div>
</div>
<!-- 头部结束 -->
<script type="text/javascript">var nick_num = 1;initHeaderOperate();</script><script type="text/javascript" src="queryunpaid.htm"></script>
   
    <!-- 导航 -->
    <div class="public_headernav_module padding_top_30" dd_name="头部导航">
        <div class="public_headernav_module">
    <div class="nav">
        <ul>
            <li class="on"><a href="http://e.dangdang.com/index_page.html">首页</a></li>
            <li class="chubannav"><a href="http://e.dangdang.com/publish_index_page.html">出版</a></li>
            <li class="yuanchuangnav"><a href="http://e.dangdang.com/new_original_index_page.html">网络文学</a></li>
            <li><a href="http://t.dangdang.com/20140107_5pz1" target="_blank">手机看书</a></li>
            <li class="for_hot_nav"><a href="http://product.dangdang.com/60631085.html" target="_blank">当当阅读器</a><img src="./images/hot_nav.png" alt="" class="hot_logo"></li>
            <li class="want_to_recharge"><a href="http://e.dangdang.com/recharge_methord_page.html" target="_blank">我要充值</a></li>
            <li class="writer_sys"><a href="http://dpp.dangdang.com/" target="_blank">作者后台</a></li>
        </ul>
    </div>
</div>
    </div>
    <!-- 页头 end -->
    
 <div class="center">
        <div class="navigation_module">当前位置:<span>购物车</span>&nbsp;&gt;&nbsp;<span class="focus">选择充值方式</span></div>
        <div class="recharge_methord_module">
            <div class="recharge_total clearfix" id="getCartAllProductCnt">
                <div class="left">
                    <em>订单提交成功，仅差一步完成购物，请尽快支付！</em>
                </div>
                <div class="right">
                    <p>待支付：<em class="red_color">￥</em></p>
                </div>
            </div>
            <div class="recharge_main">
                <div class="row noTopBorder">
                    <h4 class="module_title">请选择充值方式</h4>
                    <ul id="payway" class="clearfix methord">
                        <li><span><input name="recharge_methord" data-paymentid="1018" type="radio" id="mmm"></span><label for="mmm"><span class="img_area"><img src="./images/zhifubao_pay_icon.png" alt=""></span></label></li>
                        
                        <li><span><input name="recharge_methord" data-paymentid="1017" checked="checked" type="radio" id="nnn"></span><label for="nnn"><span class="img_area" id="nnn"><img src="./images/weixin_pay_icon.png" alt=""></span></label></li>
                    </ul>
                </div>
                <div id="getDepositShowView">
                    <div class="row">
                        <h4 class="module_title">请选择充值金额&nbsp;&nbsp;充值有礼：充值最多送60元，充值铃铛后使用更方便</h4>
                        <ul class="clearfix value" id="monnay">
                            
                                
                                <li data-relationproductid="1900411317" class="current"><p class="bell_num"><em>500</em>金铃铛</p>
                                <p class="rmb">￥5.00</p>
                                
                            
                                
                                </li><li data-relationproductid="1900410875"><p class="bell_num"><em>1000</em>金铃铛</p>
                                <p class="rmb">￥10.00</p>
                                
                                    <p class="zs">赠送150银铃</p></li>
                                
                            
                                
                                <li data-relationproductid="1900411340"><p class="bell_num"><em>3000</em>金铃铛</p>
                                <p class="rmb">￥30.00</p>
                                
                                    <p class="zs">赠送450银铃</p></li>
                                
                            
                                
                                <li data-relationproductid="1900410877"><p class="bell_num"><em>5000</em>金铃铛</p>
                                <p class="rmb">￥50.00</p>
                                
                                    <p class="zs">赠送1000银铃</p></li>
                                
                            
                                
                                <li data-relationproductid="1900410878"><p class="bell_num"><em>10000</em>金铃铛</p>
                                <p class="rmb">￥100.00</p>
                                
                                    <p class="zs">赠送2500银铃</p></li>
                                
                            
                                
                                <li data-relationproductid="1900411508"><p class="bell_num"><em>20000</em>金铃铛</p>
                                <p class="rmb">￥200.00</p>
                                
                                    <p class="zs">赠送6000银铃</p></li>
                                
                            
                        </ul>
                    </div>
                </div>
                <script type="text/template" id="getDepositShowView_template">
                    <div class="row">
                        <h4 class="module_title">请选择充值金额&nbsp;&nbsp充值有礼：充值最多送60元，充值铃铛后使用更方便</h4>
                        <ul class="clearfix value">
                            <%for(var i = 0,ii = data.length;i<ii;i++){%>
                                <%var activityInfo = data[i];%>
                                <li data-relationProductId="<%=activityInfo.relationProductId%>"><p class="bell_num"><em><%=activityInfo.depositReadPrice%></em>金铃铛</p>
                                <p class="rmb">￥<%=(parseInt(activityInfo.depositMoney)/100).toFixed(2)%></p>
                                <%if(parseInt(activityInfo.depositGiftReadPrice) > 0){%>
                                    <p class="zs">赠送<%=activityInfo.depositGiftReadPrice%>银铃</p></li>
                                <%}%>
                            <%}%>
                        </ul>
                    </div>
                </script>

                <div class="row product_value" id="quickPayment">
                    <h4 class="module_title">直接支付</h4>
                     <ul class="clearfix value pay_value">
                        <li class="current"><p class="bell_num"><em></em>金铃铛</p>
                        <p class="rmb"></p>
                    </li></ul>
                </div>
            </div>
            <div class="recharge_button">
                <a class="conf_button thirdPayMthord_button" target="_blank">确定支付</a>
            </div>
            <div class="recharge_comment">
                <p>温馨提示</p>
                <p class="msg">1、充值比例：1元=100铃铛。<br>2、苹果账户余额与其他平台不能通用。<br>3、充值的铃铛不可以购买纸书。<br>4、赠送的银铃铛有效期为30天。</p>
            </div>
        </div>
    </div>
    <div class="load_module">
        <div class="gray_bg"></div>
        <div class="load_detail_container">
            <p><img src="./images/loading.gif" alt=""></p>
            <p>支付中...</p>
        </div>
    </div>
    <div class="payResult original_product">
        <div class="payDetail clearfix">
            <div class="col borderRight">
                <p>支付成功了</p>
                <a href="javascript:void(0)" class="buyNowButton">购买图书</a>
            </div>
            <div class="col">
                <p class="gray">如果支付失败</p>
                <a href="http://support.dangdang.com/helpcenter/api_cms/helpcenter/index/index.shtml" class="goQuestionPage">查看支付常见问题</a>
            </div>
        </div>
        <p class="comment">支付完成后，充值金额会在1分钟之内到账</p>
        <span class="closeBtn"></span>
    </div>
    <div class="payResult publish_product">
        <div class="payDetail clearfix">
            <div class="col borderRight">
                <p>支付成功了</p>
                <a href="javascript:void(0)" class="buyNowButton">立即阅读</a>
            </div>
            <div class="col">
                <p class="gray">如果支付失败</p>
                <a href="http://support.dangdang.com/helpcenter/api_cms/helpcenter/index/index.shtml" class="goQuestionPage">查看支付常见问题</a>
            </div>
        </div>
        <span class="closeBtn"></span>
    </div>
    <!-- 页尾begin -->
    <!-- 页尾begin -->
		<div class="public_footerfun_module" style="clear:both;">
		
	<div class="inner clearfix">
		<ul>
			<li class="func focusOn clearfix">
				<div class="left">
					<img src="./images/footer_share.jpg" alt="" class="icon">
				</div>
				<div class="right">
					<p class="title">关注我们</p>
					<p class="desc">最受欢迎的阅读产品</p>
					<p class="subtitle">关注我们：</p>
					<ul class="share_link">
						<li id="footerWeiboShare"><a href="http://weibo.com/dangdangread" target="_blank"><i class="icon weibo"></i>新浪微博</a></li>
						<li><a href="javascript:;"><i class="icon weixin"></i>官方微信<div class="ecode"><span class="arrow"></span><img src="./images/footer_ecode.jpg" alt=""></div></a></li>
					</ul>
				</div>
			</li>
			<li class="func author clearfix">
				<div class="left">
					<img src="./images/footer_author.jpg" alt="" class="icon">
				</div>
				<div class="right">
					<p class="title"><a href="http://dpp.dangdang.com/" target="_blank">作者后台</a></p>
					<p class="desc">加入当当原创网，尊享作者</p>
					<p class="subtitle">福利，成就网文大神</p>
					<div class="btn"><a href="http://chuban.dangdang.com/" target="_blank">我要写书<i></i></a></div>
				</div>
			</li>
			<li class="func about_us clearfix">
				<div class="left">
					<img src="./images/footer_us.jpg" alt="" class="icon">
				</div>
				<div class="right">
					<p class="title">关于我们</p>
					<p class="desc">欢迎反馈宝贵意见给我们</p>
					<p class="subtitle">客服书吧：当当读书5.0问答</p>
					<div class="btn"><a href="http://e.dangdang.com/bar_detail_page.html?barId=2618070" target="_blank">意见反馈<i></i></a></div>
				</div>
			</li>
		</ul>
	</div>

	</div>
	<div class="public_footermes_module" style="clear:both;">
		
	<div class="footer_copyright"><span>Copyright (C) 当当网 2004-2014, All Rights Reserved</span></div>
	<div class="footer_copyright"><span><a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">京ICP证041189号</a></span><span class="sep">|</span><span>出版物经营许可证 新出发京批字第直0673号</span></div>
	<div class="footer_copyright"><span>当当网收录的免费小说作品、频道内容、书友评论、用户上传文字、图片等其他一切内容及在当当网所做之广告均属用户个人行为，与当当网无关。</span></div>

	</div>
	<!-- 页尾end -->
    <!-- 页尾end -->
    <!-- 右侧快捷功能按钮 start -->
    <div class="returntop">
    <div class="public_sideecode_module" dd_name="右侧二维码">
    <div class="wrap">
        <a href="javascript:;" class="sao"><span class="ma"><i></i><img src="./images/erweima.png"></span></a>
        <span class="close"></span>
    </div>
</div>
    <div class="public_totop_module" dd_name="右侧返回顶部" style="display: block;"></div>
</div>
    <div class="message-tip"></div>
    <!-- 右侧快捷功能按钮 end -->
    <script type="text/javascript" src="js_tracker.js"></script>
    <script type="text/javascript">
        var require = {urlArgs: "v=1471255964930"}
    </script>
    <script type="text/javascript" src="require.min.js" data-main="js/recharge_methord"></script>
    <script>
        require.config({
　　　　　　baseUrl: "js/",
　　　　　　paths: {
　　　　　　    "jquery": "../lib/jquery.min",
                "underscore": "../lib/underscore.min",
                "backbone": "../lib/backbone.min"
　　　　    }
　　    });
    </script>
    <script type="text/javascript">
       $('#payway li').on('click',function(){
            $('#payway li').removeClass('current');
            $(this).addClass('current');
       });
       $('#monnay li').on('click',function(){
            $('#monnay li').removeClass('current');
            $(this).addClass('current');
       })
    </script>

</body>
</html>
