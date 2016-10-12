/**
 * 找回密码
 *
 * @package safe
 * @author youhongyu, youhongyu@dangdang.com
 * Created on: 2015-12-30
 * 
 */
$(function() {	
	new EidtUserName(goSubmit);
    $('#J_eUserName').placeholder({
        word: '请输入邮箱/昵称/手机号',
        color: '#999',
        evtType: 'focus',
        zIndex: 20,
        diffPaddingLeft: 3
    });
    //$('#J_eUserName').focus();
    //设置修改 绑定面板中下一步码按的可用性 type ：disable enable
	function disableNextBtn(type){//设置获取短信验证码按的可用性 type ：disable enable
    	if(type=='enable'){
    		$('#J_eUserNameSubmit').show();
            $('#J_eUserNameSubmitUnable').hide();
    	} else {
    		$('#J_eUserNameSubmit').hide();
            $('#J_eUserNameSubmitUnable').show();
    	}
    }
    //填写的账号是存在的，进入身份验证页面
	function goSubmit(){
		//防止重复提交
        disableNextBtn('disable');
		// 手机注册填完短信验证码点提交
        $("#username_form").attr("onsubmit","return true;");
        $('#J_submitForm').click();   
	}
	
	//如果是由于图像验证码超时（10）跳转过来的话，需要提示图形验证码失效
	var vcodeState = $('#J_vcodeState').val();
	if(vcodeState==='timeout'){
		var formHandler = new FormHandler();
		formHandler.switchInputStyle('error','J_eUserNameCode', 'J_eUserNameCodeTipImg','J_eUserNameCodeTipInfo');
        $('#J_eUserNameCodeTipInfo').html(formHandler.lang_zh['5707']);
        $('#J_vcodeState').val('');
	}
});

