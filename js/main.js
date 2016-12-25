$(window).resize(function() {
	initBgGallery();
	positionPopup();
	//initIntro();
	initIntropaga();
});
$(document).ready(function() {
	initPage();
	//initLinktop();
});
function initPage(){
	initBgGallery();
	initAnhor();
	initPopup();
	//initIntro();
	initIntropaga();
}
function initIntropaga(){
	if ($(".intro-section").height() >= $(window).height()) {
			$('.intro-section').addClass('fixed');
	}
	else{
		$('.intro-section').removeClass('fixed');
	}
}
function initLinktop(){
	$(document).scroll(function(){
		checkPosition();
	});
	checkPosition();
	$(window).resize(function(){
		checkPosition();
	});
}
function checkPosition(){
	var div_position = $('.example_div').offset();
	var div_top = div_position.top;
	var div_left = div_position.left;
	var div_width = $('.example_div').width();
	var div_height = $('.example_div').height();
	var top_scroll = $(document).scrollTop();
	var left_scroll = $(document).scrollLeft();
	var screen_width = $(window).width();
	var screen_height = $(window).height();
	var see_x1 = left_scroll;
	var see_x2 = screen_width + left_scroll;
	var see_y1 = top_scroll;
	var see_y2 = screen_height + top_scroll;
	var div_x1 = div_left;
	var div_x2 = div_left + div_height;
	var div_y1 = div_top;
	var div_y2 = div_top + div_width;
	if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
		$('.example_div').addClass('active');
	}else{
		$('.example_div').removeClass('active');
	}
}


function initIntro(){
	if ($(window).width() >= $(window).height()) {
		$('body').addClass('intro-w');
	}
	else{
		$('body').removeClass('intro-w');
	}
}
// Swiper Background Gallery
function initBgGallery(){
	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		autoplay: 3000,
		effect: 'fade'
	});
}
function initAnhor(){
	$("#header").on("click","a.link-bottom", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(".intro-section").on("click","a.btn-next-section", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$("#footer").on("click","a.link-top", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
}
/* Popup initiation */
function initPopup() {
	$('a[data-popup]').click(function(e) {
		$('.popup').hide();
		e.preventDefault();
		var id = $(this).attr('data-popup');
		var maskHeight = $(document).height();
		$('.fader').css({'height':maskHeight});
		$('.fader').show();
		$('#wrapper').hide();
		$('body').addClass('active');
		positionPopup();
		if($('#' + id).height() >= $(window).height()){
			$('#' + id).css({
				top: $(window).scrollTop(),
			});
		} else {
			$('#' + id).css({
				top: $(window).scrollTop()+ $(window).height()/2,
				marginTop: -$('#' + id).height()/2
			});
		}
		$('#' + id).show();
	});
	$('.popup-close').click(function (e) {
		e.preventDefault();
		$('.fader').hide();
		$('.popup').hide();
		$('#wrapper').show();
		$('body').removeClass('active');
	});
	$('.fader').click(function () {
		$(this).hide();
		$('.popup').hide();
		$('#wrapper').show();
		$('body').removeClass('active');
	});
}
/* Popup position */
function positionPopup(){
	if($('.popup').width() < $(document).width()){
		$('.popup').css({
			'marginLeft': -($('.popup').width())/2,
			'left': '50%'
		});
	}
	else{
		$('.popup').css({
			'marginLeft': 0,
			'left': 0
		});
	}
}
