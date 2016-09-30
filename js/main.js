$(document).ready(function(){
    console.log("Welcome");
    $('.carousel').carousel();
    $('#tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
});
