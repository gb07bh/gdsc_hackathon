jQuery(function ($) {
    'use strict';
	
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 30){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});
	
	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Language Switcher
	$(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })


	// TweenMax JS
	$('.main-slides-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.main-slides-image').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});

	// ScrollMagic JS
	var controller = new ScrollMagic.Controller();
	$(".main-slides-content h1, .about-content h3, .services-section-content h3, .section-title h2, .testimonials-section-content h3, .main-hero-content h1, .skill-content h3, .main-banner-content h1, .about-wrap-content h3, .talk-content h3, .projects-section-content h3, .projects-info-content h3").each(function() {
		var tl = new TimelineMax();
		if(tl.isActive()){
			return false;
		}
		var cov = $(this).find(".overlay");
		tl.from(cov, .5, { scaleX: 0, transformOrigin: "left" });
		tl.to(cov, .5, { scaleX: 0, transformOrigin: "right" }, "reveal");
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.7
		})
		.setTween(tl)
		.addTo(controller);
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: false,
		nav: false,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 1500,
		autoplayTimeout: 1500,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		items: 1,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
	});

	// Hero Slides
	$('.hero-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		smartSpeed: 2000,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		autoplay: true,
		autoHeight:true,
		items: 1,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,

		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 3
			},
			1024: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
	});

	
	
	
	

	
	// Nice Select JS
	$('select').niceSelect();

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// AOS JS
	AOS.init();

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	// Go to Top
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
	
	// Preloader JS
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});

}(jQuery));

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('nirman', themeName);
		document.documentElement.className = themeName;
	}

	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('nirman') === 'theme-dark') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-dark');
		}
	}

	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('nirman') === 'theme-dark') {
			setTheme('theme-dark');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('theme-dark');
		document.getElementById('slider').checked = true;
		}
	})();
} catch (err) {}

$(".register").mouseenter(function(){
	if ($(this).parent('div').children('div.image').length) {
		$(this).parent('div').children('div.image').show();
	} else {
		var image_name=$(this).data('image');
		var imageTag='<div class="image" style="position:absolute; top: -16.5rem;left: -14rem; transform:scale(0.2)">'+'<img src="'+image_name+'" alt="image" height="100" />'+'</div>';
		$(this).parent('div').append(imageTag);
	}
});

$(".register").mouseleave(function(){
	$(this).parent('div').children('div.image').hide();
});


