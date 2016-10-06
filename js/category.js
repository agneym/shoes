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
var category = getUrlParameter('cat');
console.log(category);
function checkCategory(item) {
    return item.category.toLowerCase() == category.toLowerCase();
}
$(function() {
    $('.carousel').carousel();
    $("#category-title").text(category.toUpperCase()+"\'S SHOES");
    var filteredShoes = shoes.filter(checkCategory);
    for(i=0;i<filteredShoes.length;i++) {
        $(".category-content").append('<div class="col-md-4 col-sm-12 hero-feature">\
                                      <a href="product.html?id='+filteredShoes[i].id+'" class="thumbnail">\
                                          <img src="'+filteredShoes[i].image+'"/>\
                                          <div class="caption">\
                                               <h3>'+filteredShoes[i].name+'</h3>\
                                          </div>\
                                      </a>\
                                  </div>');
    }
    $('#carousel-generic').mouseover(function() {
        $('.carousel').carousel('pause');
    });
    $('#carousel-generic').mouseleave(function() {
        $('.carousel').carousel('cycle');
    });
})