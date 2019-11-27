$(document).ready(function(){

var msg = "Hover over an image below."

$(".preview").on("mouseover focus", function(){
	$("#image").css("background-image", "url('"+$(this).attr('src')+"')")
	$("#image").html($(this).attr("alt"))
})

$(".preview").on("mouseleave onblur", function(){
	$("#image").css("background-image", "url('')")
	$("#image").html(msg)
})

})
