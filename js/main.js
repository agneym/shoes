$(document).ready(function(){
    console.log("Welcome");
    $('.carousel').carousel();
    $('#tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	var i = 0;
    $('.product').each(function(){
    	$( this ).html('<a href="product.html?id='+shoes[i].id+'" class="thumbnail">\
                            <img src="'+shoes[i].image+'"/>\
                            <div class="caption">\
                                 <h3>'+shoes[i].name+' <span class="label product-label label-primary">'+shoes[i].attr+'</span></h3>\
                            </div>\
                        </a>;');
        i++;

    });
    $('#carousel-generic').mouseover(function() {
        $('.carousel').carousel('pause');
    });
    $('#carousel-generic').mouseleave(function() {
        $('.carousel').carousel('cycle');
    });
});
