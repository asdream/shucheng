var GLOBAL = {
		selfHtts: 'https://safe.dangdang.com/',
		httpsJsonpTimeout: 10000 //http Jsonp请求超时时间10s
};
var isIE = (document.all) ? true : false;
//var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
var $ID = function (id) {
    return "string" == typeof id ? document.getElementById(id) : id;
};
var Class = {
    create: function() {
        return function() { this.initialize.apply(this, arguments);};
    }
};

var Extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
};

var Bind = function(object, fun) {
    return function() {
        return fun.apply(object, arguments);
    };
};

var BindAsEventListener = function(object, fun) {
    var args = Array.prototype.slice.call(arguments).slice(2);
    return function(event) {
        return fun.apply(object, [event || window.event].concat(args));
    };
};

var CurrentStyle = function(element){
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
};

function addEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.addEventListener) {
        oTarget.addEventListener(sEventType, fnHandler, false);
    } else if (oTarget.attachEvent) {
        oTarget.attachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = fnHandler;
    }
};

function removeEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.removeEventListener) {
        oTarget.removeEventListener(sEventType, fnHandler, false);
    } else if (oTarget.detachEvent) {
        oTarget.detachEvent("on" + sEventType, fnHandler);
    } else { 
        oTarget["on" + sEventType] = null;
    }
};

// 身份验证初始化
var Verify = Class.create();
Verify.prototype = {
    initialize: function(options){
        this.verifyEmail = '';//身份验证 邮箱验证面板交互对象
        this.verifyPhone = '';//身份验证 手机验证面板交互对象
        this.verifyPhoneUnknow = '';//忘记密码 身份验证 输入手机号进行手机验证 面板交互对象
        this.verifyPayPass = ''; //身份验证 支付密码验证面板交互对象
        this.options = {
            errorCode: 0,
            verifyType:{
            	phoneUnknow: {errorCode: 0, vname: "phone", vtext: "手机验证", value: "",
                	hasTopTip: "false",topTipName: "",
                	hasBottomTip: "true",bottomTipName: "J_tempPhoneTip", tempId:"J_tempPhoneUnknow"},
            	phone: {errorCode: 0, vname: "phone", vtext: "手机验证", value: "",
                    	hasTopTip: "false",topTipName: "",
                    	hasBottomTip: "true",bottomTipName: "J_tempPhoneTip", tempId:"J_tempPhone"},
	            payPass: {errorCode: 0, vname: "payPass", vtext: "支付密码验证", value: "",
	                    hasTopTip: "false",topTipName: "",
	                    hasBottomTip: "false",bottomTipName: "", tempId:"J_tempPaypass"},
	            email: {errorCode: 0, vname: "email", vtext: "邮箱验证", value: "",
	                    hasTopTip: "false",topTipName: "",
	                    hasBottomTip: "true",bottomTipName: "J_tempEmailTip", tempId:"J_tempEmail"}               
            },
            showVerify:["phone","payPass","email"],//可提供的下拉验证的项
            showVerifyLen: 3,
            defualtValue: "phone",
            callback: {}
        };
        Extend(this.options, options || {});
        
        //打印身份验证面板信息
        var $verifyTypeWrapWrap = $('#J_verifyTypeWrapWrap');
	    var verifyPan = $('#J_tempVerifyPan').html();
	    var compiledSet1 = juicer(verifyPan);
	    $verifyTypeWrapWrap.html(compiledSet1.render(this.options));
	    //设置初始化验证对象
	    if(this.options.showVerifyLen == 1){//只有一种验证方式时，直接打印 验证填写面板
	    	this.printVerifyContent(this.options.defualtValue);
	    }else {//多种验证方式  设置默认选择第一种验证方式，并但因验证填写面板
	    	this.setValue(this.options.defualtValue);
	    }
	    
	    var that = this;
	    //验证类型下拉列表交互控制
	    $('.j_verifyTypeWrap').on('mouseover',function(){
	    	that.switchVerifySel('show');
	    });
	    $('.j_verifyTypeWrap').on('mouseout',function(){
	    	that.switchVerifySel('hide');
	    });
	    //切换下拉选项
	    $('.j_verifyType').on('click', function(){
	        var verifyValue = $(this).attr('data-value');
	        that.setValue(verifyValue);
	        that.switchVerifySel('hide');
	    });
    },
    //切换验证方式
	switchVerifySel: function(type){
	    if(type == 'show'){
	        $('#J_verifyTypeIcon').removeClass('down').addClass('up');
            $('#J_verifyTypeList').show();
	    }else if(type== 'hide'){
	        $('#J_verifyTypeIcon').removeClass('up').addClass('down');
            $('#J_verifyTypeList').hide();
	    }
	},
	getValue: function(){
	    return $('#J_verifyTypeValue').attr('data-value');
	},
	setValue: function(vname){
	    var text = $('.j_verifyType[data-value=' + vname + ']').text();
	    $('#J_verifyTypeValue').attr('data-value', vname).text(text);
	    this.printVerifyContent(vname);
	},
	printVerifyContent: function(verifyType){
	    var $verifyPan = $('#J_verifyContentPan');
        var $verifyTopTip = $('#J_verifyTopTip');
        var $verifyBottomTip = $('#J_verifyBottomTip');
        var verifyInfo = '';
        var dataInfo = this.options.verifyType[verifyType];
        
        verifyInfo = $('#' + dataInfo.tempId).html();
        var compiledSet1 = juicer(verifyInfo);
        $verifyPan.html(compiledSet1.render(dataInfo));
        //加入验证面板中元素处理时间
        if(verifyType=='email'){
            if(!this.verifyEmail){
                this.verifyEmail = new VerifyEmail(this.options.callback);
            }else{
                this.verifyEmail.initVerify();
            }
        }else if(verifyType == 'phone'){
            if(!this.verifyPhone ){
                this.verifyPhone = new VerifyPhone(this.options.callback);
            }else{
                this.verifyPhone.initVerify();
            }
        }else if(verifyType == 'phoneUnknow'){
            if(!this.verifyPhoneUnknow ){
                this.verifyPhoneUnknow = new verifyPhoneUnknow(this.options.callback);
            }else{
                this.verifyPhoneUnknow.initVerify();
            }
        }else if(verifyType == 'payPass'){        
            if(!this.verifyPayPass){
                this.verifyPayPass = new VerifyPayPass(this.options.callback);
            }else{
                this.verifyPayPass.initVerify();
            }
        }
        //显示相关验证提示信息
        if(dataInfo.hasTopTip=="true"){
            $verifyTopTip.html(juicer($('#' + dataInfo.topTipName ).html()).render());
        }else{
            $verifyTopTip.html(''); 
        }
        if(dataInfo.hasBottomTip=="true"){
            $verifyBottomTip.html(juicer($('#' + dataInfo.bottomTipName).html()).render());
        }else{
            $verifyBottomTip.html('');
        }
	}	
};
//忘记密码，账户已绑定手机但填写用户名为非手机情况的面板交互
var verifyPhoneUnknow = Class.create();
verifyPhoneUnknow.prototype = {
    initialize: function(callback) {
        this.callback = callback || {};
        this.phoneIsOk = false; //手机号可用标识
        this.getMoblieCodeInterval = 120; //可重新获取手机验证码时间间隔 单位秒

        this.formHandler = new FormHandler();
        this.formHandler.getCodeBtn = 'J_getVPhoneUnknowCode';//获取验证码按钮id
        this.formHandler.unGetCodeBtn = 'J_unGetVPhoneUnknowCode';//显示倒计时按钮id
        this.formHandler.tipId = 'J_vPhoneUnknowCodeTipInfo';//显示获取验证码错误信息id
        this.initVerify();
        this.lastInputPhone = '';//上次输入的手机号。        
    },
    initVerify: function() {
        //设置鼠标焦点在输入框内时提示信息
        $('#J_vPhoneUnknow').on('focus', {"obj": this, "callback": this.checkPhoneFocus}, this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_vPhoneUnknow').on('blur', {"obj": this, "callback": this.checkPhoneBlur}, this.formHandler.exeEventHandler);
        //设置鼠标焦点在输入框内时提示信息
        $('#J_vPhoneUnknowCode').on('focus', {"obj": this, "callback": this.checkPhoneCodeFocus}, this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_vPhoneUnknowCode').on('blur', {"obj": this, "callback": this.checkPhoneCodeBlur}, this.formHandler.exeEventHandler);

        //获取短信验证码
        $('#J_getVPhoneUnknowCode').on('click', {"obj": this, "callback": this.getPhoneCode}, this.formHandler.exeEventHandler);
        //提交短信验证前进行短信验证码验证
        $('#J_vPhoneUnknowSubmit').on('click', {"obj": this, "callback": this.checkIsOk}, this.formHandler.exeEventHandler);
    },
    checkPhoneFocus: function() {
        this.formHandler.switchInputStyle('normal', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
        $('#J_vPhoneUnknow').addClass('active');
        $('#J_vPhoneUnknowTipInfo').html(this.formHandler.lang_zh['5111']);
    },
    checkPhoneBlur: function() {
        var obj = this;
        this.phoneIsOk = false;

        $('#J_vPhoneUnknow').removeClass('active');
        var ePhone = $.trim($('#J_vPhoneUnknow').val());
        if (ePhone == '') {
            this.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
            $('#J_vPhoneUnknowTipInfo').html(this.formHandler.lang_zh['5111']);
            //停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            this.clearCodeBtnTimeout('disable');
            this.lastInputPhone = ePhone;
            return false;
        }
        if (!this.formHandler.mobileReg.test(ePhone)) {
            this.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
            $('#J_vPhoneUnknowTipInfo').html(this.formHandler.lang_zh['5402']);
            //停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            this.clearCodeBtnTimeout('disable');
            this.lastInputPhone = ePhone;
            return false;
        }
        if (this.lastInputPhone !== ePhone) {
            //停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            this.clearCodeBtnTimeout('disable');
        }
        //验证输入的手机号是否是账户绑定的手机号
        obj.phoneIsOk = true;
        $('#J_vPhoneUnknowTipInfo').html('');
        obj.switchGetCodeBtn('enable', obj.formHandler.lang_zh['5003']);//将获取验证码按钮切换为可用状态
    },
    checkPhoneCodeFocus: function() {
        this.formHandler.switchInputStyle('normal', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
        $('#J_vPhoneUnknowCode').addClass('active');
        $('#J_vPhoneUnknowCodeTipInfo').html(this.formHandler.lang_zh['5101']);
    },
    checkPhoneCodeBlur: function() {
        $('#J_vPhoneUnknowCode').removeClass('active');
        $('#J_vPhoneUnknowCodeTipInfo').html('');
    },
    //获取短信验证码
    getPhoneCode: function() {
        var obj = this;
        var mobile = $.trim($('#J_vPhoneUnknow').val());
        obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5002']);//添加按钮缓冲效果

        //参数拼接
        var params = {};
        params.verify_type = 14;//14-手机号短信验证
        params.txtMobile = mobile;
        //未登录状态下要传图像验证码   当找回密码绑定手机时，需要传入图形验证码        
        var $unloginVcode = $('#J_unloginVcode');
        var $unloginUser = $('#J_unloginUser');
        if ($unloginVcode.length > 0) {
            params.txtVcode = $unloginVcode.val();
        }
        if ($unloginUser.length > 0) {
            params.txtUser = $unloginUser.val();
        }

        // 给手机发送验证码
        $.ajax({
            type: 'POST',
            url: 'p/send_mobile_vcode.php',
            data: params,
            async: false,
            cache: false,
            success: function(flg) {
                $('#J_errorCode').val(flg);
                if (flg === '0') {//短信发送成功
                    // 计时器初始化
                    obj.formHandler.miao = obj.getMoblieCodeInterval;
                    obj.formHandler.changejishi();
                    // 清空验证码输入框 和 提示信息，并将光标定位到验证码输入框
                    obj.formHandler.switchInputStyle('normal', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    $('#J_vPhoneUnknowCode').val('');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5103']);
                    return true;
                } else if (flg === '1005') {//120秒内重复发送
                    // 两次发送间隔少于2分钟
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5104']);
                    obj.switchGetCodeBtn('enable');
                    return false;
                } else if (flg === '1004' || flg === '1007') {//超过指定次数
                    // 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5105']);
                    obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5003']);
                    return false;
                } else if (flg === '1006') {//同一ip超过指定次数
                    // 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5109']);
                    obj.disableCodeBtn('enable');
                    return false;
                } else if (flg === '1008') {//用户输入手机号不是账户绑定的手机号
                    // 忘记密码，身份验证环节用户输入的手机号和账户已绑定的手机号不匹配
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
                    $('#J_vPhoneUnknowTipInfo').html(obj.formHandler.lang_zh['5110']);
                    obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5003']);
                    return false;
                } else if (flg === '1002') {//该手机号已被验证，重新换一个
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
                    $('#J_vPhoneUnknowTipInfo').html(obj.formHandler.lang_zh['5403']);//手机号码和原来的一样 TODO
                    obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5003']);
                    return false;
                } else if (flg === '1001') {//未登录
                    window.location.href = $('#J_returnUrl').val();
                    return false;
                } else if (flg === '1010') {//图像验证码过期 跳转到找回密码第一个页面
                    window.location.href = '/find_password.php?vcodeState=timeout&txtUser=' + $unloginUser.val();
                    return false;
                } else {
                    //其他原因失败
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    obj.switchGetCodeBtn('enable');
                    return false;
                }
            }
        });
    },
    checkIsOk: function() {
        //this.checkPhoneBlur();
        var ePhone = $.trim($('#J_vPhoneUnknow').val());
        var ePhoneCode = $.trim($('#J_vPhoneUnknowCode').val());
        if (ePhone == '') {//手机号未输入
            this.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
            $('#J_vPhoneUnknowTipInfo').html(this.formHandler.lang_zh['5111']);
            return false;
        }
        if (!this.phoneIsOk) {//手机号格式不正确 或 已存在
            this.formHandler.switchInputStyle('error', 'J_vPhoneUnknow', 'J_vPhoneUnknowTipImg', 'J_vPhoneUnknowTipInfo');
            $('#J_vPhoneUnknowTipInfo').html(this.formHandler.lang_zh['5402']);
            return false;
        }

        if (ePhoneCode == '') {
            this.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
            $('#J_vPhoneUnknowCodeTipInfo').html(this.formHandler.lang_zh['5101']);
            return false;
        }
        if (ePhoneCode.length != 6) {
            this.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
            $('#J_vPhoneUnknowCodeTipInfo').html(this.formHandler.lang_zh['5102']);
            return false;
        }
        var params = {};
        params.verify_type = 14;//14-安全中心身份验证方式为手机
        params.txtMobile = ePhone;
        params.txtSmsVcode = ePhoneCode;
        //未登录状态下要传图像验证码   当找回密码使用手机验证身份或者绑定手机时，需要传入图形验证码        
        var $unloginUser = $('#J_unloginUser');
        if ($unloginUser.length > 0) {
            params.txtUser = $unloginUser.val();
        }
        var obj = this;
        //验证短信验证码正确性
        $.ajax({
            type: 'POST',
            url: 'p/check_mobile_vcode.php',
            data: params,
            async: false,
            cache: false,
            success: function(flg) {
                $('#J_errorCode').val(flg);
                //flg = 0;//TODO
                if (flg === '0') {
                    obj.formHandler.switchInputStyle('ok', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    if (typeof obj.callback == 'function') {
                        obj.callback();
                    }
                    return true;
                } else if (flg === '1003') {//验证码验证失败
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5102']);
                    return false;
                } else if (flg === '1001') { //未登录
                    window.location.href = $('#J_returnUrl').val();
                    return false;
                } else { //接口或系统异常
                    obj.formHandler.switchInputStyle('error', 'J_vPhoneUnknowCode', 'J_vPhoneUnknowCodeTipImg', 'J_vPhoneUnknowCodeTipInfo');
                    $('#J_vPhoneUnknowCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                }
            },
            error: function() {
                return false;
            }
        });
    },
    switchGetCodeBtn: function(type, tipText) {
        if (type === "enable") {
            $('#J_getVPhoneUnknowCode').show();
            $('#J_unGetVPhoneUnknowCode').hide().html();
        } else {
            $('#J_getVPhoneUnknowCode').hide();
            $('#J_unGetVPhoneUnknowCode').show().html(tipText);
        }
    },
    clearCodeBtnTimeout: function(type) {
        //停止获取验证码按钮倒计时
        clearTimeout(this.formHandler.timeoutRun);
        if (type === 'enable') {
            //获取短信验证码按钮可用
            this.switchGetCodeBtn('enable');
        } else {
            //获取短信验证码按钮不可用
            this.switchGetCodeBtn('disable', this.formHandler.lang_zh['5003']);
        }
    }
};
//邮箱验证
var VerifyEmail = Class.create();
VerifyEmail.prototype = {
    initialize: function(callback){
        this.callback = callback || {};
        this.getMoblieCodeInterval = 120; //可重新获取手机验证码时间间隔 单位秒
        
        this.formHandler = new FormHandler(); 
        this.formHandler.getCodeBtn = 'J_getVerifyCode';//获取验证码按钮id
        this.formHandler.unGetCodeBtn = 'J_unGetVerifyCode';//显示倒计时按钮id
        this.formHandler.tipId = 'J_vEmailCodeTipInfo';//显示获取验证码错误信息id
        
        this.initVerify();
//        addEventHandler($('#J_vEmailCode')[0], "focus", BindAsEventListener(this, this.checkFocus));
//        addEventHandler($('#J_vEmailCodeSubmit')[0], "click", BindAsEventListener(this, this.checkIsOk));        
    
    },
    initVerify: function(){
        //设置鼠标焦点在输入框内时提示信息
        $('#J_vEmailCode').on('focus', {"obj": this, "callback": this.checkFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_vEmailCode').on('blur', {"obj": this, "callback": this.checkBlur},this.formHandler.exeEventHandler);
        //获取短信验证码
        $('#J_getVerifyCode').on('click', {"obj": this, "callback": this.getEmailCode},this.formHandler.exeEventHandler);
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_vEmailCodeSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
        //从一种验证方式切换至另一种验证方式，在切回时获取验证码的倒计时继续
        if(this.formHandler.miao>0){
            this.formHandler.changejishi();
            $('#J_vEmailCodeTipInfo').html(this.formHandler.lang_zh['5203']);
        }       
    },
    checkFocus: function(){
        this.formHandler.switchInputStyle('normal','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo');
        $('#J_vEmailCode').addClass('active');
        $('#J_vEmailCodeTipInfo').html(this.formHandler.lang_zh['5201']);
    },
    checkBlur: function(){
        $('#J_vEmailCode').removeClass('active');
        $('#J_vEmailCodeTipInfo').html('');
    },
    //获取邮箱验证码
    getEmailCode: function(){    	
        var obj = this;
        //参数拼接
        var params = {};
        params.verify_type = 1; //1：获取邮件验证码
        //未登录状态下要传图像验证码 、账号名称
        var $unloginVcode = $('#J_unloginVcode');
        var $unloginUser = $('#J_unloginUser');
        if($unloginVcode.length>0){
        	params.txtVcode = $unloginVcode.val();
        }
        if($unloginUser.length>0){
        	params.txtUser = $unloginUser.val();
        }
        
        //由于获取验证码比较慢，所以添加缓冲效果
    	$('#J_getVerifyCode').hide();
        $('#J_unGetVerifyCode').show().html(obj.formHandler.lang_zh['5002']);
        $.ajax({
            type: 'POST',
            url: 'p/send_email_vcode.php',
            data: params,
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
                if (flg==0) {
                	// 计时器初始化
                    obj.formHandler.miao = obj.getMoblieCodeInterval;
                    obj.formHandler.changejishi();    
                    // 清空验证码输入框 和 提示信息，并将光标定位到验证码输入框
                    obj.formHandler.switchInputStyle('normal','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo'); 
                    $('#J_vEmailCode').val('');
                    $('#J_vEmailCodeTipInfo').html(obj.formHandler.lang_zh['5203']);                            
                    // 发送验证码成功
                    return true;
                }else if (flg == 1003 || flg == 1004) {
                    // 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo'); 
                    $('#J_vEmailCodeTipInfo').html(obj.formHandler.lang_zh['5205']);
                    $('#J_getVerifyCode').hide();
                    $('#J_unGetVerifyCode').show().html(obj.formHandler.lang_zh['5207']);
                    return false;
                }else if (flg == 1010) {//图像验证码过期 跳转到找回密码第一个页面
                	window.location.href = '/find_password.php?vcodeState=timeout&txtUser=' + $unloginUser.val();
                    return false;
                }else {
                    // 系统原因 或接口异常
                    obj.formHandler.switchInputStyle('error','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo'); 
                    $('#J_vEmailCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    $('#J_unGetVerifyCode').hide();
                    $('#J_getVerifyCode').show();                    
                    return false;
                } 
            },
            error: function(){
            	$('#J_unGetVerifyCode').hide();
                $('#J_getVerifyCode').show();
                return false;
            }
        });
    },
    checkIsOk: function(){
        var vEmail = $.trim($('#J_vEmailCode').val());
        if (vEmail == '') {
            this.formHandler.switchInputStyle('error','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo');
            $('#J_vEmailCodeTipInfo').html(this.formHandler.lang_zh['5201']);
            return false;
        }
        //验证邮箱验证码 邮箱验证码为6位
        if (vEmail.length != 6) {
            this.formHandler.switchInputStyle('error','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo');
            $('#J_vEmailCodeTipInfo').html(this.formHandler.lang_zh['5202']);
            return false;
        }
        var obj = this;
        var params = {};
        params.verify_type = 1; 
        params.txtEmailVcode = vEmail;
        //未登录状态下要传账号名称
        var $unloginUser = $('#J_unloginUser');
        if($unloginUser.length>0){
        	params.txtUser = $unloginUser.val();
        }
        //正确性验证
        $.ajax({
            type: 'POST',
            url: 'p/check_email_vcode.php',
            data: params,
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	//flg = 0;//TODO
            	if( flg==='0' ){
            		obj.formHandler.switchInputStyle('ok','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo');
                	
            		if(typeof obj.callback == 'function'){
                		obj.callback();
                    }
                    return true;
            	} else if( flg==='1002' ){//邮件验证码验证失败
            		obj.formHandler.switchInputStyle('error','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo');
                    $('#J_vEmailCodeTipInfo').html(obj.formHandler.lang_zh['5202']);
                    return false;
            	} else if(flg === '1001'){//未登录
            		window.location.href = $('#J_returnUrl').val();
            	} else{ //接口或系统异常
                	obj.formHandler.switchInputStyle('error','J_vEmailCode', 'J_vEmailCodeTipImg','J_vEmailCodeTipInfo');
                    $('#J_vEmailCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                }
            },
            error: function(){
                return false;
            }
        });        
    }
};
//手机验证
var VerifyPhone = Class.create();
VerifyPhone.prototype = {
    initialize: function(callback){   
        this.callback = callback || {};    
        this.getMoblieCodeInterval = 120; //可重新获取手机验证码时间间隔 单位秒
        
        this.formHandler = new FormHandler();        
        this.formHandler.getCodeBtn = 'J_getVPhoneCode';//获取验证码按钮id
        this.formHandler.unGetCodeBtn = 'J_unGetVPhoneCode';//显示倒计时按钮id
        this.formHandler.tipId = 'J_vPhoneCodeTipInfo';//显示获取验证码错误信息id
        this.initVerify();
//        addEventHandler($('#J_vEmailCode')[0], "focus", BindAsEventListener(this, this.checkFocus));
//        addEventHandler($('#J_vEmailCodeSubmit')[0], "click", BindAsEventListener(this, this.checkIsOk));        
          
    },
    initVerify: function(){
        //设置鼠标焦点在输入框内时提示信息
        $('#J_vPhoneCode').on('focus', {"obj": this, "callback": this.checkFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_vPhoneCode').on('blur', {"obj": this, "callback": this.checkBlur},this.formHandler.exeEventHandler);
        //获取短信验证码
        $('#J_getVPhoneCode').on('click', {"obj": this, "callback": this.getPhoneCode},this.formHandler.exeEventHandler);
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_vPhoneCodeSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
        //从一种验证方式切换至另一种验证方式，在切回时获取验证码的倒计时继续
        if(this.formHandler.miao>0){
            this.formHandler.changejishi();
            $('#J_vPhoneCodeTipInfo').html(this.formHandler.lang_zh['5103']);
        }        
    },
    checkFocus: function(){
        this.formHandler.switchInputStyle('normal','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');
        $('#J_vPhoneCode').addClass('active');
        $('#J_vPhoneCodeTipInfo').html(this.formHandler.lang_zh['5101']);
    },
    checkBlur: function(){
        $('#J_vPhoneCode').removeClass('active');
        $('#J_vPhoneCodeTipInfo').html('');
    },
    //获取邮箱验证码
    getPhoneCode: function(){
        var obj = this;
        //由于获取验证码比较慢，所以添加缓冲效果
        this.disableCodeBtn('disable', this.formHandler.lang_zh['5002']);
        
        var params = {};
        params.verify_type = 14;        
        //未登录状态下要传图像验证码 、账号名称
        var $unloginVcode = $('#J_unloginVcode');
        var $unloginUser = $('#J_unloginUser');
        if($unloginVcode.length>0){
        	params.txtVcode = $unloginVcode.val();
        }
        if($unloginUser.length>0){
        	params.txtUser = $unloginUser.val();
        }
        // 给手机发送验证码
        $.ajax({
            type: 'POST',
            url: 'p/send_mobile_vcode.php',
            data: params,
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
                if (flg === '0') { //发送验证码成功     
                	// 计时器初始化
                    obj.formHandler.miao = obj.getMoblieCodeInterval;
                    obj.formHandler.changejishi();    
                    // 清空验证码输入框 和 提示信息，并将光标定位到验证码输入框
                    obj.formHandler.switchInputStyle('normal','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo'); 
                    $('#J_vPhoneCode').val('');
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5103']);
                    return true;
                }else if(flg === '1005'){//120秒内重复发送
            		// 两次发送间隔少于2分钟
                    obj.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');  
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5104']);  
                    obj.disableCodeBtn('enable');
                    return false;
            	}else if(flg === '1004' || flg === '1007'){//超过指定次数
            		// 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo'); 
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5105']);
                    obj.disableCodeBtn('disable', obj.formHandler.lang_zh['5003']);
                    return false;
            	}else if(flg === '1006'){//统一ip超过指定次数
            		// 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo'); 
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5109']);
                    obj.disableCodeBtn('enable');
                    return false;
            	}else if(flg === '1001'){//未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
            	}else if (flg === '1010') {//图像验证码过期 跳转到找回密码第一个页面
            		window.location.href = '/find_password.php?vcodeState=timeout&txtUser=' + $unloginUser.val();
                    return false;
                }else{
            		//其他原因失败
                    obj.formHandler.switchInputStyle('error','', '','J_vPhoneCodeTipInfo'); 
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    obj.disableCodeBtn('enable');
                    return false;
            	}
            }
        });
    },
    checkIsOk: function(){
        var vPhone = $.trim($('#J_vPhoneCode').val());
        if (vPhone == '') {
            this.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');
            $('#J_vPhoneCodeTipInfo').html(this.formHandler.lang_zh['5101']);
            return false;
        }
        if (vPhone.length != 6) {
            this.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');
            $('#J_vPhoneCodeTipInfo').html(this.formHandler.lang_zh['5102']);
            return false;
        }
        var obj = this;
        //验证短信验证码正确性
        var params = {};
        params.verify_type = 14;
        params.txtSmsVcode = vPhone;
        //未登录状态下要传账号名称
        var $unloginUser = $('#J_unloginUser');
        if($unloginUser.length>0){
        	params.txtUser = $unloginUser.val();
        }
        $.ajax({
            type: 'POST',
            url: 'p/check_mobile_vcode.php',
            data: params,//12-绑定手机填写的号码;13-修改手机填写的号码;
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	//flg = 0;//TODO
            	if( flg==='0' ){
            		obj.formHandler.switchInputStyle('ok','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');
                	if(typeof obj.callback == 'function'){
                		obj.callback();
                    }
                    return true;
            	} else if( flg==='1003' ){//验证码验证失败
            		obj.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5102']);
                    return false;
            	} else if (flg === '1001') { //未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
                } else{ //接口或系统异常
                	obj.formHandler.switchInputStyle('error','J_vPhoneCode', 'J_vPhoneCodeTipImg','J_vPhoneCodeTipInfo');
                    $('#J_vPhoneCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                }
            },
            error: function(){
                return false;
            }
        });        
    },
    disableCodeBtn: function(type, disableTip){//设置获取短信验证码按的可用性 type ：disable enable
    	if(type=='enable'){
    		$('#J_getVPhoneCode').show();
            $('#J_unGetVPhoneCode').hide().html('');
    	} else {
    		$('#J_getVPhoneCode').hide();
            $('#J_unGetVPhoneCode').show().html(disableTip);    		
    	}
    }
};
//支付密码验证
var VerifyPayPass = Class.create();
VerifyPayPass.prototype = {
    initialize: function(callback){ 
        this.callback = callback || {};       
        this.formHandler = new FormHandler();
        
//        addEventHandler($('#J_vEmailCode')[0], "focus", BindAsEventListener(this, this.checkFocus));
//        addEventHandler($('#J_vEmailCodeSubmit')[0], "click", BindAsEventListener(this, this.checkIsOk));        
       
        this.initVerify();    
    },
    initVerify: function(){
        //设置鼠标焦点在输入框内时提示信息
        $('#J_vPayPass').on('focus', {"obj": this, "callback": this.checkFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_vPayPass').on('blur', {"obj": this, "callback": this.checkBlur},this.formHandler.exeEventHandler);
        //支付密码大小写提示
        $('#J_vPayPass').on('keypress', {"obj": this, "upperCapsId": "J_vPayPassUpperCase","otherTipIds":["J_vPayPassTipInfo"]},this.formHandler.checkCapslockOpen);
        
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_vPayPassSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
    },
    checkFocus: function(){
        this.formHandler.switchInputStyle('normal','J_vPayPass', 'J_vPayPassTipImg','J_vPayPassTipInfo');
        $('#J_vPayPass').addClass('active');
        $('#J_vPayPassTipInfo').html(this.formHandler.lang_zh['5301']);
    },
    checkBlur: function(){
        $('#J_vPayPass').removeClass('active');
        $('#J_vPhoneCodeTipInfo').html('');
        $("#J_vPayPassUpperCase").hide();
    },
    checkCapslockOpen: function(e){
        var e= window.event || e;
        var n=e.keyCode || e.which;
        var m=e.shiftKey||(n==16)||false;
        if (((n >= 65 && n <= 90) && !m) || ((n >= 97 && n <= 122 )&& m)) {
            $('#J_vPayPassTipInfo').hide();
            $("#J_vPayPassUpperCase").show();
        } else if(n >= 97 && n <= 122 && !m){
            $("#J_vPayPassUpperCase").hide();
        } else if(n==27){
            $("#J_vPayPassUpperCase").hide();
        } else{
            $("#J_vPayPassUpperCase").hide();
        }
    },
    checkIsOk: function(){
        var vPayPass = $('#J_vPayPass').val();
        if (vPayPass == '') {
            this.formHandler.switchInputStyle('error','J_vPayPass', 'J_vPayPassTipImg','J_vPayPassTipInfo');
            $('#J_vPayPassTipInfo').html(this.formHandler.lang_zh['5301']);
            return false;
        }
        
        var obj = this;
        //验证支付密码正确性
        $.ajax({
            type: 'POST',
            url: GLOBAL.selfHtts + 'p/check_payment_pass.php',
            data: {'txtPayPass': vPayPass},//'txtPayPass=' + escape(vPayPass),
            jsonp: 'jsoncallback',
            dataType: 'jsonp',
            timeout: GLOBAL.httpsJsonpTimeout,
            success: function (res) {
            	var data = res.returnval;
            	var flg = data.flg;            	
            	var enable_cnt = data.enable_cnt;
            	$('#J_errorCode').val(flg);
            	
            	if( flg===0 ){//支付密码验证成功
            		obj.formHandler.switchInputStyle('ok','J_vPayPass', 'J_vPayPassTipImg','J_vPayPassTipInfo');
                	if(typeof obj.callback == 'function'){
                		obj.callback();
                    }
                    return true;
            	} else if (flg ===1001) { //未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
                } else if(flg===1002 && enable_cnt!==0){//支付密码错误
            		obj.formHandler.switchInputStyle('error','J_vPayPass', 'J_vPayPassTipImg','J_vPayPassTipInfo');
            		$('#J_vPayPassTipInfo').html(obj.formHandler.lang_zh['5302'].replace('{#getNumber#}', enable_cnt));
                    return false;
            	} else if(flg===1003 || enable_cnt===0){//支付密码验证超过限定次数
            		obj.formHandler.switchInputStyle('error','J_vPayPass', 'J_vPayPassTipImg','J_vPayPassTipInfo');
            		$('#J_vPayPassTipInfo').html(obj.formHandler.lang_zh['5303']);
                    return false;
            	} else {//接口或系统异常
            		obj.formHandler.switchInputStyle('error','J_vPayPass', 'J_vPayPassTipImg','J_vPayPassTipInfo');
                    $('#J_vPayPassTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
            	}
            },
            error: function(){
                return false;
            }
        });        
    }
};
//绑定手机 面板交互
var EidtPhone = Class.create();
EidtPhone.prototype = {
    initialize: function(callback){
        this.callback = callback || {};
        this.phoneIsOk = false; //手机号可用标识
        this.getMoblieCodeInterval = 120; //可重新获取手机验证码时间间隔 单位秒
        
        this.formHandler = new FormHandler();
        this.formHandler.getCodeBtn = 'J_getEPhoneCode';//获取验证码按钮id
        this.formHandler.unGetCodeBtn = 'J_unGetEPhoneCode';//显示倒计时按钮id
        this.formHandler.tipId = 'J_ePhoneCodeTipInfo';//显示获取验证码错误信息id
        this.initVerify();
        this.lastInputPhone = '';//上次输入的手机号。
//        addEventHandler($('#J_vEmailCode')[0], "focus", BindAsEventListener(this, this.checkFocus));
//        addEventHandler($('#J_vEmailCodeSubmit')[0], "click", BindAsEventListener(this, this.checkIsOk));        
          
    },
    initVerify: function(){
        //设置鼠标焦点在输入框内时提示信息
        $('#J_ePhone').on('focus', {"obj": this, "callback": this.checkPhoneFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_ePhone').on('blur', {"obj": this, "callback": this.checkPhoneBlur},this.formHandler.exeEventHandler);
        //设置鼠标焦点在输入框内时提示信息
        $('#J_ePhoneCode').on('focus', {"obj": this, "callback": this.checkPhoneCodeFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_ePhoneCode').on('blur', {"obj": this, "callback": this.checkPhoneCodeBlur},this.formHandler.exeEventHandler);
        
        //获取短信验证码
        $('#J_getEPhoneCode').on('click', {"obj": this, "callback": this.getPhoneCode},this.formHandler.exeEventHandler);
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_ePhoneSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
    },
    checkPhoneFocus: function(){
        this.formHandler.switchInputStyle('normal','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');
        $('#J_ePhone').addClass('active');
        $('#J_ePhoneTipInfo').html(this.formHandler.lang_zh['5401']);
    },
    checkPhoneBlur: function(){
    	this.phoneIsOk = false;
    	
        $('#J_ePhone').removeClass('active');
        var ePhone = $.trim($('#J_ePhone').val());
        if (ePhone == '') {
            this.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');
            $('#J_ePhoneTipInfo').html(this.formHandler.lang_zh['5401']);
            if(this.lastInputPhone !== ePhone){
        		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            	this.clearCodeBtnTimeout('disable');                  	                  	               
            }
            this.lastInputPhone = ePhone;
            return false;
        }
        if (!this.formHandler.mobileReg.test(ePhone)) {
            this.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');          
            $('#J_ePhoneTipInfo').html(this.formHandler.lang_zh['5402']);
            if(this.lastInputPhone !== ePhone){
        		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            	this.clearCodeBtnTimeout('disable');                  	                  	               
            }
            this.lastInputPhone = ePhone;
            return false;
        }
        
        //参数拼接
        var params = {};
        params.txtUser = ePhone;
        //未登录状态下要传图像验证码   当找回密码绑定手机时，需要传入图形验证码
        var $unloginVcode = $('#J_unloginVcode');
        var $unloginUser = $('#J_unloginUser');
        if($unloginVcode.length>0){
        	params.txtVcode = $unloginVcode.val();
        }
        
        //验证电话是否已被使用过
        var obj = this;
        $.ajax({
            type: 'POST',
            url: 'p/check_username_exist.php',
            data: params,
            async: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	if(flg === 'false'){//手机未被使用，可以进行绑定            		
                 	obj.formHandler.switchInputStyle('ok','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');                    
                 	obj.phoneIsOk = true;
                 	if(obj.lastInputPhone !== ePhone){
                		//停止获取验证码按钮倒计时  获取短信验证码按钮可用
                    	obj.clearCodeBtnTimeout('enable');                    	                  	               
                    }
                } else{                	
                	if(obj.lastInputPhone !== ePhone){
                		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
                		obj.clearCodeBtnTimeout('disable');                  	                  	               
                    }
                	if (flg === 'true') {//手机已存在
                        obj.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');
                        $('#J_ePhoneTipInfo').html(obj.formHandler.lang_zh['5403']);                        
                    } else if(flg === '1001'){//未登录
                		window.location.href = $('#J_returnUrl').val();
                		return false;
                	} else if(flg === '2001' || flg === '3001'){//接口异常
                    	obj.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');
                        $('#J_ePhoneTipInfo').html(obj.formHandler.lang_zh['5001']);                        
                    } else if (flg === '1010') {//图像验证码过期 跳转到找回密码第一个页面
                    	window.location.href = '/find_password.php?vcodeState=timeout&txtUser=' + $unloginUser.val();
                        return false;
                    } else{//其他错误
                    	obj.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');
                        $('#J_ePhoneTipInfo').html(obj.formHandler.lang_zh['5001']);
                        
                    }
                }  
            	obj.lastInputPhone = ePhone;
            }//end success end        	
        });//end ajax        
    },
    checkPhoneCodeFocus: function(){
        this.formHandler.switchInputStyle('normal','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo');
        $('#J_ePhoneCode').addClass('active');
        $('#J_ePhoneCodeTipInfo').html(this.formHandler.lang_zh['5101']);
    },
    checkPhoneCodeBlur: function(){
        $('#J_ePhoneCode').removeClass('active');
        $('#J_ePhoneCodeTipInfo').html('');
    },
    //获取短信验证码
    getPhoneCode: function(){    	
    	/*
        //手机号正确时，才能后去验证码    	
        if(this.phoneIsOk == false){
        	//需要先填写手机号
            var ePhone = $.trim($('#J_ePhone').val());        
            if (ePhone == '') {
            	$('#J_ePhone').focus();                
            }
            return false;
        }
        */
        var obj = this;
        var mobile = $.trim($('#J_ePhone').val());
        obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5002']);
        
        //参数拼接
        var params = {};
        params.verify_type = $('#J_mobileSendType').val();//12-绑定手机填写的号码;13-修改手机填写的号码;
        params.txtMobile = mobile;
        //未登录状态下要传图像验证码   当找回密码绑定手机时，需要传入图形验证码        
        var $unloginVcode = $('#J_unloginVcode');
        var $unloginUser = $('#J_unloginUser');
        if($unloginVcode.length>0){
        	params.txtVcode = $unloginVcode.val();
        }
        if($unloginUser.length>0){
        	params.txtUser = $unloginUser.val();
        }
        
        // 给手机发送验证码
        $.ajax({
            type: 'POST',
            url: 'p/send_mobile_vcode.php',
            data: params,
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	if (flg === '0'){//短信发送成功
            		// 计时器初始化
                    obj.formHandler.miao = obj.getMoblieCodeInterval;
                    obj.formHandler.changejishi();
                    // 清空验证码输入框 和 提示信息，并将光标定位到验证码输入框
                    obj.formHandler.switchInputStyle('normal','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo'); 
                    $('#J_ePhoneCode').val('');
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5103']);
                    return true;
            	}else if(flg === '1005'){//120秒内重复发送
            		// 两次发送间隔少于2分钟
                    obj.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo'); 
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5104']);  
                    obj.switchGetCodeBtn('enable');
                    return false;
            	}else if(flg === '1004' || flg === '1007'){//超过指定次数
            		// 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo'); 
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5105']);
                    obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5003']);
                    return false;
            	}else if(flg === '1006'){//统一ip超过指定次数
            		// 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');  
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5109']);
                    obj.disableCodeBtn('enable');
                    return false;
            	}else if(flg === '1002'){//该手机号已被验证，重新换一个
            		obj.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo'); 
                    $('#J_ePhoneTipInfo').html(obj.formHandler.lang_zh['5403']);//手机号码和原来的一样 TODO
                    obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5003']);
                    return false;
            	}else if(flg === '1001'){//未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
            	}else if (flg === '1010') {//图像验证码过期 跳转到找回密码第一个页面
            		window.location.href = '/find_password.php?vcodeState=timeout&txtUser=' + $unloginUser.val();
                    return false;
                }else{
            		//其他原因失败
                    obj.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo'); 
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    obj.switchGetCodeBtn('enable');
                    return false;
            	}               
            }
        });
    },
    checkIsOk: function(){
        //this.checkPhoneBlur();
    	var ePhone = $.trim($('#J_ePhone').val());
        var ePhoneCode = $.trim($('#J_ePhoneCode').val());
        if (ePhone == '') {//手机号未输入
        	this.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');
            $('#J_ePhoneTipInfo').html(this.formHandler.lang_zh['5401']);         
            return false;
        }
        if (!this.phoneIsOk) {//手机号格式不正确 或 已存在
        	this.formHandler.switchInputStyle('error','J_ePhone', 'J_ePhoneTipImg','J_ePhoneTipInfo');          
            $('#J_ePhoneTipInfo').html(this.formHandler.lang_zh['5402']);          
            return false;
        }
        
        if (ePhoneCode == '') {
            this.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo');
            $('#J_ePhoneCodeTipInfo').html(this.formHandler.lang_zh['5101']);
            return false;
        }
        if (ePhoneCode.length != 6) {
            this.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo');
            $('#J_ePhoneCodeTipInfo').html(this.formHandler.lang_zh['5102']);
            return false;
        }
        var params = {};
        params.verify_type = $('#J_mobileSendType').val();
        params.txtMobile = ePhone;
        params.txtSmsVcode = ePhoneCode;//12-绑定手机填写的号码;13-修改手机填写的号码;
        //未登录状态下要传图像验证码   当找回密码绑定手机时，需要传入图形验证码        
        var $unloginUser = $('#J_unloginUser');
        if($unloginUser.length>0){
        	params.txtUser = $unloginUser.val();
        }        
        var obj = this;
        //验证短信验证码正确性
        $.ajax({
            type: 'POST',
            url: 'p/check_mobile_vcode.php',
            data: params ,
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	//flg = 0;//TODO
            	if( flg==='0' ){
            		obj.formHandler.switchInputStyle('ok','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo');
                	if(typeof obj.callback == 'function'){
                		obj.callback();
                    }
                    return true;
            	} else if( flg==='1003' ){//验证码验证失败
            		obj.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo');
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5102']);
                    return false;
            	} else if (flg === '1001') { //未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
                }else{ //接口或系统异常
                	obj.formHandler.switchInputStyle('error','J_ePhoneCode', 'J_ePhoneCodeTipImg','J_ePhoneCodeTipInfo');
                    $('#J_ePhoneCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                }
            },
            error: function(){
                return false;
            }
        });
    },
    switchGetCodeBtn: function(type ,tipText){
    	if(type == "enable"){
    		$('#J_getEPhoneCode').show();
            $('#J_unGetEPhoneCode').hide().html();
    	} else {
    		$('#J_getEPhoneCode').hide();
            $('#J_unGetEPhoneCode').show().html(tipText);
    	}
    },
    clearCodeBtnTimeout: function(type){
    	//停止获取验证码按钮倒计时
    	clearTimeout(this.formHandler.timeoutRun); 
    	if(type === 'enable'){    		
        	//获取短信验证码按钮可用
        	this.switchGetCodeBtn('enable');                    	                  	               
        } else {
        	//获取短信验证码按钮不可用
        	this.switchGetCodeBtn('disable', this.formHandler.lang_zh['5003']);
        }
    }
};
//绑定 验证邮箱 面板交互
var EidtEmail = Class.create();
EidtEmail.prototype = {
    initialize: function(callback){
        this.callback = callback || {};
        this.getMoblieCodeInterval = 120; //可重新获取手机验证码时间间隔 单位秒
        
        this.emailIsOk = true;//新邮箱是否可用
        
        this.formHandler = new FormHandler();
        this.formHandler.getCodeBtn = 'J_getEEmailCode';//获取验证码按钮id
        this.formHandler.unGetCodeBtn = 'J_unGetEEmailCode';//显示倒计时按钮id
        this.formHandler.tipId = 'J_eEmailCodeTipInfo';//显示获取验证码错误信息id
        this.initVerify();
        
        this.lastInputEmail = '';//上次输入的邮箱。
//        addEventHandler($('#J_vEmailCode')[0], "focus", BindAsEventListener(this, this.checkFocus));
//        addEventHandler($('#J_vEmailCodeSubmit')[0], "click", BindAsEventListener(this, this.checkIsOk));        
          
    },
    initVerify: function(){
        //设置鼠标焦点在输入框内时提示信息
        $('#J_eEmail').on('focus', {"obj": this, "callback": this.checkEmailFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_eEmail').on('blur', {"obj": this, "callback": this.checkEmailBlur},this.formHandler.exeEventHandler);
        //设置鼠标焦点在输入框内时提示信息
        $('#J_eEmailCode').on('focus', {"obj": this, "callback": this.checkEmailCodeFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_eEmailCode').on('blur', {"obj": this, "callback": this.checkEmailCodeBlur},this.formHandler.exeEventHandler);
        
        //获取短信验证码
        $('#J_getEEmailCode').on('click', {"obj": this, "callback": this.getEmailCode},this.formHandler.exeEventHandler);
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_eEmailSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
    },
    checkEmailFocus: function(){
        this.formHandler.switchInputStyle('normal','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
        $('#J_eEmail').addClass('active');
        $('#J_eEmailTipInfo').html(this.formHandler.lang_zh['5501']);
    },
    checkEmailBlur: function(){
    	this.emailIsOk = false;
        $('#J_eEmail').removeClass('active');
        var eEmail = $.trim($('#J_eEmail').val());  
        
        if (eEmail == '') {
            this.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
            $('#J_eEmailTipInfo').html(this.formHandler.lang_zh['5501']);
            if(this.lastInputEmail !== eEmail){
        		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            	this.clearCodeBtnTimeout('disable');                  	                  	               
            }
            this.lastInputEmail = eEmail;
            return false;
        }
        if (eEmail.length > 40 || !this.formHandler.emailReg.test(eEmail)) {
            this.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');          
            $('#J_eEmailTipInfo').html(this.formHandler.lang_zh['5502']);
            if(this.lastInputEmail !== eEmail){
        		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            	this.clearCodeBtnTimeout('disable');                  	                  	               
            }
            this.lastInputEmail = eEmail;
            return false;
        }
        if (/[ ]/.test(eEmail)) {
            this.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');          
            $('#J_eEmailTipInfo').html(this.formHandler.lang_zh['5502']);
            if(this.lastInputEmail !== eEmail){
        		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
            	this.clearCodeBtnTimeout('disable');                  	                  	               
            }
            this.lastInputEmail = eEmail;
            return false;
        }
        //验证是否已被使用过
        var obj = this;
        var opType = $('#J_opType').val();
        $.ajax({
            type: 'POST',
            url: 'p/check_username_exist.php',
            data: 'txtUser=' + eEmail + 'opType=' + opType,
            async: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	if(flg === 'false'){//手机未被使用，可以进行绑定
                 	obj.formHandler.switchInputStyle('ok','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
                 	obj.emailIsOk = true;//修改邮箱可用标识
                 	if(obj.lastInputEmail !== eEmail){
                		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
                 		obj.clearCodeBtnTimeout('enable');                  	                  	               
                    }                
                } else {
                	if(obj.lastInputEmail !== eEmail){
                		//停止获取验证码按钮倒计时  获取短信验证码按钮不可用
                		obj.clearCodeBtnTimeout('disable');                  	                  	               
                    }
                	if (flg === 'true') {//邮箱已存在
	                    obj.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
	                    $('#J_eEmailTipInfo').html(obj.formHandler.lang_zh['5503']);
	                    return false;
	                } else if(flg === '2001' || flg === '3001'){//接口异常
	                	obj.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
	                    $('#J_eEmailTipInfo').html(obj.formHandler.lang_zh['5001']);
	                    return false;
	                } else if(flg === '1001'){//未登录
	            		window.location.href = $('#J_returnUrl').val();
	            		return false;
	            	} else{//其他错误
	                	obj.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
	                    $('#J_eEmailTipInfo').html(obj.formHandler.lang_zh['5001']);
	                    return false;
	                }
                }
            	obj.lastInputEmail = eEmail;
            }//end success 
        });//end ajax
    },
    checkEmailCodeFocus: function(){
        this.formHandler.switchInputStyle('normal','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');
        $('#J_eEmailCode').addClass('active');
        $('#J_eEmailCodeTipInfo').html(this.formHandler.lang_zh['5201']);
    },
    checkEmailCodeBlur: function(){
        $('#J_eEmailCode').removeClass('active');
        $('#J_eEmailCodeTipInfo').html('');
    },
    //获取邮箱验证码
    getEmailCode: function(){
        var obj = this;
        //由于获取验证码比较慢，所以添加缓冲效果
        obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5002']);
        //参数拼接
        var params = {};
        var email = $.trim($('#J_eEmail').val());
        if(email===''){
        	params.verify_type = 1;
        }else{
        	params.verify_type = 2;
        	params.txtEmail = email;
        }
        
        $.ajax({
        	type: 'POST',
            url: 'p/send_email_vcode.php',
            data: params,//1：获取邮件验证码
            async: false,
            cache: false,
            success: function (flg) {
            	$('#J_errorCode').val(flg);
                if (flg==='0') {
                	// 计时器初始化
                    obj.formHandler.miao = obj.getMoblieCodeInterval;
                    obj.formHandler.changejishi();    
                    // 清空验证码输入框 和 提示信息，并将光标定位到验证码输入框
                    obj.formHandler.switchInputStyle('normal','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');  
                    $('#J_eEmailCode').val('');
                    $('#J_eEmailCodeTipInfo').html(obj.formHandler.lang_zh['5203']);                            
                    // 发送验证码成功
                    return true;
                }else if (flg === '1003' || flg === '1004') {
                    // 当天发送短信的次数超过了规定的最大次数
                    obj.formHandler.switchInputStyle('error','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo'); 
                    $('#J_eEmailCodeTipInfo').html(obj.formHandler.lang_zh['5205']);
                    obj.switchGetCodeBtn('disable', obj.formHandler.lang_zh['5207']);
                    return false;
                }else if(flg === '1001'){//未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
            	}else if(flg === '1002'){//用户填写的新邮箱和原邮箱相同
            		obj.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo'); 
                    $('#J_eEmailTipInfo').html(obj.formHandler.lang_zh['5503']);
                    obj.switchGetCodeBtn('enable');  
            	}else {
                    // 系统原因 或接口异常
                    obj.formHandler.switchInputStyle('error','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo'); 
                    $('#J_eEmailCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    obj.switchGetCodeBtn('enable');              
                    return false;
                } 
            },error: function(){
            	obj.switchGetCodeBtn('enable');
                return false;
            },
            complete: function(){
            }
        });         
    },
    checkIsOk: function(){
    	/**
    	 * 该方法处理了两种邮箱情况
    	 * 1.有邮箱,但是该邮箱为验证,则邮箱由数据库提供,不需要用户填写
    	 * 2.修改邮箱,邮箱需要用户填写
    	 * */
    	var eEmailCode = $.trim($('#J_eEmailCode').val());
    	var email = '';
    	$email = $('#J_eEmail');
    	//邮箱不是用户手动填写时，不需要验证邮箱正确性
    	if($email.length>0){
    		email = $.trim($email.val());            
            if (email == '') {//邮箱未输入
                this.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
                $('#J_eEmailTipInfo').html(this.formHandler.lang_zh['5501']);            
                return false;
            }
            if (!this.emailIsOk) {//邮箱格式不正确 或 已存在
                this.formHandler.switchInputStyle('error','J_eEmail', 'J_eEmailTipImg','J_eEmailTipInfo');
                $('#J_eEmailTipInfo').html(this.formHandler.lang_zh['5502']);            
                return false;
            }
        }        
        //验证验证码格式正确性
        if (eEmailCode == '') {
            this.formHandler.switchInputStyle('error','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');
            $('#J_eEmailCodeTipInfo').html(this.formHandler.lang_zh['5201']);
            return false;
        }
        if (eEmailCode.length != 6) {
            this.formHandler.switchInputStyle('error','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');
            $('#J_eEmailCodeTipInfo').html(this.formHandler.lang_zh['5202']);
            return false;
        }
        
        var obj = this;
        //参数拼接
        var params = {};
        params.txtEmailVcode = eEmailCode;
        if(email==undefined || email.length==0 ||email==''){
        	params.verify_type = 1;
        }else{
        	params.verify_type = 2;
        	params.txtEmail = email;
        }
        //正确性验证
        $.ajax({
            type: 'POST',
            url: 'p/check_email_vcode.php',
            data: params,
            async: false,
            cache: false,
            dataType:'json',
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	if( flg===0 ){
            		obj.formHandler.switchInputStyle('ok','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');
                	if(typeof obj.callback == 'function'){
                		obj.callback();
                    }
                    return true;
            	} else if( flg===1002 ){//邮件验证码验证失败
            		obj.formHandler.switchInputStyle('error','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');
                    $('#J_eEmailCodeTipInfo').html(obj.formHandler.lang_zh['5202']);
                    return false;
            	} else if (flg===1001) { //未登录
            		window.location.href = $('#J_returnUrl').val();
            		return false;
                }else{ //接口或系统异常
                	obj.formHandler.switchInputStyle('error','J_eEmailCode', 'J_eEmailCodeTipImg','J_eEmailCodeTipInfo');
                    $('#J_eEmailCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                }
            },
            error: function(){
                return false;
            }
        });
    },
    switchGetCodeBtn: function(type ,tipText){
    	if(type == "enable"){
    		$('#J_getEEmailCode').show();
            $('#J_unGetEEmailCode').hide().html();
    	} else {
    		$('#J_getEEmailCode').hide();
            $('#J_unGetEEmailCode').show().html(tipText);
    	}
    },
    clearCodeBtnTimeout: function(type){
    	//停止获取验证码按钮倒计时
    	clearTimeout(this.formHandler.timeoutRun); 
    	if(type === 'enable'){    		
        	//获取短信验证码按钮可用
        	this.switchGetCodeBtn('enable');                    	                  	               
        } else {
        	//获取短信验证码按钮不可用
        	this.switchGetCodeBtn('disable', this.formHandler.lang_zh['5003']);
        }
    }
};
//密码 登录密码 设置 找回 修改 面板交互
var EidtPaypass = Class.create();
EidtPaypass.prototype = {
    initialize: function(callback, setPasswordMethod){
        this.callback = callback;
        this.passwordMethod = 'passwrod';
        if(setPasswordMethod && setPasswordMethod==='paypass'){
        	this.passwordMethod = setPasswordMethod;
        }
        this.passwordIsOk = false;
        this.rePasswordIsOK = false;
        this.checkPassStrongData = {
                                    "obj": this, 
                                    "inputId":"J_ePaypass",
                                    "tipImg":"J_ePaypassTipImg",
                                    "tipInfo": "J_ePaypassTipInfo",
                                    "itemWrapId":"J_ePaypassStrongWrap",
                                    "itemIdPrefix":"J_ePaypassStrong",
                                    "itemClass": "j_pwdStrong",
                                    "upperCapsId": "J_ePaypassUpperCase", 
                                    "otherTipIds":["J_ePaypassTipInfo", "J_ePaypassStrongWrap"]
                                   };
        this.formHandler = new FormHandler();
        this.initVerify();
    },
    initVerify: function(){
    	//密码输入框
        //获取焦点
        $('#J_ePaypass').on('focus', {"obj": this, "callback": this.checkPaypassFocus},this.formHandler.exeEventHandler);
        //输入密码时，实时检验密码强度       
        $('#J_ePaypass').on('keyup', this.checkPassStrongData,this.formHandler.eventCheckPassStrong);
        //监听键盘大小写切换
        $('#J_ePaypass').on('keypress', {"obj": this, "upperCapsId": "J_ePaypassUpperCase","otherTipIds":["J_ePaypassTipInfo","J_ePaypassStrongWrap"]},this.formHandler.checkCapslockOpen);
        //失去焦点时，验证输入框内容
        $('#J_ePaypass').on('blur', {"obj": this, "callback": this.checkPaypassBlur},this.formHandler.exeEventHandler);
        
        //确认密码输入框 
        //获取焦点
        $('#J_eRePaypass').on('focus', {"obj": this, "callback": this.checkRePaypassFocus},this.formHandler.exeEventHandler);
        //监听键盘大小写切换
        $('#J_eRePaypass').on('keypress', {"obj": this, "upperCapsId": "J_eRePaypassUpperCase","otherTipIds":["J_eRePaypassTipInfo"]},this.formHandler.checkCapslockOpen);
        //失去焦点时，验证输入框内容
        $('#J_eRePaypass').on('blur', {"obj": this, "callback": this.checkRePaypassBlur},this.formHandler.exeEventHandler);
        
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_eRePaypassSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
    },
    checkPaypassFocus: function(){
        this.formHandler.switchInputStyle('normal','J_ePaypass', 'J_ePaypassTipImg','J_ePaypassTipInfo');
        $('#J_ePaypass').addClass('active');
        $('#J_ePaypassTipInfo').html(this.formHandler.lang_zh['5601']);
//        $('#J_ePaypassUpperCase').hide();
        $('#J_ePaypassStrongWrap').hide(); //密码强度提醒
    },
    checkPaypassBlur: function(){
    	this.passwordIsOk = false;
        $('#J_ePaypass').removeClass('active');
        this.formHandler.switchInputStyle('normal','J_ePaypass', 'J_ePaypassTipImg','J_ePaypassTipInfo');
        $('#J_ePaypassStrongWrap').hide();
        $("#J_ePaypassUpperCase").hide();
        $("#J_ePaypassTipInfo").show();
        
        var passwordVal = $('#J_ePaypass').val();
        var passwordLen = passwordVal.length;
        if (passwordLen == 0) {
            return false;
        }
        if (passwordLen < 6 || passwordLen > 20) {
            this.formHandler.switchInputStyle('error','J_ePaypass', 'J_ePaypassTipImg','J_ePaypassTipInfo');
            $('#J_ePaypassTipInfo').html(this.formHandler.lang_zh['5602']);
            return false;
        }
        if (!this.formHandler.passwordReg.test(passwordVal)) {
            this.formHandler.switchInputStyle('error','J_ePaypass', 'J_ePaypassTipImg','J_ePaypassTipInfo');
            $('#J_ePaypassTipInfo').html(this.formHandler.lang_zh['5604']);       
            return false;
        }
        
        for(var i=0;i<passwordLen;i++){
            if(passwordVal.charCodeAt(i)>127){
                this.formHandler.switchInputStyle('error','J_ePaypass', 'J_ePaypassTipImg','J_ePaypassTipInfo');
                $('#J_ePaypassTipInfo').html(this.formHandler.lang_zh['5605']);
                return false; 
            }
        }
        //处在大写状态下，离开输入框时，需要验证密码
        if(!this.formHandler.checkPassStrong(this.checkPassStrongData)){
            return false;
        }
        this.passwordIsOk = true;//密码格式和强度时合格的
        //当确认密码不为空时，密码修改后再一次验证确认密码和密码是否相等
        this.checkRePaypassBlur();
    },
    checkRePaypassFocus: function(){
        this.formHandler.switchInputStyle('normal','J_eRePaypass', 'J_eRePaypassTipImg','J_eRePaypassTipInfo');
        $('#J_eRePaypass').addClass('active');
        $('#J_eRePaypassTipInfo').html(this.formHandler.lang_zh['5607']);
//        $('#J_ePaypassUpperCase').hide();
    },
    checkRePaypassBlur: function(){
    	 this.rePasswordIsOk = false;
        $('#J_eRePaypass').removeClass('active');
        this.formHandler.switchInputStyle('normal','J_eRePaypass', 'J_eRePaypassTipImg','J_eRePaypassTipInfo');
        $("#J_eRePaypassUpperCase").hide();
        
        var passsword = $('#J_ePaypass').val();
        var rep_password = $('#J_eRePaypass').val();
        if (rep_password == '') {
            return false;
        }
        if (rep_password != passsword) {
            this.formHandler.switchInputStyle('error','J_eRePaypass', 'J_eRePaypassTipImg','J_eRePaypassTipInfo');          
            $('#J_eRePaypassTipInfo').html(this.formHandler.lang_zh['5608']);
            return false;
        }
        this.formHandler.switchInputStyle('ok','J_eRePaypass', 'J_eRePaypassTipImg','J_eRePaypassTipInfo');
        this.rePasswordIsOk = true;//确认密码和密码一致
        return true;
    },
    checkIsOk: function(){
        var passsword = $('#J_ePaypass').val();
        var rep_password = $('#J_eRePaypass').val();
        if (passsword == '') {
            this.formHandler.switchInputStyle('error','J_ePaypass', 'J_ePaypassTipImg','J_ePaypassTipInfo'); 
            if(this.passwordMethod==='paypass'){
            	$('#J_ePaypassTipInfo').html(this.formHandler.lang_zh['5606']);//支付密码
            }else{
            	$('#J_ePaypassTipInfo').html(this.formHandler.lang_zh['5610']);//登录密码
            }
            
        }
        if (rep_password == '') {
            this.formHandler.switchInputStyle('error','J_eRePaypass', 'J_eRePaypassTipImg','J_eRePaypassTipInfo'); 
            $('#J_eRePaypassTipInfo').html(this.formHandler.lang_zh['5609']);
            return false;
        }
        //执行修改密码
        if(this.passwordIsOk && this.rePasswordIsOk && typeof this.callback == 'function'){
            this.callback();
        }
    }
};

//填写账号面板交互
var EidtUserName = Class.create();
EidtUserName.prototype = {
    initialize: function(callback){
    	this.callback = callback;
        this.formHandler = new FormHandler();        
        this.showVcodeOption = {
            "obj": this,
            "imgId": "J_imgVcode", 
            "inputId": "J_eUserNameCode",//输入框id
            "tipImg": "J_eUserNameCodeTipImg",//输入框提示小图标
            "tipInfo":  "J_eUserNameCodeTipInfo"//输入框提示域
        };
        this.formHandler.showVcode(this.showVcodeOption, true);
        this.initVerify();
    },
    initVerify: function(){
        //设置鼠标焦点在输入框内时提示信息
        $('#J_eUserName').on('focus', {"obj": this, "callback": this.checkUserNameFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_eUserName').on('blur', {"obj": this, "callback": this.checkUserNameBlur},this.formHandler.exeEventHandler);
        //设置鼠标焦点在输入框内时提示信息
        $('#J_eUserNameCode').on('focus', {"obj": this, "callback": this.checkUserNameCodeFocus},this.formHandler.exeEventHandler);
        //设置鼠标失去焦点时清空提示信息
        $('#J_eUserNameCode').on('blur', {"obj": this, "callback": this.checkUserNameCodeBlur},this.formHandler.exeEventHandler);
        
        //获取短信验证码
        $('#J_vcodeImgBtn').on('click', this.showVcodeOption, this.formHandler.eventShowVcode);
        $('#J_imgVcode').on('click', this.showVcodeOption, this.formHandler.eventShowVcode);
        //提交邮箱验证前进行邮箱验证码验证
        $('#J_eUserNameSubmit').on('click', {"obj": this, "callback": this.checkIsOk},this.formHandler.exeEventHandler);
    },
    checkUserNameFocus: function(){
        this.formHandler.switchInputStyle('normal','J_eUserName', 'J_eUserNameTipImg','J_eUserNameTipInfo');
        $('#J_eUserName').addClass('active');
        $('#J_eUserNameTipInfo').html(this.formHandler.lang_zh['5701']);
    },
    checkUserNameBlur: function(){
        $('#J_eUserName').removeClass('active');
        $('#J_eUserNameTipInfo').html('');
    },
    checkUserNameCodeFocus: function(){
        this.formHandler.switchInputStyle('normal','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
        $('#J_eUserNameCode').addClass('active');
        $('#J_eUserNameCodeTipInfo').html(this.formHandler.lang_zh['5704']);
    },
    checkUserNameCodeBlur: function(){
        $('#J_eUserNameCode').removeClass('active');
        $('#J_eUserNameCodeTipInfo').html('');
    },    
    checkIsOk: function(){
        var usernameCode = $.trim($('#J_eUserNameCode').val());
        var username = $.trim($('#J_eUserName').val());
        if(usernameCode == '' || username==''){
            if (usernameCode == '') {
                this.formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
                $('#J_eUserNameCodeTipInfo').html(this.formHandler.lang_zh['5704']);                
            }
            if(username==''){
                this.formHandler.switchInputStyle('error','J_eUserName', 'J_eUserNameTipImg','J_eUserNameTipInfo');
                $('#J_eUserNameTipInfo').html(this.formHandler.lang_zh['5701']);
            }
            return false;
        }
        var txtVcodeLen = usernameCode.length;
        if(this.formHandler.vcodeReg.test(usernameCode)){
            if(txtVcodeLen==4){
                if(!this.formHandler.checkVcodeOvertime(this.showVcodeOption)){
                    this.formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
                    $('#J_eUserNameCodeTipInfo').html(this.formHandler.lang_zh['5707']);
                    return false;
                }
                
                var obj = this;
                //验证图形验证码是否正确
                $.ajax({
                    type: 'POST',
                    url: 'p/check_img_vcode.php',
                    data: 'txtVcode=' + usernameCode,
                    async: false,
                    success: function (flg) {
                    	$('#J_errorCode').val(flg);
                    	if( flg==='0' ){
                    		obj.formHandler.switchInputStyle('ok','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
                    		obj.checkUserNameIsOk();
                            return true;
                    	} else if( flg==='1002' ){//验证码验证失败
                    		obj.formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
                            $('#J_eUserNameCodeTipInfo').html(obj.formHandler.lang_zh['5706']);
                            return false;
                    	} else if (flg === '1001') { //未登录
                    		window.location.href = $('#J_returnUrl').val();
                    		return false;
                        }else{ //接口或系统异常
                        	obj.formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
                            $('#J_eUserNameCodeTipInfo').html(obj.formHandler.lang_zh['5001']);
                            return false;
                        }
                    }
                });               
            }else{
                this.formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
                $('#J_eUserNameCodeTipInfo').html(this.formHandler.lang_zh['5706']);
                return false;
            }
        }else {
            this.formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
            $('#J_eUserNameCodeTipInfo').html(this.formHandler.lang_zh['5706']);
            return false;
        }    
    },
    checkUserNameIsOk: function(){
    	var obj = this;
    	var usernameCode = $.trim($('#J_eUserNameCode').val());
        var username = $.trim($('#J_eUserName').val());     
        $.ajax({
            type: 'POST',
            url: 'p/check_username_exist.php',
            data: 'txtVcode=' + usernameCode + '&txtUser=' + username,
            async: false,
            dataType: 'json',
            success: function (flg) {
            	$('#J_errorCode').val(flg);
            	if (flg === true) {//账号存在
            		obj.formHandler.switchInputStyle('ok','J_eUserName', 'J_eUserNameTipImg','J_eUserNameTipInfo');
            		if(typeof obj.callback == 'function'){
            			obj.callback();
            		}
	               	return true;
               } else if(flg === false){//账号不存在存在
            	   obj.formHandler.switchInputStyle('error','J_eUserName', 'J_eUserNameTipImg','J_eUserNameTipInfo');
           			$('#J_eUserNameTipInfo').html(obj.formHandler.lang_zh['5703']);
           			return false;
               } else if(flg === '2001' || flg === '3001'){//接口异常
                	obj.formHandler.switchInputStyle('error','J_eUserName', 'J_eUserNameTipImg','J_eUserNameTipInfo');
                    $('#J_eUserNameTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                } else{//其他错误
                	obj.formHandler.switchInputStyle('error','J_eUserName', 'J_eUserNameTipImg','J_eUserNameTipInfo');
                    $('#J_eUserNameTipInfo').html(obj.formHandler.lang_zh['5001']);
                    return false;
                }                
            }
        });
    }
};
//身份验证 安全绑定公共方法
var FormHandler = Class.create();
FormHandler.prototype = {
    initialize: function(){
        this.emailNameReg = /^(([a-zA-Z0-9]+\w*((\.\w+)|(-\w+))*[\.-]?[a-zA-Z0-9]+)|([a-zA-Z0-9]))$/; //匹配邮箱名称
        this.emailReg = /^(([a-zA-Z0-9]+\w*((\.\w+)|(-\w+))*[\.-]?[a-zA-Z0-9]+)|([a-zA-Z0-9]))\@[a-zA-Z0-9]+((\.|-)[a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/; //匹配邮箱
        this.mobileReg = /^1[3,4,5,7,8][0-9]{9}$/;//匹配电话号码
        this.vcodeReg = /^[a-zA-Z0-9]*$/;//匹配图形验证码
        this.passwordReg = /^\S{1,20}$/;//匹配密码 匹配所有非空白
        
        this.miao = 0;//本次倒计时剩余时长        
        this.timeoutRun = 0; //倒计时计数器
        this.getCodeBtn = '';//获取验证码按钮id
        this.unGetCodeBtn = '';//显示倒计时按钮id
        this.tipId = '';//显示获取验证码错误信息id
        
        this.vcodeGenerateTiem = 0;//图像验证码生成时间
        this.vcodeOvertimeInterval = 10 * 60 * 1000;//图形验证码有效期为10分钟
        this.lang_zh = {
            '5000': '验证码已发送，请注意查收',
            '5001': '网络繁忙，请稍后再试',
            '5002': '正在获取...',
            '5003': '获取验证码',
            '5004': '身份验证失败',
            '5005': '重新获取验证码',
            //手机验证  
            '5101': '请输入短信验证码',
            '5102': '验证码错误，请输入正确的验证码',
            '5103': '验证码已发送，请注意查收！',
            '5104': '120秒内仅能获取一次短信验证码，请稍后重试',
            '5105': '验证码获取频繁，请24小时后重新获取',//
            '5106': '获取验证码',
            '5107': '重新获取验证码',
            '5108': '还是没有收到验证码？请于24小时后重试，或更换验证方式',//身份验证的邮箱在同一类操作中获取验证码大于5次
            '5109': '同一IP验证码获取频繁，请稍后重试',
            '5110': '与绑定手机号不一致',
            '5111': '请输入绑定手机号',
            //邮箱验证
            '5201': '请输入邮箱验证码',
            '5202': '验证码错误，请输入正确的验证码',
            '5203': '验证码已发送，请注意查收',
            '5204': '120秒内仅能获取一次邮箱验证码，请稍后重试',
            '5205': '验证码获取频繁，请24小时后重新获取',//身份验证的手机号在同一类操作中获取验证码大于5次
            '5206': '获取验证码',
            '5207': '重新获取验证码',
            '5208' : '还是没有收到验证码？请于24小时后重试，或更换验证方式',            
            //支付密码验证 
            '5301': '请输入支付密码',
            '5302': '支付密码错误，请重新输入，你还有{#getNumber#}次机会',
            '5303': '支付密码输入错误次数达到上限5次，请于24小时后再试',//支付密码验证在同一类操作中错误次数大于5次
            //设置手机号            
            '5401': '请输入手机号',
            '5402': '请输入正确格式的手机号',
            '5403': '该手机号已被验证，重新换一个', 
            //设置入邮箱
            '5501': '请输入邮箱',
            '5502': '请输入正确格式的邮箱',
            '5503': '该邮箱已被验证，重新换一个',      
            //设置支付密码  登录密码
            '5601': '密码为6-20个字符，可由英文、数字及符号组成',
            '5602': '密码长度6-20个字符，请重新输入',      
            '5603': '不能与登录密码、昵称、邮箱用户名、手机号相同，请重新输入',      
            '5604': '密码不能包含“空格”，请重新输入',            
            '5605': '密码为6-20位字符,只能由英文、数字及符号组成',
            '5606': '请输入支付密码',
            '5607': '请再次输入密码',
            '5608': '两次输入的密码不一致，请重新输入',
            '5609': '确认密码为空',
            '5610': '请输入密码',
            '5611': '登录密码不能与该账号内的其它密码相同，请重新输入',
            //找回密码时，验证填写的用户名
            '5701': '请输入您在登录时使用的邮箱/手机号/昵称',
            '5702': '请输入您在登录时使用的邮箱/手机号/昵称',
            '5703': '您输入的账户名不存在，请核对后重新输入',            
            '5704': '请填写图片中的字符，不区分大小写',
            '5705': '请输入图形验证码',
            '5706': '图形验证码输入错误，请重新输入',
            '5707': '图形验证码已失效，请重新输入',
            '60000': ''
        };
    },
    //将单元格恢复到最初样式
    switchInputStyle: function(showType, inputId, tipImgId, tipInfoId){
        if(showType == 'normal') {
            $('#' + inputId).removeClass('w_red');
            $('#' + tipImgId).hide();
            $('#' + tipInfoId).removeClass('wrong').html('').show();
        }else if(showType == 'ok') {
            $('#' + inputId).removeClass('w_red');
            $('#' + tipImgId).removeClass('wrong').css({'display':'inline-block'});
            $('#' + tipInfoId).removeClass('wrong').html('').show();
        } else if(showType == 'error') {
            $('#' + inputId).addClass('w_red');
            $('#' + tipImgId).addClass('wrong').css({'display':'inline-block'});
            $('#' + tipInfoId).addClass('wrong').show();
        }
    },
    //执行事件处理
    exeEventHandler: function(e){
        //var e = window.event || e;
        e.data.callback.apply(e.data.obj, arguments);
    },
    //重新获取验证码前的倒计时
    changejishi: function(){
        this.miao--;
        var fen, smiao;
        fen = parseInt( this.miao/60 );
        smiao = this.miao - ( fen * 60 );
        var fenstr = '';
        if(fen > 0){
            fenstr = fen + '分';
        }
        if(this.miao > 0){
            $('#' + this.unGetCodeBtn).show().html( fenstr + smiao + '秒后重新获取' );
            $('#' + this.getCodeBtn).hide();
            clearTimeout(this.timeoutRun);
            var obj = this;
            this.timeoutRun = setTimeout(function(){
                obj.changejishi();
            }, 1000);
            
        }else{
            $('#' + this.getCodeBtn).show();
            $('#' + this.unGetCodeBtn).hide();
            $('#' + this.tipId).html('');
        }
    },
    checkCapslockOpen: function(e){
       // var e.data.callback.apply(e.data.obj, arguments);
       // var  e= window.event || e;
        var upperCapsId = e.data.upperCapsId;
        var otherTipIds = e.data.otherTipIds;
        var n = e.keyCode || e.which;
        var m = e.shiftKey||(n==16)||false;
        if (((n >= 65 && n <= 90) && !m) || ((n >= 97 && n <= 122 )&& m)) {
            var len = 0;
            if(otherTipIds && otherTipIds!='' && (len =otherTipIds.length)>0){
                for(var i=0;i<len;i++){
                    $('#' + otherTipIds[i]).hide();
                }
            }            
            $("#" + upperCapsId).show();
        } else if(n >= 97 && n <= 122 && !m){
            $("#" + upperCapsId).hide();
        } else if(n==27){
            $("#" + upperCapsId).hide();
        } else{
            $("#" + upperCapsId).hide();
        }
    },
    eventCheckPassStrong: function(e){
        var that = e.data.obj;
        var option ={
                    "obj": e.data.obj, //当前操作对象
                    "inputId": e.data.inputId,//输入框id
                    "tipImg": e.data.tipImg,//输入框提示小图标
                    "tipInfo":  e.data.tipInfo,//提示文本域
                    "itemWrapId": e.data.itemWrapId,//显示密码强度父元素id
                    "itemIdPrefix": e.data.itemIdPrefix,//3种密码强度的id前缀
                    "itemClass": e.data.itemClass,//密码强度 操作class
                    "upperCapsId": e.data.upperCapsId, //大写提示区域id
                    "otherTipIds": e.data.otherTipIds//显示密码强度时，需要隐藏的元素
                   };
       that.formHandler.checkPassStrong(option);         
    },
    checkPassStrong: function(option){//密码强度提示
        /***
         * setting: {
                    "obj": this, //当前操作对象
                    "inputId":"J_ePaypass",//输入框id
                    "tipImg":"J_ePaypassTipImg",//输入框提示小图标
                    "tipInfo": "J_ePaypassTipInfo",//提示文本域
                    "itemWrapId":"J_ePaypassStrongWrap",//显示密码强度父元素id
                    "itemIdPrefix":"J_ePaypassStrong",//3种密码强度的id前缀
                    "itemClass": "j_pwdStrong",//密码强度 操作class
                    "upperCapsId": "J_ePaypassUpperCase", //大写提示区域id
                    "otherTipIds":["J_ePaypassTipInfo", "J_ePaypassStrongWrap"]//显示密码强度时，需要隐藏的元素
                   };
         * */
        var that = option.obj;
        var inputId = option.inputId;
        var tipImg = option.tipImg;
        var tipInfo = option.tipInfo;
        
        var upperCapsId = option.upperCapsId;
        var otherTipIds = option.otherTipIds;        
        var passStrongWrapId = option.itemWrapId;
        var passStrongId = option.itemIdPrefix;
        var passStrongClass = option.itemClass;
        if($('#' + upperCapsId).is(':hidden')){
            that.formHandler.switchInputStyle('normal',inputId, tipImg,tipInfo);
            var len = 0;
            if(otherTipIds && otherTipIds!='' && (len =otherTipIds.length)>0){
                for(var i=0;i<len;i++){
                    $('#' + otherTipIds[i]).hide();
                }
            }            
            var password = $('#' + inputId).val();
            var passLen = password.length;
            if (passLen == 0) {
                $('#' + tipInfo).html(that.formHandler.lang_zh['5601']).show();                
                return false;
            }
            
            if (passLen < 6) {
                $('#' + passStrongWrapId).show();
                $('.' + passStrongClass).hide();
                $('#' + passStrongId + '1').show(); 
                return false;
            }
            
            if (passLen > 20){
                that.formHandler.switchInputStyle('error',inputId, tipImg,tipInfo);
                $('#'+ tipInfo).html(that.formHandler.lang_zh['5602']).show();
                return false;
            }
            var chenum = checkStrong(password);
            if (chenum == 0) {
                return false;
            } else if (chenum == 1) {
                $('.' + passStrongClass).hide();
                $('#' + passStrongId + '1').show(); 
            } else if (chenum == 2) {
                $('.' + passStrongClass).hide();
                $('#' + passStrongId + '2').show(); ;
            } else if (chenum >= 3) {                   
                $('.' + passStrongClass).hide();
                $('#' + passStrongId + '3').show(); 
            }
            $('#' + passStrongWrapId).show();
            that.formHandler.switchInputStyle('ok',inputId, tipImg,tipInfo);
            return true;
        }
    }, 
    eventShowVcode: function(e){
        var that = e.data.obj;
        var option ={
                    "obj": e.data.obj, //当前操作对象
                    "imgId": e.data.imgId, 
                    "inputId": e.data.inputId,//输入框id
                    "tipImg": e.data.tipImg,//输入框提示小图标
                    "tipInfo":  e.data.tipInfo
                   };
       that.formHandler.showVcode(option);         
    },   
    showVcode: function(option, unchangeImg) {//获取图形验证码
    /**
        var data = e.data;
        var option ={
            "imgId": data.imgId, 
            "inputId": data.inputId,//输入框id
            "tipImg": data.tipImg,//输入框提示小图标
            "tipInfo":  data.tipInfo
        };
        * */
        this.vcodeGenerateTiem = new Date().getTime();
        if(unchangeImg!==true){
        	$('#' + option.imgId).attr('src', 'http://vcode.dangdang.com/show_vcode.php?t=' + new Date().getTime());
        }        
        $('#' + option.inputId).val('');
        this.switchInputStyle('normal',option.inputId, option.tipImg, option.tipInfo);
    },
    checkVcodeOvertime: function(option){
        var nowTime = new Date().getTime();
        if( (nowTime - this.vcodeGenerateTiem)> this.vcodeOvertimeInterval ){
            this.showVcode(option);
            return false;
        }else{
            return true;
        }
    }
};
function checkStrong (sPW){
    if (sPW.length < 1){
        return 0;
    }
    var Modes = 0;
    for (var i = 0; i < sPW.length; i++) {
        Modes |= Evaluate(sPW.charCodeAt(i));
    }
    var num = bitTotal(Modes);
    return num;
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
    for (var i = 0; i < 4; i++) {
        if (num & 1) modes++;
        num >>>= 1;
    }
    return modes;
}
//将后台的json字符串转为身份验证列表参数信息
function strToVerifyList(str){
	var jsonStr = JSON.parse(str);
	var obj = {
			phoneValue: '',
			emailValue: '',
			verifyModeArr: []
	};
	//获取身份验证的 类型和值
	for(var item in jsonStr){
		obj.verifyModeArr.push(item);
		if(item === 'email'){
			obj.emailValue = jsonStr[item];
		}
		
		if(item === 'phone'){
			obj.phoneValue = jsonStr[item];
		}		
	}
	return obj;
}