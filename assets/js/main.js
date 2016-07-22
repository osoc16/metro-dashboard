/*
* Javascript stuff for metro dashboard
* @author Serkan Yildiz (c) Open Knowledge Belgium
* @license MIT
*/

$(document).ready(function()
{
	/**
	* Chart stuff
	*/

	new Chartist.Line('.ct-chart-delays', {
	  labels: [1, 2, 3, 4, 5, 6, 7, 8],
	  series: [
	    [
	    { meta: "5", value:5 },
	    { meta: "9", value:9 },
	    { meta: "7", value:7 },
	    { meta: "8", value:8 },
	    { meta: "5", value:5 },
	    { meta: "3", value:3 },
	    { meta: "5", value:5 },
	    { meta: "4", value:4 }
	    ]
	  ]
	}, {
	  low: 0,
	  showArea: true,
	  plugins: [
    	Chartist.plugins.tooltip()
  		]
	});

	new Chartist.Line('.ct-chart-incidents', {
	  labels: [1, 2, 3, 4, 5, 6, 7, 8],
	  series: [
	    [
	    { meta: "5", value:5 },
	    { meta: "9", value:9 },
	    { meta: "7", value:7 },
	    { meta: "8", value:8 },
	    { meta: "5", value:5 },
	    { meta: "3", value:3 },
	    { meta: "5", value:5 },
	    { meta: "4", value:4 }
	    ]
	  ]
	}, {
	  low: 0,
	  showArea: true,
	  plugins: [
    	Chartist.plugins.tooltip()
  		]
	});

	new Chartist.Line('.ct-chart-occupancy', {
	  labels: [1, 2, 3, 4, 5, 6, 7, 8],
	  series: [
	    [
	    { meta: "5", value:5 },
	    { meta: "9", value:9 },
	    { meta: "7", value:7 },
	    { meta: "8", value:8 },
	    { meta: "5", value:5 },
	    { meta: "3", value:3 },
	    { meta: "5", value:5 },
	    { meta: "4", value:4 }
	    ]
	  ]
	}, {
	  low: 0,
	  showArea: true,
	  plugins: [
    	Chartist.plugins.tooltip()
  		]
	});
});


/**
* Event handlers
*/

$('select[name=filter-form]').change(function(){
	var $selectedValue = $('select[name=filter-form] option:selected').val()
	// TODO: Get data with selected value
});


$('a.chart').on('click', function(e){
	e.preventDefault();

	var $element = $(this);

	var $toHide = $element.parent().parent().parent().find('div.list');
	var $toShow = $element.parent().parent().parent().find('div.chart');

	$toHide.hide();
	$toShow.show();

	// set class 'selected-view'
	$element.parent().find('a.chart').addClass('selected-view');
	$element.parent().find('a.list').removeClass('selected-view');
})

$('a.list').on('click', function(e){
	e.preventDefault();

	var $element = $(this);

	var $toHide = $element.parent().parent().parent().find('div.chart');
	var $toShow = $element.parent().parent().parent().find('div.list');

	$toHide.hide();
	$toShow.show();

	// set class 'selected-view'
	$element.parent().find('a.list').addClass('selected-view');
	$element.parent().find('a.chart').removeClass('selected-view');

});