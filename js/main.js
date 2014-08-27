// RADIO BUTTONS //
$(document).ready(function() {
	//Set default items to checked
	$("input[type=radio]:checked").closest('.radio_label').children('label').addClass('active');
	
	$("input[type=radio]").change(function () {
		var GroupName = $(this).attr('name');
		$('.radio_input input[name="' + GroupName + '"]').closest('.radio_label').children('label').removeClass('active');
		$('input[type=radio][name="' + GroupName + '"]:checked').closest('.radio_label').children('label').addClass('active');
	});
});


function checkAppliedRadioBtn() {			
	var chboxName = $('input[type="radio"]').attr('name');
	var chboxChoice = $('input[name="' + chboxName + '"]');
										
	// Check if Radio Button is checked when page loads and add class
	chboxChoice.each(function () {
		if ($(this).prop('checked')) {
			$(this).closest('.radio_label').children('label').addClass('active');
		} else {
			$(this).closest('.radio_label').children('label').removeClass('active');
		}
	});
	
	// Toggle Class to Radio Button label checked
	$(chboxChoice).change(function (e) {
		if ($(this).prop('checked')) {
			$(chboxChoice).closest('.radio_label').children('label').removeClass('active');
			$(this).closest('.radio_label').children('label').addClass('active');
		} else {
		}

		e.stopPropagation();
	});
};



// Script for adding disabled state to Radio Button label when clicked
function checkDisabledRadioBtn() {			
	var chboxChoice = $('input[type="radio"]');
									
	// Check if checkbox is checked when page loads and add class
	chboxChoice.each(function () {
		if ($(this).prop('disabled')) {
			$(this).prop('disabled', true);
			$(this).closest('.radio_label').children('label').addClass('disabled');
		} else {
			$(this).prop('disabled', false);
			$(this).closest('.radio_label').children('label').removeClass('disabled');
		}
	});
};



// CHECKBOXES //
// Script for adding class to checkbox label when clicked
function checkAppliedChbox() {			
	var chboxChoice = $('input[type="checkbox"]');
									
	// Check if checkbox is checked when page loads and add class
	chboxChoice.each(function () {
		if ($(this).prop('checked')) {
			$(this).closest('.chbox_label').children('label').addClass('active');
		} else {
			$(this).closest('.chbox_label').children('label').removeClass('active');
		}
	});
	
	// Toggle Class to checkbox label checked
	$(chboxChoice).change(function () {
		if ($(this).prop('checked')) {
			$(this).closest('.chbox_label').children('label').addClass('active');
		} else {
			$(this).closest('.chbox_label').children('label').removeClass('active');
		}
	});
};



// Script for adding disabled state to checkbox label when clicked
function checkDisabledChbox() {			
	var chboxChoice = $('input[type="checkbox"]');
									
	// Check if checkbox is checked when page loads and add class
	chboxChoice.each(function () {
		if ($(this).prop('disabled')) {
			$(this).prop('disabled', true);
			$(this).closest('.chbox_label').children('label').addClass('disabled');
		} else {
			$(this).prop('disabled', false);
			$(this).closest('.chbox_label').children('label').removeClass('disabled');
		}
	});
};


// SELECT BOXES //
$(function(){
	$('select.custom').customSelect();
});

// CUSTOM DROPDOWN CONTAINERS
function dropdownContainers() {
	// If you click anywhere on the screen it closes any open options panels
	$(document).on('click touchstart', function () {
		$(".dd_panel").hide("slide", { direction: "up" }, 400);
		$('.dd_link').removeClass('drop_active');
	});
	
	// Stop the event for closing option panels when you click on the panel or a hyperlink to open a panel
	$(".dd_panel, .dd_link").on('click touchstart', function (e) {
		e.stopPropagation();
	});
	
	// Show and Hide the Options Panels
	$('.dd_link').click(function() {
		var selected_panel = ('#') + $(this).attr('id') + ('_options');
		
		if($(selected_panel).css('display') == 'none'){
			// Remove Existing Active Styling and Apply to current Item
			$('.dd_link').removeClass('drop_active');
			$(this).addClass('drop_active');
			// Hide exisiting open dropdowns and show selected one
			$('.dd_panel').hide("slide", { direction: "up" }, 400);
			$(selected_panel).show("slide", { direction: "up" }, 400);
			// Set Focus to the close button within the options panel
			$(selected_panel).children('.dd_close_panel').children('a').focus();
		} else {
			$(selected_panel).hide("slide", { direction: "up" }, 400);
			$('.dd_link').removeClass('drop_active');
		}
	});
	
	// Close the options panel when you click the link
	$(".dd_close_panel a").click(function() {
		// Apply focus to the link associated with the panel
		$(this).parent().parent().parent().children('a').focus();
		$(this).parent().parent().parent().children('a').removeClass('drop_active');
		// Hide the panel when you click close
		$(".dd_panel").hide();
	});
};

var megaDrop = $('.mega_drop');
var dropHeight = $(megaDrop).height() + 50;


function heightSet() {
	var windowHeight = $(window).height();
	if(dropHeight < windowHeight) {
		$('.mega_drop .shops_nav').show();
		$(megaDrop).css('height', 'auto');
	} else {
		$('.mega_drop .shops_nav').hide();
		$(megaDrop).css('height', '420px');
	}
	console.log(dropHeight, windowHeight)
}


	

// MEGA DROPDOWN
function megaDropDown() {
	//$('.mega_drop_overlay').hide();
	$('.mega_drop').hide();
	
	$('.categories').click(function(){
		heightSet();
		if ($('.mega_drop').is(':visible')) {
			$('.mega_drop').slideUp();
			$(this).removeClass('active');
		} else {
			$('.mega_drop').slideDown();
			$(this).addClass('active');
		}

		
	});

	$('.close_modal').click(function(){
		$('.mega_drop').slideUp();
		$('.categories').removeClass('active');
	});
}


// MINI TOP SEARCH
function showSearchMini() {
	// show or hide nav search when user scrolls past hero section
	$('.nav_search').hide();
	$(window).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 220) {
			$('.nav_search').show("slide", { direction: "left" }, 300);
		} else {
			$('.nav_search').hide("slide", { direction: "left" }, 300);
		}
	});	
}



// ESCAPE KEY FUNCTIONS
function escapeKeyFunc() {
	// What happens when you push the escape key
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			//hide any visible drop_panels
			$(".dd_panel").hide("slide", { direction: "up" }, 400);
			$('.dd_link').removeClass('drop_active');
			//hide the mega drop menu 
			$('.mega_drop').slideUp();
			$('.categories').removeClass('active');	
		}  
	});
}


// SHOP FILTER FUNCTION

var shopFilter = function() {
	var top = $('.top_bar .page_container_inner');
	var shopFilterToggle = $('.shop_filter_toggle');
	var filterTitle = $('.top_bar .filter_title');
	var filterList = $('.top_bar .filter_list');

	$(top).addClass('filter_closed');

	$(filterList).click(function(){
		showList();	
	});
	$(shopFilterToggle).click(function(){
		showList();	
	})
	$(filterTitle).click(function(){
		showList();	
	})

	var showList = function () {
		if ($(top).height() != 34) {
			$(top).switchClass( "filter_open", "filter_closed", 500, "easeInOutQuad" );
			$(shopFilterToggle).removeClass('shop_filter_open');	
		} else {
			$(top).switchClass( "filter_closed", "filter_open", 500, "easeInOutQuad" );
			$(shopFilterToggle).addClass('shop_filter_open');
		}
	}

	$('.no_bubble').click(function(e){
		e.stopPropagation();
	})
}


// PRODUCT HOVER

var productHover = function() {
	var product = $('.product_comp');

	$(product).hover(function(){
		$(this).children().children('.add_to_basket').addClass('hover');
		$(this).children().children('.wishlist_icon').addClass('hover');
	}, function () {
		$(this).children().children('.add_to_basket').removeClass('hover');
		$(this).children().children('.wishlist_icon').removeClass('hover');
	});
};