
imgMax = function(){
$(this).find("img").css("margin-top","0px");
$(this).find("img").css("margin-left","0px");
$(this).find("img").width(74);
$(this).find("img").height(74);
}

imgMin = function(){
$(this).find("img").css("margin-top","5px");
$(this).find("img").css("margin-left","5px");
$(this).find("img").width(64);
$(this).find("img").height(64);
}

$(".clickArea").mouseout(imgMin);
$(".clickArea").mouseover(imgMax);
$(".clickArea").mousedown(imgMin);
$(".clickArea").mouseup(imgMax);

$("#newproject").hover(function(){
	$(this).find("#freelance").animate({ marginBottom: "0px" }, "fast", "swing");
})
$("#newproject").mouseleave(function(){
	$(this).find("#freelance").animate({ marginBottom: "-90px" }, "fast", "swing");
})

$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

var tip = $("#tooltipInfo");
$(".grid ul li").hover( function(evnt){
	//load data from $(this)
	$("#tooltipInfo").show();	
});
$(".grid ul li").mousemove(function(e){
	var li = $(this);
	tip.css({top:(li.position().top+li.outerHeight(true)), 
		left:(li.offset().left+li.width()/2-tip.width()/2),
		position:"absolute"});	
	tip.css({minLeft:500});
});
$(".grid ul li").mouseleave( function(evnt){
	$("#tooltipInfo").hide();
});

$("#newProgrammers").animate({height:0}, "slow");
$("#newProgrammers").hide();
$("#addProgrammer").click(function(e){
	$("#newProgrammers").show();
	$("#newProgrammers").animate({height:200}, "slow");
	$("#programmers").animate({height:0}, "slow");
});

$("#newProgrammers").mouseleave(function(e){
	$("#newProgrammers").animate({height:0}, "slow", function(){$(this).hide();});
	$("#programmers").animate({height:200}, "slow");
});
