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
                                 <h3>'+shoes[i].name+'</h3>\
                            </div>\
                        </a>;');
        i++;

    });
});
