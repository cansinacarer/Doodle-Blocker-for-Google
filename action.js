$( document ).ready(function() {
	$("#lga").attr("id", "newlga");
	$("#hplogo").attr("id", "newhplogo");
	$("#newhplogo").html('<img id="imgLogo">');
	$("#newhplogo").removeAttr("title");
	$("#imgLogo").attr("src", chrome.extension.getURL("google-logo.svg"));

	$("#logocont").html('<img id="imgLogoSmall">');
	$("#newhplogo").removeAttr("title");
	$("#newhplogo").removeAttr("tabindex");
	$("#imgLogoSmall").attr("src", chrome.extension.getURL("google-logo.svg"));



});