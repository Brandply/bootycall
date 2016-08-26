$(document).ready(function() {
	$("#lightSlider1").lightSlider({
		item: 4,
		pager: false,
		adaptiveHeight: false,
		responsive : [
            {
                breakpoint: 768,
                settings: {
                    item: 2
                  }
            }
       ]
	}); 
	$("#lightSlider2").lightSlider({
		pager: false,
        adaptiveHeight: true,
		responsive : [
            {
                breakpoint: 992,
                settings: {
                    item: 2
                  }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1
                  }
            }
        ],
        useCSS: true
	}); 

    $("#lightSlider2").css('padding-bottom', '200px');
});
