$(document).ready(function() {

	$(".fa-bars").click(function() {
	    $( "#menu-nav" ).slideToggle();	    
	    $( this ).toggleClass("fa-times");
	});


	function isTouchDevice() {
	    return 'ontouchstart' in document.documentElement;
	}

	if (isTouchDevice()) {
	   	$("#menu-nav > li > a").on("click",function(){
			$(this).next("ul").slideToggle();	
	   	});

   	   	$("#menu-nav li ul li").on("click",function(){
   			$(this).children("ul").slideToggle();	
   	   	});
	}
	else {
	    
	   	$("#menu-nav > li > a").on("click",function(){
			$(this).next("ul").slideToggle('fast');	
	   	});

   	   	$("#menu-nav li ul li").on("click",function(){
   			$(this).children("ul").slideToggle('fast');	
   	   	});

	    $("#menu-nav li").on("mouseleave",function(){
	    	$(this).children("ul").slideUp('fast');	
	    });
	
	}



	//SLIDER

	$('.owl-home').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: true,
	    items: 1,
	    navText: false,
	    autoplay: 10000
	});

	$('.owl-prev').addClass('fa fa-angle-left');
	$('.owl-next').addClass('fa fa-angle-right');

});