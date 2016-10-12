function CommonRecommend_Ajax() {

	var ran = getRandom();
	var pids = jQuery.cookie('producthistoryid');
	jQuery.get("commonRecommend.action", {
		random : ran,
		pids : pids
	}, function(data, textStatus) {
		CommonRecommend_CallBack(data, textStatus);
	});
}

function CommonRecommend_CallBack(data, textStatus) {
	jQuery("#cpc_1").html(data);
	showById("myddhome_ads");
}


jQuery("#reco_tab_hot").hover(function() {
	showById("cpc_0");
	hideById("cpc_1");
	jQuery("#reco_tab_hot").addClass("on");
	jQuery("#reco_tab_history").removeClass("on");
	}
);

jQuery("#reco_tab_history").hover(function() {
	showById("cpc_1");
	hideById("cpc_0");
	jQuery("#reco_tab_history").addClass("on");
	jQuery("#reco_tab_hot").removeClass("on");
	}
);


function RecoPager(operater) {
	var page_index = parseInt(jQuery("#current_pageindex").html());
	var page_count = parseInt(jQuery("#recommend_total_page").html());
	if (operater == "pre") {
		if (page_index == 1) {			
			return;
		} else {
			for ( var i = 1; i < 5; i++) {
				jQuery("#reco_" + ((page_index - 1) * 4 + i)).hide(200);
				jQuery("#reco_" + ((page_index - 1) * 4 + i - 4)).show(200);
			}
			var temp_page_index = page_index - 1;
			jQuery("#current_pageindex").html(temp_page_index);
		}
	} else if (operater == "next") {
		if (page_index == page_count) {
			return;
		}
		for ( var i = 4; i > 0; i--) {
			jQuery("#reco_" + ((page_index - 1) * 4 + i)).hide(200);
			jQuery("#reco_" + ((page_index - 1) * 4 + i + 4)).show(200);
		}
		var temp_page_index = page_index + 1;
		jQuery("#current_pageindex").html(temp_page_index);
	}
	if (jQuery("#current_pageindex").html() == jQuery("#recommend_total_page").html()) {
		jQuery("#btn_next").removeClass("btn_next");
		jQuery("#btn_next").addClass("next_none");
	} else {
		jQuery("#btn_next").removeClass("next_none");
		jQuery("#btn_next").addClass("btn_next");
	}
	if (jQuery("#current_pageindex").html() == "1") {
		jQuery("#btn_prev").removeClass("prev");
		jQuery("#btn_prev").addClass("prev_none");
	} else {
		jQuery("#btn_prev").removeClass("prev_none");
		jQuery("#btn_prev").addClass("prev");
	}
}



function getRandom() {
	return Math.floor(Math.random() * (1000 + 1));
}

function hideById(id) {
	if (jQuery("#" + id).length > 0) {
		jQuery("#" + id).hide();
	}
}

function showById(id) {
	if (jQuery("#" + id).length > 0) {
		jQuery("#" + id).show();
	}
}