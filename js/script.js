(function($) {
	
	'use strict';
	
	var Promium = {
		
		// Initialization the functions
		init: function() {
			Promium.AffixMenu();
			Promium.MobileMenu();
			Promium.ScrollSpy();
			Promium.SmoothScroll();
		},
		
		// Navigation menu affix
		AffixMenu: function() {
			var navMenu	= '<nav id="navigation_affix">';
			navMenu		+= '<div class="container">';
			navMenu		+= '<div class="navbar-brand">';
			navMenu		+= '<a href="/"><img src="images/l2g-white.png" alt="Logo" /></a>';
			navMenu		+= '</div>';
			navMenu		+= '<ul class="nav navbar-nav">';
			navMenu		+= $('#navigation .nav.navbar-nav').html();
			navMenu		+= '</ul>';
			navMenu		+= '</div>';
			navMenu		+= '</nav>';
			
			$('#header').before(navMenu);
			
			$('#navigation').waypoint(function() {
				$('#navigation_affix').removeClass('show');
			}, {
				offset: -120
			});
			
			$('#navigation').waypoint(function() {
				$('#navigation_affix').addClass('show');
			}, {
				offset: -121
			});
		},
		
		// Add mobile navigation
		MobileMenu: function() {
			var navMenu	= '<nav id="navigation_mobile">';
			navMenu		+= '<div class="nav-menu-links">';
			navMenu		+= '<ul>';
			navMenu		+= $('#navigation .nav').html();
			navMenu		+= '</ul>';
			navMenu		+= '</div>';
			navMenu		+= '<div class="nav-menu-button">';
			navMenu		+= '<button class="nav-menu-toggle"><i class="fa fa-navicon"></i></button>';
			navMenu		+= '</div>';
			navMenu		+= '</nav>';
			
			$('#header').before(navMenu);
			
			$('.nav-menu-toggle').on('click', function() {
				$(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300);
			});
		},
		
		// Navigation menu scrollspy to anchor section
		ScrollSpy: function() {
			$('body').scrollspy({
				target: '#navigation_affix',
				offset: parseInt($('#navigation_affix').height(), 0)
			});
		},
		
		// Smooth scrolling to anchor section
		SmoothScroll: function() {
			$('a.smooth-scroll').on('click', function(event) {
				var $anchor		= $(this);
				var offsetTop	= '';
				var elemHeight	= parseInt($('#navigation_affix').height() - 1, 0);
				
				if (window.Response.band(768)) {
					offsetTop = parseInt($($anchor.attr('href')).offset().top - elemHeight, 0);
				} else {
					offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
				}
				
				$('html, body').stop().animate({
					scrollTop: offsetTop
				}, 1500,'easeInOutExpo');
				
				event.preventDefault();
			});
		},
	};
	
	// Run the main function
	$(function() {
		Promium.init();
	});
	
})(window.jQuery);
