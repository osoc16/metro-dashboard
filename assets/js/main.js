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
	    [5, 9, 7, 8, 5, 3, 5, 4]
	  ]
	}, {
	  low: 0,
	  showArea: true
	});


	new Chartist.Line('.ct-chart-occupancy', {
	  labels: [1, 2, 3, 4, 5, 6, 7, 8],
	  series: [
	    [5, 9, 7, 8, 5, 3, 5, 4]
	  ]
	}, {
	  low: 0,
	  showArea: true
	});

	new Chartist.Line('.ct-chart-incidents', {
	  labels: [1, 2, 3, 4, 5, 6, 7, 8],
	  series: [
	    [5, 9, 7, 8, 5, 3, 5, 4]
	  ]
	}, {
	  low: 0,
	  showArea: true
	});
});


/**
* Event handlers
*/

$('select[name=filter-form]').change(function(){
	var $selectedValue = $('select[name=filter-form] option:selected').val()
	console.log($selectedValue);
});