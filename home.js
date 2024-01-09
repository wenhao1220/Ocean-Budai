

/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	$(document).ready(function() {
		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')   
   });  

	
	//Switch dark/light
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	}); 	
	
	
  })(jQuery); 


/* food */
// 取得按鈕元素
const click1 = document.getElementById('click1');

// 添加點擊事件監聽器
click1.addEventListener('click', function() {
	// 跳轉到另一個畫面，這裡使用例子中的 'anotherPage.html'
	window.location.href = 'food/food.html';
});

/* travel */
const click2 = document.getElementById('click2');

// 添加點擊事件監聽器
click2.addEventListener('click', function() {
	// 跳轉到另一個畫面，這裡使用例子中的 'anotherPage.html'
	window.location.href = 'travel/travel.html';
});

/* temple */
const click3 = document.getElementById('click3');

// 添加點擊事件監聽器
click3.addEventListener('click', function() {
	// 跳轉到另一個畫面，這裡使用例子中的 'anotherPage.html'
	window.location.href = 'temple/temple.html';
});

/* temple */
const click4 = document.getElementById('click4');

// 添加點擊事件監聽器
click4.addEventListener('click', function() {
	// 跳轉到另一個畫面，這裡使用例子中的 'anotherPage.html'
	window.location.href = 'culture/culture.html';
});



/* Audio */
const audio = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");
const playIcon = document.getElementById("play-music");
const pauseIcon = document.getElementById("pause-music");

let isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
	audio.pause();
	playIcon.classList.remove("hidden");
	pauseIcon.classList.add("hidden");
  } else {
	audio.play();
	playIcon.classList.add("hidden");
	pauseIcon.classList.remove("hidden");
  }
  isPlaying = !isPlaying;
}

// Add an event listener for when the music ends
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});

playPauseButton.addEventListener("click", togglePlayPause);


/* 上標 */
// 獲取當前頁面的 URL，你可能需要根據實際情況調整
var currentPage = window.location.href;

// 獲取所有的 li 元素
var navItems = document.querySelectorAll('.nav-item');

// 迭代所有 li 元素
navItems.forEach(function (item) {
    // 檢查當前 li 對應的頁面是否與當前頁面相符
    if (item.querySelector('a').href === currentPage) {
        // 如果相符，添加 selected 類別
        item.classList.add('selected');
    }
});

/* menu */
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
    });
});