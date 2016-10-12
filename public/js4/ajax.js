$(document).ready(function() {
	BalanceQuery_Ajax();
});

$("#select_out").click(function() {
	showById("selected_out");
});

$("#selected_out").hover(function() {
	showById("selected_out");
}, function() {
	hideById("selected_out");
});

$("#select_in").click(function() {
	showById("selected_in");
});

$("#selected_in").hover(function() {
	showById("selected_in");
}, function() {
	hideById("selected_in");
});

function Buy_box(id) {
	if (id == "lottory") {
		if ($("#a_lottory").hasClass("on")) {
			return;
		}
		$("#a_recharge").removeClass("on");
		$("#a_lottory").addClass("on");
		$("#iframe_buybox").attr("src", $("#lottorybox_url").val());
	} else {
		if ($("#a_recharge").hasClass("on")) {
			return;
		}
		$("#a_recharge").addClass("on");
		$("#a_lottory").removeClass("on");
		$("#iframe_buybox").attr("src", $("#rechargebox_url").val());
	}
}

function BalanceQuery_Ajax() {
	var ran = getRandom();
	$.get("balanceQuery.action", {
		random : ran
	}, function(data, textStatus) {
		BalanceQuery_CallBack(data, textStatus);
	});
}

function BalanceQuery_CallBack(data, textStatus) {
	var reg = /^\s*$/;
	if(!reg.test(data))
	{
		$("#data_filed").html(data);
	}
	// alert(data);
}

/*function Recommend_Ajax() {
	var ran = getRandom();
	var pids = $.cookie('producthistoryid');
	$.get("recommend.action", {
		random : ran,
		pids : pids
	}, function(data, textStatus) {
		Recommend_CallBack(data, textStatus);
	});
}

function Recommend_CallBack(data, textStatus) {
	var reg = /^\s*$/;
	if(!reg.test(data))
	{
		$("#reco_filed").html(data);
	}
	else
	{
		hideById('reco_filed');
	}
}*/

function RecoPager(operater) {
	var page_index = parseInt($("#reco_page_index").html());
	var page_count = parseInt($("#reco_page_count").html());
	if (operater == "pre") {
		if (page_index == 1) {
			return;
		} else {
			for ( var i = 1; i < 5; i++) {
				$("#reco_" + ((page_index - 1) * 4 + i)).hide(200);
				$("#reco_" + ((page_index - 1) * 4 + i - 4)).show(200);
			}
			var temp_page_index = page_index - 1;
			$("#reco_page_index").html(temp_page_index);
		}
	} else if (operater == "next") {
		if (page_index == page_count) {
			return;
		}
		for ( var i = 4; i > 0; i--) {
			$("#reco_" + ((page_index - 1) * 4 + i)).hide(200);
			$("#reco_" + ((page_index - 1) * 4 + i + 4)).show(200);
		}
		var temp_page_index = page_index + 1;
		$("#reco_page_index").html(temp_page_index);
	}
	if ($("#reco_page_index").html() == $("#reco_page_count").html()) {
		$("#btn_next").removeClass("next");
		$("#btn_next").addClass("next_none");
	} else {
		$("#btn_next").removeClass("next_none");
		$("#btn_next").addClass("next");
	}
	if ($("#reco_page_index").html() == "1") {
		$("#btn_prev").removeClass("prev");
		$("#btn_prev").addClass("prev_none");
	} else {
		$("#btn_prev").removeClass("prev_none");
		$("#btn_prev").addClass("prev");
	}
}

function GoToPaySercurity()
{
	window.open("http://customer.dangdang.com/change/account_security.php");
	hideById("div_paysecurity_tip");
}

function GetListByDate() {
	var start_date = $('#selected_start_date').val();
	var end_date = $('#selected_end_date').val();
	var regex = new RegExp("^(?:(?:([0-9]{4}(-|\/)(?:(?:0?[1,3-9]|1[0-2])(-|\/)(?:29|30)|((?:0?[13578]|1[02])(-|\/)31)))|([0-9]{4}(-|\/)(?:0?[1-9]|1[0-2])(-|\/)(?:0?[1-9]|1\\d|2[0-8]))|(((?:(\\d\\d(?:0[48]|[2468][048]|[13579][26]))|(?:0[48]00|[2468][048]00|[13579][26]00))(-|\/)0?2(-|\/)29))))$"); 
	if (start_date!=""&&end_date!=""&&(!regex.test(start_date)||!regex.test(end_date))) 
	{
		alert("请输入合法日期格式！(例如:2014-01-01)");
		$('#selected_start_date').attr("value","");
		$('#selected_end_date').attr("value","");
		return ;
	}
	var type=$('#div_type').html();
	var start=new Date(start_date.replace("-", "/").replace("-", "/")); 
	var end=new Date(end_date.replace("-", "/").replace("-", "/"));
	if(end<start)
	{
		alert("请输入正确的起、止日期!");
		return;
	}
	window.location.href = "balanceList.action?type="+type+"&page_num=1&start_date="
			+ start_date + "&end_date=" + end_date;
}

function GoToPage(start_date, end_date, type) {
	var page_num = $("#t__cp").val();
	var page_count=$("#div_page_count").html();
	if(parseInt(page_num)>parseInt(page_count))
	{
		alert("请输入正确的页码！");
		return;
	}
	window.location.href = "balanceList.action?type=" + type + "&page_num="
			+ page_num + "&start_date=" + start_date + "&end_date=" + end_date;
}

function EncashCancleAjax(apply_id) {
	var ran = getRandom();
	$.get("encashCancle.action", {
		random : ran,
		apply_id : apply_id
	}, function(data, textStatus) {
		EncashCancleAjax_CallBack(data, textStatus);
	});
}

function EncashCancleAjax_CallBack(data, testStatus) {
	if (data == 1) {
		alert("取消成功！");
	} else if (data == 2) {
		alert("取消失败，请重试！");
	} else if (data == 3) {
		alert("已超过可取消时限！");
	}
	window.location.reload();
}

function getRandom() {
	return Math.floor(Math.random() * (1000 + 1));
}

function hideById(id) {	
	if($("#" + id).length>0)
	{
		$("#" + id).hide();
	}
}

function showById(id) {
	if($("#" + id).length>0)
	{
		$("#" + id).show();
	}
}