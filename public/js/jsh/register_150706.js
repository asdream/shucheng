var google_tag_params = { prodid: '', pagetype: '', pname: '', pcat: '', dangdangprice: '', marketprice: '', discountprice: '', promotionprice: '', ordervalue: '', pbrand: '', author: '', publisher: '', login: 'regpage' };
var usernameIsOk = false;
var preUsernameIsEmail = false;//上次填写的用户名是否为邮箱
var nowUsernameIsEmail = false;//当前用户名是否为邮箱
var passwordIsOk = false;
var rePasswordIsOk = false;
var mobileIsOk = false;
var vcodeIsOk = false;
var mobileCodeIsOk = false;
var agreementIsOk = true;
var isUpdateEmail = false; //用户名框中是否更新
var isUpdatePhone = false; //验证手机框电话号码是否更新，包括用户名框中是邮箱情况
var oldUsername = ''; //记录上一次用户名，用于判断用户名是否变化
var oldMobile = '';//记录上一次验证电话，用于判断电话是否变化
var selectdomin = -1;
var getMoblieCodeInterval = 120; //可重新获取手机验证码时间间隔 单位秒
var miao = getMoblieCodeInterval;
var timeoutrun = 0; //倒计时计数器
var vcodeGenerateTiem ;//最新图形验证码生成的时间
var vcodeOvertimeInterval = 10 * 60 * 1000;//图形验证码有效期为10分钟
var checkLogin = {
	emailNameReg: /^(([a-zA-Z0-9]+\w*((\.\w+)|(-\w+))*[\.-]?[a-zA-Z0-9]+)|([a-zA-Z0-9]))$/, //匹配邮箱名称
    emailReg: /^(([a-zA-Z0-9]+\w*((\.\w+)|(-\w+))*[\.-]?[a-zA-Z0-9]+)|([a-zA-Z0-9]))\@[a-zA-Z0-9]+((\.|-)[a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/, //匹配邮箱
    mobileReg: /^1[3,4,5,7,8][0-9]{9}$/,//匹配电话号码
    vcodeReg: /^[a-zA-Z0-9]*$/,//匹配图形验证码
    msg: {
    	'101' : '邮箱/手机号可用于登录、找回密码、接收订单通知等服务',
    	'102' : '邮箱/手机号码不能为空',
    	'103' : '邮箱/手机格式不正确，请重新输入',
    	'104' : '该邮箱已被注册，请更换其它邮箱，或使用该&nbsp;<a href=\"signin.php?Email={#Email#}\" name=\"email_login_link\" class=\"more\">邮箱登录</a>',
    	'105' : '此手机号已注册，请更换其它手机号，或使用该&nbsp;<a href=\"signin.php?Email={#Email#}\" name=\"mobile_login _link\" class=\"more\">手机号登录</a>',
    	'111' : '密码为6-20个字符，可由英文、数字及符号组成',
    	'112' : '登录密码不能为空',
    	'113' : '密码长度6-20个字符，请重新输入',
    	'115' : '密码不能包含“空格”，请重新输入',
    	'116' : '密码为6-20位字符,只能由英文、数字及符号组成',
    	'121' : '请再次输入密码',
    	'122' : '密码不能为空',
    	'123' : '两次输入的密码不一致，请重新输入',
    	'131' : '请输入你要验证的手机号码',
    	'132' : '验证手机号不能为空',
    	'133' : '手机号码格式有误，请输入正确的手机号码',
    	'141' : '请输入短信验证码',
    	'142' : '验证码已发送，请注意查收',
    	'143' : '您的手机号码获取验证码过于频繁，请于24小时后重试',
    	'144' : '还是没有收到短信？请于24小时后重试，或更换验证手机号码',
    	'145' : '网络繁忙，请稍后重试',
    	'146' : '重新获取验证码',
    	'147' : '完成验证后，您可以用该手机登录和找回密码',
    	'148' : '验证码错误',
    	'149' : '您的手机号码获取验证码过于频繁，请2分钟后重试',
    	'151' : '您必须同意当当服务条款后，才能提交注册。',
    	'161' : '请填写图片中的字符，不区分大小写',
    	'162' : '请输入图形验证码',
    	'163' : '图形验证码输入错误，请重新输入',
    	'164' : '图形验证码已失效，请重新输入'
    	
    },
    userName:{
    	checkUsernameFocus: function(){
    		checkFocus('txt_username', 'spn_username_ok', 'J_tipUsername');
            $('#J_tipUsername').html(checkLogin.msg['101']);
            $("#select_emaildomain").hide();
    	},
    	checkUsernameInput: function(e){ //输入账号时，自动补全邮箱后缀
            var inpmail = $.trim($("#txt_username").val());
            var maildomin = $("#select_emaildomain");
            if(inpmail == "" || inpmail.indexOf("@") == 0) {
                maildomin.css("display","none");
                return;
            }
            
            var e= window.event || e;
            var c = e.keyCode || e.which;
            if (c == 27) {
                maildomin.css("display","none");
                return ;
            }else {
                if (c >= 48 && c < 127 && inpmail != "") {
                    if ((checkLogin.emailNameReg.test(inpmail))) {
                        maildomin.css("display","block");
                        $('#spn_username_ok').hide();
                        maildomin.children().each(function() {
                            var mailtxt = inpmail;
                            $(this).html(mailtxt + jQuery(this).attr("domin"));
                            $(this).attr("title",mailtxt + jQuery(this).attr("domin"));
                            $(this).removeClass("hover_domain");
                        });
                    }else{
                        if(checkLogin.emailNameReg.test(inpmail)) {
                            maildomin.css("display","block");
                            $('#spn_username_ok').hide();
                            maildomin.children().each(function() {
                                var mailtxt = inpmail;
                                if(jQuery(this).attr("domin")) {
                                    mailtxt = inpmail.substr(0,inpmail.length-1);
                                }
                                $(this).html(mailtxt + jQuery(this).attr("domin"));
                                $(this).attr("title",mailtxt + jQuery(this).attr("domin"));
                                $(this).removeClass("hover_domain");
                            });
                        }else{
                            maildomin.css("display","none");
                        }
                    }
                    return  ;
                } else {
                    if (c == 8) {
                        $('#spn_username_ok').hide();
                        if (inpmail == ""||(!checkLogin.emailNameReg.test(inpmail))) {
                            maildomin.css("display","none");
                        }else {
                            maildomin.css("display","block");
                            maildomin.children().each(function() {
                                var mailtxt = $.trim($("#txt_username").val());
                                $(this).html(mailtxt + jQuery(this).attr("domin"));
                                $(this).attr("title",mailtxt + jQuery(this).attr("domin"));
                                $(this).removeClass("hover_domain");
                            });
                        }
                        return ;
                    }
                    domincount = maildomin.children().size();
                    if (c == 40) {
                        if (selectdomin < domincount) {
                            selectdomin++;
                        } else { 
                            selectdomin = 0;
                        }
                        maildomin.children().each(function(index) {
                            if (index == selectdomin) {
                                $(this).addClass("hover_domain").siblings().removeClass("hover_domain");
                            }
                        });
                        return ;
                    }
                    if (c == 38) {
                        if (selectdomin > 0) {
                            selectdomin--;
                        } else{ 
                            selectdomin = domincount;
                        }
                        maildomin.children().each(function(index) {
                            if (index ==selectdomin)
                            $(this).addClass("hover_domain").siblings().removeClass("hover_domain");
                        });
                        return ;
                    }
                    if (c == 13) {
                        if($("#select_emaildomain").is(":visible")) {
                            maildomin.children().each(function(index) {
                                if (index == selectdomin) {
                                    $("#txt_username").val($(this).attr("title"));
                                }
                            });
                            $("#select_emaildomain").css("display","none");
                            selectdomin = 0;
                            checkLogin.userName.checkUsername();
                            checkLogin.tool.showMobileAndUpdateVcode();
                        }
                        return ;
                    }
                    $("#select_emaildomain").css("display","none");
                    return ;
                }
            }
        },
        checkUsername: function(){//输入用户名验证 
            $("#select_emaildomain").hide();
            usernameIsOk = false;
            nowUsernameIsEmail = false;
            var usernameExist = false;
            
            var username = $.trim($('#txt_username').val());
            if( oldUsername != username){
            	isUpdateEmail = true;
            	oldUsername = username;
            }
            if (username == '') {
                return false;
            }
            checkFocus('txt_username', 'spn_username_ok', 'J_tipUsername');
            if (!/^\d+$/.test(username)) {                
                if (username.length > 40 || !checkLogin.emailReg.test(username)) {
                    $('#txt_username').addClass('wrong');
                    $('#J_tipUsername').removeClass('warn').html(checkLogin.msg['103']);
                    $('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    return false;
                }
                if (/[ ]/.test(username)) {
                	$('#txt_username').addClass('wrong');
                	$('#J_tipUsername').removeClass('warn').html(checkLogin.msg['103']);
                	$('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    return false;
                }
                $.ajax({
                    type: 'POST',
                    url: 'p/email_checker.php',
                    data: 'email=' + username,
                    async: false,
                    success: function (flg) {
                        if (flg == "true") {
                        	$('#txt_username').addClass('wrong');
                        	$('#J_tipUsername').removeClass('warn').html(checkLogin.msg['104'].replace('{#Email#}', username));
                        	$('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                            usernameExist = true;
                            return ;
                        }else{
//                        	$('#J_mobileV').show();//使用邮箱注册时，需要填写验证手机号码, 将验证手机号输入框显示出来
                        	nowUsernameIsEmail = true;//用户名名称输入的是正确的邮箱，且未注册过
                        }
                    }
                });
            } else {
                if (!checkLogin.mobileReg.test(username)) {
                    $('#txt_username').addClass('wrong');
                    $('#J_tipUsername').removeClass('warn').html(checkLogin.msg['103']);
                    $('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    return false;
                }
                //使用手机注册时，不需要填写验证手机号码
//                $('#J_mobileV').hide();
                $.ajax({
                    type: 'POST',
                    url: 'p/mobile_checker.php',
                    data: 'mobile=' + username,
                    async: false,
                    success: function (flg) {
                        if (flg == "true") {
                            $('#txt_username').addClass('wrong');
                            $('#J_tipUsername').removeClass('warn').html(checkLogin.msg['105'].replace('{#Email#}', username));
                            $('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();                            
                            usernameExist = true;
                            return false;
                        }
                    }
                });
            }
            if (usernameExist == true) {
                return false;
            }
            $('#spn_username_ok').removeClass('icon_wrong').addClass('icon_yes').show();
            usernameIsOk = true;
            return true;
        }
    },
    password: {
    	checkPasswordFocus: function() {
    		checkFocus('txt_password', 'spn_password_ok', 'J_tipPassword');
            $('#J_tipPassword').html(checkLogin.msg['111']).show();
            $('#J_tipUpperCaseBox').hide();
            $('#spnPwdStrongTips').hide(); //密码强度提醒
    	},
    	checkPasswordInput: function() {
            if($('#J_tipUpperCaseBox').is(':hidden')){
            	checkFocus('txt_password', 'spn_password_ok', 'J_tipPassword');
                $('#J_tipPassword').hide();
                $('#spnPwdStrongTips').hide();
                
                var passwordTrim = $.trim($('#txt_password').val());
                if (passwordTrim.length == 0) {
                    $('#J_tipPassword').html(checkLogin.msg['111']).show();                
                    return false;
                }
                
                if (passwordTrim.length < 6) {
                    $('#spnPwdStrongTips').show();
                    $('.j_pwdStrong').hide();
                    $('#spnPwdStrong1').show();                                
                    return false;
                }
                
                if (passwordTrim.length > 20){
                    $('#txt_password').addClass('wrong');
                    $('#spn_password_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    $('#J_tipPassword').removeClass('warn').html(checkLogin.msg['113']).show();
                    return false;
                }
                var chenum = checkLogin.password.checkStrong();
                if (chenum == 0) {
                    return false;
                } else if (chenum == 1) {
                    $('.j_pwdStrong').hide();
                    $('#spnPwdStrong1').show();
                } else if (chenum == 2) {
                    $('.j_pwdStrong').hide();
                    $('#spnPwdStrong2').show();
                } else if (chenum >= 3) {                	
                    $('.j_pwdStrong').hide();
                    $('#spnPwdStrong3').show();
                }
                $('#spnPwdStrongTips').show();
                $('#spn_password_ok').removeClass('icon_wrong').addClass('icon_yes').show();
                return true;
            }
    	},
    	checkPassword: function() {
    		checkFocus('txt_password', 'spn_password_ok', 'J_tipPassword');
    		$('#spnPwdStrongTips').hide();
            $("#J_tipUpperCaseBox").hide();
            $("#J_tipPassword").show();
            
            passwordIsOk = false;            
    		var password = $('#txt_password').val();            
            if (password == '') {
                return false;
            }
            if (password.length < 6 || password.length > 20) {
                $('#txt_password').addClass('wrong');
                $('#spn_password_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                $('#J_tipPassword').removeClass('warn').html(checkLogin.msg['113']);
                return false;
            }
            if (!/^\S{1,20}$/.test(password)) {
                $('#txt_password').addClass('wrong');
                $('#spn_password_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                $('#J_tipPassword').removeClass('warn').html(checkLogin.msg['115']);       
                return false;
            }
            
            for(var i=0;i<password.length;i++){
                if(password.charCodeAt(i)>127){
                    $('#txt_password').addClass('wrong');
                    $('#spn_password_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    $('#J_tipPassword').removeClass('warn').html(checkLogin.msg['116']);
                    return false; 
                }
            }
            if(!checkLogin.password.checkPasswordInput()){
            	return false;
            }
            passwordIsOk = true;
            //当确认密码不为空时，密码修改后再一次验证确认密码和密码是否相等
            checkLogin.rePassword.checkRePassword();
            return true; 
    	},
    	checkCapslockOpen: function(e) {
    		var  e= window.event || e;
            var  n=e.keyCode || e.which;
            var  m=e.shiftKey||(n==16)||false;
            if (((n >= 65 && n <= 90) && !m) || ((n >= 97 && n <= 122 )&& m)) {
            	$('#spnPwdStrongTips').hide();
                $('#J_tipPassword').hide();
                $("#J_tipUpperCaseBox").show();
            } else if(n >= 97 && n <= 122 && !m){
                $("#J_tipUpperCaseBox").hide();
            } else if(n==27){
                $("#J_tipUpperCaseBox").hide();
            } else{
            	$("#J_tipUpperCaseBox").hide();
            }
    	},
    	checkStrong: function(){
            var sPW = $('#txt_password').val();
            if (sPW.length < 1){
                return 0;
            }
            var Modes = 0;
            for (i = 0; i < sPW.length; i++) {
                Modes |= Evaluate(sPW.charCodeAt(i));
            }
            var num = bitTotal(Modes);
            return num;
        }
    },
    rePassword: {
    	checkRePasswordFocus: function() {
    		checkFocus('txt_repassword', 'spn_repassword_ok', 'J_tipSurePassword');
            $('#J_tipSurePassword').html(checkLogin.msg['121']);
    	},
    	checkRePassword: function() {
    		checkFocus('txt_repassword', 'spn_repassword_ok', 'J_tipSurePassword');
    		rePasswordIsOk = false;
            var passsword = $('#txt_password').val();
    		var rep_password = $('#txt_repassword').val();
            if (rep_password == '') {
                return false;
            }
            if (rep_password != passsword) {
                $('#txt_repassword').addClass('wrong');
                $('#spn_repassword_ok').removeClass('icon_yes').addClass('icon_wrong').show();            
                $('#J_tipSurePassword').removeClass('warn').html(checkLogin.msg['123']);
                return false;
            }
            $('#spn_repassword_ok').removeClass('icon_wrong').addClass('icon_yes').show();          
            rePasswordIsOk = true;
            return true;
    	}
    },
    mobile: {
    	checkMobileFocus: function(){
        	checkFocus('txt_mobile', 'spn_mobile_ok', 'J_tipMobile');
            $('#J_tipMobile').html(checkLogin.msg['131']);
    	},
    	checkMobile: function(){
    		checkFocus('txt_mobile', 'spn_mobile_ok', 'J_tipMobile');
    		mobileIsOk = false;
    		var usernameExist = false;
            
            var mobile = $.trim($('#txt_mobile').val());
            if( oldMobile != mobile){
            	isUpdatePhone = true;
            	oldMobile = mobile;
            }
            if (mobile == '') {
                return false;
            }
            
            if (!checkLogin.mobileReg.test(mobile)) {
                $('#txt_mobile').addClass('wrong');
                $('#spn_mobile_ok').removeClass('icon_yes').addClass('icon_wrong').show();            
                $('#J_tipMobile').removeClass('warn').html(checkLogin.msg['133']);
                return false;
            }
            
            $.ajax({
                type: 'POST',
                url: 'p/mobile_checker.php',
                data: 'mobile=' + mobile,
                async: false,
                success: function (flg) {
                    if (flg == "true") {
                        $('#txt_mobile').addClass('wrong');
                        $('#spn_mobile_ok').removeClass('icon_yes').addClass('icon_wrong').show(); 
                        $('#J_tipMobile').removeClass('warn').html(checkLogin.msg['105'].replace('{#Email#}', mobile));     
                        usernameExist = true;
                        return false;
                    }
                }
            });
            
            if (usernameExist == true) {
                return false;
            }
            $('#spn_mobile_ok').removeClass('icon_wrong').addClass('icon_yes').show();            
            mobileIsOk = true;
            return true;
    	}
    },
    vcode: {
    	checkVcodeFocus: function(){    		
    		checkFocus('txt_vcode', 'spn_vcode_ok', 'J_tipVcode');
            $('#J_tipVcode').html(checkLogin.msg['161']);
    	},
    	checkVcode: function(e){
    		if($('.j-vcode').is(':visible')){
    			vcodeIsOk = false;
        		checkFocus('txt_vcode', 'spn_vcode_ok', 'J_tipVcode');
        		var txtVcode = $.trim($("#txt_vcode").val());    		
        		var txtVcodeLen = txtVcode.length;
                if(checkLogin.vcodeReg.test(txtVcode)){
                	if(txtVcodeLen==4){
                		if(!checkLogin.vcode.checkVcodeOvertime()){
                			$('#J_tipVcode').removeClass('warn').html(checkLogin.msg['164']);
                			return false;
                		}
                		//验证图形验证码是否正确
            			checkLogin.vcode.checkVcodeIsOk(txtVcode);            		
                	}
                }else {
                	$('#txt_vcode').addClass('wrong');
                    $('#spn_vcode_ok').removeClass('icon_yes').addClass('icon_wrong').css({'display':'inline-block'});
                    $('#J_tipVcode').removeClass('warn').html(checkLogin.msg['163']);
                	return false;
                }
    		}
    	},
    	checkVcodeIsOk: function(vcode){
    		var type=0;
    		$.ajax({
    	        type: 'POST',
    	        url: 'p/vcode_check_new.php',
    	        data: 'vcode=' + vcode + '&type=' + type,
    	        async: false,
    	        success: function (flg) {
    	        	if (flg == 'false') {
    	            	$('#txt_vcode').addClass('wrong');
    	                $('#spn_vcode_ok').removeClass('icon_yes').addClass('icon_wrong').css({'display':'inline-block'});   
    	                $('#J_tipVcode').removeClass('warn').html(checkLogin.msg['163']);
    	                return false;
    	            }else{    	            	
    	            	checkFocus('txt_vcode', 'spn_vcode_ok', 'J_tipVcode');
    	            	$('#spn_vcode_ok').removeClass('icon_wrong').addClass('icon_yes').css({'display':'inline-block'});
    	            	vcodeIsOk = true;
    	            	//获取短信验证码
    	            	if($('#J_mobileV').is(':visible')){
    	            		if(!mobileIsOk){
    	            			return false;
    	            		}
    	            	} else {
    	            		if(!usernameIsOk){
    	            			return false;
    	            		}
    	            	}    	            	
            			checkLogin.mobileCodeBtn.sendMobileCodeFun();
    	            	return true;
    	            }
    	        }
    	    });
    	},
    	checkVcodeOvertime: function(){
    		var nowTime = new Date().getTime();
    		if( (nowTime - vcodeGenerateTiem)> vcodeOvertimeInterval ){
    			show_vcode('imgVcode');
    			return false;
    		}else{
    			return true;
    		}
    	}
    },
    mobileCodeBtn: {
    	checkEnableGetMobileCode: function(){
            // 清空错误提示信息
    		$("#J_tipMobileCode").addClass("warn").html('');
            if($('#J_mobileV').is(':visible')){//如果是通过邮箱注册，验证 “验证手机号”是否为正确手机号
                if( $.trim($('#txt_mobile').val()) == '' ){
                    $('#txt_mobile').addClass('wrong');
                    $('#spn_mobile_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    $('#J_tipMobile').removeClass('warn').html(checkLogin.msg['132']);
                    return false;
                }
                if(!checkLogin.mobile.checkMobile()){
                    return false;
                }
            }else{//如果是通过手机号注册，验证用户名是否为正确手机号
            	if( $.trim($('#txt_username').val()) == '' ){
                    $('#txt_username').addClass('wrong');
                    $('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                    $('#J_tipUsername').removeClass('warn').html(checkLogin.msg['102']);
                    return false;
                }
                if(!checkLogin.userName.checkUsername()){
                    return false;
                }
            }
            return true;
    	},
    	sendMobileCodeFun: function(){//点击获取手机验证码
    		var mobile_phone = '';
    		var txtVcode = $('#txt_vcode').val();
    	    
    	    if($('#J_mobileV').is(':visible')){//如果是通过邮箱注册，验证 验证手机号是否为正确手机号
    	        mobile_phone = $.trim($('#txt_mobile').val());
    	    }else{//如果是通过手机号注册，验证用户名是否为正确手机号
    	        mobile_phone = $.trim($('#txt_username').val());
    	    }
    	    
    	    // 手机号注册，发送验证码短信
    	    var custid = 0;
    	    var verify_type = 5;
    	    var send_flg = false;
    	    $.ajax({
    	        type: 'POST',
    	        url: 'p/send_mobile_vcode_new.php',
    	        data: 'custid=' + custid + '&vcode=' + txtVcode + '&type=0&mobile_phone=' + mobile_phone + '&verify_type=' + verify_type,
    	        async: false,
    	        success: function (flg) {
    	        	if(flg == '-10' || flg == '-11' || flg == '-12'){
    	        		checkLogin.tool.switchVcodeArea('vcode');
    	        		$('#txt_vcode').addClass('wrong');
    	                $('#spn_vcode_ok').removeClass('icon_yes').addClass('icon_wrong').css({'display':'inline-block'});    	                
    	                $('#J_tipVcode').removeClass('warn').html(checkLogin.msg['164']);
    	                return false;
    	        	} else{
        	        	checkLogin.tool.switchVcodeArea('phoneVcode');
    	        		if (flg == "0") {    	                   
        	                // 计时器初始化
        	                miao = getMoblieCodeInterval;
        	                changejishi();    
        	                // 清空弹层里的短信验证码输入框 和 提示信息，并将光标定位到短信验证码输入框    
        	                $('#J_MobileCode').val('');
        	                $('#J_MobileCode').focus();
        	                $('#J_tipMobileCode').addClass('warn').html(checkLogin.msg['142']); 
        	                // 发送验证码短信成功                
        	                return true;
        	            }else if (flg == "-2") {
        	                // 当天发送短信的次数超过了规定的最大次数
        	                $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['143']);
        	                $('#sendMobileCode').hide();
        	                $('#J_countDownTip').html(checkLogin.msg['146']).show();
        	                return false;
        	            }else if (flg == "-4" || flg == "-5" || flg == "-8") {
        	                // 手机验证码插入数据库失败 或者 发送验证码到用户手机失败 或者 两次发送间隔少于2分钟
        	                $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['145']);
        	                return false;
        	            } else if ( flg == "-7" ) {
        	            	// 两次发送间隔少于2分钟
        	                $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['149']);
        	                return false;
        	            } else {
        	                //可以重新发送获取验证码请求
        	                $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['144']);
        	                return false;
        	            }
    	        	} 
    	        }
    	    });
    	}
    },
    mobileCode: {
    	checkMobileCodeFocus: function() {
    		checkFocus('J_MobileCode', 'spn_mobileCode_ok', 'J_tipMobileCode');
    		$('#J_tipMobileCode').addClass('warn').html(checkLogin.msg['141']);
//    		checkFocus('J_MobileCode', 'spn_mobileCode_ok', 'J_tipMobileCode', 'no');             
    	},
    	checkMobileCode: function(){
    		checkFocus('J_MobileCode', 'spn_mobileCode_ok', 'J_tipMobileCode');
//    		checkFocus('J_MobileCode', 'spn_mobileCode_ok', 'J_tipMobileCode', 'no');
    		mobileCodeIsOk = false;
    		var mobile = $.trim($('#txt_mobile').val());
    		var usernameTrim = $.trim($('#txt_username').val());
    		var mobilePhone = '';
    		var pop_sms_vcode = $.trim($('#J_MobileCode').val());    	    
    	    if (pop_sms_vcode == '') {
    	        return false;
    	    }
    	    if (pop_sms_vcode.length != 6) {
    	        $('#J_MobileCode').addClass('wrong');
    	        $('#spn_mobileCode_ok').removeClass('icon_yes').addClass('icon_wrong').show();
    	        $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['148']);
    	        return false;
    	    }
    	    // 前端验证输入的手机短信验证码是否正确
    	    if($('#J_mobileV').is(':visible') ) {
            	mobilePhone = mobile;
            }else if(usernameIsOk){
            	mobilePhone = usernameTrim;
            }
            var verify_type = 5;
            var type = 0;
            $.ajax({
                type: 'POST',
                url: 'p/check_mobilephone_vcode.php',
                data: 'mobile_phone=' + mobilePhone + "&verify_type=" + verify_type +"&sms_vcode=" + pop_sms_vcode + "&type=" + type,
                async: false,
                success: function (flg) {
                    if (flg == 'false') {
                        $('#J_MobileCode').addClass('wrong');
                        $('#spn_mobileCode_ok').removeClass('icon_yes').addClass('icon_wrong').show();
                        $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['148']);                        
                        return false;
                    }else {
                    	$('#J_MobileCode').removeClass('wrong');
                    	$('#spn_mobileCode_ok').removeClass('icon_wrong').addClass('icon_yes').show();
                    	mobileCodeIsOk = true; 
                    }
                }
            });            
            return true;
    	}
    },
    agreement: {
    	checkAgreement: function() {
    		if ('checked' == $('#chb_agreement').attr('checked')) {
    			$('#J_tipAgreement').html('')
    			agreementIsOk = true;
	            return true;
	        } else {
	        	$('#J_tipAgreement').html(checkLogin.msg['151']);
	        	agreementIsOk = false;
	            return false;
	        }
    	}
    },
    tool: {
    	switchVcodeArea: function(showType){//切换图形验证码 和短信验证码样式
    		if(showType === 'vcode') {
    			if($('.j-phoneVcode').is(':visible')){
    				$('.j-phoneVcode').hide();
        			show_vcode('imgVcode');
        	    	$('.j-vcode').fadeIn(800);
        	    	$('#J_MobileCode').val('');
        	    	mobileCodeIsOk = false;
        	    	checkFocus('J_MobileCode', 'spn_mobileCode_ok', 'J_tipMobileCode');
        	    	//如果当前存于倒计时状态，清空倒计时状态
        	    	clearTimeout(timeoutrun);
        	    	$('#sendMobileCode').show();
        	    	$('#J_countDownTip').hide();
				}else {
					show_vcode('imgVcode');
				}    			
    		}else if(showType === 'phoneVcode') {
    			if ($('.j-vcode').is(':visible')){
    				$('.j-vcode').hide();
        	    	$('.j-phoneVcode').fadeIn(800);    	    	
        	    	checkFocus('txt_vcode', 'spn_vcode_ok', 'J_tipVcode');
				}
    		}
    	},
    	hideMobile: function() {//隐藏手机验证框
    		mobileIsOk = false;
    		$('#J_mobileV').hide();
    		$('#txt_mobile').val('');
    		checkFocus('txt_mobile', 'spn_mobile_ok', 'J_tipMobile');
    	},
    	showMobileAndUpdateVcode: function(){//显示验证手机输入框 并 更新验证码
    		//显示手机验证框
    		if(nowUsernameIsEmail && preUsernameIsEmail != nowUsernameIsEmail){
    			$('#J_mobileV').show();
    		} else if(!nowUsernameIsEmail && preUsernameIsEmail != nowUsernameIsEmail){
    			checkLogin.tool.hideMobile();
    		}    		
    		//更新验证码
    		var vcode = $.trim($('#txt_vcode').val());
			if(vcode!= '' && isUpdateEmail){//用户名框中内容变更
				if(!nowUsernameIsEmail || nowUsernameIsEmail!= preUsernameIsEmail){//除 邮箱 替换为新邮箱以为的情况
					checkLogin.tool.switchVcodeArea('vcode');										
				}				
			}else if(vcode!= '' && isUpdatePhone){//验证手机框中内容变更
    			checkLogin.tool.switchVcodeArea('vcode');				 			
    		}
			isUpdateEmail = false;
			isUpdatePhone = false;
			preUsernameIsEmail = nowUsernameIsEmail;
			return true;
    	},
    	isFunc: function(funcName){
    	    return typeof funcName == 'function';
    	},
    	getCheatProof: function(){//读取放诈骗文案
	    	jQuery.ajax({
	            type: 'POST',
	            url: 'p/mix_cheat_proof.php?source=registerTop',
	            async: true,
	            dataType: 'json',
	            success: function (res) {
	            	if (res) {
	            		$cheatProofDiv = jQuery('#J_cheatProofTop');
	            		if(res.cheatProof_display==='block' && res.cheatProof){
	            			//读取防欺诈接口正常显示接口数据,否则显示默认数据
	            			if(res.cheatProof.errorCode==='0'){
	            				$cheatProofDiv.html(res.cheatProof.res);
	            			}	            			
	            			$cheatProofDiv.css({'display':'block'});
	            		}
	            		return true;
	            	}else{
	            		return false;
	            	}
	            }
	        });
    	}
    }
};      
    	
//将单元格恢复到最初样式
function checkFocus(inputId, iconId, tipId , clearTip) {
    $('#' + inputId).removeClass('wrong');
    $('#' + iconId).hide();
    if( clearTip === 'no'){
    	$('#' + tipId).addClass('warn');
    }else{
    	$('#' + tipId).addClass('warn').html('');
    }
    
}
//密码强度验证
function Evaluate(character){
    if (character >= 48 && character <= 57){
        return 1;
    } else if (character >= 65 && character <= 90) {
        return 2;
    } else if (character >= 97 && character <= 122) {
        return 4;
    } else {
        return 8;
    }
}
//密码强度验证
function bitTotal(num){
    var modes = 0;
    for (i = 0; i < 4; i++) {
        if (num & 1) modes++;
        num >>>= 1;
    }
    return modes;
}
//获取图形验证码
function show_vcode(img_id) {
	vcodeIsOk = false;
	vcodeGenerateTiem = new Date().getTime();
    $('#' + img_id).attr('src', 'p/tmp_proxy.php?t=' + new Date().getTime());
    $('#txt_vcode').val('');
    checkFocus('txt_vcode', 'spn_vcode_ok', 'J_tipVcode');
}

//重新获取验证码前的倒计时
function changejishi(){    
	miao--;
	var fen, smiao;
	fen = parseInt( miao/60 );
	smiao = miao - ( fen * 60 );
	var fenstr = '';
	if(fen > 0){
		fenstr = fen + '分';
	}
	if(miao > 0){
		$('#J_countDownTip').html( fenstr+smiao + '秒后重新获取' ).show();
		$('#sendMobileCode').hide();
		clearTimeout(timeoutrun);
		timeoutrun = setTimeout(changejishi, 1000);
	}else{
		$('#sendMobileCode').show();
		$('#J_countDownTip').hide();
		$('#J_tipMobileCode').html('');
	}
}

//提交注册
function check_register() {
    var usernameTrim = $.trim($('#txt_username').val());
    var passwordTrim = $.trim($('#txt_password').val());
    var repasswordTrim = $.trim($('#txt_repassword').val());
    var mobile = $.trim($('#txt_mobile').val());
    var vcode = $.trim($('#txt_vcode').val());
    var mobileCode = $.trim($('#J_MobileCode').val());
    var mobilePhone = ''; //验证手机号码， 如果用户使用手机号注册，那么验证手机号和注册手机号相等
    if (usernameTrim == "" || passwordTrim == "" || repasswordTrim == "" || vcode == '' 
    	|| ($('#J_mobileV').is(':visible') && mobile=='')
    	|| ($('.j-phoneVcode').is(':visible') && mobileCode == "")) {
        if (usernameTrim == "") {
            $('#txt_username').addClass('wrong');
            $('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            $('#J_tipUsername').removeClass('warn').html(checkLogin.msg['102']);
        }
        if (passwordTrim == "") {
        	$('#txt_password').addClass('wrong');
            $('#spn_password_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            $('#J_tipPassword').removeClass('warn').html(checkLogin.msg['112']);
            $('#J_tipUpperCaseBox').hide();            
            $('#spnPwdStrongTips').hide();            
        }
        if (repasswordTrim == "") {
        	$('#txt_repassword').addClass('wrong');
            $('#spn_repassword_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            $('#J_tipSurePassword').removeClass('warn').html(checkLogin.msg['122']);            
        }
        if( $('#J_mobileV').is(':visible') && mobile=='' ) {
        	$('#txt_mobile').addClass('wrong');
            $('#spn_mobile_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            $('#J_tipMobile').removeClass('warn').html(checkLogin.msg['132']);
        }
        if( vcode =='' ) {
        	$('#txt_vcode').addClass('wrong');
            $('#spn_vcode_ok').removeClass('icon_yes').addClass('icon_wrong').css({'display':'inline-block'});
            $('#J_tipVcode').removeClass('warn').html(checkLogin.msg['162']);
        }
        if (mobileCode == "") {
            $('#J_MobileCode').addClass('wrong');
            $('#spn_mobileCode_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            $('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['141']);
        }
        //防止重复提交
        submitBtnAvailability('enable');
        return false;
    }
    if(!vcodeIsOk){
    	$('#txt_vcode').addClass('wrong');
        $('#spn_vcode_ok').removeClass('icon_yes').addClass('icon_wrong').css({'display':'inline-block'});
        $('#J_tipVcode').removeClass('warn').html(checkLogin.msg['163']);
        submitBtnAvailability('enable');
        return false;
    }
    //由于用户名处，单击邮箱后缀自动补全面板时，用到了setTimeout，
    	//导致焦点在用户名处直接单击提交按钮时出现为对用户名进行验证情况，所以此处会对用户名进行再一次验证，
    checkLogin.userName.checkUsername();
	checkLogin.tool.showMobileAndUpdateVcode();
	
    if(usernameIsOk && passwordIsOk && rePasswordIsOk && vcodeIsOk  && mobileCodeIsOk && agreementIsOk
    		&& ((!$('#J_mobileV').is(':visible')) || mobileIsOk) ){    
        $('#hdn_username').val(usernameTrim);
        $('#hdn_password').val(passwordTrim);
        $('#hdn_mobile').val(mobile);        
        // 手机注册填完短信验证码点提交
        $("#register_form").attr("onsubmit","return true;");
        $('#btn_confirm').click();
        //防止重复提交
        submitBtnAvailability('enable');
        return true;
    }
    //防止重复提交
    submitBtnAvailability('enable');
    return false;
}
//防止重复提交注册
function submitBtnAvailability( type ){
	if( type == 'disable' ) {
		$('#J_submitRegisterUnclick').show();
		$('#J_submitRegister').hide();
	} else {
		$('#J_submitRegisterUnclick').hide();
		$('#J_submitRegister').show();
	}
}

//后台验证各种错误并返回提示信息，用于错误兼容
function show_error(err_code) {
    switch (err_code) {
        case 0:
            break;
        case 1: //验证码错误
            break;
        case 2: //该邮箱已被注册
        	$('#txt_username').addClass('wrong');
        	$('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
        	$('#J_tipUsername').removeClass('warn').html(checkLogin.msg['104'].replace('{#Email#}', $('#txt_username').val()));
        	break;
        case 3: //邮箱/手机格式不正确
        	$('#txt_username').addClass('wrong');
        	$('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
        	$('#J_tipUsername').removeClass('warn').html(checkLogin.msg['103']);        	
            break;
        case 4: //电话验证码面板 图形验证码错误
            break;
        case 5: // 邮箱/手机格式不正确   	
        	$('#J_MobileCode').val('');
        	if($('#J_mobileV').is(':visible')) {
        		$('#txt_mobile').addClass('wrong');
            	$('#spn_mobile_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            	$('#J_tipMobile').removeClass('warn').html(checkLogin.msg['133']); 
        	}else{
        		$('#txt_username').addClass('wrong');
            	$('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            	$('#J_tipUsername').removeClass('warn').html(checkLogin.msg['103']); 
        	}
            break;
        case 6: //验证码错误
        	$('#J_MobileCode').addClass('wrong').val('');
        	$('#spn_mobileCode_ok').removeClass('icon_yes').addClass('icon_wrong').show();
        	$('#J_tipMobileCode').removeClass('warn').html(checkLogin.msg['148']);           
            break;
        case 7://此手机号已注册 
        	$('#J_MobileCode').val('');
        	if($('#J_mobileV').is(':visible')) {
        		$('#txt_mobile').addClass('wrong');
            	$('#spn_mobile_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            	$('#J_tipMobile').removeClass('warn').html(checkLogin.msg['105'].replace('{#Email#}', $('#txt_username').val())); 
        	}else{
        		$('#txt_username').addClass('wrong');
            	$('#spn_username_ok').removeClass('icon_yes').addClass('icon_wrong').show();
            	$('#J_tipUsername').removeClass('warn').html(checkLogin.msg['105'].replace('{#Email#}', $('#txt_username').val())); 
        	}
            break;
        case 8: //网络繁忙，请稍后重试  
        	$('#J_MobileCode').removeClass('wrong').val('');
        	$('#spn_mobileCode_ok').hide();
        	$('#J_tipAgreement').removeClass('warn').html(checkLogin.msg['145']);        	
            break;
        case 9: //密码长度6-20个字符,请重新输入
        	$('#txt_password').addClass('wrong');
        	$('#spn_password_ok').removeClass('icon_yes').addClass('icon_wrong').show();
        	$('#J_tipPassword').removeClass('warn').html(checkLogin.msg['113']).show();        	
            break;
        default:
            break;
    }
}

$(function() {
	show_error($('#J_errorCode').val());
	show_vcode('imgVcode');
	
	if ($('#txt_username') != '') {
        if(!$('#txt_username').hasClass('wrong')) {
            $('#txt_username').focus();
//            $('#J_tipUsername').html(checkLogin.msg['101']);
        }
    }
	
	//设置鼠标焦点在输入框内时提示信息
    $('#txt_username').bind("focus",function(){ 
    	checkLogin.userName.checkUsernameFocus();
    });
    //输入邮箱时，邮箱后缀自动提醒
    $("#txt_username").keyup(function(e){
    	checkLogin.userName.checkUsernameInput(e);
    });
    //账号输入框失去焦点时，触发账号合法性验证
    $("#txt_username").blur(function(){
    	//由于邮箱后缀自动补全功能的单击事件，按照正确顺序应该是在应该在改事件之后执行，但是业务交互需要将该操作延后，所以使用setTimeout事件
        setTimeout(function(){ 
        	checkLogin.userName.checkUsername();
        	checkLogin.tool.showMobileAndUpdateVcode();
        }, 200);
    });
    
    $("#select_emaildomain").children().click(function() {
        $("#txt_username").val($(this).attr("title"));
        $("#select_emaildomain").hide();
        selectdomin = 0;
    }); 

    //显示头部防欺诈文案
    checkLogin.tool.getCheatProof();
    //密码输入框 
    $('#txt_password').bind("focus",function(){ 
        checkLogin.password.checkPasswordFocus();
    });
    $("#txt_password").keyup(function(){ 
        checkLogin.password.checkPasswordInput();
    });
    $("#txt_password").blur(function(){
        checkLogin.password.checkPassword();
    });
    $("#txt_password").keypress(function(e) {
        checkLogin.password.checkCapslockOpen(e);
    });
    
    //确认密码输入框 
    $('#txt_repassword').bind("focus",function(){ 
        checkLogin.rePassword.checkRePasswordFocus();
    });
    $("#txt_repassword").blur(function(){
        checkLogin.rePassword.checkRePassword();
    });   
    
    //手机验证输入框 
    $('#txt_mobile').bind("focus",function(){
    	checkLogin.mobile.checkMobileFocus();
    });
    $("#txt_mobile").blur(function(){
        checkLogin.mobile.checkMobile();
        checkLogin.tool.showMobileAndUpdateVcode();
    });
    //图形验证码
    jQuery('#vcodeImgWrap, #vcodeImgBtn').click(function(){
		show_vcode('imgVcode');
	});
    $('#txt_vcode').bind("focus",function(e){
    	checkLogin.vcode.checkVcodeFocus(e);
    });
    $('#txt_vcode').blur(function(e){
    	checkLogin.vcode.checkVcode(e);
    });
    $("#txt_vcode").keyup(function(e){
        checkLogin.vcode.checkVcode(e);
    });
    //获取手机验证码
    $('#sendMobileCode').bind("click",function(){
    	checkLogin.mobileCodeBtn.sendMobileCodeFun();    
    });
    
    //短信验证码
    $('#J_MobileCode').bind("focus",function(){
    	checkLogin.mobileCode.checkMobileCodeFocus();
    });
    $("#J_MobileCode").blur(function(){
        checkLogin.mobileCode.checkMobileCode();
    });
    
    //当当条款勾选
    $('#chb_agreement').bind("click",function(){
    	checkLogin.agreement.checkAgreement();
    });
    
    //提交注册
    $('#J_submitRegister').bind("click",function(){
    	//防止重复提交
    	submitBtnAvailability('disable');
//    	setTimeout(function(){
    		check_register();
//        }, 300);
    	
    });
});