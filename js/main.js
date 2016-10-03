$(document).ready(function(){
    console.log("Welcome");
    $('.carousel').carousel();
    CloudZoom.quickStart();
    $('#tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
});
