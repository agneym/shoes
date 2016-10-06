var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
$(function(){
    var productId = getUrlParameter('id');

    for(i=0;i<shoes.length;i++){
        if(shoes[i].id==productId) {
            $('.image-background').html('<img class = "cloudzoom" src = "'+shoes[i].image+'"\
                                 data-cloudzoom = "zoomImage: \''+shoes[i].image+'\'" />');
            $('#product-title').text(shoes[i].name);
            $(".main-price").text(shoes[i].price);
            $('#product-category').html('<a href="category.html?cat='+shoes[i].category.toLowerCase()+'">'+shoes[i].category+'</a>');
            $("#overview").text(shoes[i].desc);
        }
    }
    CloudZoom.quickStart();
    $('#tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });
});