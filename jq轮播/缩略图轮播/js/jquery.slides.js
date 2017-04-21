$(function(){
	var sWidth = $("#img-name").width();
	var len = $("#img-name .silder_panel").length;
	var index = 0;
	var picTimer;
	
	var btn = "<a class='prev'>prev</a><a class='next'>next</a>";
	$("#img-name").append(btn);

	$("#img-name .small-img li").css({"opacity":"0.6","filter":"alpha(opacity=60)"}).mouseenter(function() {
		index = $("#img-name .small-img li").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	$("#img-name .prev,#img-name .next").css({"opacity":"0.2","filter":"alpha(opacity=20)"}).hover(function(){
		$(this).stop(true,false).animate({"opacity":"0.8","filter":"alpha(opacity=80)"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2","filter":"alpha(opacity=20)"},300);
	});


	// Prev
	$("#img-name .prev").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	// Next
	$("#img-name .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	// 
	$("#img-name .large-img").css("width",sWidth * (len));
	
	// mouse 
	$("#img-name").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},2000);
	}).trigger("mouseleave");
	
	// showPics
	function showPics(index) {
		var nowLeft = -index*sWidth; 
		$("#img-name .large-img").stop(true,false).animate({"left":nowLeft},300);
		$("#img-name .small-img li").removeClass("current").eq(index).addClass("current");
		$("#img-name .small-img li").stop(true,false).animate({"opacity":"0.5"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);
		$("#img-name .silder_intro").stop(true,false).animate({"opacity":"0"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);
	}
});