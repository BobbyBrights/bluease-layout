$(document).ready(function() {

	$("#nav-icon, .customized-nav").on("click", function(event) {
		$(this).toggleClass("open");
		$(".customized-nav").fadeToggle();
	});

});