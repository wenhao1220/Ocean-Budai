$(document).ready(init);

var active = 0;
var count = 4; //放幾張照片


function init(){
	$('video')[0].addEventListener('loadeddata', function(){
		$('.controls__next').click(nextSlide);
		$('.controls__prev').click(prevSlide);
		$('.content__link').click(reEnter);	
		$('body').addClass('is-loaded');
		setTimeout(function(){
			goToSlide(1);	
		},300);
	})
}

function nextSlide(){
	var next = active + 1;
	if (next > count){
		next = 1;
	}
	goToSlide(next);
}

function prevSlide(){
	prev = active - 1;
	if (prev < 1 ){
		prev = count;
	}
	goToSlide(prev);
}

function goToSlide(number){
	$('.slide').removeClass('was-active');
	$('.slide[data-slide='+active+']').addClass('was-active');
	stopVideo($('.slide.is-active'));
	active = number;
	$('.slide').removeClass('is-active');
	startVideo($('.slide[data-slide='+number+']'));
	setTimeout(function(){
		$('.slide[data-slide='+number+']').addClass('is-active');	
	},10)
	$('.controls__indicator span').html(active);
	$('.header').attr('data-active', active);
}

function stopVideo($slide){
	withVideo($slide.find('video'),function(video){ 
		video.pause();
	})
}

function startVideo($slide){
	initVideos($slide.find('.video__one'), $slide.find('.video__two'), $slide);
}

function initVideos($primary, $secondary, $slide){
	withVideo($secondary,function(video){ 
		video.currentTime = 0;
		video.style.zIndex = 0;
		video.style.display = 'none';
	})	
	withVideo($primary,function(video){ 
		video.currentTime = 0;
		video.style.zIndex = 1;
		video.style.display = 'block';
		video.play();	
		var loop = setTimeout(function(){
			if ($slide.hasClass('is-active')){
				fadeVideos($secondary, $primary, $slide);
			} else {
				console.log('didnt loop')
			}
			clearTimeout(loop);
		}, 7000);
	})
}


function fadeVideos($primary, $secondary, $slide){
	withVideo($secondary,function(video){ 
		video.style.zIndex = 1;
		$(video).fadeOut(1000);
	})	
	withVideo($primary,function(video){ 
		video.currentTime = 0;
		video.style.zIndex = 0;
		video.style.display = 'block';
		video.play();
		var loop = setTimeout(function(){
			if ($slide.hasClass('is-active')){
				fadeVideos($secondary, $primary, $slide);
			} else {
				console.log('didnt loop')
			}
			clearTimeout(loop);
		}, 7000);
	})
}


function withVideo($selector, callback){
	$selector.each(function(index, video){
		callback(video);
	})
}

function reEnter(){
	$('body').removeClass('is-loaded');
	goToSlide(4);
	setTimeout(function(){
		goToSlide(1);
		$('body').addClass('is-loaded');
	}, 2000);
}