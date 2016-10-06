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
	var searchTerm = getUrlParameter('q');
	$('#searchbox').val(searchTerm);
	var FJS = FilterJS(shoes, '#search-results', {
	  template: '#search-template',
	  filter_on_init: true, // Default filter_on_init is false
	  search: { ele: '#searchbox' },
	  criterias: [ {field: 'brand', ele: '#brand input:checkbox',all: 'all'},
	  				{field: 'category', ele: '#category input:checkbox',all: 'all'},
	  				{field: 'style', ele: '#style input:checkbox',all: 'all'} ],
	  callbacks: {
	    afterFilter: function(result){
	      	console.log("Complete");
	     }
   		}
	});
});
