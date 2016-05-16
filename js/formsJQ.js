$(document).ready(function(){
    $("#btnLogin").click(function(){
		$("#login").fadeToggle();
		$("#register").fadeOut();
	});
	
	$("#btnRegister").click(function(){
		$("#register").fadeToggle();
		$("#login").fadeOut();
	});
	
	$("#closeFormLogin").click(function(){
		$("#login").fadeOut();
	});
	$("#closeFormRegister").click(function(){
		$("#register").fadeOut();
	});
});