
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
	$(chboxChoice).change(function () {
		if ($(this).prop('checked')) {
			$(chboxChoice).closest('.radio_label').children('label').removeClass('active');
			$(this).closest('.radio_label').children('label').addClass('active');
		} else {
		}
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

// Inititate the Custom Select Box
$(function(){
	$('select.custom').customSelect();
});
