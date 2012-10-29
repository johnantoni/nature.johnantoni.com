$(document).ready(function () {

  // accordion easing
	$.ui.accordion.animations.custom = function(options) {
		this.slide(options, {
			easing: options.down ? 'easeInOutCirc' : 'easeInOutCirc',
			duration: options.down ? 1000 : 1000
		});
	};

  // connect on-click to relevant section
	$('#content').accordion({
		header: 'h2.section',
		selectedClass: 'active',
		autoHeight: false,
		clearStyle: true,
		animated: 'custom',
		navigation: true,
		navigationFilter: function() {
			// going to this page with a parameter matching a section opens the accordion automatically
			return (this.name.toLowerCase() == $.getUrlVar('section'));
		}
	});
	
	// fix hovering over section headers in ie6
	$('h2.section').hover(
		function() {$(this).addClass('hover');}, 
		function() {$(this).removeClass('hover');}
	);

  // fancybox initialiser
  $("a.thumb").fancybox({});

});
